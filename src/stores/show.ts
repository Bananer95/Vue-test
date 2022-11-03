import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', () => {
  const showTitle = ref(false);
  const changeShow = () => {
    showTitle.value = true;
  };
  return { showTitle, changeShow };
});
