<template>

    <div id='week'
           ref="myChart">
           
      </div>

</template>
<script>
import echarts from 'echarts'
import kdata from '../config/temdata'
import axios from 'axios'
export default {
  name: 'week',
  data () {
    return {
        w:'w',
        data:[]
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
    this.$chart.line2('week');
    
  },
  methods: {
    stockQuotation(){
        let _this=this
          axios({
            method:'get',
            url:'/api/api/v1/stockQuotation',
            params:{
              stock_code:_this.$store.state.stock_marketcode,
              period:_this.w
            }
          }).then(function(data){
            // console.log('wwwwwwwwww',data)
            if(data.data.code==200){
            _this.data=data.data.data.data
            // console.log(_this.data)
              for (var i = 0; i < _this.data.length; i++) {
                  var data1 = []
                  var time =_this.data[i].date.toString()
                  // console.log(_this.data[i].date)
                  //处理日期格式
                  data1.push(time.substring(0,4)+'-'+time.substring(4,6)+'-'+time.substring(6))
                  data1.push(parseFloat(_this.data[i].open))
                  data1.push(parseFloat(_this.data[i].close))
                  data1.push(parseFloat(_this.data[i].low))
                  data1.push(parseFloat(_this.data[i].high))
                  data1.push(parseFloat(_this.data[i].volume))
                  _this.data.push(data1)
                  // console.log('wwwwwwwww',data1) 
              }
              _this.$chart.line2('week',data1);
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
#week{
        width: 9.8rem;
        height: 5.58rem;
    }

</style>
