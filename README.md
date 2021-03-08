# ele-extension

 > ele-extension is a extension package for element-ui

## Features

- 利用饿了么的组件实现预览图片功能。Use the component of element-ui to realize the function of preview picture

## Install

 > npm install ele-extension -S or yarn add ele-extension

## Quick Start

```javascript
import { previewImage } from "ele-extension";
import "ele-extension/lib/eleExtension.css";
var list = [
  "https://flutter.cn/assets/404/dash_nest-c64796b59b65042a2b40fae5764c13b7477a592db79eaf04c86298dcb75b78ea.png",
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
];
let close = previewImage(list[0], list);
close();
 ```

## 更新日志

 > 0.1.3 增加**close**方法
 > 0.1.2 element-ui的2.13.2版本中`<el-image/>` 生成的`<image-viewer/>` 组件没有appendToBody属性 直接写style在image上会导致整个都被隐藏，改为额外引入css的方式
