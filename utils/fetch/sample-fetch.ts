import type {NitroFetchOptions, NitroFetchRequest} from 'nitropack';

export function sampleFetch(options: NitroFetchOptions<NitroFetchRequest> = {}) {
  const config = useRuntimeConfig();

  return $fetch.create({
    ...options,

    baseURL: `${config.public.sampleUrl}`,
    timeout: 60 * 1000,

    onRequest({request, options, error}) {
      if (process.client) {
        console.log('onRequest client: ' + request);
      }

      if (process.server) {
        console.log('onRequest server: ' + request);
      }
    },

    onResponse({response}) {
      if (process.client) {
        console.log('onResponse client: ' + response.url);
      }

      if (process.server) {
        console.log('onResponse server: ' + response.url);
      }
    },

    onResponseError({response}) {
      if (process.client) {
        console.log('onResponseError client');
      }

      if (process.server) {
        console.log('onResponseError server');
      }
    }
  });
}
