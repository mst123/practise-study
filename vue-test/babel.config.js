module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "pie-sl-ganshu-com",
        "camel2DashComponentName": true,
        "camel2UnderlineComponentName": false,
        "style": (name) =>{
          const cssName = name.split('/')[2];
          return `pie-sl-ganshu-com/lib/style/${cssName}.css`
        }
      }
    ],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}