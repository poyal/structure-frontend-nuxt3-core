<script setup lang="ts">
import type {NuxtError} from 'nuxt/app';

const props = defineProps({
  error: Object as () => NuxtError
});
</script>

<template>
  <div>
    <h1>커스텀 에러페이지 입니당!</h1>
    <h1>{{ error?.statusCode }}</h1>
    <nuxt-link to="/">Go back home</nuxt-link>
  </div>
</template>
