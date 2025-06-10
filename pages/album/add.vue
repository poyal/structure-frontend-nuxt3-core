<script lang="ts" setup>
import type {Ref} from 'vue';
import {ValidationError} from 'yup';
import type {InvalidSubmissionContext} from 'vee-validate';

import type {AlbumModel} from '~/store/album/album.model';
import {AlbumSchema} from '~/store/album/album.schema';
import {getDefault} from '~/utils/yup';

definePageMeta({
  layout: 'default'
});

const schema = AlbumSchema.Request.Add;
const add: Ref<AlbumModel.Request.Add> = ref(getDefault<AlbumModel.Request.Add>(AlbumSchema.Request.Add));

function onSubmit(value: AlbumModel.Request.Add) {
  try {
    const result = AlbumSchema.Request.Add.validateSync(value);
    console.log('result', result);
  } catch (error: unknown) {
    if (ValidationError.isError(error)) {
      console.log(JSON.parse(JSON.stringify(error)));
    }
  }

  console.log(value);
}

function onError(error: InvalidSubmissionContext) {
  const keys: string[] = Object.keys(error.errors);
  if (keys.length > 0) {
    const form: HTMLFormElement | null = document.querySelector('form');
    if (!form) {
      return;
    }

    const element: NodeListOf<HTMLElement> = document.getElementsByName(keys[0]);
    if (element.length > 0) {
      element.item(0).focus();
    }
  }
}
</script>

<template>
  <div>{{ add }}</div>

  <vee-form :validation-schema="schema" @submit="onSubmit" @invalid-submit="onError">
    <div>
      <label>아이디</label>
      <vee-field name="id" type="number" v-model="add.id" />
      <vee-error-message name="id" />
    </div>

    <div>
      <label>제목</label>
      <vee-field name="title" type="text" v-model="add.title" />
      <vee-error-message name="title" />
    </div>

    <div>
      <label>사용자 아이디</label>
      <vee-field name="userId" type="number" v-model="add.userId" />
      <vee-error-message name="userId" />
    </div>

    <button type="submit">SUBMIT_ADD</button>
  </vee-form>

  <button type="button">ADD</button>
</template>
