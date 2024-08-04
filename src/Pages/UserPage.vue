<template>
  <van-cell title="用户名" is-link :value="user.username"/>
  <van-cell title="头像" is-link to="user/edit">
    <img :src="user.avatar" alt="" height="48px">
  </van-cell>
  <van-cell title="昵称" is-link to="user/edit" :value="user.nickname"/>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="生日" is-link to="user/edit" :value="user.birthday.toISOString()"/>
  <van-cell title="地区" is-link to="user/edit" :value="user.region"/>
  <van-cell title="个性签名" is-link to="user/edit" :value="user.signature"/>
  <van-cell title="电话" is-link to="user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to="user/edit" :value="user.email"/>
  <van-cell title="注册时间" is-link :value="user.createTime.toISOString()"/>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: "hanshan",
  avatar: "https://yu-shan-han.oss-cn-beijing.aliyuncs.com/user-center/avatar-20240703135719-abe1f992914c46d7bebede212f83f533mmexport1596556925757.jpg",
  nickname: "寒山",
  gender: "男",
  birthday: new Date(),
  region: "北京市 / 市辖区 / 东城区",
  signature: "放浪形骸",
  phone: "16684888931",
  email: "1470397437@qq.com",
  createTime: new Date(),
};

const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>