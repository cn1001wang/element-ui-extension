import Vue from "vue";
import Main from "./main.vue";

function previewImage(url, list) {
  let ImageConstructor = Vue.extend(Main);
  if (!list) {
    list = [url];
  }
  let instance = new ImageConstructor({
    data: {
      src: url,
      previewSrcList: list
    }
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.clickHandler();
  instance.$watch(
    () => instance.$refs.image.showViewer,
    v => {
      if (!v) {
        document.body.removeChild(instance.$el);
      }
    }
  );
  return function close() {
    instance.$refs.image.showViewer = false;
  };
}
export default previewImage;
