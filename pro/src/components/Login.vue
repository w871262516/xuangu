<template>
    <div :class="isC&&isC_c?'none___3Xdjg':'tc___1FDlc'">
        <div class="login___1JxxB">
            <ul class="login_header___2aV1g" data-flex="dir:left">
                <li :class="isC?'':'on___3paSO'" @click="dl">登录</li>
                <li :class="isC_c?'':'on___3paSO'" @click="zc">注册</li>
            </ul>
            <!--登陆-->
            <div :class="isC?'none___3Xdjg':''">
                <div class="login_content___2UoQf">
                    <img src="../assets/fc8469fab68f1d19636fcd40958fa7a1.png"/>
                    <div class="phone___IuTbl" data-flex="dir:left">
                        <img src="../assets/phone.png"/>
                        <input type="text" placeholder="请输入您的手机号码" v-model="phone"/>		
                    </div>
                    <div class="pwd___1Vemy" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请输入您的密码" v-model="password"/>
                    </div>
                    <div class="forget___blrbc">
                        <p @click="reset">忘记密码</p>
                    </div>
                    <div class="go___3vyyN" data-flex="dir:left">
                        <button @click="Login">登录</button>
                        <button @click="close">关闭</button>
                    </div>
                </div>
            </div>
            
            <!--注册-->
            <div :class="isC_c?'none___3Xdjg':''">
                <div class="register___3t6k8"> 
                    <div class="code___3xkLf" data-flex="dir:left">
                        <img src="../assets/my.png"/>
                        <input type="text" placeholder="请输入机构编码"/>
                    </div>
                    <div class="code___3xkLf" data-flex="dir:left">
                        <img src="../assets/phone.png"/>
                        <input type="text" placeholder="请输入手机号码" v-model="phone"/>
                    </div>
                    <div class="code___3xkLf" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请输入您的密码（至少6位，英文数字皆可）" v-model="password"/>
                    </div>
                    <div class="code___3xkLf" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请再次输入您的密码" v-model="repassword"/>
                    </div>
                    <div class="imgcode___2_Uht" data-flex="dir:left">
                        <div class="imgcode_yzm___3rk49" data-flex="dir:left">
                            <img src="../assets/code.png" class="icon___1pssw"/>
                            <input type="text" name="" placeholder="请输入图形验证码" v-model="image_code"/>
                        </div>
                        <img :src="img_cache_data" class="imgyzm___1jOJ9" @click="img_cache_name"/>
                    </div>
                    <div class="imgcode___2_Uht" data-flex="dir:left">
                        <div class="imgcode_yzm___3rk49" data-flex="dir:left">
                            <img src="../assets/code.png" class="icon___1pssw"/>
                            <input type="text" name="" placeholder="请输入手机验证码" v-model="phone_code"/>
                        </div>
                        <button @click="sendPhone">获取验证码</button>
                    </div>
                    <div class="btn___2UV1U" data-flex="dir:left">
                        <button @click="Regist">注册</button>
                        <button @click="close1">关闭</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return{
			phone:"",
			password:"",
			repassword:"",
			phone_code:"",
			img_cache_data:'',
			image_name:"",
			image_code:"",
			authorization:'',
			userinfor:{},
        }
	},
	methods:{
		close:function(){
			this.$store.state.isC = !this.$store.state.isC;
		},
		close1:function(){
			this.$store.state.isC_c = !this.$store.state.isC_c;
		},
		reset:function(){
			this.$store.state.isC = !this.$store.state.isC;
			this.$store.state.isF_f = !this.$store.state.isF_f;
		},
		dl:function(){
			this.$store.state.isC = !this.$store.state.isC;
			this.$store.state.isC_c = !this.$store.state.isC_c;
		},
		zc:function(){
			this.$store.state.isC_c = !this.$store.state.isC_c;
			this.$store.state.isC = !this.$store.state.isC;
		},
		img_cache_name(){
			let _this= this;
			axios({
				method:'get',
				url:'/api/api/v1/getImgVerifyCode',
			}).then(function(data){
				
				// console.log(data.data.data)
				_this.img_cache_data = data.data.data.img_cache_data;
				_this.image_name = data.data.data.img_cache_name;
			})
		},
		sendPhone(){
			let _this =this;
			axios({
				
				method:"post",
				url:"/api/api/v1/sendPhoneSMS",
				data:
				{phone:_this.phone,type:1,image_name:_this.image_name,image_code:_this.image_code},
				transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
				}],
			}).then(function(data){
				console.log(data)
				if(data.data.code==400){
					// alert('图片验证码不对');
					_this.$message.error('图片验证码不对');
				}else if(data.data.code==200){
					// alert('发送成功')
					_this.$message({
						message: '发送成功',
						type: 'success'
						});
				}
			})	
		},
		Regist(){
			let _this = this;	
			axios({
				method:"post",
				url:'/api/api/v1/account/register',
				data:{phone:_this.phone,password:_this.password,repassword:_this.repassword,phone_code:_this.phone_code},
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
					// alert("注册成功")
					_this.$message({
						message: '发送成功',
						type: 'success'
						});
					_this.$store.state.isC=false;
					_this.$store.state.isC_c=true;
				}else if(data.data.code==400){
					// alert("该手机号码已注册过！")
					_this.$message.error('该手机号码已注册过！');
					_this.phone ="",
					_this.password="",
					_this.repassword='',
					_this.phone_code='',
					_this.image_code=''
				}
			})
		},
		Login(){
			let _this = this;
			if(!_this.phone || _this.phone==''||_this.phone==undefined){
					// alert('请输入正确手机号')
					 _this.$message({
							message: '请输入正确手机号',
							type: 'warning'
							});
					return
				}
				if(!_this.password){
					// alert('密码不能为空')
					_this.$message({
							message: '密码不能为空',
							type: 'warning'
							});
					return
				}	
			axios({
				method:"post",
				url:'/api/api/v1/account/login',
				data:{phone:_this.phone,password:_this.password},
				transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
				}],
				crossDomain:true,
	    			header:{
	    				'Content-Type': 'application/x-www-form-urlencoded'
	    			}
			}).then(function(data){
				console.log(data)
				if(data.data.code==200){
					// _this.$store.commit('setUserToken',data.data.refresh_jwt_token);
					// sessionStorage.setItem('refresh_jwt_token',data.data.refresh_jwt_token);
					
					_this.$message({
							message: '登陆成功',
							type: 'success'
						});
					
					// _this.authorization=sessionStorage.getItem('refresh_jwt_token');
					// console.log(_this.authorization)
					_this.$store.state.authorization=data.data.refresh_jwt_token;
					console.log(_this.$store.state.authorization)
					localStorage.setItem('token',data.data.refresh_jwt_token)
            		_this.$store.commit('SET_USER', {'phone':_this.phone,'token':data.data.refresh_jwt_token})
					_this.getUserinfor()
					_this.myFavoriteStock()
					_this.$store.state.isC=true;
					_this.$store.state.ismine=false;	
					_this.$store.state.islogin=false;
					console.log(_this.$store.state.ismine)
					console.log(_this.$store.state.islogin)
					
				}else if(data.data.code==400){

					 _this.$message.error('账号密码错误');
				}
			})
		},
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
				console.log(data)
				if(data.data.code==200){
					_this.index=data.data.data
					_this.stock_code=data.data.data.stock_code;
					_this.stock_name=data.data.data.stock_name;
					_this.stock_market_code=data.data.data.stock_market_code;
					_this.rise=data.data.data.rise;
					_this.now_price=data.data.data.now_price;
				}else if(data.data.code==400){
					
				}			
				
			})
		},
		getUserinfor(){
			let _this = this;
			// _this.authorization= _this.$store.state.authorization;
			// console.log(_this.authorization)
			console.log(_this.$store.state.authorization)
			axios({
				method:"post",
				url:'/api/api/v1/account/personal',
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
				_this.$store.state.phone_num =data.data.data.phone;
				// console.log(data.data.data.phone)
				
				console.log(_this.$store.state.phone_num)
				_this.$store.state.available_amount = data.data.data.available_amount
			})
		}
		
	},
	mounted(){
		this.img_cache_name()
	},
	computed:{
		isC(){
			return this.$store.state.isC
		},
		isC_c(){
			return this.$store.state.isC_c
		}
	},
	watch:{
		isC(val){
			console.log('isC',val);
			
		}
	},
	created(){
		
	}
}
</script>
<style scoped>
@import '../../static/flex.css';
.none___3Xdjg {
	display: none
}
.tc___1FDlc {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}

