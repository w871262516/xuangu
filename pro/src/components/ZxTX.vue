<template>
    <div :class="iszxtx?'none___XY1K0':'tc___1zAmM'">
        <div class="recharge___29E1N">
            <div class="header___2L70c">
                <span>提现</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
            <div class="content___1mPRP">
                <div class="recharge_bank___2wsYN" data-flex="dir:left">
					<span>选择银行卡</span>
					<select name="" @click="bank_list" v-model="id">
						<option v-for="(item,i) in arr" :key="i" :value="item.id">{{item.card_no}}</option>
					</select>
				</div>
                <div class="recharge_bank___2wsYN" data-flex="dir:left">
                    <span>输入金额</span>
                    <input type="" value="" placeholder="请输入金额（2.00~490000.00）" v-model='amount'/>
                </div>
                <div class="recharge_bank___2wsYN" data-flex="dir:left">
                    <span>请输入支付密码</span>
                    <input type="password" value="" placeholder="请输入支付密码" v-model='password'/>
                </div>
                <div class="agreement___3S431" data-flex="dir:left">
                    
                </div>
                <div class="btn___18onr">
                    <button class="sub___NJXgs" @click='applyWithdrawal'>提现</button>
                </div>
            </div>
        </div>
    </div>	
</template>
<script>
import axios from 'axios'
export default {
    name:'ZxTX',
    data(){
        return{
            id:'',
            amount:'',
			password:'',
			arr:[],
        }
    },
    methods:{
        close(){
            this.$store.state.iszxtx =!this.$store.state.iszxtx;
        },
        applyWithdrawal(){
			let _this =this;
			if(_this.amount==''){
				_this.$message({
						message: '提现金额不能为空',
						type: 'warning'
					});
			}else if(_this.amount<1){
				_this.$message({
						message: '提现金额不能小于1元',
						type: 'warning'
					});
			}else if(_this.id==""){
				_this.$message({
						message: '未获取到您绑定的银行卡信息',
						type: 'warning'
					});
			}
            var authorization= sessionStorage.getItem('refresh_jwt_token');
            axios({
                method:'post',
                url:'/api/api/v1/account/applyWithdrawal',
                data:{
                    bank_id:_this.id,
                    amount:_this.amount,
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
				console.log(data)
				if(data.data.code==200){
					_this.$message({
							message: '申请成功',
							type: 'success'
						});
				this.$store.state.iszxtx =!this.$store.state.iszxtx;
				}else if(_this.$store.state.password!=_this.password){
					_this.$message({
						message: '"支付密码不正确"',
						type: 'warning'
					});
				}
            })
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
				if(data.data.code==200){
					console.log(data)
				_this.arr=data.data.data
				}
				
			})
		},
        
    },
    computed:{
        iszxtx(){
            return this.$store.state.iszxtx;
        }
    }
}
</script>
<style scoped>
@import '../../static/flex.css';
.tc___1zAmM {
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0
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
	color: #fff;
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

.none___XY1K0 {
	display: none
}
</style>
