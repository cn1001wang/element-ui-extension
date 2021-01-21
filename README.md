# ele-extension
 
 > ele-extension is a extension package for element-ui

 # Features
 - 利用饿了么的组件实现预览图片功能。Use the component of element-ui to realize the function of preview picture

 # Install
 > npm install ele-extension -S or yarn add ele-extension

# Quick Start
```
import { previewImage } from "ele-extension";
var list = [
  "https://flutter.cn/assets/404/dash_nest-c64796b59b65042a2b40fae5764c13b7477a592db79eaf04c86298dcb75b78ea.png",
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
];
previewImage(list[0], list);
 ```