<template>
    <div class="top___2z9wD">
		<div class="logo___2zfbx">
			<img src="../assets/1688fp.jpg"/>
			<span></span>
		</div> 
		<div class="login___2bth0">
			<div data-flex="dir:left" >
				<div class="login_info___2iKbl" :class="ismine?'none':'login_info___2iKbl'">
					<div class="login_header___3hhXk" data-flex="dir:left cross:center">
						<p>用户</p>
						<span>{{this.$store.state.phone_num}}</span>
					</div>
					<div class="login_middle___3R69S" data-flex="dir:left cross:center">
						<p>余额￥：{{this.$store.state.available_amount}}</p>
					</div>
					<ul class="login_bottom___jZNAX" data-flex="dir:left cross:center">
						<li data-flex="dir:left">
							<img src="../assets/money.png"/>
							<span @click="zxcz">在线充值</span>
						</li>
						<li data-flex="dir:left">
							<img src="../assets/money1.png"/>
							<span @click="zxtx">在线提现</span>
						</li>
					</ul>
				</div>
				<div :class="islogin?'nologin___15zt8':'none'">
				<ul data-flex="dir:left" >
					<li @click="login">登录</li>
					<li @click="regist">注册</li>
				</ul>
				</div>
				<div class="headimg___12hKH" data-flex="dir:left">
					<img src="../assets/lo.png" @click="mine"/>
				</div>
			</div>
		</div> 
	</div>
</template>
<script>
import axios from 'axios'
export default {
    name: "Top",
    data(){
        return{

        }
	},
	methods:{
		mine:function(){
			 console.log(this.$store.state.authorization)
			if(this.$store.state.authorization==""){
				this.$message({
						message: '请先登录！',
						 type: 'warning'
				});
					this.$store.state.isC=false;
				console.log(this.$store.state.isC)
			}else if(this.$store.state.authorization==this.$store.state.authorization){
				this.$store.state.isB = !this.$store.state.isB;
			}
		},
		login:function(){
		 this.$store.state.isC = !this.$store.state.isC;
		//  console.log(this.$store.state.isC )
		},
		regist:function(){
			this.$store.state.isC_c = !this.$store.state.isC_c;
		},
		zxcz(){
			this.$store.state.iszxcz = !this.$store.state.iszxcz;
		},
		zxtx(){
			this.$store.state.iszxtx = !this.$store.state.iszxtx;
		}
	},
	mounted(){
		
	},

	created(){

	},
	computed:{
		islogin(){
			return this.$store.state.islogin;
		},
		ismine(){
			
			return this.$store.state.ismine
		}
	}

}
</script>
<style scoped>
@import '../../static/flex.css';
.none{
	display: none;
}
.top___2z9wD {
	display: flex;
	margin-top: .62rem;
	margin-bottom: .18rem
}

.top___2z9wD .logo___2zfbx {
	width: 11.72rem
}

.top___2z9wD .logo___2zfbx img {
	width: 1.5rem;
	height: 1.53rem;
	margin-left: .25rem
}

.top___2z9wD .logo___2zfbx span {
	font-size: .84rem;
	color: #dcdcdc;
	margin-left: .48rem
}

.top___2z9wD .login___2bth0 {
	min-width: 5.28rem;
	height: 1.36rem;
	background: rgba(0, 0, 0, .1);
	border-radius: .2rem
}

.top___2z9wD .login___2bth0 .nologin___15zt8 {
	margin-left: .36rem
}

.top___2z9wD .login___2bth0 .nologin___15zt8 li {
	width: 1.04rem;
	height: .32rem;
	background: #29343b;
	font-size: .18rem;
	color: #fff;
	border-radius: .1rem;
	margin-top: .56rem;
	text-align: center;
	line-height: .32rem;
	margin-right: .26rem;
	cursor: pointer
}

.top___2z9wD .login___2bth0 .login_info___2iKbl {
	width: 4rem;
	margin-left: .3rem;
	margin-right: .35rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_header___3hhXk p {
	font-size: .28rem;
	color: #dedfdf;
	margin-top: .12rem;
	margin-right: .08rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_header___3hhXk span {
	font-size: .25rem;
	color: #777b7e;
	margin-top: .18rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_middle___3R69S {
	margin-bottom: .12rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_middle___3R69S p {
	font-size: .22rem;
	color: #dedfdf;
	margin-top: .12rem;
	margin-right: .18rem;
	width: 8.2rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_bottom___jZNAX li {
	margin-right: .2rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_bottom___jZNAX li img {
	width: .21rem;
	height: .23rem;
	margin-right: .1rem
}

.top___2z9wD .login___2bth0 .login_info___2iKbl .login_bottom___jZNAX li span {
	display: block;
	width: 1.5rem;
	font-size: .2rem;
	color: #0f9de6
}

.top___2z9wD .login___2bth0 .headimg___12hKH {
	margin-right: .25rem;
	width: 1.04rem;
	height: 1.04rem;
	border-radius: .2rem;
	background: hsla(0, 0%, 100%, .15);
	margin-top: .15rem
}

.top___2z9wD .login___2bth0 .headimg___12hKH img {
	width: .4rem;
	height: .34rem;
	margin-top: .32rem;
	margin-left: .25rem
}
</style>


