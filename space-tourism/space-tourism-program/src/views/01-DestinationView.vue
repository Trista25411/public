<script setup>
import NavBar from '@/components/NavBar.vue';
import { ref } from 'vue';

const current = ref(0); // 呼叫函數並設定預設顯示第 0 個項目，若沒有寫0 => 只是把函數賦值給變數，沒有執行

const nameItems = [
    { name: 'MOON', big: 'MOON', small: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', distance: '384,400 km', time: '3 days', },
    { name: 'MARS', big: 'MARS', small: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', distance: '225 MIL. km', time: '9 months' },
    { name: 'EUROPA', big: 'EUROPA', small: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', distance: '628 MIL. km', time: '3 years' },
    { name: 'TITAN', big: 'TITAN', small: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', distance: '1.6 BIL. km', time: '7 years' }
]
</script>

<template>
    <div class="home-container">
        <NavBar />
        <div class="container max-w-[1110px] py-[130px] mx-auto mt-[200px] flex flex-col gap-[24px]">
            <div class="title text-white">
                <span class="pr-[24px] text-preset-5 font-bold opacity-25">01</span>
                <span class="text-preset-5">PICK YOUR DESTINATION</span>
            </div>
            <div class="flex gap-[32px]">
                <img src="../assets/Destination - A - Moon.png" alt="moon" class="w-[480px] h-[480px] m-[130px_30px]">
                <!-- 點選name再顯示其資料，要把name另外用一個div做button包覆起來，不然全部包一塊，資訊都會放在裡面，就會變成四塊一起出現 -->
                <div>
                    <button v-for="(item, index) in nameItems" :key="item.name" @click="current = index"
                        class="text-white" :class="current === index ? 'border-white' : 'border-transparent'">
                        {{ item.name }}
                    </button>
                </div>
                <div class="big">{{ nameItems[current].big }}</div>
                <div class="small">{{ nameItems[current].small }}</div>
                <div class="h-[1px] bg-white/25"></div>
                <div class="flex">
                    <div class="distance">
                        <p>AVG. DISTANCE</p>
                        <p>{{ nameItems[current].distance }}</p>
                    </div>
                    <div class="time">
                        <p>Est. travel time</p>
                        <p>{{ nameItems[current].time }}</p>
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
}

@media (max-width:1100px) {
    .container {
        padding: 130px 40px;
    }

}
</style>
