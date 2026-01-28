<script setup>
import NavBar from '@/components/NavBar.vue';
// 要先定義current
import { ref } from 'vue';
const current = ref(0);

const Tech = [
    { name: 'LAUNCH VEHICLE', intr: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", img: '4-1-Technology' },
    { name: 'SPACEPORT', intr: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.", img: '4-2-Technology' },
    { name: 'SPACE CAPSULE', intr: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", img: '4-3-Technology' }
];

const getImg = (name) => {
    return new URL(`../assets/${name}.png`, import.meta.url).href;
};
</script>

<template>
    <div class="whole-container">
        <NavBar />
        <div class="container mx-auto p-[24px] sm:p-[40px] md:p-[48px]">
            <div class="flex flex-col md:gap-[24px]">
                <div class="text-white text-center mb-[24px] md:mb-[0px] sm:text-start">
                    <span class="pr-[24px] font-bold opacity-25 text-preset-6 md:text-preset-5">03</span>
                    <span class="text-preset-6 md:text-preset-5">SPACE LAUNCH 101</span>
                </div>
                <div class="flex gap-[32px] flex-col-reverse lg:flex-row">
                    <div class="text-white text-center grid lg:grid-flow-col md:text-start lg:w-[630px]">
                        <div class="flex justify-center gap-[32px] mb-[40px] lg:m-[0_32px_0_0] lg:flex-col">
                            <button v-for="(item, index) in Tech" @click="current = index" :key="index"
                                class="rounded-full text-preset-4 size-14 border border-white/20 lg:size-20"
                                :class="current === index ? 'bg-white opacity-100 text-black' : 'bg-transparent text-white hover:bg-white'">
                            {{ index + 1 }}
                            </button>
                        </div>
                        <div class="my-auto text-center lg:text-start">
                            <div class="text-preset-4">THE TERMINOLOGY…</div>
                            <div class="text-preset-3">{{ Tech[current].name }}</div>
                            <div class="text-preset-9">{{ Tech[current].intr }}</div>
                        </div>
                    </div>
                    <div class="flex m-auto h-[360px] lg:w-[600px] lg:h-[600px]">
                        <img :key="current" :src="getImg(Tech[current].img)" :alt="Tech[current].name"
                            class="object-contain">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.whole-container {
    background-image: url(../assets/Render-4.jpg);
    background-position: center;
    background-size: cover;
}
</style>
