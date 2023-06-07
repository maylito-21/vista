export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'POS',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/assets/css/nucleo-icons.css' },
            { rel: 'stylesheet', href: '/assets/css/nucleo-svg.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
            { rel: 'stylesheet', href: '/assets/css/soft-ui-dashboard.min.css' },
            
        ],
        script: [
            { src: "https://kit.fontawesome.com/42d5adcbca.js" },
            { src: "/assets/js/core/popper.min.js" },
            { src: "/assets/js/core/bootstrap.min.js" },
            { src: "/assets/js/core/jquery.js" },
            { src: "/assets/js/core/html2pdf.bundle.min.js" },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"},
            // { src: "/assets/js/plugins/perfect-scrollbar.min.js" },
            // { src: "/assets/js/plugins/smooth-scrollbar.min.js" },

            { src: "/assets/js/plugins/dropzone.min.js" },
            { src: "/assets/js/plugins/dragula/dragula.min.js" },
            { src: "/assets/js/plugins/jkanban/jkanban.js" },
            { src: "/assets/js/plugins/chartjs.min.js" },


        ]
    },




    // Global CSS: https://go.nuxtjs.dev/config-css     
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/api',
        '~/plugins/printer',
       
    ],
    //plugins: ['~/plugins/printer'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios', 'vue-sweetalert2/nuxt', 
    ['vue-currency-filter/nuxt', {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
      }],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // Add exception
        transpile: [
            "vee-validate/dist/rules"
        ],
        /*
          ** You can extend webpack config here
          */
        extend(config, ctx) {
            // ...
        }
    }
}