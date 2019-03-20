<template>
    <div :class="isF&&isF_f?'none___2dBoU':'tc___fy0-w'">
        <div class="reset___1ZBtp">
            <ul class="login_header___4ezCM" data-flex="dir:left">
                <li @click="cz" :class="isF_f?'':'on___3eGxi'">重置登录密码</li>
                <li @click="xg" :class="isF?'':'on___3eGxi'">修改登录密码</li>
            </ul>
            <!--重置登陆密码-->
            <div :class="isF_f?'none___2dBoU':''">
                <div class="login_content___1-Ozc">
                    <div class="phone___3E81j" data-flex="dir:left"> 
                        <img src="../assets/phone.png"/>
                        <input type="text" placeholder="请输入您的手机号码" v-model="phone"/>
                    </div>
                    <div class="imgcode___1oGaC" data-flex="dir:left"> 
                        <div class="imgcode_yzm___3PHH-" data-flex="dir:left">
                            <img src="../assets/code.png" class="icon___2pwdi"/>
                            <input type="text" placeholder="请输入图形验证码" v-model="image_code"/>
                        </div>
                        <img :src="img_cache_data" class="imgyzm___2bhVV" @click="img_cache_name"/>
                    </div>
                    <div class="imgcode___1oGaC" data-flex="dir:left"> 
                        <div class="imgcode_yzm___3PHH-" data-flex="dir:left">
                            <img src="../assets/code.png" class="icon___2pwdi"/>
                            <input type="text" placeholder="请输入手机验证码" v-model="phone_code"/>
                        </div>
                        <button @click="sendPhone">获取验证码</button>	
                    </div>
                    <div class="code___2_GFv" data-flex="dir:left"> 
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请设置您的密码（至少6位，英文数字皆可）" v-model="password"/>
                    </div>
                    <div class="code___2_GFv" data-flex="dir:left"> 
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请再次输入您的密码" v-model="checkPsd"/>
                    </div>
                    <div class="go___--RbD" data-flex="dir:left"> 
                        <button @click="ResetPassword">提交</button>
                        <button @click="close1">关闭</button>
                    </div>
                </div>
            </div>
            <!--修改登陆密码-->
            <div :class="isF?'none___2dBoU':''">
                <div class="register___1yIbM">
                    <div class="code___2_GFv" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" name="" placeholder="请输入原登录密码" v-model="old_password"/>
                    </div>
                    <div class="code___2_GFv" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" name="" placeholder="请输入新登录密码" v-model="new_password"/>
                    </div>
                    <div class="code___2_GFv" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" name="" placeholder="请再次输入新登录密码" v-model="checkPsd"/>
                    </div>
                    <div class="btn___2L8he" data-flex="dir:left">
                        <button @click="ChangePassword">提交</button>
                        <button @click="close">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ChangePasswrod',
    data(){
        return{
			old_password:'',
			new_password:'',
			checkPsd:'',
			image_code:"",
			img_cache_data:'',
			phone:'',
			phone_code:"",
			password:"",
        }
	},
	methods:{
		cz:function(){
			this.$store.state.isF_f = !this.$store.state.isF_f
			this.$store.state.isF = !this.$store.state.isF
		},
		xg:function(){
			this.$store.state.isF = !this.$store.state.isF
			this.$store.state.isF_f = !this.$store.state.isF_f
		},
		close:function(){
			this.$store.state.isF = !this.$store.state.isF
		},
		close1:function(){
			this.$store.state.isF_f = !this.$store.state.isF_f
		},
		//修改密码
		ChangePassword(){
			let _this= this;
				if(_this.old_password<6){
					// alert('请输入正确的原密码')
					_this.$message({
						message: '请输入正确的原密码',
						type: 'warning'
						});
					return
				}else if(_this.new_password.length<6){
					// alert('密码格式不正确')
					_this.$message({
						message: '请输入正确的原密码',
						type: 'warning'
						});
					return
				}if(_this.new_password!=_this.checkPsd){
					// alert('两次输入的密码不一致')
					_this.$message({
						message: '两次输入的密码不一致',
						type: 'warning'
						});
					return
				}
			// var authorization= _this.$store.state.authorization;
			axios({
				method:"post",
				url:"/api/api/v1/account/edit_password",
				data:{
					old_password:_this.old_password,
					new_password:_this.new_password
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
					// alert('修改成功')
					 _this.$message({
						message: '修改成功',
						type: 'success'
						});
					_this.$store.state.isF=true
				}else{
					// alert('原密码不正确')
					_this.$message.error('原密码不正确');

					_this.old_password='';
					_this.new_password='';
					_this.checkPsd='';
				}
			})
		},
		// 重置密码
		ResetPassword(){
			let _this=this;
			if(_this.password<6){
					// alert('请输入正确的密码')
					_this.$message({
						message: '请输入正确的密码',
						type: 'warning'
						});
					return
				}else if(_this.password.length<6){
					// alert('密码格式不正确')
					_this.$message({
						message: '密码格式不正确',
						type: 'warning'
						});
					return
				}if(_this.password!=_this.checkPsd){
					// alert('两次输入的密码不一致')
					_this.$message({
						message: '两次输入的密码不一致',
						type: 'warning'
						});
					return
				}
			
			axios({
				method:"post",
				url:'/api/api/v1/account/forgetLoginPassword',
				data:{phone:_this.phone,password:_this.password,phone_code:_this.phone_code},
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
					// alert('手机验证码不正确')
					 _this.$message.error('错了哦，这是一条错误消息');
				}else if(data.data.code==200){
					// alert(修改成功)
					_this.$message({
						message: '修改成功',
						type: 'success'
						});
					_this.$store.state.isF_f=true;
				}
			})
		},
		//图形验证码
		img_cache_name(){
			let _this= this;
			axios({
				method:'get',
				url:'/api/api/v1/getImgVerifyCode',
			}).then(function(data){
				
				console.log(data.data.data)
				_this.img_cache_data = data.data.data.img_cache_data;
				_this.image_name = data.data.data.img_cache_name;
			})
		},
		//发送验证码
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
					_this.$message.error('错了哦，这是一条错误消息');
				}else if(data.data.code==200){
					// alert('发送成功')
					this.$message({
					message: '发送成功',
					type: 'success'
					});
				}
			})	
		}
	},
	mounted(){
		this.img_cache_name()
	},
	computed:{
		isF(){
			return this.$store.state.isF;
		},
		isF_f(){
			return this.$store.state.isF_f;
		}
	},
	watch:{
		isF(val){
			// console.log('isF',val);
			
		},
		isF_f(val){
			// console.log('isF_f',val);
		}
	}
}
</script>
<style scoped>
@import '../../static/flex.css';
.none___2dBoU {
	display: none
}
.tc___fy0-w {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}

