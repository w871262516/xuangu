<template slot-scope>

<div data-flex="main:center cross:top">
    <div class="bg___1tyEb data-reactroot">
        <div class="wrap___1OEBb">
			<!-- 顶部入口 -->
            <Top></Top>
			<!-- 证券 -->
			<Middle></Middle>
			<!-- 选股/K线图 -->
			<Content></Content>
			<!-- 底部 -->
			 <div class="shengou">				
				<div class="shengou_header">
					<!-- <p @click="shengou" :class="{'':isa,'shengou_tab':!isa}">申购</p> -->
					<p @click="chicang" :class="{'':isb,'shengou_tab':!isb}">持仓</p>
					<p @click="jiesuan" :class="{'shengou_tab':isc,'':!isc}">结算</p>
				</div>
				<div class="shengou_content">
					<Chicang></Chicang>
					<Jiesuan></Jiesuan>
				</div>
			</div>

			<!-- 我的 -->
			<Mine></Mine>
			<!-- 资金明细 -->
			<ZjMx></ZjMx>
			<!-- 银行卡 -->
			<BankCard></BankCard>
			<!-- 修改/重置密码 -->
			<ChangePassword></ChangePassword>
			<!-- 修改/重置支付密码 -->
			<ChangePay></ChangePay>
			<!-- 在线充值 -->
			<zxcz></zxcz>
			<!-- 在线提现 -->
			<zxtx></zxtx>
			<!-- 询价 -->
			<Inquiry></Inquiry>
			<!-- 登陆 -->
			<Login></Login>
			<!-- 支付 -->
			<Pay></Pay>	
			<!-- 绑定银行卡 -->
			<Bank></Bank>
			<Addbank></Addbank>
			<pop></pop>
        </div>
    </div>
</div>
</template>

<script>
import Top from './Top';
import Middle from './Middle';
import Content from './Content';
import Bottom from './Bottom';
import ZjMx from './ZjMx';
import Mine from './Mine';
import BankCard from './BankCard';
import ChangePassword from './ChangePassword';
import ChangePay from './ChangePay';
import zxcz from './zxcz';
import zxtx from './zxtx';
import Inquiry from './Inquiry';
import Login from './Login';
import Chicang from './Chicang';
import Jiesuan from './Jiesuan';
import pop from './pop'
import Pay from './Pay';
import Bank from './Bank';
import Addbank from './Addbank'
    export default {
		name: 'Home',
		components: {
			Top,
			Middle,
			Content,
			Bottom,
			Mine,
			ZjMx,
			BankCard,
			ChangePassword,
			ChangePay,
			zxcz,
			zxtx,
			Inquiry,
			Login,
			Chicang,
			Jiesuan,
			Pay,
			Bank,
			pop,
			Addbank
		},
        data(){
            return{
				isa:false,
				isb:false,
				isc:false,
				stock_code:'',
			}
		},
		methods:{
			chicang(){
				this.str=this.str+"123";
				this.isb=false,
				this.isc=false
				// console.log(this.isb)
				this.$store.state.isChicang = true
				// this.$store.state.isShengou = false
				this.$store.state.isJiesuan = true
			},

			jiesuan(){
				this.isc=true,
				this.isb=true,
				// this.isa=true
				// console.log(this.isc)
				this.$store.state.isJiesuan = false
				this.$store.state.isChicang = false
				// this.$store.state.isShengou = false
			}
		},
		created(){
			if(this.$route.query.active){
				this.type = this.$route.query.active
			}
		}
    }
</script>

<style scoped>
.shengou{
	display: flex;
	flex-direction: column;
	height: 100%
}
.shengou_header{
	display: flex;
	line-height: 50px;
	text-align: center
}
.shengou_header p{
	width: 100px;
	font-size: .2rem;
	color:#fff
}
.shengou_content{
	display: flex;
	height: 100%
}
.shengou_tab{
	border-top: 2px solid #fa3c10;
}
.block___z4CD6 {
	display: block
}
.block___3XF3G {
	display: block
}

.none___2_Gg9 {
	display: none
}

.tc___3tvwE {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
}

