<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useShowStore } from '../stores/show';

const secBtn = ref(10);
const router = useRouter();
const store = useShowStore();
let intervalID: number | undefined;

watch(secBtn, () => {
  if (secBtn.value < 0) {
    store.changeShow();
    router.push('/');
    clearInterval(intervalID);
  }
});

onMounted(() => {
  intervalID = setInterval(() => {
    secBtn.value -= 1;
  }, 1000);
});

function goToMainPage(): void {
  router.push('/');
  store.changeShow();
}
</script>

<template>
  <button @click="$router.push('/login')" class="btn_main">
    Открыть окно входа
  </button>
  <div class="background">
    <div class="modal">
      <div class="modal-header">
        <h4>Success</h4>
        <button @click="goToMainPage()">X</button>
      </div>
      <div class="modal-form">
        <h2>Success</h2>
        <my-button @click="goToMainPage()" text="Закрыть">{{
          `(${secBtn})`
        }}</my-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: none;
  padding: 0;
  box-sizing: border-box;
}
.background {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  margin: auto;
  width: 600px;
  height: 400px;
  background-color: #fff;
}
.modal-header {
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: rgb(228, 228, 228);
}
.modal-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}
.btn_main {
  margin: 10px 0px 0px 20px;
}

.modal-form h2 {
  text-align: center;
  margin-bottom: 40px;
}

.modal-form button {
  margin: auto;
  width: 30%;
}
</style>
