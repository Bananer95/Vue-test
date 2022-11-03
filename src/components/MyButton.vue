<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { text } = defineProps({
  text: {
    type: String,
    default: 'Button',
  },
});
const emit = defineEmits(['click']);

const handButtonClick = () => {
  emit('click');
};
</script>
<template>
  <button @click="handButtonClick()">{{ text }} <slot></slot></button>
</template>

<style scoped></style>
