import type {UseFetchOptions} from 'nuxt/app';
import type {NitroFetchOptions, NitroFetchRequest} from 'nitropack';

import {sampleFetch} from '~/utils/fetch/sample-fetch';

export function useSample<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();

  return useFetch(`${url}`, {
    ...options,
    baseURL: `${config.public.sampleUrl}`,
    $fetch: sampleFetch(options as NitroFetchOptions<NitroFetchRequest>)
  });
}
