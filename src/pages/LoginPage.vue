<script lang="ts" setup>
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useShowStore } from '../stores/show';

const store = useShowStore();

const router = useRouter();

let error = ref(false);

watch(error, () => {
  if (error.value) {
    setTimeout(() => (error.value = !error.value), 3000);
  }
});

interface IData {
  valLogin: string;
  valPassword: string;
}

const data: IData = reactive({
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
          store.saveUser(JSON.parse(e.config.data));
        })
        .finally(() => {
          router.replace('/success');
        });
    } else if (data.valLogin === 'Login1' && data.valPassword === 'Password1') {
      axios
        .post('some/url', data)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          store.saveUser(JSON.parse(e.config.data));
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
  <my-button class="btn_main" @click="$router.push('/login')"
    >Открыть окно входа</my-button
  >
  <my-modal>
    <template #modal-header
      ><h4>login</h4>
      <my-button @click="$router.back">X</my-button></template
    >
    <template #modal-body>
      <form class="modal-form" @submit.prevent id="login">
        <my-input type="text" placeholder="Login" v-model="data.valLogin" />
        <my-input
          type="password"
          placeholder="Password"
          v-model="data.valPassword"
        /></form
    ></template>
    <template #modal-footer>
      <my-button @click="postData()">Submit</my-button>
      <div v-show="error" class="modal-error"><h3>Wrong Data</h3></div>
    </template>
  </my-modal>
</template>

<style scoped>
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