.tc___3tvwE .recharge___1i5Oz {
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

.tc___3tvwE .recharge___1i5Oz .header___3bzvS {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___3tvwE .recharge___1i5Oz .header___3bzvS span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___3tvwE .recharge___1i5Oz .header___3bzvS img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj {
	width: 12.15rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	/* background: url(../img/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%; */
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m {
	margin-top: .54rem;
	margin-left: 2.4rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m span {
	display: block;
	font-size: .25rem;
	color: #fff;
	height: .69rem;
	line-height: .69rem;
	width: 1.7rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m select {
	width: 4.7rem;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border-radius: .1rem;
	color: #fff;
	padding-left: .38rem;
	border: .01rem solid #fff
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m input {
	width: 4.35rem;
	height: .69rem;
	border-radius: .1rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border: .01rem solid #fff;
	color: #fff;
	padding-left: .38rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m input::-webkit-input-placeholder {
	color: #fff
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m input::-moz-input-placeholder {
	color: #fff
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .recharge_bank___3zg7m input:-ms-input-placeholder {
	color: #fff
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .agreement___2atYm {
	height: .85rem;
	line-height: .85rem;
	font-size: .2rem;
	color: #fff;
	margin-left: 2.38rem;
	margin-bottom: .2rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .agreement___2atYm img {
	width: .24rem;
	height: .24rem;
	display: block;
	margin-top: .28rem;
	margin-right: .12rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .agreement___2atYm p span {
	color: #f82324
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .btn___1fnQX {
	width: 5rem;
	height: .8rem;
	font-size: .38rem;
	color: #fff;
	border-radius: .65rem;
	background-color: #e63f3c;
	margin: auto;
	margin-top: .4rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V {
	width: 100%;
	background: #161616
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz {
	width: 100%;
	height: 1.7rem;
	border-top: .01rem solid hsla(0, 0%, 100%, .5)
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz .left___9RF5y {
	margin-left: .3rem;
	width: 80%;
	height: 100%
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz .left___9RF5y img {
	width: .99rem;
	height: .99rem;
	margin-right: .3rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz .left___9RF5y .bankname___2JuDv .name___1t1FX {
	font-size: .42rem;
	color: #fff;
	margin-bottom: .15rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz .left___9RF5y .bankname___2JuDv .num___10QYU {
	font-size: .3rem;
	color: hsla(0, 0%, 100%, .5)
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz .blue___2u6WN {
	width: 15%;
	height: 100%;
	color: #1492cd;
	font-size: .4rem
}

.tc___3tvwE .recharge___1i5Oz .content___3GqIj .list___1ox_V .one___2esWz .red___3gLhQ {
	width: 10%;
	height: 100%;
	color: red;
	margin-right: .3rem;
	font-size: .4rem
}

.none___1E9G- {
	display: none
}

.changebank___1zmXL {
	width: 10.8rem;
	height: 100%
}

.changebank___1zmXL .footer___1vEJR {
	width: 100%;
	margin-top: .2rem
}

.changebank___1zmXL .footer___1vEJR .list1___1v5n5 {
	width: 100%;
	height: 2rem;
	border-bottom: .01rem solid #ccc
}

.changebank___1zmXL .footer___1vEJR .list1___1v5n5 img {
	width: 2rem;
	height: .8rem;
	margin-left: .3rem;
	margin-right: .3rem
}

.changebank___1zmXL .footer___1vEJR .list1___1v5n5 .changename___2jF9s {
	width: 7rem
}

.changebank___1zmXL .footer___1vEJR .list1___1v5n5 .changename___2jF9s .name___1t1FX {
	font-size: .42rem;
	color: #fff;
	line-height: .5rem;
	margin-bottom: .2rem
}

.changebank___1zmXL .footer___1vEJR .list1___1v5n5 .changename___2jF9s .zhushi___3FZxF {
	font-size: .36rem;
	color: #ccc
}

.changebank___1zmXL .footer___1vEJR .list1___1v5n5 .next___s22bJ {
	width: .5rem;
	height: .6rem
}



.block___1f6o1 {
	display: block
}

.none___3lAhv {
	display: none
}



.block___1Ytp1 {
	display: block
}

.none___2dBoU {
	display: none
}

.fenshi___26A0_,
.left___p7130 {
	width: 100%;
	height: 100%
}

.fenshi___2Ex42,
.left___WUdmz {
	width: 100%;
	height: 100%
}

.bg___1tyEb {
	width: 100%;
	height: 100%;
	background: url(../assets/1624f9e5de9316a3fc0c12fef9927d12.png);
}

.wrap___1OEBb {
	width: 16rem;
	margin: 0 auto;
	padding-bottom: .5rem
}





.inquiry___2i9do {
	height: .58rem;
	margin-bottom: .15rem
}

.inquiry___2i9do button {
	display: block;
	width: .98rem;
	height: .58rem;
	background: rgba(0, 0, 0, .1);
	font-size: .2rem;
	color: #949596
}

.inquiry___2i9do .check___WqjyD {
	background: #e11225;
	color: #fff
}

.detail___3lHNg {
	width: 16rem;
	min-height: 3.43rem;
	background: rgba(0, 0, 0, .1);
	border-radius: .1rem
}

.detail___3lHNg .inquiry_header___39MwG {
	width: 100%;
	height: .79rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .5);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___3lHNg .inquiry_header___39MwG p {
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .79rem
}

.detail___3lHNg .inquiry_header___39MwG .last___11CGz {
	border-right: none
}

.detail___3lHNg .inquiry_content___3YYXE {
	width: 100%;
	height: .5rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .1);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___3lHNg .inquiry_content___3YYXE p {
	height: .5rem;
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .5rem
}

.detail___3lHNg .inquiry_content___3YYXE .last___11CGz {
	border-right: none
}

.detail___3lHNg .position_header___bY0mR {
	width: 100%;
	height: .79rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .5);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___3lHNg .position_header___bY0mR p {
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .79rem
}

.detail___3lHNg .position_header___bY0mR .last___11CGz {
	border-right: none
}

.detail___3lHNg .position_content___1jtMw {
	width: 100%;
	height: .5rem;
	border-bottom: .01rem solid #777a7c;
	background: rgba(0, 0, 0, .1);
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.detail___3lHNg .position_content___1jtMw p {
	height: .5rem;
	font-size: .18rem;
	color: #fefefe;
	text-align: center;
	border-right: .01rem solid #3e4344;
	line-height: .5rem
}

.detail___3lHNg .position_content___1jtMw .last___11CGz {
	border-right: none
}







.btn3___V2Yi5 {
	background-color: hsla(0, 0%, 100%, .2)
}

.btn3___V2Yi5,
.btn4___T-oQs {
	width: 1rem;
	height: .43rem;
	color: #fff;
	border-radius: .2rem
}

.btn4___T-oQs {
	background: -webkit-linear-gradient(#e21414, #de0e3f);
	background: linear-gradient(#e21414, #de0e3f)
}

.display___1JAVE {
	display: block
}

.none___2l8QI {
	display: none
}

.tc___1pfJ4 {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
}

.tc___1pfJ4 .detail___1Cscf {
	height: 9.78rem;
	width: 8.5rem;
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	margin-top: -3.4rem;
	margin-left: -4.46rem;
	border-radius: .1rem
}

.tc___1pfJ4 .detail___1Cscf .header___3teYn {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1pfJ4 .detail___1Cscf .header___3teYn span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___1pfJ4 .detail___1Cscf .header___3teYn img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___1pfJ4 .detail___1Cscf .connect___2TYJE {
	width: 8.5rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	/* background: url(../img/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%; */
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___1pfJ4 .detail___1Cscf .connect___2TYJE ul {
	margin-left: 2.4rem
}

.tc___1pfJ4 .detail___1Cscf .connect___2TYJE ul li {
	margin-top: .54rem;
	margin-left: 2.4rem;
	margin: .5rem 0;
	color: #fff
}

.tc___1pfJ4 .detail___1Cscf .connect___2TYJE .btn___3jPlm {
	width: 2.8rem;
	margin: 0 auto
}

.tc___1pfJ4 .detail___1Cscf .connect___2TYJE .btn___3jPlm button {
	display: block;
	width: 2.8rem;
	height: .84rem;
	background: #e01030;
	border-radius: .2rem;
	color: #fff;
	font-size: .25rem;
	margin-top: .2rem;
	margin-right: .3rem
}

.tc___1pfJ4 .shengou___3hlbA {
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

.tc___1pfJ4 .shengou___3hlbA .header___3teYn {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1pfJ4 .shengou___3hlbA .header___3teYn span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___1pfJ4 .shengou___3hlbA .header___3teYn img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE {
	width: 12.15rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	/* background: url(0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%; */
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 {
	margin-left: 1.65rem;
	width: 9.25rem;
	height: 2.2rem;
	border-bottom: .01rem solid #585757;
	padding-left: .2rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_left___2_xZY {
	margin-top: .54rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_left___2_xZY p {
	font-size: .36rem;
	color: #fff;
	margin-bottom: .4rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_left___2_xZY .info_left_bill___3xpaN span {
	font-size: .28rem;
	color: #fff;
	margin-right: .24rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_left___2_xZY .info_left_bill___3xpaN i {
	color: #f74246;
	font-size: .28rem;
	margin-top: .05rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_right___13oQp {
	margin-top: .54rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_right___13oQp p {
	margin-top: .2rem;
	font-size: .85rem;
	color: #0ec144;
	margin-bottom: .4rem;
	margin-right: .57rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_right___13oQp .info_right_bill___1S6cW {
	margin-top: .3rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_right___13oQp .info_right_bill___1S6cW span {
	font-size: .28rem;
	color: #0ec144;
	margin-right: .24rem;
	margin-bottom: .2rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .info___3EEH7 .info_right___13oQp .info_right_bill___1S6cW i {
	color: #0ec144;
	font-size: .28rem;
	margin-top: .05rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH {
	margin-left: 1.65rem;
	padding-left: .3rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk span {
	display: block;
	font-size: .28rem;
	color: #fff;
	margin-top: .75rem;
	width: 1.7rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk select {
	width: 4.73rem;
	height: .69rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border-radius: .1rem;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	outline: none;
	color: #fff;
	padding-left: .38rem;
	margin-top: .6rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk input {
	width: 4.35rem;
	height: .69rem;
	margin-top: .54rem;
	border-radius: .1rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border: .01rem solid #fff;
	color: #fff;
	padding-left: .38rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk input::-webkit-input-placeholder {
	color: #fff
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk input::-moz-input-placeholder {
	color: #fff
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk input:-ms-input-placeholder {
	color: #fff
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk p {
	font-size: .28rem;
	color: #fff;
	margin-top: .75rem;
	margin-left: .18rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk .market___2RgAa img,
.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .classify___2oINH .class___hCgQk .refers___325oI img {
	width: .52rem;
	height: .52rem;
	margin-top: .64rem;
	margin-right: .2rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .ipt___2cMkr {
	margin-top: .54rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .ipt___2cMkr span {
	display: block;
	font-size: .25rem;
	color: #fff;
	height: .69rem;
	line-height: .69rem;
	width: 1.7rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .ipt___2cMkr input {
	width: 4.35rem;
	height: .69rem;
	border-radius: .1rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border: .01rem solid #fff;
	color: #fff;
	padding-left: .38rem;
	margin-bottom: .5rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .ipt___2cMkr input::-webkit-input-placeholder {
	color: #fff
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .ipt___2cMkr input::-moz-input-placeholder {
	color: #fff
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .ipt___2cMkr input:-ms-input-placeholder {
	color: #fff
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .btn___3jPlm {
	width: 6.2rem;
	height: .84rem;
	margin: .2rem auto;
	padding-bottom: .3rem
}

.tc___1pfJ4 .shengou___3hlbA .connect___2TYJE .btn___3jPlm button {
	width: 6.2rem;
	height: .84rem;
	background: #e01033;
	font-size: .32rem;
	color: #fff;
	border-radius: .1rem
}

.none___3qQIw {
	display: none
}

.news___QL3to {
	width: 100%;
	background-color: #fff;
	height: 9rem
}

.news___QL3to .context___QWgft {
	width: 100%;
	height: 9rem;
	font-size: .23rem;
	overflow-y: scroll
}

.tc___yjkGd {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
}

.tc___yjkGd .shengou___2u5Xa {
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

.tc___yjkGd .shengou___2u5Xa .header___3wNrE {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___yjkGd .shengou___2u5Xa .header___3wNrE span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___yjkGd .shengou___2u5Xa .header___3wNrE img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD {
	width: 12.15rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	/* background: url(../img/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%; */
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN {
	margin-left: 1.65rem;
	width: 9.25rem;
	height: 2.2rem;
	border-bottom: .01rem solid #585757;
	padding-left: .2rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_left___Ls112 {
	margin-top: .54rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_left___Ls112 p {
	font-size: .36rem;
	color: #fff;
	margin-bottom: .4rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_left___Ls112 .info_left_bill___1vSFs span {
	font-size: .28rem;
	color: #fff;
	margin-right: .24rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_left___Ls112 .info_left_bill___1vSFs i {
	color: #f74246;
	font-size: .28rem;
	margin-top: .05rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_right___2KED8 {
	margin-top: .54rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_right___2KED8 p {
	margin-top: .2rem;
	font-size: .85rem;
	color: #0ec144;
	margin-bottom: .4rem;
	margin-right: .57rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_right___2KED8 .info_right_bill___2uZpl {
	margin-top: .3rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_right___2KED8 .info_right_bill___2uZpl span {
	font-size: .28rem;
	color: #0ec144;
	margin-right: .24rem;
	margin-bottom: .2rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .info___1WcnN .info_right___2KED8 .info_right_bill___2uZpl i {
	color: #0ec144;
	font-size: .28rem;
	margin-top: .05rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS {
	margin-left: 1.65rem;
	padding-left: .3rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 span {
	display: block;
	font-size: .28rem;
	color: #fff;
	margin-top: .75rem;
	width: 1.7rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 select {
	width: 4.73rem;
	height: .69rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border-radius: .1rem;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	outline: none;
	color: #fff;
	padding-left: .38rem;
	margin-top: .6rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 input {
	width: 4.35rem;
	height: .69rem;
	margin-top: .54rem;
	border-radius: .1rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border: .01rem solid #fff;
	color: #fff;
	padding-left: .38rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 input::-webkit-input-placeholder {
	color: #fff
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 input::-moz-input-placeholder {
	color: #fff
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 input:-ms-input-placeholder {
	color: #fff
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 p {
	font-size: .28rem;
	color: #fff;
	margin-top: .75rem;
	margin-left: .18rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 .market___q6Wzb img,
.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .classify___3Q7LS .class___R9es2 .refers___2gUcA img {
	width: .52rem;
	height: .52rem;
	margin-top: .64rem;
	margin-right: .2rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .ipt___OoTZt {
	margin-top: .54rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .ipt___OoTZt span {
	display: block;
	font-size: .25rem;
	color: #fff;
	height: .69rem;
	line-height: .69rem;
	width: 1.7rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .ipt___OoTZt input {
	width: 4.35rem;
	height: .69rem;
	border-radius: .1rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border: .01rem solid #fff;
	color: #fff;
	padding-left: .38rem;
	margin-bottom: .5rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .ipt___OoTZt input::-webkit-input-placeholder {
	color: #fff
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .ipt___OoTZt input::-moz-input-placeholder {
	color: #fff
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .ipt___OoTZt input:-ms-input-placeholder {
	color: #fff
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .btn___2Y0sx {
	width: 6.2rem;
	height: .84rem;
	margin: .2rem auto;
	padding-bottom: .3rem
}

.tc___yjkGd .shengou___2u5Xa .connect___2vmGD .btn___2Y0sx button {
	width: 6.2rem;
	height: .84rem;
	background: #e01033;
	font-size: .32rem;
	color: #fff;
	border-radius: .1rem
}

.none___a8q8t {
	display: none
}

.bottom___1LGJ1 {
	background-color: #e21414;
	position: fixed;
	bottom: 0;
	width: 10.8rem;
	height: 1.46rem
}

.bottom___1LGJ1 a {
	width: 20%;
	height: 100%;
	color: #fff;
	border: none;
	background-color: #e21414;
	padding-top: .3rem;
	border-top: .02rem solid #f2f2f2
}

.bottom___1LGJ1 a p {
	font-size: .27rem;
	margin: 0;
	opacity: .9;
	margin-top: .1rem
}

.bottom___1LGJ1 a .icon___1HIqk {
	height: .7rem;
	width: .7rem;
	color: #000;
	margin-bottom: .1rem
}

.bottom___1LGJ1 .on___1RSIg {
	background-color: #e21414;
	border: none;
	color: #fff
}

.bottom___1LGJ1 .on-p___3tijI {
	color: #fff
}

.top___1-igI {
	width: 10.8rem;
	height: 1.32rem;
	background: -webkit-linear-gradient(#e21414, #de0e3f);
	background: linear-gradient(#e21414, #de0e3f)
}

.top___1-igI p {
	font-size: .48rem;
	color: #fff;
	width: 8.7rem;
	text-align: center
}

.top___1-igI img {
	width: .8rem
}

.news___3ts_u {
	width: 10.8rem;
	background-color: #fff
}

.news___3ts_u .context___Gt0D8 {
	width: 100%
}

.content___ozKsc {
	width: 95%;
	margin-top: .2rem;
	background-color: hsla(0, 0%, 100%, .05);
	border-radius: .2rem
}

.content___ozKsc .line1____oIG5 {
	width: 100%;
	margin-top: .2rem;
	margin-bottom: .2rem
}

.content___ozKsc .line1____oIG5 img {
	width: 2.4rem;
	height: 1.8rem;
	border-radius: .2rem
}

.content___ozKsc .line1____oIG5 .new___2_qc2 {
	width: 6.5rem;
	margin-left: .3rem
}

.content___ozKsc .line1____oIG5 .new___2_qc2 .title___2o4E3 {
	font-size: .34rem;
	color: #fff;
	margin-bottom: .2rem;
	margin-top: 0
}

.content___ozKsc .line1____oIG5 .new___2_qc2 .detailed___b1CCR {
	font-size: .28rem;
	color: hsla(0, 0%, 100%, .5);
	line-height: .45rem
}


.none___XY1K0 {
	display: none
}

.changebank___1Pim5 {
	width: 10.8rem;
	height: 100%
}

.changebank___1Pim5 .footer___Ik7Hv {
	width: 100%;
	margin-top: .2rem
}

.changebank___1Pim5 .footer___Ik7Hv .list1___2jCMn {
	width: 100%;
	height: 2rem;
	border-bottom: .01rem solid #ccc
}

.changebank___1Pim5 .footer___Ik7Hv .list1___2jCMn img {
	width: 2rem;
	height: .8rem;
	margin-left: .3rem;
	margin-right: .3rem
}

.changebank___1Pim5 .footer___Ik7Hv .list1___2jCMn .changename___1BbVG {
	width: 7rem
}

.changebank___1Pim5 .footer___Ik7Hv .list1___2jCMn .changename___1BbVG .name___1l0Sb {
	font-size: .42rem;
	color: #fff;
	line-height: .5rem;
	margin-bottom: .2rem
}

.changebank___1Pim5 .footer___Ik7Hv .list1___2jCMn .changename___1BbVG .zhushi___1SFH_ {
	font-size: .36rem;
	color: #ccc
}

.changebank___1Pim5 .footer___Ik7Hv .list1___2jCMn .next___1ODPs {
	width: .5rem;
	height: .6rem
}


.block___yaQIb {
	display: block
}





.none___15MpR {
	display: none
}



.block___2xvxy {
	display: block
}

.none___28DxP {
	display: none
}

.tc___1w0tT {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
}

.tc___1w0tT .detail___65tNp {
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

.tc___1w0tT .detail___65tNp .header___HXJvE {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1w0tT .detail___65tNp .header___HXJvE span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___1w0tT .detail___65tNp .header___HXJvE img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___1w0tT .detail___65tNp .connect___1uWh- {
	width: 12.15rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: #fff;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___1w0tT .detail___65tNp .connect___1uWh- .content_list___1nXCy {
	width: 90%;
	margin-left: 5%;
	height: 6.5rem;
	margin-top: .25rem;
	overflow-x: hidden;
	overflow-y: auto;
	font-size: .28rem
}

.tc___1w0tT .detail___65tNp .connect___1uWh- .content_list___1nXCy .item_header___3Tcpn span {
	display: block;
	text-align: center;
	height: 1.2rem;
	line-height: 1.2rem;
	color: #a3a4a5
}

.tc___1w0tT .detail___65tNp .connect___1uWh- .content_list___1nXCy .item_content___740mp {
	color: #fff
}

.tc___1w0tT .detail___65tNp .connect___1uWh- .content_list___1nXCy .item_content___740mp span {
	display: block;
	text-align: center;
	height: .8rem;
	line-height: .8rem
}

.none___33_TE {
	display: none
}

.tc___4tAO7 {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
}

.tc___4tAO7 .detail___16IdB {
	height: 9.78rem;
	width: 8.5rem;
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	margin-top: -3.4rem;
	margin-left: -4.46rem;
	border-radius: .1rem
}

.tc___4tAO7 .detail___16IdB .header___mvEgX {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___4tAO7 .detail___16IdB .header___mvEgX span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___4tAO7 .detail___16IdB .header___mvEgX img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___4tAO7 .detail___16IdB .connect___3KDrR {
	width: 8.5rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	/* background: url(0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%; */
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___4tAO7 .detail___16IdB .connect___3KDrR ul li {
	margin: .5rem 0;
	color: #fff
}

.tc___4tAO7 .detail___16IdB .connect___3KDrR .btn___13zuM {
	width: 2.8rem;
	margin: 0 auto
}

.tc___4tAO7 .detail___16IdB .connect___3KDrR .btn___13zuM button {
	display: block;
	width: 2.8rem;
	height: .84rem;
	background: #e01030;
	border-radius: .2rem;
	color: #fff;
	font-size: .25rem;
	margin-top: .2rem;
	margin-right: .3rem
}

.none___2cTja {
	display: none
}
</style>
