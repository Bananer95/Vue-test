import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', () => {
  interface IData {
    valLogin: string;
    valPassword: string;
  }
  const showTitle = ref(false);
  const user = reactive({
    login: '',
    password: '',
  });
  const changeShow = () => {
    showTitle.value = true;
  };
  const saveUser = (value: IData) => {
    user.login = value.valLogin;
    user.password = value.valPassword;
  };
  return { showTitle, changeShow, saveUser, user };
});
