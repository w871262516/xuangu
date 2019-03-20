<template>
    <div :class="ispay?'none':'mask'">
        <div class="pay">
            <div class="title">
                <span>支付密码</span>
                <img src="../assets/close.png" @click="close"/>
            </div>
            <div class="code">
                <input type="password" style="text-align:center; letter-spacing: .8rem;" v-model="password">
                <div class="btn" @click="applyPurchase">确认</div>
            </div>
                       
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'pop',
    data(){
        return{
            password:''
        }
    },
    methods:{
        close(){
            this.$store.state.ispay=!this.$store.state.ispay;
        },
        applyPurchase(){
                let _this = this;
            // var authorization= sessionStorage.getItem('refresh_jwt_token');
                axios({
                    method:'post',
                    url:'/api/api/v1/trade/applyPurchase',
                    data:{
                        stock_code:_this.$store.state.code,
                        stock_name:_this.$store.state.name,
                        nominal_amount:_this.$store.state.choMoney,
                        cycle:_this.$store.state.cycle,
                        cycle_id:_this.$store.state.cycle_id,
                        market_code:_this.$store.state.stock_marketcode,
                        pay_password:_this.password
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
                    if(_this.password<6){
                        _this.$message.error('密码格式错误');
                    } else if(data.data.code==200){
                        _this.$message({
						message: '支付成功',
						type: 'success'
                        });
                        _this.$store.state.ispay=!_this.$store.state.ispay;
                        _this.$store.state.isH_h=!_this.$store.state.isH_h;
                    }if(data.data.code==400){
                        _this.$message({
						message: '支付密码不正确',
						type: 'warning'
                        });
                       _this.password=""; 
                    }
                    console.log(data)
                })
        }
    },
    computed:{
        ispay(){
            return this.$store.state.ispay
        }
    }
}
</script>
<style scoped>
.none{
    display: none;
}
.mask{
    width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
}
.pay{
    position: absolute;
    top: 35%;
    left: 40%;
    width: 5rem;
    right: 0;
    bottom: 50%;
    height: 3rem;
    background: #ccc;
}
.title span{
    color: #d61510;
    padding-left: 1.8rem;
}
.title img{
    float: right;
}
.code input{
    border-radius: 20px;
    border: 1px solid #A09F9F;
    width: 3rem;
    height: .5rem;
    margin-top: .5rem;
    margin-left:1rem; 
    margin-bottom:.5rem;
    color: #262626
}
.btn{
    width: 3rem;
    background: #D61410;
    height: .5rem;
    border-radius:20px;
    text-align: center;
    margin: 0 auto;

}
</style>
