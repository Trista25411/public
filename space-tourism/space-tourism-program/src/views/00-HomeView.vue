<script setup>
import NavBar from '@/components/NavBar.vue';


</script>

<template>
    <div class="home-container">
        <NavBar />
        <!-- 在最大的寬度為1110px，不然後面寫死很難做RWD -->
        <div class="container w-[1110px] grid grid-cols-1 py-[130px] mx-auto mt-[200px] md:grid-cols-2">
            <div class="b-left text-white">
                <div class="text-preset-7 blue-300">SO, YOU WANT TO TRAVEL TO</div>
                <div class="text-preset-1">SPACE</div>
                <div class="text-preset-9 blue-300">Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer
                    space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
                    truly out of this world experience!</div>
            </div>
            <!--                                                 原先hover用border格式會跑掉，改用shadow不占空間不會移動位置 -->
            <!-- 使用router-link內部轉換，a會重新整理跳轉不用 -->
            <router-link to="/dest"
                class="b-right my-auto ml-auto">
                <div class="bg-white w-[270px] h-[270px] rounded-full flex items-center justify-center hta hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)]">
                    <div class="text-preset-4 blue-900 ">EXPLORE</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.home-container {
    width: 100%;
    /* 原先設置 height 在程式往下掉的時候圖片不會跟著往下延伸，改成 min-height */
    min-height: 100vh;
    background-image: url(../assets/Render-1.jpg);
    background-position: center;
    background-size: cover;

}
</style>