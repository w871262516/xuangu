<template>
    
    <div :class="isE?'none___2_Gg9':'tc___2T4d7'">
        <div class="login___1dGzT">
            <div class="header___1sV0E">
                <span>实名认证</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
            <!--绑定银行卡/实名认证-->
            <div class="login_content___3RcM4">
                <div class="pwd___22fvt one" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <input type="text" name="" placeholder="请输入您的真实姓名" v-model="name"/>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <input type="text" name="" placeholder="请输入您的身份证号" v-model="id_number"/>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/mima.png"/>
                    <input type="password" name=""  placeholder="请设置您的支付密码" v-model="password"/>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/mima.png"/>
                    <input type="password" name="" placeholder="请再次输入您的支付密码" v-model="repassword"/>
                </div>               			
                <div class="go___ghsVV">
                    <button @click="Realname">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'BankCard',
    data(){
        return{
			name:'',
			id_number:'',
			password:'',
			repassword:'',
			bank_name:'',
			card_no:"",
			branch_name:'',
			opening_address:'',
			phone:'',
			phone_code:'',
			image_code:'',
			img_cache_data:'',
        }
	},
	methods:{
		close:function(){
			this.$store.state.isE = !this.$store.state.isE;
		},
		Realname(){
			this.AuthRealName();
			this.set_pay_password();
			// this.$store.state.isE_E = !this.$store.state.isE_E;
			this.$store.state.isE = false;
		},
		//实名认证
		AuthRealName(){
			let _this = this;
			// var authorization= sessionStorage.getItem('refresh_jwt_token');
			var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
		//         if(reg.test(_this.id_number) === false) { 
		//           return false; 
		// 			alert('身份证号有误')
		//         }else{
		//           return true;
		//         }
			axios({
				method:"post",
				url:'/api/api/v1/account/authRealName',
				data:{name:_this.name,id_number:_this.id_number},
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
					// alert('验证成功')
					_this.$message({
						message: '验证成功',
						type: 'success'
						});
					_this.$store.state.isE_e = !_this.$store.state.isE_e;
					_this.$store.state.isE = !_this.$store.state.isE;
				}
				if(reg.test(_this.id_number) === false){
					// alert('身份证号有误')
					_this.$message({
						message: '身份证号有误',
						type: 'warning'
						});
					return
				}else if(data.data.code==400){
					// alert('验证失败您可能已经验证过')
					 _this.$message.error('验证失败');
					return
				}				
			})
		},
		set_pay_password(){
			let _this = this;
			var authorization= sessionStorage.getItem('refresh_jwt_token');
			if(_this.repassword!=_this.password){
					// alert('两次输入密码不一致')
					_this.$message({
						message: '两次输入密码不一致',
						type: 'warning'
						});
					return
				}else if(_this.password<6){
					// alert('密码格式错误')
					 _this.$message.error('密码格式错误');
					return
				}
			axios({
				method:"post",
				url:'/api/api/v1/account/set_pay_password',
				data:{
						password:_this.password,
						repassword:_this.repassword
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
					// alert('设置密码成功')
					_this.$message({
						message: '设置密码成功',
						type: 'success'
						});
					_this.$store.state.password=_this.password//支付密码
				}else{
					// alert('设置失败')
					_this.$message.error('设置失败');
				}
			})
		},
		
		
	},
	mounted(){
		
	},
	computed:{
		isE(){
			return this.$store.state.isE
		}
	},
	watch:{
		isE(val){
			// console.log('isE',val);
			
		}
	}
}
</script>
<style scoped>
@import '../../static/flex.css';





.none___2_Gg9 {
	display: none
}



.tc___2T4d7 {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}

.tc___2T4d7 .login___1dGzT {
	height: 8rem;
	width: 10.92rem;
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	margin-top: -5rem;
	margin-left: -5.46rem;
	border-radius: .1rem
}

.tc___2T4d7 .login___1dGzT .header___1sV0E {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___2T4d7 .login___1dGzT .header___1sV0E span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #fff;
	text-align: center;
	line-height: 1.02rem
}

.tc___2T4d7 .login___1dGzT .header___1sV0E img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 {
	width: 10.92rem;
	height: 7rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	/* overflow: scroll */
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 img {
	width: 10.92rem;
	height: 1.49rem
}
.one{
	margin-top: 0;	
}
.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: .72rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin: .2rem 0 .1rem 1.4rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt select {
	width: 6.8rem;
	height: .72rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border: none
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt img {
	width: .65rem;
	height: .65rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .06rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt input {
	display: block;
	height: .72rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .pwd___22fvt input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br {
	width: 8.35rem;
	margin-left: 1.4rem;
	margin-bottom: .2rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgcode_yzm___3BCUy {
	border: .01rem solid #fff;
	width: 5.52rem;
	background: hsla(0, 0%, 100%, .1);
	height: .72rem;
	border-radius: .5rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgcode_yzm___3BCUy .icon___2W3Im {
	width: .65rem;
	height: .65rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .06rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgcode_yzm___3BCUy input {
	display: block;
	height: .72rem;
	width: 3rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgcode_yzm___3BCUy input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgcode_yzm___3BCUy input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgcode_yzm___3BCUy input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br button {
	width: 2.66rem;
	height: .72rem;
	border: .01rem solid #fff;
	margin-left: .15rem;
	background: #e1131f;
	border-radius: .5rem;
	border: none;
	color: #fff;
	font-size: .25rem
}
.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .imgcode___1N2br .imgyzm___2bhVV {
	width: 2.66rem;
	height: 0.72rem;
	border-radius: .5rem;
	border: .01rem solid #fff;
	margin-left: .15rem;
	background: rgba(0, 0, 0, .7)
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .on___1OXzV {
	background: #e0102c
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .go___ghsVV {
	width: 8.42rem
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 .go___ghsVV button {
	display: block;
	width: 6.2rem;
	height: .84rem;
	background: #e01030;
	border-radius: .2rem;
	color: #fff;
	font-size: .25rem;
	margin-left: 2.35rem;
	margin-top: .4rem
}
</style>


