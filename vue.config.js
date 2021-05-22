module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Foam Soda";
      return args;
    });
  },
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