<template>
    <div :class="isH_h?'none___3lAhv':'tc___1cFyh'">
        <div class="xunjia___3Dr6q">
            <div class="header___JfS43">
                <span>确认订单</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
           <div class="pay">
				<ul class="shengou_ul">
					<li>
						<div>
							<span class="price">标的股票:</span>
                            <span class="price_1">{{this.$store.state.keyword}}</span>
						</div>
					</li>
					<li>
						<div class="xuan">
							<span class="price1">执行金:</span>
                            <span class="price_1">{{this.$store.state.choMoney}}元</span>
						</div>
						
					</li>
					<li>
						<div class="xuan">
							<span class="price">选买周期:</span>
                            <span class="price_1 one">{{this.$store.state.cycle_text}}</span>
						</div>
					</li>
					<li>
						<div class="xuan">
							<span class="price">买入方式:</span>
                            <span class="price_1 tow">市价买入</span>
						</div>							
					</li>
                    <li>
                        <div class="xuan">
                            <span class="price2">选买服务费:</span>
                            <span class="price_3 four">{{this.$store.state.server}}</span>
                        </div>
                    </li>
                    <li>
                        <div class="xuan">
                            <span class="price">账户余额:</span>
                            <span class="price_3">{{this.$store.state.available_amount}}</span>
                        </div>
                    </li>
				</ul>
                <!-- <table>
                    <tr>
                        <td>预期涨幅</td>
                        <td>盈亏比例</td>
                        <td>盈利金额</td>
                    </tr>
                    <tr class="up">
                        <td>8.92%</td>
                        <td>0%</td>
                        <td>4410.00</td>
                    </tr>
                    <tr class="up">
                        <td>8.92%</td>
                        <td>20%</td>
                        <td>4410.00</td>
                    </tr>
                    <tr class="up">
                        <td>8.92%</td>
                        <td>50%</td>
                        <td>4410.00</td>
                    </tr>
                    <tr class="up">
                        <td>8.92%</td>
                        <td>100%</td>
                        <td>4410.00</td>
                    </tr>
                </table> -->
				<button class="inquiry" @click="pop">立即认购</button>
			</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Pay',
    data(){
        return{
            stockcode:'',
            stockname:'',
            nominal_amount:'',
            cycle:'',
            cycle_id:'',
            market_code:'',
            pay_password:'',
            cycle_text:'两周',

        }
    },
    created(){
        
    },
    methods:{
        close(){
            this.$store.state.isH_h=!this.$store.state.isH_h;
            
        },
        // applyPurchase(){  
        //     console.log(this.$store.state.code)
        //     var _this = this;
        //     // var authorization= sessionStorage.getItem('refresh_jwt_token');
        //     axios({
        //         method:'post',
        //         url:'/api/api/v1/trade/applyPurchase',
        //         data:{
        //             stock_code:_this.$store.state.code,
        //             stock_name:_this.$store.state.name,
        //             nominal_amount:_this.$store.state.choMoney,
        //             cycle:_this.cycle,
        //             cycle_id:_this.$store.state.cycle_id,
        //             market_code:_this.$store.state.stock_marketcode,
        //         },
        //         transformRequest: [function (data) {
		// 		let ret = ''
		// 		for (let it in data) {
		// 		ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		// 		}
		// 		return ret
		// 		}],
		// 		crossDomain:true,
	    // 			headers:{
		// 				"Authorization":'bearer '+_this.$store.state.authorization,
	    // 				'Content-Type': 'application/x-www-form-urlencoded'
		// 			}
        //     }).then(function(data){
        //         console.log(data)
        //     })
        // },
        //校验用户 绑卡 支付密码 实名制 是否完整
		checkUserInfoIntegrity(){
			let _this=this;
			axios({
				
				method:'post',
				url:'/api/api/v1/checkUserInfoIntegrity',
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
				if(data.data.data.bind_bank==0){
					_this.$message({
							message: '没有绑定银行卡',
							type: 'warning'
						});
					// _this.$store.state.isE_e = !_this.$store.state.isE_e;
					// _this.$store.state.isE_E = false;
				}else if(data.data.data.real_name==0){
					_this.$message({
							message: '没有实名认证',
							type: 'warning'
						});
					// _this.$store.state.isE = !this.$store.state.isE
					// __this.$store.state.isE_E=false;
				}if(data.data.data.pay_password==0){
					_this.$message({
							message: '没有设置支付密码',
							type: 'warning'
						});
					// _this.$store.state.isE = !this.$store.state.isE	
					// _this.$store.state.isE_E = false;
				}else if(data.data.data.real_name==1 || data.data.data.bind_bank==1 || data.data.data.pay_password==1){
					_this.$store.state.ispay=!_this.$store.state.ispay
				}
			})
		},
        pop(){
            
            // this.$store.state.ispay=!this.$store.state.ispay
            console.log(this.$store.state.ispay)
            this.checkUserInfoIntegrity()
        }
    },
    computed:{
        isH_h(){
            return this.$store.state.isH_h
        },
    }
}
</script>
<style scoped>
@import '../../static/flex.css';
.none___3lAhv {
	display: none
}
.tc___1cFyh {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
}

.tc___1cFyh .xunjia___3Dr6q {
	height: 9.78rem;
	width: 12.15rem;
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	margin-top: -4.6rem;
	margin-left: -5.46rem;
	border-radius: .1rem
}

.tc___1cFyh .xunjia___3Dr6q .header___JfS43 {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1cFyh .xunjia___3Dr6q .header___JfS43 span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___1cFyh .xunjia___3Dr6q .header___JfS43 img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}
.tc___1cFyh .pay {
	/* width: 12.15rem; */
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}
.inquiry{
    width: 6.2rem;
	height: .84rem;
	color: #fff;
	font-size: .28rem;
	border-radius: .1rem;
	background: #e11222;
	margin-left: 3rem;
}
.shengou_ul li{
    height: .7rem;
    line-height: .7rem;
    color: #fff
}
.price_1{
    color: #ffffff
}
.price{
    padding-left :1rem; 
    padding-right: 6rem
}
.price1{
    padding-left: 1rem;
    padding-right: 7rem
}
.price2{
    padding-left: 1rem;
    padding-right: 5.7rem
}
.price_3{
    color: #D61410;
    padding-left: .7rem
}
table{
    padding-left: 4rem;
    text-align: center;
}
td{
    margin: .2rem;
}
.up{
    margin: .5rem
}
.one{
    padding-left: .7rem
}
.tow{
    padding-left: .7rem
}
.three{
    padding-left: 1rem
}


</style>
