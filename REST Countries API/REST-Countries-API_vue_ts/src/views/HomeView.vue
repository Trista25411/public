<script setup>

</script>
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
    <main class="content">
        <header class="top">
            <div class="filter">
                <div class="icon"></div>
                <div class="text" placeholder="Search for a country..."></div>
            </div>
            <div class="select">
                <div class="text" placeholder="Filter by Region"></div>
                <div class="icon"></div>
            </div>
        </header>
        <selection class="cards">
            <RouterLink to="/">
                <article class="card">
                    <img src="" alt="country-img" class="pic">
                    <div class="info">
                        <h2>country name</h2>
                        <div>Population:</div>
                        <div>Region:</div>
                        <div>Capital:</div>
                    </div>
                </article>
            </RouterLink>
        </selection>
    </main>
</template>

<style scoped>
/* routerlink寫text-decoration:none沒有效果，可能因為權重不夠，改a就好了 */
a {
    text-decoration: none;
    color: black;
}

.content {
    padding: 40px;
}


.card {
    background-color: beige;
    width: 200px;
    height: 300px;
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

.info{
    padding:10px;
    margin-bottom: 10px;
}
</style>