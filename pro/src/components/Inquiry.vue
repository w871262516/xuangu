<template>
    <div :class="isH?'none___3lAhv':'tc___1cFyh'">
        <div class="xunjia___3Dr6q">
            <div class="header___JfS43">
                <span>询 价</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
           <div class="shengou">
				<ul class="shengou_ul">
					<li>
						<div class="xuan">
							<span>
								标的股票:
								
							</span>
						</div>
						<div class="xuan_middle">
							<input type="text" placeholder="请输入股票" v-model="keyword" @click="xuan_text"/>
							<!-- <div class="item_list___1VakT" v-if="arr.length">
								<div v-for="(item,i) in arr" class="item_select___jzyPZ" data-flex="dir:left" :key="i">
									<p>{{item.stock_code}}</p>
									<span>{{item.stock_name}}</span>
									<img src="../assets/tianjia.png" alt="" srcset="" @click="addFavoriteStock(item,i)" >
								</div>
							</div>           -->
						</div>
						<span class="price">当前价:{{this.$store.state.now_stock_price}}</span>
					</li>
					<li>
						<div class="xuan">
							<span>执行金:</span>
						</div>
						<div class="xuan_middle one">
							<input type="text" placeholder="金额10万起步，5万整数倍" v-model="choMoney"/>          
						</div>
						<span class="price_1">万元</span>
					</li>
					<li>
						<div class="xuan">
							<span>选买周期:</span>
						</div>
						<ul class="shengou_li">
							<li :class="period==1?'cho-ed':'cho'" @click="period = 1">两周</li>
							<li :class="period==2?'cho-ed':'cho'" @click="period = 2">一个月</li>
							<li :class="period==3?'cho-ed':'cho'" @click="period = 3">两个月</li>
						</ul>
					</li>
					<li>
						<div class="xuan">
							<span>买入方式 :</span>
						</div>
						<div class="buynow">
							<span class="buy" @click="ceshi">市价买入</span>
						</div>
						
					</li>
				</ul>
				<button class="inquiry" @click='ensureBuy'>确定买入</button>
			</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios' 
