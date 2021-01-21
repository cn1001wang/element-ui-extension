<!--  -->
<template>
  <div>
    <el-button @click="preview">打开预览</el-button>
  </div>
</template>

<script>
import { previewImage } from "@/plugins";
export default {
  data() {
    return {};
  },
  methods: {
    preview() {
      var list = [
        "https://flutter.cn/assets/404/dash_nest-c64796b59b65042a2b40fae5764c13b7477a592db79eaf04c86298dcb75b78ea.png",
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
      ];
      previewImage(list[1], list);
    }
  }
};
</script>

<style lang="scss" scoped></style>
