<template>
  <view class="login"> 登录 </view>
  <uv-button type="primary" text="确定" @click="getSms"></uv-button>
  <uv-button type="primary" text="保存" @click="saveInfo"></uv-button>
  <uv-button type="primary" text="获取" @click="getInfo"></uv-button>
</template>

<script setup lang="ts">
import { getSmsCode } from '@/service/modules/login'
import { useLoginStore } from '@/store/login'

const store = useLoginStore()

async function getSms() {
  let res = await getSmsCode(15012345678)
  console.log('res', res)
}
function saveInfo() {
  store.saveData({
    name: 'abc'
  })
}
function getInfo() {
  console.log(store.userInfo)
}
</script>

<style lang="scss"></style>
