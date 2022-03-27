// export default {
//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: 'project',
//     htmlAttrs: {
//       lang: 'en',
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' },
//     ],
//     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [],

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     // https://go.nuxtjs.dev/content
//     '@nuxt/content',
//   ],

//   // Content module configuration: https://go.nuxtjs.dev/config-content
//   content: {},

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {},
// }

export default {
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ]
}

// html,
// body,
// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   font-size: 62.5%;
// }

// :root {
//   --white: #ffffff;
//   --light-purple: #e2daf0;
//   --dark-purple: #746788;
//   --light-green: #abcfb4;
//   --dark-green: #466650;

//   --primary: var(--light-purple);
//   --secondary: var(--white);
// }

// .purple {
//   --primary: var(--light-purple);
//   --secondary: var(--dark-purple);
// }

// .green {
//   --primary: var(--light-green);
//   --secondary: var(--dark-green);
// }

// .vite-title {
//   background-color: var(--primary);
//   color: var(--secondary);
// }
