<script setup>
import NavBar from '@/components/NavBar.vue';


</script>

<template>
    <div class="home-container">
        <NavBar />
        <div class="container w-[1110px] flex space-between my-[130px] mx-auto">
            <div class="b-left w-[540px] bg-red-500 flex flex-col gap-[24px] text-white">
                <div class="int">SO, YOU WANT TO TRAVEL TO</div>
                <div class="text-preset-1">SPACE</div>
                <div class="bot">Let’s face it; if you want to go to space, you might as well genuinely go to outer
                    space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
                    truly out of this world experience!</div>
            </div>
            <div class="b-right w-[540px] flex">
                <div class="bg-white w-[270px] h-[270px] rounded-full flex items-center justify-center ml-auto">
                    <div class="text-preset-4">EXPLORE</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-container {
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/Render-1.jpg);
    background-position: center;
    background-size: cover;

}
</style>