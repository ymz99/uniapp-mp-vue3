<template>
  <view class="content">
    <uv-icon name="photo" size="30" color="#909399"></uv-icon>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view style="padding: 20px">
      <uv-button type="primary" text="确定" @click="goLogin"></uv-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')

const goLogin = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;

  .title {
    font-size: 36rpx;
    color: #000;
  }
}
</style>
