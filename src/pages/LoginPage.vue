<script lang="ts" setup>
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

let error = ref(false);

watch(error, () => {
  if (error.value) {
    setTimeout(() => (error.value = !error.value), 3000);
  }
});

const data = reactive({
  valLogin: '',
  valPassword: '',
});
function postData() {
  setTimeout(() => {
    if (data.valLogin === 'Login' && data.valPassword === 'Password') {
      axios
        .post('some/url', data)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          router.replace('/success');
        });
    } else {
      error.value = !error.value;
    }
  });
}
</script>

<template>
  <my-button
    class="btn_main"
    @click="$router.push('/login')"
    text="Открыть окно входа"
  ></my-button>
  <div class="background">
    <div class="modal">
      <div class="modal-header">
        <h4>login</h4>
        <my-button @click="$router.back" text="X"></my-button>
      </div>
      <form class="modal-form" @submit.prevent="postData()">
        <my-input type="text" placeholder="Login" v-model="data.valLogin" />
        <my-input
          type="password"
          placeholder="Password"
          v-model="data.valPassword"
        />
        <my-button text="Submit"></my-button>
        <div v-show="error" class="modal-error"><h3>Wrong Data</h3></div>
      </form>
    </div>
  </div>
</template>

<style scoped>
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
.modal-error {
  text-align: center;
  color: red;
  padding-top: 30px;
}

.modal-form input {
  margin-bottom: 20px;
}
.btn_main {
  margin: 10px 0px 0px 20px;
}
</style>
