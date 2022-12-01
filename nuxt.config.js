import colors from 'vuetify/es5/util/colors';

export default {
    ssr: false,

    head: {
        titleTemplate: '%s - misa-cms',
        title: 'misa-cms',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    css: [
        '@/assets/main.scss',
    ],

    plugins: [
        '@/plugins/api',
    ],

    components: true,

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
    ],

    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: process.env.API_HOST,
    },

    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: colors.green.darken1,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    build: {
        postcss: {
            plugins: {
                tailwindcss: 'tailwind.config.js',
                autoprefixer: {},
                ...(process.env.APP_ENV === 'production' ? { cssnano: {} } : {}),
            },
        },
    },

    env: {
        API_HOST: process.env.API_HOST || 'localhost:3000',
    },
};
