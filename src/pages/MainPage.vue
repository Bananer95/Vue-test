<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
import { useRouter } from 'vue-router';
import { useShowStore } from '@/stores/show';

const store = useShowStore();
const router = useRouter();
const user = store.user.login;
function goToLogin(): void {
  router.push('/login');
}
</script>

<template>
  <div>
    <div>
      <h1 v-if="store.showTitle" class="title">Добро пожаловать {{ user }}</h1>
      <my-button
        class="btn_main"
        v-else
        @click="goToLogin()"
        text="Открыть окно входа"
      ></my-button>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin: auto;
}
.btn_main {
  margin: 10px 0px 0px 20px;
}
</style>
