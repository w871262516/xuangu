<template>
    <div>
        <!-- <div class="inquiry___1TmG0" data-flex="dir:left"> -->
            <!-- <button class="" style="border-top-left-radius: 0.1rem; border-bottom-left-radius: 0.1rem;" @click="toggle" :class="{'':isa,'check___36jl7':!isa}">
                询价
            </button>
            <button class="" style="border-top-right-radius: 0.1rem; border-bottom-right-radius: 0.1rem;" @click="toggle1" :class="{'check___36jl7':isa,'':!isa}">
                持仓
            </button> -->
            <!-- <button v-for="(item,index) in items" :class="{check___36jl7:istrue==index}" @click="toogle(index)" :key="index">{{item.name}}</button> -->
        <!-- </div>
        <div class="detail___2I5XD two">
            <div class="" :class="{'tc___2uqYe':isA,'none___2l8QI':!isA}">
                <p>持仓</p>
                <p>未成交</p>
                <p>已结算</p>
                <p>已取消</p>
            </div>
            <div class="" :class="{'none___2l8QI':isA,'display___1JAVE':!isA}">
                <div class="inquiry_header___1i6Dn" data-flex="dir:left box:mean">
                    <p>股票代码</p>
                    <p>股票名称</p>
                    <p>询价结果</p>
                    <p>看涨周期</p>
                    <p>名义本金</p>
                    <p>报价时间</p>
                    <p>失效时间</p>
                    <p class="last___3O3mr">操作</p>
                </div>
				<div class="inquiry_content___2-CAW" data-flex="dir:left box:mean">
					<p>sz000002</p>
					<p>万  科Ａ</p>
					<p>14.12%</p>
					<p>看涨两周</p>
					<p>￥100万</p>
					<p>2019-03-06</p>
					<p>2019-03-06</p>
					<p class="last___3O3mr">
						<button class="btn4___T-oQs">申购</button>
					</p>
				</div>
            </div>
            <div class="" :class="{'display___1JAVE':isA,'none___2l8QI':!isA}">
                <div class="position_header___XgE2Y " data-flex="dir:left box:mean">
                    <p>股票代码</p>
                    <p>股票名称</p>
                    <p>订单状态</p>
                    <p>下单日期</p>
                    <p>到期日期</p>
                    <p>认购权利金</p>
                    <p>名义本金</p>
                    <p>权利金比例</p>
                    <p>行权收益</p>
                    <p>买入价格</p>
                    <p>市场价格</p>
                    <p>权利期</p>
                    <p class="last___3O3mr">操作</p>
                </div>
            </div>
			<div>
				<div class="shengou___3hlbA">

				</div>
			</div> -->
        <!-- </div>  -->
		
		<router-link to="/Shengou" tag="span">申购区</router-link>
        <router-link to="/Chicang" tag="span">持仓区</router-link>
        <router-link to="/Jiesuan" tag="span">结算区</router-link>
		<router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Bottom',
    data(){
        return{
            // istrue: 0,
            // items: [
            //     {name:'询价'},
            //     {name:'持仓'}
			// ]
			isa:false,
			isA:false
        }
    },
    methods: {
        toggle: function(){
            // console.log("aaa")
			// this.istrue = index;
			this.isa=false;
			this.isA=false;
		},
		toggle1:function(){
			this.isa=true;
			this.isA=true;
		}
    }
}
</script>
<style scoped>
@import '../../static/flex.css';

.index___2pv9Y {
 	margin-bottom: .14rem;
 	height: 2.25rem;
    background: rgba(0, 0, 0, .1);
 	border-radius: .2rem;
     display: flex;
}
.inquiry___1TmG0 {
	height: .58rem;
	margin-bottom: .15rem
}

.inquiry___1TmG0 button {
	display: block;
	width: 1.5rem;
	height: .58rem;
	background: rgba(0, 0, 0, .1);
	font-size: .25rem;
	color: #949596
}

.inquiry___1TmG0 .check___36jl7 {
	background: #e11225;
	color: #fff
}
.detail___2I5XD {
	width: 16rem;
	min-height: 3.43rem;
	background: rgba(0, 0, 0, .1);
	border-radius: .1rem;
	padding-bottom: .5rem;
	position: relative
}

.detail___2I5XD .tc___2uqYe {
	width: 3rem;
	background: #fff;
	position: absolute;
	top: -.15rem;
	left: 0;
	z-index: 100;
	border-radius: .1rem
}

.detail___2I5XD .tc___2uqYe p {
	font-size: .24rem;
	color: #a1a2a5;
	height: .6rem;
	line-height: .6rem;
	text-align: center;
	border-bottom: .01rem solid rgba(0, 0, 0, .5)
}

.detail___2I5XD .tc___2uqYe p:hover {
	background: rgba(0, 0, 0, .8)
}

.detail___2I5XD .inquiry_header___1i6Dn {
	width: 100%;
	height: .79rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .5);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___2I5XD .inquiry_header___1i6Dn p {
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .79rem
}

.detail___2I5XD .inquiry_header___1i6Dn .last___3O3mr {
	border-right: none
}

.detail___2I5XD .inquiry_content___2-CAW {
	width: 100%;
	height: .5rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .1);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___2I5XD .inquiry_content___2-CAW p {
	height: .5rem;
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .5rem
}

.detail___2I5XD .inquiry_content___2-CAW .last___3O3mr {
	border-right: none
}

.detail___2I5XD .position_header___XgE2Y {
	width: 100%;
	height: .79rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .5);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___2I5XD .position_header___XgE2Y p {
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .79rem
}

.detail___2I5XD .position_header___XgE2Y .last___3O3mr {
	border-right: none
}

.detail___2I5XD .position_content___Dgr9L {
	width: 100%;
	height: .6rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .1);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___2I5XD .position_content___Dgr9L .color___1qIqd {
	color: #df0e3f
}

.detail___2I5XD .position_content___Dgr9L .color1___2eEfZ {
	color: #0edf58
}

.detail___2I5XD .position_content___Dgr9L .color2___1iNa8 {
	color: #df0e3f
}

.detail___2I5XD .position_content___Dgr9L p {
	min-height: .5rem;
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .3rem;
	word-break: break-all;
	word-wrap: break-word
}

.detail___2I5XD .position_content___Dgr9L .last___3O3mr {
	border-right: none
}

.detail___2I5XD .position_content___Dgr9L .xing___3Z7VI {
	width: 90%;
	margin-top: 5%;
	font-size: .13rem;
	background-color: red;
	color: #fff;
	line-height: .3rem
}
.display___1JAVE {
	display: block
}

.none___2l8QI {
	display: none
}
</style>


