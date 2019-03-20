<template>

    <div :class="iszxcz?'none___XY1K0':'tc___1zAmM'">
						<div class="recharge___29E1N">
							<div class="header___2L70c">
								<span>充值</span>
								 <img src="../assets/close.png" @click="close"/>
							</div>
							<div class="content___1mPRP">
								<div class="recharge_bank___2wsYN" data-flex="dir:left">
									<span>选择通道</span>
									<select name="" @click="pay">
										<option v-for="(item,index) in list" :key="index">{{item.channel_name}}</option>
									</select>
								</div>
								<div class="recharge_bank___2wsYN" data-flex="dir:left">
									<span>选择银行卡</span>
									<select name="" @click="bank_list" v-model="id">
										<option v-for="(item,i) in arr" :key="i" :value="item.id">{{item.card_no}}</option>
									</select>
								</div>
								<div class="recharge_bank___2wsYN" data-flex="dir:left">
									<span>输入金额</span>
									<input type="number" value="" placeholder="最低充值金额为1.00元" v-model="amount"/>
								</div>
								<!-- <div class="recharge_bank___2wsYN" data-flex="dir:left">
									<span>请输入支付密码</span>
									<input type="password" name="" placeholder="请输入支付密码"/>
								</div> -->
								<div class="agreement___3S431" data-flex="dir:left">
									<!-- <img src="../assets/d.png"/> -->
									<!-- <p>我已阅读并同意 -->
										<!-- <span>充值协议书</span> -->
									<!-- </p> -->
								</div>
								<div class="btn___18onr">
									<input type="submit" value="确认" class="sub___NJXgs" @click="recharge()"/>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'ZxCz',
    data(){
        return{
			pc:'pc',
			list:[],
			amount:'',
			arr:[],
			bank_card:'',
			channel_code:'',
			card_no:'',
			id:'',
        }
	},
    methods:{
        close(){
            this.$store.state.iszxcz=!this.$store.state.iszxcz;
		},
		bank_list(item,i){
			let _this=this;
			axios({
				method:'post',
				url:'/api/api/v1/account/my_bank_list',
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
				_this.arr=data.data.data
			})
		},
		recharge(){
			let _this=this;
			if(_this.id==''){
				_this.$message({
						message: '银行卡不能为空',
						type: 'warning'
					});
			}else if(_this.amount<1){
				_this.$message({
						message: '充值金额不正确,最低充值金额为1.00元',
						type: 'warning'
					});
			}
			axios({
				method:"post",
				url:'/api/payment/v1/recharge',
				data:{
					amount:_this.amount,
					pay_channel:_this.channel_code,
					user_bank:_this.id
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
				console.log(data.data);
				console.log((data.data).split('<script>')[1].split('<\/script>')[0])
				var  url = (data.data).split('<script>')[1].split('<\/script>')[0]
				eval(url)
					// location.href='http://www.555oil.com/bt8585pay.php?ybdata=https%3A%2F%2Fpay.heepay.com%2FPayment%2FIndex.aspx%3Fversion%3D3%26agent_id%3D2118265%26agent_bill_id%3Dchannel_0120190318112638150739%26agent_bill_time%3D20190318112639%26pay_type%3D20%26pay_amt%3D1%26notify_url%3Dhttp%3A%2F%2Fwww.555oil.com%2Fnotify_pay.php%26return_url%3Dhttp%3A%2F%2Fwww.555oil.com%2Freturn_pay.php%26user_ip%3Dnull%26goods_name%3DHome+appliance%26goods_num%3D1%26goods_note%3DHome+appliance%26remark%3DHome%26is_phone%3D0%26bank_card_type%3D-1%26pay_code%3D0%26sign_type%3DMD5%26sign%3Dd25c91715a2ba4c9d3acfc1a194687eb'
					// console.log(window.location.href)
				 if(data.data.code==401){
					_this.$message.error('身份认证失败请重新登陆');
				}else if(code==400){
					_this.$message.error('充值金额不正确,最低充值金额为1.00元');
				}
				console.log(data)
			})
		},
		pay(){
			this.paymentChannel()
		},
		paymentChannel(){
			let _this=this
			axios({
				method:'get',
				url:'/api/api/v1/paymentChannel',
				params:{
					platform:_this.pc
				}
			}).then(function(data){
				console.log(data)
				_this.list=data.data.data
				_this.channel_code=data.data.data[0].channel_code
				console.log(_this.channel_code)
			})
		}
    },
    computed:{
        iszxcz(){
            return this.$store.state.iszxcz
        }
    }
}
</script>
<style scoped>
@import '../../static/flex.css';

.none___XY1K0{
    display: none
}
.tc___1zAmM {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100
}

.tc___1zAmM .recharge___29E1N {
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

.tc___1zAmM .recharge___29E1N .header___2L70c {
	height: 1.02rem;
	background: #e01033;
	border-top-left-radius: .1rem;
	border-top-right-radius: .1rem
}

.tc___1zAmM .recharge___29E1N .header___2L70c span {
	display: block;
	height: 1.02rem;
	font-size: .44rem;
	color: #ccc;
	text-align: center;
	line-height: 1.02rem
}

.tc___1zAmM .recharge___29E1N .header___2L70c img {
	position: absolute;
	right: .5rem;
	top: .35rem;
	width: .3rem;
	height: .3rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP {
	width: 12.15rem;
	border-bottom-left-radius: .1rem;
	border-bottom-right-radius: .1rem;
	background: url(../assets/0053946779ba62ae07ab8cc2a3bfadaf.png) no-repeat 50%;
	padding-bottom: .4rem;
	overflow: hidden
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN {
	margin-top: .54rem;
	margin-left: 2.4rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN span {
	display: block;
	font-size: .25rem;
	color: #fff;
	height: .69rem;
	line-height: .69rem;
	width: 1.7rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN select {
	width: 4.7rem;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border-radius: .1rem;
	color: #ccc;
	padding-left: .38rem;
	border: .01rem solid #fff
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN input {
	width: 4.35rem;
	height: .69rem;
	border-radius: .1rem;
	background: hsla(0, 0%, 100%, .1);
	background-color: transparent;
	border: .01rem solid #fff;
	color: #fff;
	padding-left: .38rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN input::-webkit-input-placeholder {
	color: #fff
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN input::-moz-input-placeholder {
	color: #fff
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .recharge_bank___2wsYN input:-ms-input-placeholder {
	color: #fff
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .agreement___3S431 {
	height: .85rem;
	line-height: .85rem;
	font-size: .2rem;
	color: #fff;
	margin-left: 2.38rem;
	margin-bottom: .2rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .agreement___3S431 img {
	width: .24rem;
	height: .24rem;
	display: block;
	margin-top: .28rem;
	margin-right: .12rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .agreement___3S431 p span {
	color: #f82324
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .btn___18onr {
	width: 6.2rem;
	height: .84rem;
	margin: 0 auto;
	padding-bottom: .44rem
}

.tc___1zAmM .recharge___29E1N .content___1mPRP .btn___18onr .sub___NJXgs {
	width: 6.2rem;
	height: .84rem;
	color: #fff;
	font-size: .28rem;
	border-radius: .1rem;
	background: #e11222
}

</style>
