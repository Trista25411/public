<script setup>
// 「讀取」當前狀態 => 應用於:class="$route.path === item.path ..." 
import { useRoute } from 'vue-router';
// route 用於監控當前網址路徑
const route = useRoute();

const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'DESTINATION', path: '/dest' },
    { name: 'CREW', path: '/crew' },
    { name: 'TECHNOLOGY', path: '/tech' }
]
</script>

<template>
    <!-- <div class="hamburger"></div> -->


    <div class="navbar bg-transparent h-[135px] p-[40px_0_0_64px] flex overflow-x-hidden md:pl-[10px]">
        <!-- png才支援透明度，jpg無法 -->
        <img src="../assets/Logo.png" alt="logo" class="bg-transparent w-[48px] h-[48px] m-[auto_30px]">
        <div class="h-[1px] bg-white opacity-25 my-auto flex-grow translate-x-8 z-10"></div>
        <!-- 原先寫法 -->
        <!-- <div class="nav-right bg-red-500 px-[64px] flex gap-[48px]">
            <div class="blo flex gap-[8px] items-center">
                <span class="text-preset-8-bold)">00</span>
                <span class="text">HOME</span>
            </div>
            <div class="blo flex gap-[8px] items-center">
                <span class="text-preset-8-bold)">01</span>
                <span class="text">DESTINATION</span>
            </div>
            <div class="blo flex gap-[8px] items-center">
                <span class="text-preset-8-bold)">02</span>
                <span class="text">CREW</span>
            </div>
            <div class="blo flex gap-[8px] items-center">
                <span class="text-preset-8-bold)">03</span>
                <span class="text">TECHNOLOGY</span>
            </div>
        </div> -->
        <!-- 上方重覆程式太多，簡短寫法: -->
        <!--                   白色背景 5%  背景模糊 80 -->
        <!-- <div class="nav-right cursor-pointer bg-white/5 backdrop-blur-[80px] px-[64px] flex gap-[48px]">
            <div v-for="(item, index) in ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY']"
                class="blo flex gap-[8px] items-center text-white">
                <span class="text-preset-8-bold">{{ String(index).padStart(2, '0') }}</span>
                <span class="text-preset-8">{{ item }}</span>
            </div>
        </div> -->
        <!-- 加入底線+導入其他頁面 -->
        <!-- $router.push => (讀取狀態) => 「切換頁面」而不重新整理網頁 -->
        <!-- $router => (發送指令) => 前面判斷，後面判斷後看是否需切換頁面 -->
        <div class="cursor-pointer bg-white/5 backdrop-blur-[80px] px-[64px] flex gap-[48px] md:px-[20px]">
            <div v-for="(item, index) in navItems" @click="$router.push(item.path)"
                class="blo flex gap-[8px] items-center text-white border-b-[3px] hta"
                :class="$route.path === item.path ? 'border-white' : 'border-transparent hover:border-white/50'">
                <!--                                 忘記 {{ 這段 }} 怎麼寫 -->
                <span class="text-preset-8-bold">{{ String(index).padStart(2, '0') }}</span>
                <span class="text-preset-8">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>