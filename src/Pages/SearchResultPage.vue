<template>
  <van-card
      v-for="user in userList"
      :desc="user.signature"
      :title="user.nickname"
      :thumb="user.avatar"
  >
    <template #tags>
      <van-space style="margin-top: 8px;">
        <van-tag plain type="primary" v-for="tag in user.tags">{{ tag }}</van-tag>
      </van-space>
    </template>
    <template #footer>
      <van-button size="mini">call一下</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />

</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from "vue-router";
import MyAxios from "../plugins/MyAxios.ts";
import {showFailToast, showSuccessToast} from "vant";
import qs from 'qs'

const route = useRoute();
const {tags} = route.query;

const mockUser = ref({
  id: 123,
  username: 'hanshan',
  avatar: "https://yu-shan-han.oss-cn-beijing.aliyuncs.com/user-center/avatar-20240703135719-abe1f992914c46d7bebede212f83f533mmexport1596556925757.jpg",
  nickname: '寒山',
  gender: 0,
  birthday: '2023/03/07',
  region: '寒山寺',
  signature: '放浪形骸，阿巴阿巴阿巴啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
  phone: '12312312312',
  email: '1234567@qq.com',
  tags: ['java', 'emo', '打工人', '打工魂'],
  userRole: 0,
  createTime: new Date(),
})

const userList = ref([]);

onMounted(async () => {
  const userListData = await MyAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },

    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log('/user/search/tags succeed', response);
        showSuccessToast('请求成功');
        return response.data?.data;
      })
      .catch(function (error) {
        console.log('/user/search/tags error', error);
        showFailToast('请求失败');
      });

  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
  }
  userList.value = userListData;
})

</script>

<style scoped>

</style>