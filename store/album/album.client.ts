import type {Ref} from 'vue';
import {defineStore} from 'pinia';

import {sampleFetch} from '~/utils/fetch/sample-fetch';
import type {AlbumModel} from '~/store/album/album.model';

export const useAlbumClientStore = defineStore('album.client', () => {
  const $sample = sampleFetch();

  const list: Ref<AlbumModel.Response.FindAll[]> = ref([]);

  async function setList(params: any) {
    const data: AlbumModel.Response.FindAll[] = await $sample<AlbumModel.Response.FindAll[]>(`/albums`, {
      params,
      method: 'get'
    });

    if (!!data) {
      list.value = data;
    }
  }

  function getList() {
    return list.value;
  }

  return {list, setList, getList};
});
