<script lang="ts" setup>
import type {Ref} from 'vue';

import type {AlbumModel} from '~/store/album/album.model';
import {getDefault} from '~/utils/yup';
import {AlbumSchema} from '~/store/album/album.schema';

definePageMeta({
  layout: 'default'
});

const route = useRoute();
const router = useRouter();

const id: number = Number(route.params.id);
const detail: Ref<AlbumModel.Response.FindOne> = ref(
  getDefault<AlbumModel.Response.FindOne>(AlbumSchema.Response.FindOne)
);

const {data} = await useFetch(`/api/album/${id}`);

if (!!data.value) {
  detail.value = data.value.one;
}
//
// const store = useAlbumServerStore();
// const {one, result} = storeToRefs(store);
//
// onMounted(() => {
//   store.setOne(id);
// });
//
// function onModify() {
//   window.location.href = `./../modify/${id}`;
// }
//
// function onDelete() {
//   store.setDelete(id);
// }
//
// watch(one, () => {
//   detail.value = store.getOne();
// });
//
// watch(result, () => {
//   const result: ResultModel = store.getResult();
//   if (ResultEnum.DELETE === result.action) {
//     window.alert('DELETE COMPLETE');
//     router.back();
//   }
// });
</script>

<template>
  <div>{{ detail }}</div>

  <div>
    <!--    <button type="button" @click="onModify">MODIFY</button>-->
    <!--    <button type="button" @click="onDelete">DELETE</button>-->
  </div>
</template>
