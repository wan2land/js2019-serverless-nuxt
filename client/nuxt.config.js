
export default {
  mode: "universal",
  head: {
    title: "sample",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#fff" },
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],
  axios: {
    baseURL: "https://0mov3fyc0f.execute-api.ap-northeast-2.amazonaws.com/dev/",
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: false,
          logout: false,
          user: false,
        },
      },  
    },
  },
  build: {
    extractCSS: {
      allChunks: true
    },
    extend(config, ctx) {
    }
  }
}
