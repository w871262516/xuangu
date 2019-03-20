<template>
    <div class="content___2YO-g" data-flex="dir:left">
						<div class="content_left___2218p">
							<span class="content_header___3AadL">
								我的自选股
							</span>
							<div class="content_search___3ib4G" data-flex="dir:left">
								<img src="../assets/search.png" @click="search"/>
								<input type="text" name="" placeholder="请输入名称搜索" v-model="keyword" @click="huoqu"/>
							</div>
							<div class="item_list___1VakT" v-if="code">
								<div v-for="(item,i) in arr" :key="i" class="item_select___jzyPZ" data-flex="dir:left">
									<p>{{item.stock_market_code}}</p>
									<span>{{item.stock_name}}</span>
									
									<img src="../assets/tianjia.png" alt="" srcset="" @click="addFavoriteStock(item,i)">
								</div>
							</div>
							<ul class="content_nav___1jsbi" data-flex="dir:left">
								<li>股票</li>
								<li>涨跌</li>
								<li>最新</li>
								<li>操作</li>
							</ul>
							<div class="content_list___LD-2U">
								<div class="content_list_item___3mkqs" data-flex="dir:left cross:center" v-for="(item,i) in index" :key="i" @click="getStockMainQuotation(item,i)">
									<p>{{item.stock_code}}</p> 
									<span :class="item.rise>0?'item_increase___1eQQC':'item_increase1___3UnIB'">{{item.rise>0?'+':''}}{{item.rise}}</span>
									<b :class="item.rise>0?'item_new___3gauZ':'item_new22___3qNQr'">{{item.now_price}}</b>
									<img src="../assets/3a6495b7a2e693f7ec7f32c836437356.png" class="item_close___3KNb0" @click="delFavoriteStock(item,i)"/>
								</div>
							</div>
						</div>
						<div class="content_right___2zbRo">
							<div class="content_right_header___aK9VY" data-flex="dir:left">
								<ul data-flex="dir:left">
									<li :class="{'':isc,'radius___3Fz_L':!isc}" @click="l1">
										分时
									</li>
									<li class="" @click="l2" :class="{'radius___3Fz_L':isd,'':!isd}">
										日K
									</li>
									<li class="" @click="l3" :class="{'radius___3Fz_L':ise,'':!ise}">
										周K
									</li>
									<li class="" @click="l4" :class="{'radius___3Fz_L':isf,'':!isf}">
										月K
									</li>
								</ul>
								<button @click="inquiry">询价</button>
							</div>
							<div class="content_right_bottom___26UuE" data-flex="dir:left">
								<div class="kline___1wmPA">
									<Fenshi v-show="minutes"></Fenshi>
									<myChart v-show="day"></myChart>
									<week v-show="week"></week>
									<mounth v-show="mounth"></mounth>
								</div>
								<div class="data___2Xz7G">
									<div class="" :class="{'none___3JK5w':isa,'display___1_alZ':!isa}">
										<ul class="sale___d9bNN">
											<li data-flex="dir:left">
												<p>卖</p>
												<span>{{this.$store.state.ask1Price}}</span>
												<i>{{this.$store.state.ask1Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>卖</p>
												<span>{{this.$store.state.ask2Price}}</span>
												<i>{{this.$store.state.ask2Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>卖</p>
												<span>{{this.$store.state.ask3Price}}</span>
												<i>{{this.$store.state.ask3Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>卖</p>
												<span>{{this.$store.state.ask1Price}}</span>
												<i>{{this.$store.state.ask1Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>卖</p>
												<span>{{this.$store.state.ask2Price}}</span>
												<i>{{this.$store.state.ask2Volume}}</i>
											</li>
										</ul>
										<ul class="buy___30vsF">
											<li data-flex="dir:left">
												<p>买</p>
												<span>{{this.$store.state.bid1Price}}</span>
												<i>{{this.$store.state.bid1Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>买</p>
												<span>{{this.$store.state.bid2Price}}</span>
												<i>{{this.$store.state.bid2Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>买</p>
												<span>{{this.$store.state.bid3Price}}</span>
												<i>{{this.$store.state.bid3Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>买</p>
												<span>{{this.$store.state.bid1Price}}</span>
												<i>{{this.$store.state.bid1Volume}}</i>
											</li>
											<li data-flex="dir:left">
												<p>买</p>
												<span>{{this.$store.state.bid2Price}}</span>
												<i>{{this.$store.state.bid2Volume}}</i>
											</li>
										</ul>
									</div>
									<div class="" :class="{'display___1_alZ':isa,'none___3JK5w':!isa}">
										<div class="minute___30AFd">
											<div class="minute_header___2s4Gf" data-flex="dir:left box:mean">
												<p>时间</p>
												<p>最低价</p>
												<p>最高价</p>
											</div>
											<div class="minute_content___20y37" data-flex="dir:left box:mean">
												<p>14.08</p>
												<p>{{this.$store.state.lowPrice}}</p>
												<p>{{this.$store.state.highPrice}}
													<span style="color: green;"></span>
												</p>
											</div>
											<div class="minute_content___20y37" data-flex="dir:left box:mean">
												<p>14.08</p>
												<p>{{this.$store.state.lowPrice}}</p>
												<p>{{this.$store.state.highPrice}}
													<span style="color: green;"></span>
												</p>
											</div>
											<div class="minute_content___20y37" data-flex="dir:left box:mean">
												<p>14.08</p>
												<p>{{this.$store.state.lowPrice}}</p>
												<p>{{this.$store.state.highPrice}}
													<span style="color: green;"></span>
												</p>
											</div>
											<div class="minute_content___20y37" data-flex="dir:left box:mean">
												<p>14.08</p>
												<p>{{this.$store.state.lowPrice}}</p>
												<p>{{this.$store.state.highPrice}}
													<span style="color: green;"></span>
												</p>
											</div>
											<div class="minute_content___20y37" data-flex="dir:left box:mean">
												<p>14.08</p>
												<p>{{this.$store.state.lowPrice}}</p>
												<p>{{this.$store.state.highPrice}}
													<span style="color: green;"></span>
												</p>
											</div>
											<div class="minute_content___20y37" data-flex="dir:left box:mean">
												<p>14.08</p>
												<p>{{this.$store.state.lowPrice}}</p>
												<p>{{this.$store.state.highPrice}}
													<span style="color: green;"></span>
												</p>
											</div>
										</div>
									</div>
									<div class="tab___1xk6g" data-flex="dir:left">
										<button class="" @click="toggle()" :class="{'':isA,'check___WqjyD':!isA}">五档</button>
										<button class="" @click="toggle1()" :class="{'check___WqjyD':isA,'check':!isA}">明细</button>
                                        <!-- <button v-for="(item,index) in items" :class="{check___WqjyD:istrue==index}" @click="toogle(index)" :key="index">{{item.name}}</button> -->
									</div>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
import axios from 'axios'
import myChart from './myChart'
import Fenshi from './fenshi'
import week from './week'
import mounth from './mounth'
export default {
	name:'Content',
	components:{
		myChart,
		Fenshi,
		week,
		mounth,
	},
    data(){
        return{
			isA:false,
			isa:false,
			isc:false,
			isd:false,
			ise:false,
			isf:false,
			keyword:'',
			stock_code:'',
			stock_name:'',
			stock_market_code:'',
			rise:'',
			now_price:'',
			arr:[],
			code:true,
			code1:true,
			index:[],
			Token_id:"",
			minutes:true,
			day:false,
			week:false,
			mounth:false,
        };
    },
    methods: {
		toggle:function(){
			this.isA = false;
			this.isa = false;

		},
		toggle1:function(){
			this.isA = true;
			this.isa = true;
		},
		inquiry:function(){
			let _this=this;
			// var authorization= sessionStorage.getItem('refresh_jwt_token');
			// console.log(_this.$store.state.authorization)
			if(_this.$store.state.authorization==""){
				_this.$message({
						message: '请先登录！',
						 type: 'warning'
					});
				_this.$store.state.isC=false;
				console.log(_this.$store.state.isC)
			}else if(_this.$store.state.authorization==_this.$store.state.authorization){
				_this.$store.state.isH = !_this.$store.state.isH
				_this.getStockNowPrice()
			}
		},
		//获取最新价格
		getStockNowPrice(){
			let _this=this;
			_this.$store.state.symbol = _this.$store.state.symbol.toUpperCase()
			axios({
				method:'get',
				url:'/api/api/v1/getStockNowPrice',
				params:{
					stock_code:_this.$store.state.stock_marketcode,
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
				_this.$store.state.now_stock_price=data.data.data.now_stock_price
			})
		},
			l1:function(){
			this.isc =false;
			this.isd =false;
			this.ise =false;
			this.isf =false;
			// console.log(this.isc)
			// this.$store.state.isfenshi=false
			// this.$store.state.ischart=false
			// this.$store.state.isweek=false

			this.minutes = true
			this.day = false
			this.week=false
			this.mounth=false
		},
		l2:function(){
			this.isd =true;
			this.isc =true;
			this.ise =false;
			this.isf =false;
			// console.log(this.isc)
			// this.$store.state.ischart=true
			// this.$store.state.isfenshi=true
			// this.$store.state.isweek=false
			// console.log(this.$store.state.ischart)

			this.minutes = false
			this.day = true
			this.week=false
			this.mounth=false
		},
		l3:function(){
			this.ise = true;//3
			this.isc=true;//1
			this.isd =false;//2
			this.isf =false;//4
			// this.isweek=true;
			// this.isfenshi=true
			// this.ischart=false
			// console.log(this.isc)
			this.minutes = false
			this.day = false
			this.week=true
			this.mounth=false
		},
		l4:function(){
			this.isf = true;
			this.isc=true;
			this.isd =false;
			this.ise =false;
			// console.log(this.isc)
			this.minutes = false
			this.day = false
			this.week=false
			this.mounth=true
			
		},
		//搜索股票
		search(){
			let _this = this;
			if(_this.keyword.length==0){
				// alert('请输入正确的股票代码')
				_this.$message({
						message: '请输入正确的股票代码',
						 type: 'warning'
					});
			}			
			axios({
				method:"post",
				url:"/api/api/v1/search_stock",
				data:{
					keyword:_this.keyword
				},
				transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
				}],
			}).then(function(data){
				if(data.data.code==200){
							console.log(data)
					_this.arr=data.data.data
				}	
			})
		},
		//点击获取股票盘口信息
		getStockMainQuotation(item,i){
			let _this=this;
			_this.$store.state.code=item.stock_code //每一支股票的代码
			_this.$store.state.stock_marketcode=item.stock_market_code //每一支股票的市场代码
			
			// console.log(typeof item.rise)
			axios({
				method:"get",
				url:'/api/api/v1/getStockMainQuotation',
				params:{
					stock_code:item.stock_market_code,
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
					_this.$store.state.inVol=data.data.data.inVol;//外盘
					_this.$store.state.outVol=data.data.data.outVol;//内盘
					_this.$store.state.symbol=data.data.data.symbol;//代码
					_this.$store.state.name=data.data.data.name;//每一支股票的名称
					_this.$store.state.change=data.data.data.change;//涨跌
					_this.$store.state.changeRate=data.data.data.changeRate;//涨跌幅
					_this.$store.state.volume=data.data.data.volume;//成交量
					_this.$store.state.highPrice=data.data.data.highPrice;//最高价
					_this.$store.state.lowPrice=data.data.data.lowPrice;//最低价
					_this.$store.state.lastPrice=data.data.data.lastPrice;//最新价
					_this.$store.state.pClose=data.data.data.pClose;//昨收价
					_this.$store.state.turnover=data.data.data.turnover;//成交金额
					_this.$store.state.openPrice=data.data.data.openPrice;//开盘价
					_this.$store.state.pe=data.data.data.pe;//市盈率
					_this.$store.state.pb=data.data.data.pb;//市净率
					_this.$store.state.keyword=data.data.data.name + data.data.data.symbol;
					_this.$store.state.bid1Price=data.data.data.bid1Price.toFixed(2);//买1价	
					_this.$store.state.pClose1=(data.data.data.pClose*1.1).toFixed(2)//涨停
					_this.$store.state.pClose2=(data.data.data.pClose*0.9).toFixed(2)//跌停
					

					// console.log(_this.$store.state.pClose2)
					_this.$store.state.bid2Price=data.data.data.bid2Price.toFixed(2);
					_this.$store.state.bid3Price=data.data.data.bid3Price.toFixed(2);
					_this.$store.state.ask1Price=data.data.data.ask1Price.toFixed(2);//卖1价
					_this.$store.state.ask2Price=data.data.data.ask2Price.toFixed(2);					
					_this.$store.state.ask3Price=data.data.data.ask3Price.toFixed(2);
					_this.$store.state.ask1Volume=data.data.data.ask1Volume.toFixed(2);//卖1量
					_this.$store.state.ask2Volume=data.data.data.ask2Volume.toFixed(2);
					_this.$store.state.ask3Volume=data.data.data.ask3Volume.toFixed(2);
					_this.$store.state.bid1Volume=data.data.data.bid1Volume.toFixed(2);//买1量
					_this.$store.state.bid2Volume=data.data.data.bid2Volume.toFixed(2);
					_this.$store.state.bid3Volume=data.data.data.bid3Volume.toFixed(2);

				}
			})
		},
		//添加自选股票
		addFavoriteStock(item,arr){
			let _this = this;
			// var authorization= sessionStorage.getItem('refresh_jwt_token');
			// console.log(_this.$store.state.authorization)
			axios({
				method:"post",
				url:'/api/api/v1/addFavoriteStock',
				data:{
					stock_code:item.stock_code,
					stock_name:item.stock_name,
					stock_market_code:item.stock_market_code
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
				if(data.data.code==200){	
					// alert('添加自选股成功')
					_this.$message({
						message: '添加自选股成功',
						type: 'success'
						});
					_this.index.push({
						stock_code:item.stock_code,
						rise:item.rise,
						now_price:item.now_price,
					})	

					_this.myFavoriteStock()
				}else if(data.data.code==400){
					if(_this.$store.state.authorization==""){
						// alert('认证失败，请重新登录')
						_this.$message.error('认证失败，请重新登录');
					}else{
						// alert('您已经添加过该股票')
						_this.$message({
							message: '您已经添加过该股票',
							type: 'warning'
							});
							// _this._this.item.rise=Number(_this.item.rise)
							// console.log(typeof _this.rise)
					}
					
				}
			})
		},
		huoqu(){
			let _this=this
			if(_this.$store.state.authorization==""){
				_this.$store.state.isC=false;
				console.log(_this.$store.state.isC)
			}else if(_this.$store.state.authorization==_this.$store.state.authorization){
				this.myFavoriteStock();

			}
			
		},
		//获取的自选股票
		myFavoriteStock(){
			let _this = this;
			// var authorization= sessionStorage.getItem('refresh_jwt_token');
			// console.log(_this.$store.state.authorization)
			axios({
				method:'post',
				url:'/api/api/v1/myFavoriteStock',
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
				console.log('获取的自选股票',data)
				if(data.data.code==200){
					_this.index=data.data.data
					data.data.data.forEach(item =>{
						item.rise = parseFloat(item.rise)//每一支股票的跌涨幅度
						// _this.index.push(item)
					})
					console.log(typeof _this.rise)
					// _this.now_price=data.data.data.now_price;
				}else if(data.data.code==400){
					
				}			
				
			})
		},	
		//删除自选股票
		delFavoriteStock(item,index){
			let _this = this;
			console.log(item);
			
			// var authorization= sessionStorage.getItem('refresh_jwt_token');
			axios({
				method:"post",
				url:'/api/api/v1/delFavoriteStock',
				data:{
					stock_code:item.stock_code,
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
				if(data.data.code==200){
					// alert('删除成功')
					_this.$message({
						message: '删除成功',
						type: 'success'
						});
					_this.index.splice(index,1)
				}else if(data.data.code==400){
					// alert('删除失败')
					_this.$message.error('删除失败');
					// alert(i)
				}
			})
		}
	},
	created(){
		let _this=this;
		if(_this.$store.state.authorization==_this.$store.state.authorization){
			_this.myFavoriteStock();
		}
		this.$store.state.isfenshi = true
	},
	computed:{
		token(){
			return this.$store.state.authorization
		}

	},
	watch:{
		keyword(val){
			// console.log('keyword',val)
			if(val.length!=0){
				this.search()
				this.code=true;
			}else if(val.length==0){
				// this.arr=[];
				this.code=false;
				console.log(this.code)
				// this.myFavoriteStock()
			}
		},
		token(val){
			// console.log('token',val)
			this.myFavoriteStock();
		}

	},
	mounted(){
		let _this=this;
		_this.myFavoriteStock();
		// if(_this.keyword.length==0){
		// 	_this.code=false
		// 	console.log(_this.code)
		// }else{
		// 	_this.code1=true
		// 	console.log(_this.code1)
		// }
	}
}
</script>
<style scoped>
@import '../../static/flex.css';



.content___2YO-g {
	margin-bottom: .15rem
}

.content___2YO-g .content_left___2218p {
	width: 3.06rem;
	height: 7.08rem;
	background: rgba(0, 0, 0, .1);
	margin-right: .14rem;
	border-radius: .1rem;
	overflow: hidden;
	position: relative
}

.content___2YO-g .content_left___2218p .content_header___3AadL {
	display: block;
	height: .48rem;
	color: #fff;
	font-size: .18rem;
	line-height: .48rem;
	padding-left: .3rem;
	border-bottom: .01rem solid #464b4d
}

.content___2YO-g .content_left___2218p .content_search___3ib4G {
	width: 2.8rem;
	height: .35rem;
	margin: .14rem 0 .14rem .05rem;
	background: rgba(0, 0, 0, .1);
	border-radius: .1rem
}

.content___2YO-g .content_left___2218p .content_search___3ib4G img {
	width: .15rem;
	height: .14rem;
	margin-right: .2rem;
	margin-left: .2rem;
	margin-top: .12rem
}

.content___2YO-g .content_left___2218p .content_search___3ib4G input {
	height: .35rem;
	width: 3.15rem;
	color: #fff;
	font-size: .16rem;
	background: rgba(0, 0, 0, .1);
	background-color: transparent
}

.content___2YO-g .content_left___2218p .content_search___3ib4G input::-webkit-input-placeholder {
	color: #707375;
	font-size: .16rem
}

.content___2YO-g .content_left___2218p .content_search___3ib4G input::-moz-input-placeholder {
	color: #707375;
	font-size: .16rem
}

.content___2YO-g .content_left___2218p .content_search___3ib4G input:-ms-input-placeholder {
	color: #707375;
	font-size: .16rem
}

.content___2YO-g .content_left___2218p .item_list___1VakT {
	width: 2.8rem;
	background: #3a4a50;
	position: absolute;
	z-index: 10;
	margin-left: .1rem;
	border-radius: .1rem
}

.content___2YO-g .content_left___2218p .item_list___1VakT .item_select___jzyPZ {
	height: .4rem;
	line-height: .4rem
}

.content___2YO-g .content_left___2218p .item_list___1VakT .item_select___jzyPZ p {
	width: 1rem;
	font-size: .2rem;
	margin-left: .1rem;
	color: #fff;
	margin-right: .2rem
}

.content___2YO-g .content_left___2218p .item_list___1VakT .item_select___jzyPZ span {
	display: block;
	width: 1rem;
	font-size: .2rem;
	margin-right: .2rem;
	color: #fff
}

.content___2YO-g .content_left___2218p .item_list___1VakT .item_select___jzyPZ img {
	width: .17rem;
	height: .17rem;
	margin-top: .1rem
}

.content___2YO-g .content_left___2218p .content_nav___1jsbi {
	height: .3rem;
	color: #a3a4a5;
	background: rgba(0, 0, 0, .1);
	margin-bottom: .13rem
}

.content___2YO-g .content_left___2218p .content_nav___1jsbi li {
	font-size: .16rem;
	margin: 0 .14rem;
	line-height: .3rem;
	background-color: transparent
}

.content___2YO-g .content_left___2218p .content_list___LD-2U {
	width: 100%;
	height: 6rem;
	overflow: hidden
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs {
	height: .54rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs p {
	width: 1rem;
	color: #f4f5f5;
	font-size: .18rem;
	text-align: center;
	line-height: .2rem;
	margin-right: .1rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs .item_increase___1eQQC {
	display: block;
	width: .72rem;
	height: .22rem;
	background: #e21414;
	color: #f4f5f5;
	font-size: .1rem;
	line-height: .22rem;
	padding: 0;
	text-align: center;
	border-radius: .05rem;
	margin-right: .2rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs .item_new___3gauZ {
	display: block;
	width: .72rem;
	color: #e11442;
	font-size: .12rem;
	margin-right: .3rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs .item_new22___3qNQr {
	display: block;
	width: .72rem;
	color: #0ac445;
	font-size: .12rem;
	margin-right: .3rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs .item_increase1___3UnIB {
	display: block;
	width: .72rem;
	height: .22rem;
	background: #0ac445;
	color: #f4f5f5;
	font-size: .1rem;
	line-height: .22rem;
	padding: 0;
	text-align: center;
	border-radius: .05rem;
	margin-right: .2rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs .item_new1___3h5_8 {
	display: block;
	width: .72rem;
	color: #e11442;
	font-size: .12rem;
	margin-right: .3rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs button {
	width: .51rem;
	height: .22rem;
	background: #8e9394;
	color: #fff;
	font-size: .16rem;
	border-radius: .05rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item___3mkqs .item_close___3KNb0 {
	width: .25rem;
	height: .25rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ {
	height: .54rem;
	background: hsla(0, 0%, 100%, .15)
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ p {
	width: 1rem;
	color: #f4f5f5;
	font-size: .18rem;
	text-align: center;
	line-height: .2rem;
	margin-right: .1rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ .item_increase___1eQQC {
	display: block;
	width: .72rem;
	height: .22rem;
	background: #e21414;
	color: #f4f5f5;
	font-size: .1rem;
	line-height: .22rem;
	padding: 0;
	text-align: center;
	border-radius: .05rem;
	margin-right: .2rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ .item_new___3gauZ {
	display: block;
	width: .72rem;
	color: #e11442;
	font-size: .12rem;
	margin-right: .3rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ .item_new22___3qNQr {
	display: block;
	width: .72rem;
	color: #0ac445;
	font-size: .12rem;
	margin-right: .3rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ .item_increase1___3UnIB {
	display: block;
	width: .72rem;
	height: .22rem;
	background: #0ac445;
	color: #f4f5f5;
	font-size: .1rem;
	line-height: .22rem;
	padding: 0;
	text-align: center;
	border-radius: .05rem;
	margin-right: .2rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ .item_new1___3h5_8 {
	display: block;
	color: #e11442;
	font-size: .12rem;
	margin-right: .3rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ button {
	width: .51rem;
	height: .22rem;
	background: #8e9394;
	color: #fff;
	font-size: .16rem;
	border-radius: .05rem
}

.content___2YO-g .content_left___2218p .content_list___LD-2U .content_list_item1___wWdZZ .item_close___3KNb0 {
	width: .25rem;
	height: .25rem
}

.content___2YO-g .content_left___2218p .content_more___2z5Fo {
	width: 100%;
	margin-top: .05rem
}

.content___2YO-g .content_left___2218p .content_more___2z5Fo p {
	text-align: right;
	color: #1a6fb3;
	font-size: .15rem;
	padding-right: .13rem
}

.content___2YO-g .content_right___2zbRo {
	width: 12.78rem;
	height: 7.06rem;
	background: rgba(0, 0, 0, .1);
	border-radius: .1rem
}

.content___2YO-g .content_right___2zbRo .content_right_header___aK9VY ul {
	width: 8.16rem;
	height: .86rem;
	margin-left: .26rem;
	margin-top: .05rem
}

.content___2YO-g .content_right___2zbRo .content_right_header___aK9VY ul li {
	width: 1.24rem;
	height: .36rem;
	font-size: .17rem;
	color: #f9dedf;
	text-align: center;
	line-height: .36rem;
	margin-top: .25rem;
	margin-right: .26rem
}

.content___2YO-g .content_right___2zbRo .content_right_header___aK9VY ul .radius___3Fz_L {
	border-radius: .2rem;
	background: #e1121f
}

.content___2YO-g .content_right___2zbRo .content_right_header___aK9VY button {
	width: 1.68rem;
	height: .56rem;
	margin-top: .13rem;
	background: #e1131e;
	font-size: .22rem;
	color: #fff
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .kline___1wmPA {
	width: 9.8rem;
	height: 5.58rem;
	background: rgba(0, 0, 0, .1);
	margin-left: .32rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .sale___d9bNN {
	width: 2.2rem;
	height: 1.94rem;
	border-bottom: .02rem solid #293135;
	margin-top: .3rem;
	margin-left: .3rem;
	padding-bottom: .2rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .sale___d9bNN li {
	margin-bottom: .1rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .sale___d9bNN li p {
	font-size: .2rem;
	color: #848687;
	margin-right: .3rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .sale___d9bNN li span {
	color: #c31229;
	font-size: .2rem;
	margin-right: .48rem;
	margin-top: .05rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .sale___d9bNN li i {
	color: #919395;
	font-size: .2rem;
	margin-top: .05rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .buy___30vsF {
	width: 2.2rem;
	height: 1.94rem;
	margin-top: .32rem;
	margin-left: .3rem;
	padding-bottom: .35rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .buy___30vsF li {
	margin-bottom: .1rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .buy___30vsF li p {
	font-size: .2rem;
	color: #848687;
	margin-right: .3rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .buy___30vsF li span {
	color: #c31229;
	font-size: .2rem;
	margin-right: .48rem;
	margin-top: .05rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .buy___30vsF li i {
	color: #919395;
	font-size: .2rem;
	margin-top: .05rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .minute___30AFd {
	width: 2.5rem;
	margin-left: .1rem;
	padding-bottom: .2rem;
	height: 4.8rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .minute___30AFd .minute_header___2s4Gf {
	font-size: .2rem;
	color: #b2b3b4
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .minute___30AFd .minute_header___2s4Gf p {
	text-align: center;
	margin-bottom: .2rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .minute___30AFd .minute_content___20y37 {
	font-size: .2rem;
	color: #b2b3b4
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .data___2Xz7G .minute___30AFd .minute_content___20y37 p {
	text-align: center;
	margin-bottom: .2rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .tab___1xk6g {
	margin-left: .4rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .tab___1xk6g button {
	width: .83rem;
	height: .33rem;
	border-radius: .3rem;
	background: #111b23;
	margin-right: .2rem;
	color: #7a7c7f;
	font-size: .2rem
}

.content___2YO-g .content_right___2zbRo .content_right_bottom___26UuE .tab___1xk6g .check___WqjyD {
	color: #fff;
	background: #e11225
}
.display___1_alZ {
	display: block
}

.none___3JK5w {
	display: none
}
.up{
  color:#d61510;
}
.down{
  color:#47963C;
}
</style>

