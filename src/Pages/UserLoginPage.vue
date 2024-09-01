<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import {useRouter} from "vue-router";
import myAxios from "../plugins/MyAxios";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter()

const username = ref('');
const password = ref('');

const onSubmit = async () => {
  const res = await myAxios.post('/user/passwordLogin', {
    username: username.value,
    password: password.value,
  })
  console.log(res, '用户登录');
  if (res.code === 0 && res.data) {
    showSuccessToast('登录成功');
    await router.replace('/');
  } else {
    showFailToast('登录失败');
  }
};

</script>

<style scoped>

</style>