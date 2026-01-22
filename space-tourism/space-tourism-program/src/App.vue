<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <!-- 要有router-view才能匯入homeview東西 -->
    <router-view />
  </main>
</template>

<style>
  body{
    margin: 0;
    padding: 0;
  }

  /* 檢查是哪個寬度超出使用 */
* {
    outline: 1px solid red !important;
}
  
</style>
