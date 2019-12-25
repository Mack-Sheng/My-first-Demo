<template>
    <div class="cineam_body">
        <ul>
            <li>
                <div>
                    <span>环球国际影院</span>
                    <span class="q"><span class="price">29.5</span>元</span>
                </div>
                <div class="address">
                    <span>桐城苏果四楼</span>
                    <span>113.3km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
             <li>
                <div>
                    <span>环球国际影院</span>
                    <span class="q"><span class="price">29.5</span>元</span>
                </div>
                <div class="address">
                    <span>桐城苏果四楼</span>
                    <span>113.3km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "CityList"
}
</script> 

<style scoped>
    #content .cineam_body{
        flex: 1;
        overflow: auto;
    }
    .cineam_body ul{
        padding: 20px;
    }
    .cineam_body li{
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
    }
    .cineam_body div{
        margin-bottom: 10px;
    }
    .cineam_body .q{
        font-size: 11px;
        color: #f03d37;
    }
    .cineam_body .price{
        font-size: 18px;
    }
    .cineam_body .address{
        font-size: 13px;
        color: #666;
    }
    .cineam_body .address span:nth-of-type(2){float: right;}
    .cineam_body .card{
        display: flex;
    }
    .cineam_body .card div{
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        color: #f90;
        border: 1px solid #f90;
        font-size: 13px;
        margin-right: 5px;
    }
    .cineam_body .card div.or{
        color: #f90;
        border: 1px solid #f90;
    }
    .cineam_body .card div.dl{
        color: #589daf;
        border: 1px solid #589daf;
    }
</style>