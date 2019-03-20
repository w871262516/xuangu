<template>
    <div :class="isB?'none___28DxP':'tc___1tX_r'">
        <p @click="zijin">资金明细</p>
        <p @click="bankcard">银行卡</p>
        <p @click="changepasswrod">修改登录密码</p>
        <p @click="resetpass">重置登录密码</p>
        <!-- <p @click="changepay">修改支付密码</p> -->
        <p @click="resetpay">修改支付密码</p>
        <p @click="tuichu">退出登录</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Mine',
    data(){
        return{
			// isB:false
        }
	},
	methods:{
		zijin:function(){
			this.$store.state.isD = !this.$store.state.isD;
			this.capital_details();
		},
		capital_details(){
			let _this =this;
			axios({
				method:"post",
				url:'/api/api/v1/account/capital_details',
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
					_this.$store.state.charge_amount=data.data.data.charge_amount
					_this.$store.state.withdraw_amount=data.data.data.withdraw_amount
				}

			})
		},
		bankcard:function(){
			this.checkUserInfoIntegrity()
			// this.$store.state.isE = !this.$store.state.isE;
		},
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
				if(data.data.data.real_name==0 || data.data.data.pay_password==0){
					_this.$store.state.isE = false;
				}else if(data.data.data.real_name==1 || data.data.data.bind_bank==1 || data.data.data.pay_password==1){
					_this.$store.state.isE_E = false;
				}
			})
		},
		changepasswrod:function(){
			this.$store.state.isF = !this.$store.state.isF;
		},
		resetpass:function(){
			this.$store.state.isF_f = !this.$store.state.isF_f;
		},
		changepay:function(){
			this.$store.state.isG = !this.$store.state.isG;
		},
		resetpay:function(){
			this.$store.state.isG_g = !this.$store.state.isG_g;
		},
		tuichu:function(){
			let _this=this;
			// _this.localStorage.removeItem('token');
			localStorage.clear();
			console.log(localStorage)
			_this.$store.state.authorization="";
			console.log(this.$store.state.authorization)
			this.$store.state.ismine=true;
			this.$store.state.islogin=true;
			this.$store.state.isB = !this.$store.state.isB;
		}
	},
	mounted(){

	},
	computed:{
		isB(){
			return this.$store.state.isB
		}
	},
	watch:{
		isB(val){
			// console.log('isB',val);	
		}
	}
	
}
</script>
<style scoped>
.none___28DxP {
	display: none
}
.tc___1tX_r {
	width: 2.5rem;
	background: #fff;
	position: absolute;
	top: .68rem;
	right: .2rem;
	z-index: 50;
	border-radius: .2rem;
	background: rgba(0, 0, 0, .1)
}

.tc___1tX_r p {
	font-size: .24rem;
	color: #a1a2a5;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	border-bottom: .01rem solid rgba(0, 0, 0, .5)
}

.tc___1tX_r p:hover {
	background: rgba(0, 0, 0, .2)
}
</style>


