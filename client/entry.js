const { createNuxtApp } = require("serverless-nuxt")
const config = require("./nuxt.config.js")

module.exports.nuxt = createNuxtApp(config)
