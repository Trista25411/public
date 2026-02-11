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
    <nav class="navbar">
        <h1 class="title">Where in the world?</h1>
        <button type="button" class="mode">
            <ion-icon name="moon-outline"></ion-icon>
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
}

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    box-shadow: 0 2px 5px rgba(128, 128, 128, 0.4);
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
