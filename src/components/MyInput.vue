<script setup lang="ts">
import { ref, watch } from 'vue';

const { modelValue } = defineProps({
  type: {
    type: String,
    default: 'text',
    require: true,
  },
  placeholder: {
    type: String,
    default: 'text',
    require: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);
const value = ref(modelValue);

watch(value, () => {
  emit('update:modelValue', value);
});
</script>
<template>
  <input :type="type" :placeholder="placeholder" v-model="value" />
</template>

<style scoped></style>
