import {defineNuxtModule, extendPages} from '@nuxt/kit';
import {resolve} from 'pathe';

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      pages.push({
        path: '/album/list',
        file: resolve(__dirname, './pages/album/list.vue')
      });

      pages.push({
        path: '/album/add',
        file: resolve(__dirname, './pages/album/add.vue')
      });
    });
  }
});
