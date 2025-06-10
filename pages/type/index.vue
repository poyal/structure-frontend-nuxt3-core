<script lang="ts" setup>
import type {Ref} from 'vue';

import {getDefault, parse} from '~/utils/yup';
import type {TypeModel} from '~/store/type/model';
import {TypeSchema} from '~/store/type/model';

definePageMeta({
  layout: 'default'
});

const detail: Ref<TypeModel.Response.FindAll> = ref(
  getDefault<TypeModel.Response.FindAll>(TypeSchema.Response.FindAll)
);

detail.value = parse(TypeSchema.Response.FindAll, {
  id: '1',
  title: 'test',
  customType: 'TYPE_E',
  date: '2022-12-12',
  datetime: '2022-12-12T10:11:22',
  time: '10:11:22',
  item: {name: true},
  items: [{name: 'test'}]
});
</script>

<template>
  <div>{{ detail }}</div>
</template>