.tc___fy0-w .reset___1ZBtp {
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

.tc___fy0-w .reset___1ZBtp .login_header___4ezCM {
	height: 1rem;
	background: #303030;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___fy0-w .reset___1ZBtp .login_header___4ezCM li {
	width: 50%;
	font-size: .3rem;
	color: #f9dee0;
	text-align: center;
	height: 1rem;
	line-height: 1rem
}

.tc___fy0-w .reset___1ZBtp .login_header___4ezCM .on___3eGxi {
	background: #e0102c
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc {
	width: 10.92rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc img {
	width: 10.92rem;
	height: 1.49rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .phone___3E81j {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem;
	margin-top: .2rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .phone___3E81j img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .phone___3E81j input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .phone___3E81j input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .phone___3E81j input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .phone___3E81j input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC {
	margin-top: .2rem;
	width: 8.35rem;
	margin-left: 1.4rem;
	margin-bottom: .18rem;
	overflow: hidden
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgcode_yzm___3PHH- {
	border: .01rem solid #fff;
	width: 5.52rem;
	background: hsla(0, 0%, 100%, .1);
	height: 1.03rem;
	border-radius: .5rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgcode_yzm___3PHH- .icon___2pwdi {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgcode_yzm___3PHH- input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 3rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgcode_yzm___3PHH- input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgcode_yzm___3PHH- input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgcode_yzm___3PHH- input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC .imgyzm___2bhVV {
	width: 2.66rem;
	height: 1.03rem;
	border-radius: .5rem;
	border: .01rem solid #fff;
	margin-left: .15rem;
	background: rgba(0, 0, 0, .7)
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .imgcode___1oGaC button {
	width: 2.66rem;
	height: 1.03rem;
	border: .01rem solid #fff;
	margin-top: .1rem;
	margin-left: .15rem;
	background: #e1131f;
	border-radius: .5rem;
	border: none;
	color: #fff;
	font-size: .25rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .code___2_GFv {
	margin-top: .2rem;
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem;
	margin-bottom: .18rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .code___2_GFv img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .code___2_GFv input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .code___2_GFv input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .code___2_GFv input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .code___2_GFv input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .btn___2L8he {
	width: 8.38rem;
	margin: 0 auto
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .btn___2L8he button {
	width: 8.38rem;
	height: .8rem;
	border-radius: .2rem;
	background: #e1131f;
	color: #fff;
	font-size: .22rem
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .go___--RbD {
	width: 6.2rem;
	margin: 0 auto
}

.tc___fy0-w .reset___1ZBtp .login_content___1-Ozc .go___--RbD button {
	display: block;
	width: 2.8rem;
	height: .84rem;
	background: #e01030;
	border-radius: .2rem;
	color: #fff;
	font-size: .25rem;
	margin-top: .6rem;
	margin-right: .3rem
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM {
	width: 10.92rem;
	background: #ccc;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .code___2_GFv {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin: .2rem 0 .2rem 1.4rem
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .code___2_GFv img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .code___2_GFv input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .code___2_GFv input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .code___2_GFv input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .code___2_GFv input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .btn___2L8he {
	width: 6.2rem;
	margin: 0 auto
}

.tc___fy0-w .reset___1ZBtp .register___1yIbM .btn___2L8he button {
	display: block;
	width: 2.8rem;
	height: .84rem;
	background: #e01030;
	border-radius: .2rem;
	color: #fff;
	font-size: .25rem;
	margin-top: .6rem;
	margin-right: .3rem
}
</style>


