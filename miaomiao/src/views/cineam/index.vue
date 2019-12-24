<template>
   <div id="main">
        <Header title="天猫影院"/>
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name:'cineam',
    components:{
        Header,
        TabBar
    }
}
</script>