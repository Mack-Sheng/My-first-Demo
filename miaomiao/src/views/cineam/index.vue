<template>
   <div id="main">
        <Header title="天猫影院"/>
        <div id="content">
            <div class="cineam_menu">
                <div class="city_switch">
                    全城<i class="iconfont icon-sousuo"></i>
                </div>
                <div class="brand_switch">
                    品牌<i class="iconfont icon-sousuo"></i>
                </div>
                <div class="feature_switch">
                    特色<i class="iconfont icon-sousuo"></i>
                </div>
            </div>
            <CityList />
        </div>
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CityList from '@/components/CityList'

export default {
    name:'cineam',
    components:{
        Header,
        TabBar,
        CityList
    }
}
</script>

<style scoped>
    #content .cineam_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: white;
    }
</style>