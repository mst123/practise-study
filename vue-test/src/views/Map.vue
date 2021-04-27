<template>
  <div id="map"></div>
</template>

<script>
// @ is an alias to /src
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Vector as VectorSource, VectorTile, OSM } from "ol/source";
import { Vector as VectorLayer, Tile as TileLayer, VectorTile as VectorTileLayer } from "ol/layer";
import { MVT, GeoJSON } from 'ol/format';
import { Fill, Stroke, Style } from "ol/style";
import { Modify, Select, Draw, Snap } from "ol/interaction";
import MultiPolygon from 'ol/geom/MultiPolygon';
import Feature from "ol/Feature";
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      select: null,
      map: null,
      modify: null,
      selectList: [],
      selectFeature: [],
      geoJsonCache: {}
    }
  },
  components: {

  },
  methods: {
    init() {
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          this.getMVTVectorTileLayer() 
        ],
        target: "map",
        view: new View({
          projection: "EPSG:3857",
          center: [11947663.3764, 4370913.2704],
          zoom: 7,
          maxZoom: 18
        })
      });
      this.editLayerInit();
      this.mapClickInit();
    },
    getMVTVectorTileLayer() { // 添加矢量切片图层
      let mvtVectorTileSource = new VectorTile({
        format: new MVT(),
        wrapX: false,
        url: 'http://121.36.99.5:18888/pg_postgis_mvt/api/v1/jcb_cd/{z}/{x}/{y}'  //请求后台地址,
      });
      let style = new Style({
        //填充色
        fill: new Fill({
          color:  '#ffff00',
        }),
        //边线颜色
        stroke: new Stroke({
          color:  '#0000ff',
          width: 1
        })
      });
      let MVTVectorTileLayer = new VectorTileLayer({
        source: mvtVectorTileSource,
        id: "MVTVectorTileLayer",
        style: (feature) => {
          if(this.selectList.includes(feature.get("gid"))){
            return new Style({
              //填充色
              fill: new Fill({
                color:  'transparent',
              }),
              //边线颜色
              stroke: new Stroke({
                color:  'transparent',
                width: 1
              })
            })
          }
          return new Style({
            //填充色
            fill: new Fill({
              color:  '#ffff00',
            }),
            //边线颜色
            stroke: new Stroke({
              color:  '#0000ff',
              width: 1
            })
          })
        }
      })
      return MVTVectorTileLayer;
    },
    mapClickInit() { // 地图点击事件，隐藏原图形，添加新图形
      this.map.on("click", e => {
        if (this.btnActiveIndex) {
          return;
        }
        const feature = this.map.forEachFeatureAtPixel(
          e.pixel,
          (feature, layer) => {
            return feature;
          },
          {
            layerFilter: layer => {
              return layer.get("id") === "MVTVectorTileLayer";
            }
          }
        );
        console.log(feature);
        if(feature){ // feature存在
          const GID = feature.get("gid");
          if(this.selectList.includes(GID)){ // 已存在，需要删除
            this.selectList.splice(
              this.selectList.findIndex(item => item === GID),
              1
            )
          }else{ // 不存在 需要添加
            // 缓存geojson 方便后期使用
            if(!this.geoJsonCache[GID]){ // 不存在才会请求接口
              this.getGeojson(GID).then(res => {
                console.log(res);
                this.geoJsonCache[GID] = res.data;
                this.selectList.push(GID);
              }).catch(error => {
                console.log(error);
              }) 
            }else{
              this.selectList.push(GID);
            }
          }
        }
      })
    },
    editLayerInit() {
      const vectorSource = new VectorSource({
        features: []
      });
      this.editLayer = new VectorLayer({
        source: vectorSource,
        id: "editLayer",
        style: [new Style({
          fill: new Fill({
            color: [0, 0, 255, 0.7]
          })
        }),
        new Style({
          stroke: new Stroke({
            color: [255, 0, 0, 1],
            width: 2
          })
        })]
      });
      this.map.addLayer(this.editLayer);
      this.modify = new Modify({
        source: vectorSource,
        deleteCondition: (e) => {
          if (e.type === "singleclick") {
            return true;
          }
        }
      });
      this.map.addInteraction(this.modify);
    },
    getGeojson(gid){ // 根据gid 获取 geojson
      return new Promise((resolve, reject) => {
        axios.get("http://10.1.4.155:7001/pg_postgis_mvt/api/v1/"+ gid).then(res => {
          resolve(res);
        }).catch(error => {
          reject(error);
        })
      });
    }
  },
  mounted() {
    this.init();
    
  },
  watch: {
    selectList: {
      deep: true,
      handler: function () {
        const existingIDS = this.editLayer.getSource().getFeatures().map(feature => feature.get("gid"));
        const toBeSyncIDS = this.selectList;
        // 删除 
        const toBeRemoveIDS = existingIDS.filter(x => !toBeSyncIDS.includes(x));
        console.log(toBeRemoveIDS);
        if(toBeRemoveIDS.length > 0){
          for (const gid of toBeRemoveIDS.values()) {
            this.editLayer.getSource().removeFeature(
              this.editLayer
                .getSource()
                .getFeatures()
                .filter(feature => feature.get("gid") === gid)[0]
            );
          }
        }
        // 添加
        const toBeAddIDS = toBeSyncIDS.filter(x => !existingIDS.includes(x));
        console.log(toBeAddIDS);
        if(toBeAddIDS.length > 0){
          for (const gid of toBeAddIDS.values()) {
            const feature = new Feature({
              geometry: new MultiPolygon(
                this.geoJsonCache[gid].features[0].geometry.coordinates
              ).transform("EPSG:4326", "EPSG:3857"),
              gid: this.geoJsonCache[gid].features[0].properties.f1
            })
            this.editLayer.getSource().addFeature(
              feature
            );
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #map{
    height: 100%;
    width: 100%;

  }
</style>
