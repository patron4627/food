export default defineNuxtConfig({
  extends: ['@nextorders/ui'],
  modules: ['@pinia/nuxt', 'nuxt-auth-utils'],
  runtimeConfig: {
    s3: {
      bucket: '',
      region: '',
      endpoint: '',
      accessKeyId: '',
      secretAccessKey: '',
    },
    productsDirectory: '/products',
    externalApiToken: '',
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    },
    public: {
      mediaUrl: '',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    componentInspector: false,
  },
  css: ['~/assets/css/styles.css'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
    ],
    strategy: 'no_prefix',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        erasableSyntaxOnly: true,
      },
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            'ui-vendor': ['@nuxt/ui', '@nuxtjs/i18n'],
            'firebase': ['firebase', 'firebase-admin'],
            'utils': ['@vueuse/core', '@vueuse/nuxt', 'h3', 'ofetch'],
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        '@nuxt/ui',
        '@nuxtjs/i18n',
        '@vueuse/core',
        '@vueuse/nuxt',
      ],
    },
  },
  nitro: {
    routeRules: {
      '/**': { isr: false },
    },
    compressPublicAssets: true,
  },
  compatibilityDate: '2025-02-20',
})
