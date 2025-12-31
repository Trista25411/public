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
    overflow: hidden;
  }
  
</style>
