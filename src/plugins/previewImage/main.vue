<!--  -->
<template>
  <el-image
    style="display:none;"
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
