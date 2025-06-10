<script lang="ts" setup>
import type {Ref} from 'vue';

import type {AlbumModel} from '~/store/album/album.model';
import {useAlbumClientStore} from '~/store/album/album.client';

definePageMeta({
  layout: 'default'
});

const search: Ref<any> = ref({});
const lists: Ref<AlbumModel.Response.FindAll[]> = ref([]);

const store = useAlbumClientStore();
const {list} = storeToRefs(store);

onMounted(() => {
  onSearch();
});

function onSearch() {
  store.setList(search.value);
}

function onClick(item: AlbumModel.Response.FindAll) {
  window.location.href = `./detail/${item.id}`;
}

function onAdd() {
  window.location.href = `./add`;
}

watch(list, () => {
  lists.value = store.getList();
});
</script>

<template>
  <h1>ALBUM LIST</h1>

  <div>
    <input v-model="search.title" type="search" />
    <button type="button" @click="onSearch">SHOOT</button>
  </div>

  <div>
    <button type="button" @click="onAdd">ADD</button>
  </div>

  <div class="wrapper">
    <template v-for="item in lists" :key="item.id">
      <div class="items" @click="onClick(item)">{{ item }}</div>
    </template>
  </div>
</template>
