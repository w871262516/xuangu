<template>

    <div id='mounth'
           ref="myChart">
           
      </div>

</template>
<script>
import echarts from 'echarts'
import kdata from '../config/temdata'
import axios from 'axios'
export default {
  name: 'mounth',
  data () {
    return {
      m:'m',
      data:[],
    }
  },
  created () {
    this.stockQuotation()
  },
  mounted () {
      // console.log(kdata)
    // this.setEchartOption()
    // this.myChart = echarts.init(document.getElementById('week'))
    // this.myChart.setOption(this.echartsOption)
    this.$chart.line2('mounth');
    
  },
  methods: {
    stockQuotation(){
        let _this=this
          axios({
            method:'get',
            url:'/api/api/v1/stockQuotation',
            params:{
              stock_code:_this.$store.state.stock_marketcode,
              period:_this.m
            }
          }).then(function(data){
            console.log('mmmmmmmmmm',data)
            if(data.data.code==200){
            _this.data=data.data.data.data
            // console.log('月供月供月供',_this.data)
              for (var i = 0; i < _this.data.length; i++) {
                  var data1 = []
                  var time = _this.data[i].date.toString()
                  // console.log(time)
                  //处理日期格式
                  data1.push(time.substring(0,4)+'-'+time.substring(4,6)+'-'+time.substring(6))
                  data1.push(parseFloat(_this.data[i].open))
                  data1.push(parseFloat(_this.data[i].close))
                  data1.push(parseFloat(_this.data[i].low))
                  data1.push(parseFloat(_this.data[i].high))
                  data1.push(parseFloat(_this.data[i].volume))
                  _this.data.push(data1)
                  // console.log('mmmmmmmmm',data1)  
              }
            _this.$chart.line2('mounth',data1);
            }
           
          })
      }
  },
  computed:{
      ischart(){
          return this.$store.state.ischart
      }
  }
}
</script>
<style scoped>
#mounth{
        width: 9.8rem;
        height: 5.58rem;
    }
</style>
