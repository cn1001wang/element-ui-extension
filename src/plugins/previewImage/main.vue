<!--  -->
<template>
  <el-image
    class="preview-image"
    ref="image"
    :src="src"
    :preview-src-list="previewSrcList"
  ></el-image>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      previewSrcList: []
    };
  },
  methods: {
    clickHandler() {
      this.$refs.image.clickHandler();
    }
  }
};
</script>

<style>
.preview-image .el-image__inner {
  display: none;
}
</style>
