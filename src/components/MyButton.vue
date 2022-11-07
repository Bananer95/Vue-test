<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['click']);

const handButtonClick = () => {
  emit('click');
};
</script>
<template>
  <button @click="handButtonClick()"><slot></slot></button>
</template>

<style scoped></style>
