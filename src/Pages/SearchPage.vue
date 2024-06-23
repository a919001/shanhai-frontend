<template>
  <form action="/">
    <van-search
        v-model="searchValue"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <!-- 设置标签间距 -->
  <van-row :gutter="[20, 20]">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>

<script setup>
import {ref} from 'vue';

const searchValue = ref('');
// 已选标签
const activeIds = ref([]);
const activeIndex = ref(0);
// 原始标签列表
const originTagList = [
  {
    text: '浙江',
    children: [
      {text: '杭州', id: '杭州aaaaaaaaaaaaaaaaaaaaaaaaaaa'},
      {text: '温州', id: '温州'},
      {text: '宁波', id: '宁波', disabled: true},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '南京', id: '南京'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
    ],
  },
];
// 标签列表
let tagList = ref(originTagList);

/**
 * 搜索过滤
 */
const onSearch = () => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children]
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchValue.value));
    return tempParentTag;
  })
};
const onCancel = () => {
  searchValue.value = '';
  tagList.value = originTagList;
};

// 删除已选标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}
</script>

<style scoped>

</style>