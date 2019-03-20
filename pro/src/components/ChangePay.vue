<template>

<div :class="isG_g?'none___21M1W':'tc___3ESjH'">
		<div class="popContainer">
        <div class="reset___1I2tV">
            <ul class="login_header___1JdAs" data-flex="dir:left">
                <li :class="isG_g?'':'on___vhpUA'">修改支付密码</li>
                <!-- <li :class="isG?'':'on___vhpUA'" @click="xg">修改支付密码</li> -->
            </ul>
            <!--重置支付密码-->
            <div :class="isG_g?'none___21M1W':''">
                <div class="register___aerMz">
                    <div class="code___2_7bg" data-flex="dir:left"> 
                        <img src="../assets/phone.png"/>
                        <input type="text" placeholder="请输入您的账号" v-model="phone"/>
                    </div>
                    <div class="imgcode___1BBsu" data-flex="dir:left"> 
                        <div class="imgcode_yzm___1aa0p" data-flex="dir:left">
                            <img src="../assets/code.png" class="icon___3Ew-3"/>
                            <input type="text" placeholder="请输入图形验证码" v-model="image_code"/>
                        </div>
                        <img :src="img_cache_data" class="imgyzm___37uiM" @click="img_cache_name"/>
                    </div>
                    <div class="imgcode___1BBsu" data-flex="dir:left"> 
                        <div class="imgcode_yzm___1aa0p" data-flex="dir:left">
                            <img src="../assets/code.png" class="icon___3Ew-3"/>
                            <input type="text" placeholder="请输入手机验证码" v-model="phone_code"/>
                        </div>
                        <button @click="sendPhone">获取验证码</button>
                    </div>
                    <div class="code___2_7bg" data-flex="dir:left"> 
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请输入新的支付密码" v-model="password"/>
                    </div>
                    <div class="code___2_7bg" data-flex="dir:left"> 
                        <img src="../assets/mima.png"/>
                        <input type="password" placeholder="请再次输入支付密码" v-model="repassword"/>
                    </div>
                    <div class="btn___3XEVd" data-flex="dir:left"> 
                        <button @click="edit_pay_password">提交</button>
                        <button @click="close1">关闭</button>
                    </div>
                </div>
            </div>
            <!--修改支付密码-->
            <!-- <div :class="isG?'none___21M1W':''">
                <div class="login_content___1R6IP">
                    <div class="phone___1LDJt" data-flex="dir:left">
                        <img src="../assets/phone.png"/>
                        <input type="password" name="" placeholder="请输入原支付密码"/>
                    </div>
                    <div class="code___2_7bg" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" name="" placeholder="请输入您的支付密码（至少6位，英文数字皆可）"/>
                    </div>
                    <div class="code___2_7bg" data-flex="dir:left">
                        <img src="../assets/mima.png"/>
                        <input type="password" name="" placeholder="请再次输入您的支付密码"/>
                    </div>
                    <div class="go___1PNVl" data-flex="dir:left">
                        <button>提交</button>
                        <button @click="close">关闭</button>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ChangePay',
    data(){
        return{
			phone_code:'',
			image_code:'',
			password:'',
			repassword:'',
			phone:"",
			img_cache_data:'',
        }
	},
	methods:{
		close:function(){
			this.$store.state.isG = !this.$store.state.isG
		},
		close1:function(){
			this.$store.state.isG_g = !this.$store.state.isG_g
		},
		// cz:function(){
			
		// 	this.$store.state.isG = !this.$store.state.isG
		// 	this.$store.state.isG_g = !this.$store.state.isG_g
		// },
		xg:function(){
			
			this.$store.state.isG_g = !this.$store.state.isG_g
			this.$store.state.isG = !this.$store.state.isG
		},
		//修改支付密码
		edit_pay_password(){
			let _this = this;
			if(_this.repassword!=_this.password){
					// alert('两次输入密码不一致')
					 _this.$message({
						message: '两次输入密码不一致',
						type: 'warning'
						});
					return
				}else if(_this.password<6){
					// alert('密码格式错误')
					_this.$message({
						message: '密码格式错误',
						type: 'warning'
						});
				}
			
			// var authorization= _this.$store.state.authorization
			axios({
				method:"post",
				url:'/api/api/v1/account/edit_pay_password',
				data:{
					phone_code:_this.phone_code,
					password:_this.password
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
				if(data.data.code==200){
					// alert('修改成功')
					_this.$message({
						message: '修改成功',
						type: 'success'
						});
					_this.$store.state.isG_g=true;

				}if(data.data.code==400){
					// alert('验证码错误')
					 _this.$message.error('验证码错误');
				}
				console.log(data)

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
			if(_this.phone.length<6){
				// alert('手机号码不正确')
				 _this.$message({
					message: '手机号码不正确',
					type: 'warning'
					});
			}
			axios({
				
				method:"post",
				url:"/api/api/v1/sendPhoneSMS",
				data:
				{
					phone:_this.phone,
					type:7,
					image_name:_this.image_name,
					image_code:_this.image_code
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

	},
	mounted(){
			this.img_cache_name()
	},
	computed:{
		isG(){
			return this.$store.state.isG;
		},
		isG_g(){
			return this.$store.state.isG_g;
		}
	},
	watch:{

	}
}
</script>
<style scoped>
@import '../../static/flex.css';

div.popContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
}
.none___21M1W {
	display: none
}
.tc___3ESjH {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}

.tc___3ESjH .reset___1I2tV {
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

.tc___3ESjH .reset___1I2tV .login_header___1JdAs {
	height: 1rem;
	background: #303030;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___3ESjH .reset___1I2tV .login_header___1JdAs li {
	width: 100%;
	font-size: .3rem;
	color: #f9dee0;
	text-align: center;
	height: 1rem;
	line-height: 1rem
}

.tc___3ESjH .reset___1I2tV .login_header___1JdAs .on___vhpUA {
	background: #e0102c
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP {
	width: 10.92rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP img {
	width: 10.92rem;
	height: 1.49rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .phone___1LDJt {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem;
	margin-top: .2rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .phone___1LDJt img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .phone___1LDJt input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .phone___1LDJt input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .phone___1LDJt input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .phone___1LDJt input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .code___2_7bg {
	margin-top: .2rem;
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin-left: 1.4rem;
	margin-bottom: .18rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .code___2_7bg img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .code___2_7bg input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .code___2_7bg input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .code___2_7bg input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .code___2_7bg input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .btn___3XEVd {
	width: 8.38rem;
	margin: 0 auto
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .btn___3XEVd button {
	width: 2.8rem;
	height: .8rem;
	border-radius: .2rem;
	background: #e1131f;
	color: #fff;
	font-size: .22rem;
	margin-right: .3rem
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .go___1PNVl {
	width: 6.2rem;
	margin: 0 auto
}

.tc___3ESjH .reset___1I2tV .login_content___1R6IP .go___1PNVl button {
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

.tc___3ESjH .reset___1I2tV .register___aerMz {
	width: 10.92rem;
	background: #ccc;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___3ESjH .reset___1I2tV .register___aerMz .code___2_7bg {
	border: .01rem solid #fff;
	width: 8.35rem;
	height: 1.03rem;
	background: hsla(0, 0%, 100%, .1);
	border-radius: .5rem;
	margin: .2rem 0 .2rem 1.4rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .code___2_7bg img {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .code___2_7bg input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 6.8rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___3ESjH .reset___1I2tV .register___aerMz .code___2_7bg input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .code___2_7bg input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .code___2_7bg input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu {
	margin-top: .2rem;
	width: 8.35rem;
	margin-left: 1.4rem;
	margin-bottom: .18rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgcode_yzm___1aa0p {
	border: .01rem solid #fff;
	width: 5.52rem;
	background: hsla(0, 0%, 100%, .1);
	height: 1.03rem;
	border-radius: .5rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgcode_yzm___1aa0p .icon___3Ew-3 {
	width: .72rem;
	height: .72rem;
	margin-left: .15rem;
	margin-right: .35rem;
	margin-top: .14rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgcode_yzm___1aa0p input {
	display: block;
	height: .72rem;
	margin-top: .14rem;
	width: 3rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	color: #979c9e
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgcode_yzm___1aa0p input::-webkit-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgcode_yzm___1aa0p input::-moz-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgcode_yzm___1aa0p input:-ms-input-placeholder {
	color: #979c9e;
	font-size: .32rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu .imgyzm___37uiM {
	width: 2.66rem;
	height: 1.03rem;
	border-radius: .5rem;
	border: .01rem solid #fff;
	margin-left: .15rem;
	background: rgba(0, 0, 0, .7)
}

.tc___3ESjH .reset___1I2tV .register___aerMz .imgcode___1BBsu button {
	width: 2.66rem;
	height: .8rem;
	border: .01rem solid #fff;
	margin-left: .15rem;
	background: #e1131f;
	border-radius: .5rem;
	border: none;
	color: #fff;
	font-size: .25rem;
	margin-top: .2rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .go___1PNVl {
	width: 8.42rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .go___1PNVl button {
	display: block;
	width: 2.8rem;
	height: .84rem;
	background: #e01030;
	border-radius: .2rem;
	color: #fff;
	font-size: .25rem;
	margin-left: 2.35rem;
	margin-top: .6rem;
	margin-right: .3rem
}

.tc___3ESjH .reset___1I2tV .register___aerMz .btn___3XEVd {
	width: 6.2rem;
	margin: 0 auto
}

.tc___3ESjH .reset___1I2tV .register___aerMz .btn___3XEVd button {
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


