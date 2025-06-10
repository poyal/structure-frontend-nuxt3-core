import {defineVitestConfig} from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom', // 'happy-dom' (default) or 'jsdom'

        mock: {
          intersectionObserver: true,
          indexedDb: true
        },

        overrides: {
          runtimeConfig: {
            public: {
              sample: 'SAMPLE',
              env: 'VITEST',
              sampleUrl: 'https://jsonplaceholder.typicode.com'
            }
          }
        }
      }
    }
  }
});
