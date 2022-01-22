export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs-bulma",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/node_modules/bulma/css/bulma.min.css",
    "@/assets/css/blog.css",
    "@/assets/css/fontCss/font.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/toast",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
    retry: { retries: 3 },
    progress: true,
  },
  toast: {
    position: "top-center",
    duration: 5000,
    keepOnHover: true,
    // singleton: true,
    // fullWidth: true,
    // fitToScreen: true,
    // icon: "check",
    // theme: "outline",
    closeOnSwipe: true,
    // onComplete: () => console.log("completed"),
    action: {
      icon: "close",
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
        // toastObject.text("ok Bye");
        // setTimeout(() => {
        // toastObject.goAway(0);
        // }, 500);
        // toastObject.remove();
      },
    },
    register: [
      // Register custom toasts
      {
        name: "my_error",
        position: "top-center",
        message: "Oops...Something went wrong",
        options: {
          type: "error",
        },
      },
    ],
  },
  loading: {
    color: "#00DC82",
    failedColor: false,
    height: "4px",
    continuous: true,
  },
  router: {
    // middleware: ["auth"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
