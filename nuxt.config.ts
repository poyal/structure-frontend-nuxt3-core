import router from './router';

export default defineNuxtConfig({
  devtools: {enabled: true},
  ssr: true,
  routeRules: router,
  compatibilityDate: '2024-07-25',

  modules: ['@pinia/nuxt', '@vee-validate/nuxt', '@nuxt/test-utils/module'],

  runtimeConfig: {
    public: {
      sample: process.env.VITE_SAMPLE,
      env: process.env.VITE_ENV,
      sampleUrl: process.env.VITE_SAMPLE_URL
    }
  },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },

  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true
        }
      }
    }
  }
});