export default {
    name: 'Inquiry',
    data(){
        return{
			// keyword:'',
			now_stock_price:'',//当前价
			arr:[],
			code:false,
			stock_code:'',//每一支股票代码
			// stock_name:'',
			stock_market_code:'',//市场股票代码
			period:1,
			choMoney:'',//执行金
			// stockcode:'',
			// stockname:'',
			cycle_id:"",//周期id
			server_ratio:'',//周期费率
			server:''
        }
	},
	methods:{
		close:function(){
			this.$store.state.isH = !this.$store.state.isH;
		},
		xuan_text(){
			if(this.$store.state.keyword==''){
				this.$message({
						message: '请选择您的自选股',
						type: 'warning'
						});
			}
		},
		ceshi(){
			// this.getCycleRatio()
		},
		getCycleRatio(){
			let _this=this;
			axios({
				methods:'get',
				url:'/api/api/v1/getCycleRatio',
				params:{
					stock_code:_this.$store.state.code,
					cycle:_this.$store.state.cycle
				},
				transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
				}],
			}).then(function(data){
				console.log(data)
				if(data.data.code==200){
					_this.$store.state.isH_h = !_this.$store.state.isH_h;
					_this.$store.state.isH = !_this.$store.state.isH;
					_this.choMoney=""	
				}else if(data.data.code==400){
					_this.$message({
						message: '当前股票不允许购买！',
						type: 'warning'
						});
						_this.choMoney="";
				}
				_this.server_ratio=data.data.data.server_ratio
				// _this.server=parseFloat(_this.server_ratio)
				// console.log(typeof _this.server_ratio)		
				_this.$store.state.server=parseInt(_this.server_ratio*(_this.$store.state.choMoney));

				// this.float0.money =  (nominal_amount*(this.preFloat/100));
				console.log(_this.$store.state.server)
			})
		},
		ensureBuy(){
			
			// if(this.stockname.length==''){
			// 	alert('请先输入标的股票')
			// 	return
			// }
			// this.applyData.nominal_amount = this.choMoney;
			
			// this.applyData.stock_name = this.stockInfo.stock_name;
					
			let _this=this
			_this.choMoney= parseFloat(this.choMoney)*10000
			_this.$store.state.choMoney =_this.choMoney//执行金
			_this.cycle_id = this.period;//周期ID
			_this.$store.state.cycle_id=this.period;
			if(this.$store.state.cycle_id==1){
					this.$store.state.cycle=14
					this.cycle_text='两周'

					console.log(this.$store.state.cycle)
					this.$store.state.cycle_text=this.cycle_text
					console.log(this.$store.state.cycle_text)
			}else if(this.$store.state.cycle_id==2){
				this.$store.state.cycle=30
				this.cycle_text='一个月'

				console.log(this.$store.state.cycle)
				this.$store.state.cycle_text=this.cycle_text
				console.log(this.cycle_text)
			}else{
				this.$store.state.cycle=60
				this.cycle_text='两个月'
				console.log(this.$store.state.cycle)

				this.$store.state.cycle_text=this.cycle_text
				console.log(this.cycle_text)
			}
			console.log(_this.$store.state.cycle_id)
			this.getCycleRatio()
		},
		
	},
	created(){

	},
	mounted(){

	},
	computed:{
		isH(){
			return this.$store.state.isH
		},
		keyword(){
			return this.$store.state.keyword
			console.log(this.$store.state.keyword)
		}
	},
	watch:{
		// keyword(val){
		// 	console.log('keyword',val)
		// 	if(val.length!=0){
		// 		this.search()
		// 	}else{
		// 		this.arr=[];

		// 	}
		// }
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
	left: 0;
	z-index: 200;
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
.tc___1cFyh .shengou {
	/* width: 12.15rem; */
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.shengou{
    padding: 14px 48px 80px 48px;
}
.shengou_ul li{
    display: flex;
    line-height: 1.5rem
}
.xuan span{
	font-size: .3rem;
	color: #fff;
	line-height: 1.5rem
}
.xuan_middle{
    line-height: 1.5rem;
}
.xuan_middle input{
    border: 1px solid #ccc;
    width: 4.5rem;
    border-radius:4px;
    margin-left: .26rem; 
    line-height: .5rem
}
.price{
    font-size: .2rem;
    color: #ea523b;
    margin-left: .26rem;
    line-height: 1.5rem;
}
.price_1{
    font-size: .22rem;
    margin-left: .26rem;
	color: #ea523b;
}
.shengou_li{
	/* display: flex;  */
	height: 1.5rem;
	align-items: center;
	margin-left: .1rem;
	text-align: center;
}
.shengou_li li{
	float: left;
	display: block;
    cursor: pointer;
    width: 1.5rem;
    color: #687284;
	height: .5rem;
	line-height: 0.5rem;
    /* border: 1px solid #687284; */
    text-align: center;
    margin-left: .14rem;
    margin-top: .38rem;
    font-size: 0.2rem;
}
.active{
    background: #FA3C10;
    color: #fff;
    border: none
}
.inquiry{
    width: 6.2rem;
	height: .84rem;
	color: #fff;
	font-size: .28rem;
	border-radius: .1rem;
	background: #e11222;
	margin-left: 2rem;
}
.buy{
    display: inline-block;
    width: 1.7rem;
    height: .32rem;
    background: #f7f7f7;
    color: #FA3C10;
    line-height: .32rem;
    text-align: center;
    font-size: .2rem
}
.buynow{
    line-height: 1.5rem;
    margin-left: .25rem
}
.one{
	margin-left: .3rem
}
.item_list___1VakT {
	width: 2.8rem;
	background: #3a4a50;
	position: absolute;
	/* z-index: 10; */
	margin-left: .2rem;
	border-radius: .1rem;
	height:5.5rem;
	overflow:hidden;
	margin-bottom:2rem;
}
 .item_list___1VakT .item_select___jzyPZ {
	height: .4rem;
	line-height: .4rem
}
.item_list___1VakT .item_select___jzyPZ p {
	width: 1rem;
	font-size: .2rem;
	margin-left: .1rem;
	color: #fff;
	margin-right: .2rem
}
.item_list___1VakT .item_select___jzyPZ span {
	display: block;
	width: 1rem;
	font-size: .2rem;
	margin-right: .2rem;
	color: #fff
}
.item_list___1VakT .item_select___jzyPZ img {
	width: .17rem;
	height: .17rem;
	margin-top: .1rem
}
.shengou_li .cho{
	display: block;
	border:1px solid #ffffff;
}
.shengou_li .cho-ed{
	display: block;
	background-color: #d61510;
    border: 1px solid #d61510;
}
</style>
