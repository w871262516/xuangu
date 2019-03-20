<template>
    <div :class="isJiesuan?'none_shengou':'shengou'">
        <div>
            <div class="el" v-for="{item,index} in arr" :key="index">
                <div class="flex tittle">
                    <div class="left">
                        <span class="name">{{乐视网}}</span>
                        <span class="bySelf">自主卖出</span>
                    </div>
                    <div class="middle2">
                        <span class="label">执行金</span>
                        <span class="data">100000</span>
                    </div>
                    <div class="middle">
                        <span class="label">选买服务费</span>
                        <span class="data">16320元</span>
                    </div>
                    <div class="middle1">
                        <span class="label">结算盈亏</span>
                        <span class="red" @click="red">+16415元</span>
                    </div>
                </div>
                <div class="flex content">
                    <div class="one">
                        <p>
                            <span class="label">买入价</span>
                            <span class="data">2.6</span>
                        </p>
                        <p>
                            <span class="label">卖出价</span>
                            <span class="data">3.02</span>
                        </p>
                    </div>
                    <div class="middle2">
                        <p>
                            <span class="label">买入时间</span>
                            <span class="data">2019-02-21 16:28:07</span>
                        </p>
                        <p>
                            <span class="label">卖出时间</span>
                            <span class="data">2019-03-06 13:24:45</span>
                        </p>
                    </div>
                    <div class="middle flex">
                        <p>
                            <span class="label">选买周期</span>
                            <span class="data">两周</span>
                        </p>
                    </div>
                    <div class="fore flex">
                        <p>
                            <span class="label">订单编号</span>
                            <span class="data">1902211503221674</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Jiesuan',
    data(){
        return{
            arr:[]
        }
    },
    methods:{
        red(){
            this.mySettlementStock()
        },
        mySettlementStock(){
            let _this =this;
            axios({
                method:'post',
                url:'/api/api/v1/trade/mySettlementStock',
                data:{
                    trade_no:_this.$store.state.trade_no
                },
                transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
                }],
                crossDomain:true,
	    			headers:{
						"Authorization":'bearer '+_this.$store.state.authorization,
	    				'Content-Type': 'application/x-www-form-urlencoded'
					}
            }).then(function(data){
                console.log(data)
                _this.arr=data.data.data
            })
        }
    },
    mounted(){

    },
    computed:{
        isJiesuan(){
            return this.$store.state.isJiesuan
        }
    },
    watch:{
        isJiesuan(val){
            // console.log('isJiesuan',val)
        }
    }

}
</script>
<style scoped>
.none_shengou{
    display: none;
}
.el{
    line-height: .48rem;

}
.shengou{
    display: flex;
    padding: 14px 48px 80px 48px;
    width: 100%;
}
.flex{
    display: flex
}
.left{
    width: 2.52rem;
}
.name{
    color: #fff;
    font-size: .3rem;
    font-weight: 700;
    margin: 0 6px;
}
.bySelf{
    font-size: .2rem;
    color: #ea523b
}
.middle{
    width: 3.09rem;
}
.middle2{
    width: 4.09rem;
}
.label{
    font-size: .2rem;
    color:#fff
}
.data{
    font-size: .22rem;
    color: #fff
}
.middle1{
    width: 3.0rem
}
.red{
    color: #ea523b
}
.one{
    width: 2.52rem;
}
.two{
    width: 3.09rem; 
}
.fore{
    width: 3.0rem
}
.tittle{
    border-bottom: 1px dashed #ccc;
    padding-bottom: .2rem
}
.content{
    padding-top: .2rem
}
</style>
