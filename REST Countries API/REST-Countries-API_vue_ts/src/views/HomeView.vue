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
<script setup>
import { onMounted, ref } from 'vue';
import CountryCard from '../components/CountryCard.vue';
import localData from '../assets/data.json';

// 串接 API
const countries = ref([])
//  async 非同步作業 => 讓其他資訊不因串接api的時間延遲到
const fetchCountries = async () => {    
    try {
        // 串接 api 網址，需要一點時間
        // await讓程式抓取資料再繼續下去，避免抓到空資料
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca3,population,region,capital');
        const rawData = await response.json();

        // 將 api 資料轉為自訂的標準，
        // 因 data.json 是v2版，目前api已經是v3.1版，抓取的資訊不同，
        // 原先寫法會造成api抓不到改抓data.json時，因名稱不同反而抓取不到造成錯誤
        countries.value = rawData.map(item => ({
            // 要看api名稱 => https://restcountries.com/ 進入後找到 All Countries (/v3.1/all?fields=name,flags)
            // 在瀏覽器搜尋 https://restcountries.com/v3.1/all?fields=name,flags 即有name跟flag資訊，會密密麻麻的，在最上面有美化排版的選項可以分筆看
            // api是需要哪些東西就要在瀏覽器加入，不然不會顯示 => 改為 https://restcountries.com/v3.1/all?fields=name,flags,cca3,population,region,capital
            // id使用cca3是國家三位字母代碼，為常用寫法，用這個來辨別id最容易
            id: item.cca3,
            name: item.name.common,
            population: item.population,
            region: item.region,
            capital: item.capital?.[0],
            flag: item.flags.png
        }));
    } catch (error) {
        console.warn('API出錯, 改用本地資料data.json');
        countries.value = localData.map(item => ({
            // 本地資料也要變成一樣的格式
            id: item.alpha3Code,
            name: item.name,
            population: item.population,
            region: item.region,
            capital: item.capital || 'N/A',
            flag: item.flags.png
        }));
    };
};

// filter 功能
const filterConutry = ({
    
})



// 將 API 資料匯入
onMounted(() => {
    fetchCountries();
});
</script>

<template>
    <main class="content">
        <header class="top">
            <div class="search shadow">
                <span><ion-icon name="search-outline"></ion-icon></span>
                <input placeholder="Search for a country..."></input>
            </div>
            <div class="droplist">
                <div class="filter shadow">
                    <span>Filter by Region</span>
                    <span><ion-icon name="chevron-down-outline"></ion-icon></span>
                </div>
                <ul class="dropdown"></ul>
            </div>
        </header>
        <section class="cards">
            <RouterLink v-for="c in countries" :key="c.id" :to="`/detail/${c.id}`">
                <CountryCard :country="c" />
            </RouterLink>
        </section>
    </main>
</template>

<style scoped>
/* routerlink寫text-decoration:none沒有效果，可能因為權重不夠，改a就好了 */
a {
    text-decoration: none;
    color: black;
}

input {
    border: none;
    padding: 10px 5px;
}

.content {
    padding: 80px;
}

.top {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
}

.search,
.filter {
    background-color: white;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.search {
    min-width: 30%;
}

.filter{
    gap: 35px;
}

.droplist {
    cursor: pointer;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
}

@media (max-width:768px) {
    .top{
        display: block;
    }

    .filter{
        margin: 20px 0 -20px 0 ;
    }
    
}
</style>