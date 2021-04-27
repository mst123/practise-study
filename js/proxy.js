// 本体
class RealImg{
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk() // 初始化从硬盘加载文件
  }
  diaplay() {
    console.log('...diaplay' + this.fileName);
  }
  loadFromDisk() {
    console.log('...loading' + this.fileName);
  }
}
// 代理
class ProxyImg{
  constructor(fileName) {
    this.realImg = new RealImg(fileName);
  }
  display() {
    this.realImg.diaplay();
  }
}
// 演示
const img1 = new ProxyImg('1.png');
img1.display();