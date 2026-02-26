<script setup>
// 定義接收的資料結構 => 預期會在HomeView裡面接受到country的東西
defineProps(['country'])
</script>

<template>
    <article class="card">
        <img :src="country.flag" :alt="country.name" class="pic">
        <div class="info">
            <h2>{{ country.name }}</h2>
            <div>
                <span class="name">Population:</span>
                <!-- toLocaleString 來根據使用者網路設定自動把數字轉成帶有「千分位逗號」的字串，從API純數字的 40218234 變成 40,218,234較好識別 -->
                <span>{{ country.population.toLocaleString() }}</span>
            </div>
            <div>
                <span class="name">Region:</span>
                <span>{{ country.region }}</span>
            </div>
            <div>
                <span class="name">Capital:</span>
                <!-- capital加問號是因為並非每個國家都有首都，若不存在就傳空值不讓程式卡住 -->
                <span>{{ country.capital}}</span>
            </div>
        </div>
    </article>

</template>

<style scoped>
.card {
    background-color: beige;
    width: 200px;
    display: flex;
    flex-direction: column;
}

.pic {
    background-color: aquamarine;
    width: 200px;
    height: 100px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.info {
    padding: 10px 20px 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.name {
    font-weight: 600;
    margin-right: 5px;
}
</style>
