<script setup lang="ts"></script>
<!-- 
homepage可以看到所有國家
尋找國家用input處理
篩選用國家
點選國家打開分頁可以查看更多
可以點鄰近國家
可以切換深夜模式 
api網頁：https://restcountries.com/  篩選取得要的東西
若網頁API掛掉，可以用本地的data.json
-->
<template>
    <!-- 利用無障礙性: nav、main、selection、article -->
    <nav class="navbar shadow">
        <h1 class="title">Where in the world?</h1>
        <button type="button" class="mode">
            <span><ion-icon name="moon-outline"></ion-icon></span>
            <span>Dark Mode</span>
        </button>
    </nav>
    <RouterView />
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
}

.mode {
    background-color: transparent;
    border: 0.5px solid rgba(159, 159, 159, 0.5);
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 20px;
}
</style>
