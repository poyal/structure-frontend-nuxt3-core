import type {Ref} from 'vue';
import {ref} from 'vue';
import {defineStore} from 'pinia';

import {sampleFetch} from '~/utils/fetch/sample-fetch';
import type {AlbumModel} from '~/store/album/album.model';
import {getDefault} from '~/utils/yup';
import {AlbumSchema} from '~/store/album/album.schema';

export const useAlbumServerStore = defineStore('album.server', () => {
  const $sample = sampleFetch();

  const one: Ref<AlbumModel.Response.FindOne> = ref(
    getDefault<AlbumModel.Response.FindOne>(AlbumSchema.Response.FindOne)
  );

  async function setOne(id: number) {
    const data: AlbumModel.Response.FindOne = await $sample<AlbumModel.Response.FindOne>(`/albums/${id}`, {
      method: 'get'
    });

    if (!!data) {
      one.value = data;
    }
  }

  function getOne() {
    return one.value;
  }

  return {setOne, getOne};
});
