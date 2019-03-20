<template>
    
    <div :class="isE_E?'none___2_Gg9':'tc___2T4d7'">
        <div class="login___1dGzT">
            <div class="header___1sV0E">
                <span>银行卡</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
            <!--绑定银行卡/实名认证-->
            <div class="login_content___3RcM4"> 
                <div>
                        <div class="list" v-for="(item,index) in list" :key="index">
                        <P>{{item.bank_name}}</P>
                        <p>{{item.card_no}}</p>
                    <!-- <button class="remove">解绑</button> -->
                    </div>
                </div>
                           			
                <div class="go___ghsVV">
                    <button @click="add">添加银行卡</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Addbank',
    data(){
        return{
			list:[]
        }
	},
	methods:{
		close:function(){
            // console.log('aaa')
			this.$store.state.isE_E = !this.$store.state.isE_E;
        },
        add(){
			this.my_bank_list()
			this.$store.state.isE_e=!this.$store.state.isE_e;
			this.$store.state.isE_E = !this.$store.state.isE_E;
        },
        my_bank_list(){
            let _this=this
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
                if(data.data.code==200){
                    _this.list=data.data.data
                }
            })
        }
	},
	mounted(){
        this.my_bank_list();

	},
	computed:{
		isE_E(){
			return this.$store.state.isE_E
        },
        token(){
            return this.$store.state.authorization
        }
	},
	watch:{
		isE(val){
			// console.log('isE',val);			
        },
        token(val){
            this. my_bank_list()
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
	top: 60%;
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
	overflow: scroll
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
.list{
    margin: .2rem;
    display: flex;
    flex-direction: column;
    background: #363544;
    border-radius: 10px;
	
}
.list p{
	color: #979c9e;
	margin-left: .3rem;
	font-size: .3rem;    
}
.remove{
    float: right;
}
</style>


