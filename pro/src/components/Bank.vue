<template>
    <div :class="isE_e?'none___2_Gg9':'tc___2T4d7'">
        <div class="login___1dGzT">
            <div class="header___1sV0E">
                <span>绑定银行卡</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
            <!--绑定银行卡/实名认证-->
            <div class="login_content___3RcM4">
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <input type="text" name="" placeholder="请输入银行卡号" v-model="card_no"/>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                   <input type="text" name="" placeholder="持卡人身份证号" v-model="holder_user_no"/>
                </div>
                 <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                   <input type="text" name="" placeholder="持卡人姓名" v-model="holder_user_name"/>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                   <input type="text" name="" placeholder="请输入您的银行名称" v-model="bank_name"/>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <select name="" @click="getAreaList"  v-model="parent_code" @change="getAreaList2(parent_code)">
						<option v-for="(item,index) in list" :key="index" :value="item.area_code">{{item.area_name}}</option>
					</select>
                </div>               
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <select name="" @click="area" v-model="area_code">
							<option v-for="(item,i) in arr" :key="i" :value="item.area_code">{{item.area_name}}</option>
					</select>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <select name="" @click="getAreaBranchBank" v-model="bnk_name">
							<option v-for="(item,ind) in arr1" :key="ind">{{item.bnk_name}}</option>
					</select>
                </div>
                <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/phone.png"/>
                    <input type="text" name="" placeholder="请输入持卡人手机号" v-model="phone"/>
                </div>
                <!-- <div class="pwd___22fvt" data-flex="dir:left">
                    <img src="../assets/my.png"/>
                    <input type="text" name="" placeholder="请输入开户省" v-model="opening_address"/>
                </div> -->
				<!-- <div class="imgcode___1N2br" data-flex="dir:left">
                    <div class="imgcode_yzm___3BCUy" data-flex="dir:left">
                        <img src="../assets/code.png" class="icon___2W3Im" @click="sendPhone"/>
                        <input type="text" name="" placeholder="请输入图形验证码" v-model="image_code"/>
                    </div>
                     <img :src="img_cache_data" class="imgyzm___2bhVV" @click="img_cache_name"/>
                </div> -->
				<div class="imgcode___1N2br" data-flex="dir:left">
                    <div class="imgcode_yzm___3BCUy" data-flex="dir:left">
                        <img src="../assets/code.png" class="icon___2W3Im" @click="sendPhone"/>
                        <input type="text" name="" placeholder="请输入手机验证码" v-model="phone_code"/>
                    </div>
                    <button @click="sendPhone">获取验证码</button>
                </div>                				
                <div class="go___ghsVV">
                    <button @click="bind_bank">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Bank',
    data(){
        return{
            repassword:'',
			bank_name:'',
			card_no:"",
			branch_name:'',
			opening_address:'',
			phone:'',
			phone_code:'',
			image_code:'',
            img_cache_data:'',
            holder_user_name:'',
            holder_user_no:'',
            list:[],
            arr:[],
            parent_code:'',
            area_code:'',
            arr1:[],
            area_name:'',
			bnk_name:'',
			parent_name:''
        }
    },
    watch:{
        parent_code(val){
            // console.log(val);
            
        }
    },
    methods:{
        close(){
            this.$store.state.isE_e = !this.$store.state.isE_e;
        },
        area(){
            this.getAreaList2()
        },
        getAreaList(item,list){
			
			let _this=this;
			if(_this.card_no==""){
				_this.$message({
					message: '银行卡号不能为空',
					type: 'warning'
					});
			}else if(_this.holder_user_name==''){
				_this.$message({
					message: '姓名不能为空',
					type: 'warning'
					});
			}if(_this.holder_user_no==''){
				_this.$message({
					message: '身份证号不能为空',
					type: 'warning'
					});
			}
            axios({
                method:'post',
                url:'/api/api/v1/getAreaList',
            }).then(function(data){
                console.log(data)
                if(data.data.code==200){
                    _this.list=data.data.data 
                    // _this.parent_code=item.parent_code
                    // console.log(_this.parent_code)
                }
            })
        },
        getAreaList2(item,arr){
           
            let _this=this;
            axios({
                method:'post',
                url:'/api/api/v1/getAreaList',
                data:{
                    parent_code:_this.parent_code
                }
            }).then(function(data){
                
                console.log(data)
                if(data.data.code==200){
                    _this.arr=data.data.data
                    console.log( _this.arr)
				}
            })
        },
        getAreaBranchBank(){
            let _this=this;
            axios({
                method:'post',
                url:'/api/api/v1/getAreaBranchBank',
                data:{
                    area_code:_this.area_code,
                    bank_no:_this.card_no,
                }
            }).then(function(data){
                
                console.log(data)
                if(data.data.code==200){
					_this.arr1=data.data.data.list
                    console.log( _this.arr1)
                }else if(data.data.code==400){
					_this.$message({
							message: '银行卡信息错误',
							type: 'warning'
						});
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
			if(_this.phone.length<6){
                // alert('手机号码不正确')
                this.$message({
                    message: '手机号码不正确',
                    type: 'warning'
                    });
			}
			axios({
				method:"post",
				url:"/api/api/v1/bindBankSendSMS",
				data:
				{phone:_this.phone},
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
				if(data.data.code==400){		
                    // alert('图片验证码不对');
                    this.$message.error('图片验证码不对');
				}else if(data.data.code==200){
                    // alert('发送成功')
                     this.$message({
                        message: '发送成功',
                        type: 'success'
                        });
				}
			})	
        },

		//绑定银行卡
		bind_bank(){
            if(this.phone==""){
                    // alert('手机号不能为空')
                    this.$message({
                        message: '手机号不能为空',
                        type: 'warning'
                        });
                }
             if(this.holder_user_name==""){
                // alert('持卡人姓名不能为空')
                 this.$message({
                        message: '持卡人姓名不能为空',
                        type: 'warning'
                        });
             }   
            let _this = this;
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
			// var authorization= sessionStorage.getItem('refresh_jwt_token');
			axios({
				method:"post",
				url:'/api/api/v1/account/bind_bank',
				data:{
					holder_user_name:_this.holder_user_name,
					holder_user_no:_this.holder_user_no,
					card_no:_this.card_no,
					holder_user_phone:_this.phone,
                    bank_city:_this.area_name,
                    bank_province:_this.parent_name,
                    branch_name:_this.bnk_name,
                    bank_name:_this.bank_name,
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
				console.log('绑定银行卡',data)
				if(data.data.code==200){
                    // alert('认证成功')
                    _this.$message({
                        message: '绑定成功',
                        type: 'success'
                        });
                    _this.$store.state.isE_e=!_this.$store.state.isE_e;
                    console.log( _this.$store.state.isE_e)
				}if(reg.test(_this.holder_user_no) === false){
                    // alert('身份证号有误')
                     _this.$message.error('身份证号有误');
                }else if(data.data.code==400){
                     _this.$message.error('银行卡已被绑定过');
                }if(data.data.code==400){
                    _this.$message.error('银行卡信息认证失败');
                }
                
			})
		}
    },
    computed:{
        isE_e(){
            return this.$store.state.isE_e
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
	height: 7.68rem;
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
	height: 9rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	overflow: scroll
}

.tc___2T4d7 .login___1dGzT .login_content___3RcM4 img {
	width: 10.92rem;
	height: 1.49rem
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


