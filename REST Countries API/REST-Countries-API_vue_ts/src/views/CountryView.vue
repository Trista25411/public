<script>
import { ref } from 'vue';

// 匯入 api 詳細資料
const fetchCountries = async () => {
try{
    const res = await fetch('')
}
}


const LeftInfo = [
    { lable: 'Native Name', value: '' },
    { lable: '' }
]

</script>

<template>
    <div class="container">
        <button type="button" class="back">
            <span><ion-icon name="arrow-back-outline"></ion-icon></span>
            <span>Back</span>
        </button>
        <div class="info-content">
            <img src="" alt="">
            <div class="info">
                <div class="country"></div>
                <div v-for="item in LeftInfo" :key="item.label" class="info-left">
                    <div>
                        <span class="name"></span>
                        <span></span>
                    </div>
                </div>
                <div class="info-right">
                    <div>
                        <span class="name"></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 60px 80px;
}

.back {
    background-color: var(--color-back);
    border: none;
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.3);
    padding: 10px 30px;
}
</style>