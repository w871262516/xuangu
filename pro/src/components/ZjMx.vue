<template>
    <div :class="isD?'none___15MpR':'tc___1LEmO'">
        <div class="detail___Qyz9l">
            <div class="header___1gMSl">
                <span>充值提现明细</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
            <div class="connect___3LKoO">
                <div class="content_list___ZpzIH">
                    <div class="item_header___1669J" data-flex="box:mean dir:left">
                        <span>可用余额</span>
                        <span>充值余额</span>
                        <span>提现余额</span>
                    </div>
					<div class="item_content___3mnfy" data-flex="box:mean dir:left">
						<span>{{this.$store.state.available_amount}}</span>
						<span>{{this.$store.state.charge_amount}}</span>
						<span>{{this.$store.state.withdraw_amount}}</span>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'ZjMx',
    data(){
        return{

        }
	},
	methods:{
		close:function(){
			this.$store.state.isD = !this.$store.state.isD
		},
		

	},
	created(){
	
	},
	mounted(){
		
	},
	computed:{
		isD(){
			return this.$store.state.isD
		}
	},
	watch:{
		isD(val){
			// console.log('isD',val);
			
		}
	}
}
</script>
<style scoped>
@import '../../static/flex.css';
.none___15MpR {
	display: none
}
.tc___1LEmO {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}

.tc___1LEmO .detail___Qyz9l {
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

.tc___1LEmO .detail___Qyz9l .header___1gMSl {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1LEmO .detail___Qyz9l .header___1gMSl span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___1LEmO .detail___Qyz9l .header___1gMSl img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___1LEmO .detail___Qyz9l .connect___3LKoO {
	width: 12.15rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___1LEmO .detail___Qyz9l .connect___3LKoO .content_list___ZpzIH {
	width: 90%;
	margin-left: 5%;
	height: 6.5rem;
	margin-top: .25rem;
	overflow-x: hidden;
	overflow-y: auto
}

.tc___1LEmO .detail___Qyz9l .connect___3LKoO .content_list___ZpzIH .item_header___1669J span {
	display: block;
	text-align: center;
	height: 1.2rem;
	line-height: 1.2rem;
	color: #a3a4a5
}

.tc___1LEmO .detail___Qyz9l .connect___3LKoO .content_list___ZpzIH .item_content___3mnfy span {
	display: block;
	text-align: center;
	height: .8rem;
	line-height: .8rem;
	color: #a3a4a5
}

</style>


