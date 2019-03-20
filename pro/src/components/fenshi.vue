<template>



    <div id="fenshi"
        ref="fenshi"
    >
    </div>

</template>
<script>
import echarts from 'echarts'
// import Kline from 'kline';
import m_data from '../config/temdata'
import axios from 'axios';
export default {
    name:"Fenshi",
    data(){
        return{
            categoryData:{//分时数据（echart用）
                'data':[],
                "yestclose": 0
            },
        }
    },
    created(){
        this.getYesCloseStock()
    },
    methods:{
        getYesCloseStock(){
            let _this=this;
            axios({
                method:'get',
                url:"/api/api/v1/stockMinuteQuotation",
                params:{
                    stock_code:_this.$store.state.stock_marketcode
                },
                transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret
				    }],
				crossDomain:true,
            }).then(function(data){
                if(data.data.code==200){
                    _this.categoryData.yestclose = data.data.data.pClose
                    _this.rawData=data.data.data
                }
                console.log(">>>>分时",data)
                 _this.categoryData.data = []
                    for (var i = 0; i <  _this.rawData.length; i++) {
                    var data1 = []
                    if( _this.rawData[i].time.toString().length==3){
                         _this.rawData[i].time = '0'+ _this.rawData[i].time.toString()
                    }else{
                     _this.rawData[i].time =  _this.rawData[i].time.toString() 
                    }
                    data1.push( _this.rawData[i].time)
                    //当前价
                    data1.push(parseFloat( _this.rawData[i].close))
                    //均价
                    // var avgPrice = ((parseInt(rawData[i].turnover)/rawData[i].volume)*100)
                    avg = avg + parseInt( _this.rawData[i].turnover)
                    
                    vol = (vol +  _this.rawData[i].volume)
                    var avgPrice = avg/vol*100
                    //均价保留两位数
                    data1.push(parseFloat(((avgPrice*100)/100).toFixed(2)))
                    //成交量
                    data1.push(_this.rawData[i].volume)
                    this.categoryData.data.push(data1)
                }







            })
        },

    },
    mounted(){
        console.log(m_data);
        this.$chart.line1('fenshi');
    },
    computed:{
        isfenshi(){
            return this.$store.state.isfenshi
        }
    }
}
</script>
<style scoped>
#fenshi{
    width: 9.8rem;
    height: 5.58rem;
}
</style>
