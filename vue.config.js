module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/globalStyles.scss";
          @import 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css';
        `
      }
    }
  }
};