.tc___1FDlc .login___1JxxB {
	height: 7.68rem;
	width: 10.92rem;
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	margin-top: -4.6rem;
	margin-left: -5.46rem;
	border-radius: .1rem
}

.tc___1FDlc .login___1JxxB .login_header___2aV1g {
	height: 1rem;
	background: #303030;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1FDlc .login___1JxxB .login_header___2aV1g li {
	width: 50%;
	font-size: .3rem;
	color: #f9dee0;
	text-align: center;
	height: 1rem;
	line-height: 1rem
}

.tc___1FDlc .login___1JxxB .login_header___2aV1g .on___3paSO {
	background: #e0102c
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf {
	width: 10.92rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf img {
	width: 10.92rem;
	height: 1.49rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .phone___IuTbl {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem;
	margin-bottom: .45rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .phone___IuTbl img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .phone___IuTbl input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .phone___IuTbl input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .phone___IuTbl input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .phone___IuTbl input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .pwd___1Vemy {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .pwd___1Vemy img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .pwd___1Vemy input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .pwd___1Vemy input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .pwd___1Vemy input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .pwd___1Vemy input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .forget___blrbc {
	margin-top: .08rem;
	height: 1.06rem;
	line-height: 1.06rem;
	text-align: right;
	color: #1692e9;
	font-size: .24rem;
	margin-right: .32rem;
	width: 8.42rem;
	margin-left: 1.4rem
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .go___3vyyN {
	width: 6.2rem;
	margin: 0 auto
}

.tc___1FDlc .login___1JxxB .login_content___2UoQf .go___3vyyN button {
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

.tc___1FDlc .login___1JxxB .register___3t6k8 {
	width: 10.92rem;
	background: #ccc;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	overflow: hidden
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .code___3xkLf {
	margin-top: .2rem;
	border: .01rem solid #fff;
	width: 8.35rem;
	height: .8rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem;
	margin-bottom: .18rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .code___3xkLf img {
	width: .65rem;
	height: .65rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .05rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .code___3xkLf input {
	display: block;
	height: .72rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .code___3xkLf input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .code___3xkLf input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .code___3xkLf input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .imgcode___2_Uht {
	width: 8.35rem;
	margin-left: 1.4rem;
	margin-bottom: .18rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .imgcode___2_Uht .imgcode_yzm___3rk49 {
	border: .01rem solid #fff;
	width: 5.52rem;
	background: hsla(0, 0%, 100%, .1);
	height: .8rem;
	border-radius: .5rem;
	margin-top: .1rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .imgcode___2_Uht .imgcode_yzm___3rk49 .icon___1pssw {
	width: .65rem;
	height: .65rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .05rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .imgcode___2_Uht .imgcode_yzm___3rk49 input {
	display: block;
	height: .72rem;
	width: 3rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .imgcode___2_Uht .imgyzm___1jOJ9 {
	width: 2.66rem;
	height: .8rem;
	border-radius: .5rem;
	border: .01rem solid #fff;
	margin-top: .1rem;
	margin-left: .15rem;
	background: rgba(0, 0, 0, .7)
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .imgcode___2_Uht button {
	width: 2.66rem;
	height: .8rem;
	border: .01rem solid #fff;
	margin-top: .1rem;
	margin-left: .15rem;
	background: #e1131f;
	border-radius: .5rem;
	border: none;
	color: #fff;
	font-size: .25rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .btn___2UV1U {
	width: 6.2rem;
	margin: 0 auto
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .btn___2UV1U button {
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

.tc___1FDlc .login___1JxxB .register___3t6k8 .agreement___AeTA8 {
	height: .85rem;
	line-height: .85rem;
	font-size: .2rem;
	color: #fff;
	margin-left: 1.38rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .agreement___AeTA8 img {
	width: .24rem;
	height: .24rem;
	display: block;
	margin-top: .28rem;
	margin-right: .12rem
}

.tc___1FDlc .login___1JxxB .register___3t6k8 .agreement___AeTA8 p span {
	color: #f82324
}

</style>
