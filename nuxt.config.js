export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'to-do-list',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['element-ui/lib/theme-chalk/index.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/element-ui'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: process.env.API_KEY,
                    authDomain: process.env.AUTH_DOMAIN,
                    databaseURL: process.env.DATABASE_URL,
                    projectId: process.env.PROJECT_ID,
                    storageBucket: process.env.STORAGE_BUCKET,
                    messagingSenderId: process.env.MESSAGING_SENDER_ID,
                    appId: process.env.APP_ID,
                    measurementId: process.env.MEASUREMENT_ID
                },
                services: {
                    auth: true,
                    firestore: true,

                }
            }
        ]
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
}