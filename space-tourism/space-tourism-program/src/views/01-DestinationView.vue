<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref } from 'vue';

const current = ref(0); // 呼叫函數並設定預設顯示第 0 個項目，若沒有寫0 => 只是把函數賦值給變數，沒有執行

const nameItems = [
    { name: 'MOON', big: 'MOON', small: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', distance: '384,400 KM', time: '3 DAYS', img: '1-Moon' },
    { name: 'MARS', big: 'MARS', small: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', distance: '225 MIL. KM', time: '9 MONTHS', img: '2-Mars' },
    { name: 'EUROPA', big: 'EUROPA', small: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', distance: '628 MIL. KM', time: '3 YEARS', img: '3-Europa' },
    { name: 'TITAN', big: 'TITAN', small: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', distance: '1.6 BIL. KM', time: '7 YEARS', img: '4-Titan' }
];

const getImg = (name) => {
    // new URL(path, base)：這是一個構造函數 => 把「相對路徑」拼接到「當前檔案路徑」上，產生一個完整的、合法的資源網址。
    //              ↓ 相對於這份vue檔的相對路徑, ↓ 目前這份vue檔在瀏覽器的絕對位置. href將url物件轉為字串給img的src使用
    return new URL(`../assets/${name}.png`, import.meta.url).href;
}
</script>

<template>
    <div class="home-container">
        <NavBar />
        <div class="container max-w-[1110px] mx-auto mt-[48px] flex flex-col gap-[24px] md:m-[24px] sm:m-[40px]">
            <div class="title text-white">
                <span class="pr-[24px] text-preset-5 font-bold opacity-25">01</span>
                <span class="text-preset-5">PICK YOUR DESTINATION</span>
            </div>
            <div class="star-info flex flex-col gap-[32px] items-center lg:flex-row">
                <!--                                                                             w-3/4 占父層的3/4，隨大小縮小放大 -->
                <img :src="getImg(nameItems[current].img)" :alt="nameItems[current].name" class="w-3/4 max-w-[480px] p-[40px_30px] lg:p-[130px_30px]">
                <!-- 點選name再顯示其資料，要把name另外用一個div做button包覆起來，不然全部包一塊，資訊都會放在裡面，就會變成四塊一起出現 -->
                <div class="flex flex-col items-center max-w-[520px] lg:items-start">
                    <div class="flex gap-[32px] lg:pb-[24px]">
                        <button v-for="(item, index) in nameItems" :key="item.name" @click="current = index"
                            class="text-white border-b-[3px] pb-[8px]" :class="current === index ? 'border-white' : 'border-transparent hover:border-white/50'">
                            {{ item.name }}
                        </button>
                    </div>
                    <div class="text-white text-preset-2">{{ nameItems[current].big }}</div>
                    <!-- 原先因字數不同，點選{{ item.name }}的時候會跟著變化，設定min-h多少就可以了 -->
                    <div class="blue-300 text-preset-9 mt-[16px] min-h-[130px] text-center lg:text-start">{{ nameItems[current].small }}</div>
                    <div class="w-[100%] h-[1px] bg-white/25 my-[24px] lg:my-[40px]"></div>
                    <div class="flex gap-[24px]">
                        <div class="text-white flex flex-col gap-[12px] w-[210px] text-center lg:text-start">
                            <p class="text-preset-7 blue-300">AVG. DISTANCE</p>
                            <p class="text-preset-6">{{ nameItems[current].distance }}</p>
                        </div>
                        <div class="text-white flex flex-col gap-[12px] text-center lg:text-start">
                            <p class="text-preset-7 blue-300">EST.TRAVEL TIME</p>
                            <p class="text-preset-6">{{ nameItems[current].time }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-container {
    width: 100%;
    /* 原先設置 height 在程式往下掉的時候圖片不會跟著往下延伸，改成 min-height */
    min-height: 100vh;
    background-image: url(../assets/Render-2.jpg);
    background-position: center;
    background-size: cover;
    padding-bottom: 40px;
}

</style>
