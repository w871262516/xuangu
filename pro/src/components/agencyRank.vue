<template>
  <div style="width: 100%;height: 100%;" @mouseover="stopauto" @mouseout="beginauto">
    <div style="display: inline-block;cursor: pointer;right:30px;top:13px;position: absolute" class="selectDrop"
         ref="agencyRank">
      <span data-type='d' @click.stop="select($event,'d')" class="select selectTime">今日</span>
      <span data-type='m' @click.stop="select($event,'m')" class="select">本月</span>
      <span data-type='y' @click.stop="select($event,'y')" class="select">全年</span>
      <span data-type='t' @click.stop="select($event,'t')" class="select">总计</span>
    </div>

    <Dropdown style="cursor: pointer;" class="dropdown" @on-click="dropClick">
      <a href="javascript:void(0)" style="color: #4D5EC1;font-size: 12px;">
        {{selectTxt}}
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="今日">今日</DropdownItem>
        <DropdownItem name="本月">本月</DropdownItem>
        <DropdownItem name="全年">全年</DropdownItem>
        <DropdownItem name="总计">总计</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <div class="chart" style="height: calc(100% - 20px);width: 100%;">
      <div id="rankChart" style="width: 100%;height:100%"></div>
    </div>
  </div>
</template>

<script>
  import {getBeforeDate, cardNum} from "../../config/drawEcharts";

  export default {
    name: "agencyRank",
    data() {
      return {
        selectTime: true,//是否存在年月日选项
        dCountName: [],
        dCount: [],
        mCountName: [],
        mCount: [],
        yCountName: [],
        yCount: [],
        tCountName: [],
        tCount: [],
        nowCountName: [],
        nowCount: [],
        selectTxt: '今日',
        showdrop: false,//下拉是否展示
        ei: 0,//控制日月年事件,
        auto: true
      }
    },
    methods: {

      getchartW() {
        let chartW = document.getElementsByClassName('chart')[0];
        let selectdrop = document.getElementsByClassName('selectDrop');
        let drop = document.getElementsByClassName('dropdown');
        for (let i = 0; i < selectdrop.length; i++) {
          if (chartW.clientWidth <= 400) {
            this.showdrop = true;
            selectdrop[i].style.display = 'none'
            drop[i].style.display = 'block'
          } else {
            this.showdrop = false;
            selectdrop[i].style.display = 'block'
            drop[i].style.display = 'none'
          }
        }
      },


      stopauto() {
        this.auto = false;
      },
      beginauto() {
        this.auto = true;
      },
      autoSelect() {//自动切换今日年
        let that = this;
        let events = {
          e1: () => {
            that.draw(that.dCountName, that.dCount);
            that.selectTxt = '今日';
            that.$refs.agencyRank.children[0].className = 'select selectTime';
            that.$refs.agencyRank.children[1].className = 'select';
            that.$refs.agencyRank.children[2].className = 'select';
            that.$refs.agencyRank.children[3].className = 'select';
          },
          e2: () => {
            that.draw(that.mCountName, that.mCount);
            that.selectTxt = '本月';
            that.$refs.agencyRank.children[1].className = 'select selectTime';
            that.$refs.agencyRank.children[0].className = 'select';
            that.$refs.agencyRank.children[2].className = 'select';
            that.$refs.agencyRank.children[3].className = 'select';
          },
          e3: () => {
            that.draw(that.yCountName, that.yCount);
            that.selectTxt = '全年';
            that.$refs.agencyRank.children[2].className = 'select selectTime';
            that.$refs.agencyRank.children[1].className = 'select';
            that.$refs.agencyRank.children[0].className = 'select';
            that.$refs.agencyRank.children[3].className = 'select';
          },
          e4: () => {
            that.draw(that.tCountName, that.tCount);
            that.selectTxt = '总计';
            that.$refs.agencyRank.children[3].className = 'select selectTime';
            that.$refs.agencyRank.children[1].className = 'select';
            that.$refs.agencyRank.children[2].className = 'select';
            that.$refs.agencyRank.children[0].className = 'select';
          },
        };

        setInterval(() => {
          if (that.auto) {
            that.ei++;
            if (that.ei === 5) {
              that.ei = 1
            }
            events['e' + that.ei]()
          }
        }, 5000)
      },

      dropClick(a) {
        console.log(a, 'click');
        this.selectTxt = a;
        if (a === '今日') {
          this.draw(this.dCountName, this.dCount)
        } else if (a === '本月') {
          this.draw(this.mCountName, this.mCount)
        } else if (a === '总计') {
          this.draw(this.yCountName, this.yCount)
        } else {
          this.draw(this.tCountName, this.tCount)
        }
      },
      select(e, type) {
        e.target.parentNode.children[0].className = 'select';
        e.target.parentNode.children[1].className = 'select';
        e.target.parentNode.children[2].className = 'select';
        e.target.parentNode.children[3].className = 'select';
        e.target.className = 'select selectTime';
        if (type === 'd') {
          this.draw(this.dCountName, this.dCount)
        } else if (type === 'm') {
          this.draw(this.mCountName, this.mCount)
        } else if (type === 'y') {
          this.draw(this.yCountName, this.yCount)
        } else {
          this.draw(this.tCountName, this.tCount)
        }
      },
      orderDay(e) {

        let orderTimeSpan = document.getElementsByClassName('agencyTimeSpan');
        for (let i = 0; i < orderTimeSpan.length; i++) {
          orderTimeSpan[i].style.color = '#4D5EC1'
        }
        e.target.style.color = '#fff';
        console.log(e.target.parentNode.children);

      },
      draw(name, data) {
        let that = this
        let rankChart = this.$echarts.init(document.getElementById('rankChart'));
        rankChart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            formatter: "{b} : {c}单",
            backgroundColor: '#20639F',
            borderWidth: 1,
            borderColor: '#00C5FF'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: name,
              axisTick: {
                alignWithLabel: true
              },
              splitLine: {
                show: false,
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'dashed',
                  color: '#F0F2F5',
                  width: 1
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff'
                }
              }
            }
          ],
          series: [
            {
              name: '1',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [
                      {offset: 0, color: '#84C24F'},
                      {offset: 1, color: '#3CBA95'}
                    ]
                  )
                }
              },
              barWidth: '60%',
              data: data
            }
          ]
        })
      },
      getData() {

        let ss = new Date().format("yyyyMMdd");
        let month = new Date().format("yyyyMM");
        let year = new Date().format("yyyy");
        let dayArr = getBeforeDate(7);
        let obj = {
          dates: JSON.stringify({SS: ss, MONTH: month, YEAR: year, DAY: dayArr}),
          key: JSON.stringify({
            SS: 'DLYY:SS:',
            MONTH: 'DLYY:MONTH:',
            YEAR: 'DLYY:YEAR:',
            DAY: 'DLYY:DAY:',
            TOTAL: "DLYY:TOTAL"
          })
        };
        this.$http.POST('data/getDataFromRedis', obj).then((res) => {
          if (res.code === 0) {
            this.dCountName = [];
            this.dCount = [];
            this.mCountName = [];
            this.mCount = [];
            this.yCountName = [];
            this.yCount = [];
            this.tCountName = [];
            this.tCount = [];
            console.log(res.data);
            let d = JSON.parse(JSON.parse(res.data.ssTotal[0]));
            let m = JSON.parse(JSON.parse(res.data.monthTotal[0]));
            let y = JSON.parse(JSON.parse(res.data.yearTotal[0]));
            let t = JSON.parse(JSON.parse(res.data.totalTotal[0]));
            let tar = document.getElementsByClassName('selectTime')[0].getAttribute('data-type')//获取当前选中的展示类型

            for (let i in d) {
              this.dCountName.push(i);
              this.dCount.push(d[i])
            }
            console.log(this.dCountName);
            for (let i in m) {
              this.mCountName.push(i);
              this.mCount.push(m[i])
            }
            for (let i in y) {
              this.yCountName.push(i);
              this.yCount.push(y[i])
            }
            for (let i in t) {
              this.tCountName.push(i);
              this.tCount.push(t[i])
            }
            this.showdrop ? this.dropClick('今日') : this.draw(this[tar + 'CountName'], this[tar + 'Count']);

          } else {
            this.$Message.error(res.msg)
          }
        })
      }
    },
    mounted() {
      this.getchartW();
      this.getData();
      this.autoSelect();
      setInterval(this.getData, 180000)
    }
  }
</script>

<style scoped>
  .selectTime {
    color: white !important;
  }

  .select {
    font-size: 14px;
    color: #4D5EC1;
    cursor: pointer;
    margin-left: 12px;
  }

  .agencyTimeSpan {
    color: #4D5EC1;
    font-size: 14px;
    margin-left: 12px;
    cursor: pointer;
  }

  .qieHuan {
    color: #4D5EC1;
    font-size: 14px;
    margin-left: 12px;
    cursor: pointer;
  }
</style>
