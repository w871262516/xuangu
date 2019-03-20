<template>
    <div :class="isChicang?'shengou':'none_shengou'">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="one flex">
                    <div class="name_header">
                        <span class="name">{{item.stock_name}}</span>
                        <span class="bianhao">{{item.stock_code}}</span>
                        <span class="chicanging" v-if='item.state==9'>待确认</span>
                        <span class="chicanging" v-if="item.state==10">持仓中</span>
                        <div class="dingdan">
                            <span>订单号</span>
                            <span class="bianhao">{{item.trade_no}}</span>
                        </div>
                    </div>
                    <div class="flex">
                       
                    </div>
                    <div class="fore">
                        <button @click='settlementStock(item.trade_no)'><span>卖出</span></button>
                    </div>
                </div>
                
                <div class="other flex">
                    <div class="other_bottom">
                        <p>执行金</p>
                        <p>{{item.nominal_amount}}</p>
                    </div>
                    <div class="other_bottom left">
                        <p>浮动盈亏</p>
                        <p>{{item.now_profit}}</p>
                    </div>
                    <div class="other_bottom left">
                        <p>选买周期</p>
                        <p>{{item.cycle_name}}</p>
                    </div>
                    <div class="other_bottom left">
                        <p>选买服务费</p>
                        <p>{{item.right_money}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <!-- <div class="page-bar">
            <ul>
                <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
                <li v-if="cur==1"><a class="banclick">上一页</a></li>
                <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}" :key="index">
                    <a v-on:click="btnClick(index)">{{ index }}</a>
                </li>
                <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>
                <li v-if="cur == all"><a class="banclick">下一页</a></li>
                <li><a>共<i>{{all}}</i>页</a></li>
            </ul>
        </div> -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Chicang',
    data(){
        return{
            trade_no:'',//交易号
            stock_name:'',//股票名字
            stock_code:'',//股票代码
            nominal_amount:'',//执行金
            right_money:'',//选买服务费
            right_money_ratio:'',//服务费率
            apply_time:'',//申请时间
            state:'',//状态
            now_profit:'',//当前盈亏
            buying_price:'',//买入
            buying_last_price:'',//购买的价格
            cycle_name:'',//选买周期
            list:[],
            state:'',
            all:20,
            cur:1,
            trade_no:''//订单编号
        }
    },
    created(){
        
    },
    methods:{
        //卖出结算股票
        settlementStock(item){ 
            console.log(item)
            let _this =this;
           
            var authorization= sessionStorage.getItem('refresh_jwt_token');
            axios({
                method:'post',
                url:'/api/api/v1/trade/settlementStock',
                data:{
                    trade_no:item
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
                if(data.data.code==400){
                    _this.$message({
							message: '此股票暂不能卖出',
							type: 'warning'
						});
                }
            })
           _this.holdPositions()
        },

        btnClick: function(data){//页码点击事件
                if(data != this.cur){
                    this.cur = data 
                }
            },
        pageClick: function(){
                console.log('现在在'+this.cur+'页');
            },


        //我的持仓
        holdPositions(item,index){
            let _this =this;
            // var authorization= sessionStorage.getItem('refresh_jwt_token');
            axios({
                method:'post',
                url:'/api/api/v1/trade/holdPositions',
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
                _this.list=data.data.data;
                // _this.list.forEach(item => {
                //   _this.index.push(item)
                // });
                // _this.trade_no=_this.list.trade_no
                // console.log(_this.trade_no)

            })
        }
    },
    mounted(){
        this.holdPositions()
    },
    computed:{
        isChicang(){
            return this.$store.state.isChicang
        },
        token(){
            return this.$store.state.authorization
        },
        indexs: function(){
          var left = 1;
          var right = this.all;
          var ar = [];
          if(this.all>= 5){
            if(this.cur > 3 && this.cur < this.all-2){
                    left = this.cur - 2
                    right = this.cur + 2
            }else{
                if(this.cur<=3){
                    left = 1
                    right = 5
                }else{
                    right = this.all
                    left = this.all -4
                }
            }
         }
        while (left <= right){
            ar.push(left)
            left ++
        }
        return ar
       }
    },
    watch:{
        isChicang(val){
            // console.log('isChicang',val)
        },
        token(val){
            this.holdPositions()
        }
    }
}
</script>
<style scoped>
.flex {
    display: flex;
}
.none_shengou{
    display: none;
}
.shengou{
    display: flex;
    padding: 14px 48px 80px 48px;
    width: 100%;
}
/* .shengou li{
    padding-bottom: .1rem;
    padding-top: .1rem
} */
.one{
    font-size: .2rem;
    color: #fff;
    justify-content: space-between;
    padding-bottom: .1rem
}
.name_header{
    line-height: .24rem
}
.name{
    color: #fff;
    font-size: .25rem;
    font-weight: 700;
    cursor: pointer;
}
.fore button{
    border: none;
    color: #fff;
    width: 1.64rem;
    height: .42rem;
    font-size: 0.16rem;
    background: #ff7e45; 
}
.other_bottom{
    font-size: .22rem;
    text-align: center
}
.left{
    padding-left: 3rem
}
.other{
    color: #fff;
    padding-top: .1rem;

}
.dingdan{
    padding-top: .1rem
}
.chicanging{
    background: red;
    margin-left: .2rem;
    border-radius: 20px;
    padding: .05rem
}
.bianhao{
    margin-left: .2rem
}


ul,li{
    margin: 0px;
    padding: 0px;
    border: none;
}
li{
    list-style: none
}
.page-bar li:first-child>a {
   margin-left: 0px
}
.page-bar a{
    border: none;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
}
.page-bar a:hover{
    background-color: #eee;
}
.page-bar a.banclick{
    cursor:not-allowed;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}
</style>
