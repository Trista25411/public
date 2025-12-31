<script>

</script>

<template>
    <div class="navbar bg-transparent h-[135px] flex">
        <div class="nav-left bg-transparent flex flex-grow items-center">
            <!-- png才支援透明度，jpg無法 -->
            <img src="../assets/Logo.png" alt="logo">
            <div class="h-[1px] bg-white opacity-25 flex-grow translate-x-8 z-10"></div>
        </div>
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
        <div class="nav-right cursor-pointer bg-white/5 backdrop-blur-[80px] border-[1px] border-black px-[64px] flex gap-[48px]">
            <div v-for="(item, index) in ['HOME', 'DESTINATION', 'CREW', 'TECHNOLOGY']"
                class="blo flex gap-[8px] items-center text-white">
                <!--                                 忘記 {{ 這段 }} 怎麼寫 -->
                <span class="text-preset-8-bold)">{{ String(index).padStart(2, '0') }}</span>
                <span class="text">{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<style>
.navbar {
    padding: 40px 0 0 64px;
}
</style>