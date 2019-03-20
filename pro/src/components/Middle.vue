 <template>
    <div class="index___2pv9Y" data-flex="dir:left">
						<div class="index_left___okodi">
							<p>{{this.$store.state.name}}</p>
							<span>
								{{this.$store.state.symbol}}
							</span>
						</div>
						<div class="index_middle___31rb0">
							<div class="index_middle_top___3f6ba" data-flex="dir:left">
								<span class="color___XgPE9">{{this.$store.state.openPrice}}</span>
								<img src="" alt="">
								<div class="index_middle_top_info___3yMOk" data-flex="dir:top">
									<b class="index_middle_price___IEfOJ">{{this.$store.state.change}}</b>
									<i class="index_middle_persent___3HgLe">
										{{this.$store.state.changeRate}}
									</i>
								</div>
							</div>
							<div class="index_middle_middle___KRVai" data-flex="dir:left">
								<p>
								涨停:{{this.$store.state.pClose1}}
								<!-- <span class="color___XgPE9">20.98</span> -->
							</p>
							<p>
								跌停:{{this.$store.state.pClose2}}
								<!-- <span class="color___XgPE9">20.98</span> -->
							</p>
							</div>
							<div class="index_middle_bottom___1nis0" data-flex="dir:left">	
							</div>
						</div>
						<div class="index_right___3yINR" data-flex="dir:left">
							<div class="index_right_info___1BLnq">
								<p>今开：<span class="color___XgPE9">{{this.$store.state.lastPrice}}</span></p>
								<p>最高：<span>{{this.$store.state.highPrice}}</span></p>
								<p>最低：<span>{{this.$store.state.lowPrice}}</span></p>
								<p>昨收：<span>{{this.$store.state.pClose}}</span></p>
							</div>
							<div class="index_right_info___1BLnq">
								<p>成交量：<span class="color1___1DxdT">{{this.$store.state.volume}}万手</span></p>
								<p>成交额：<span>{{this.$store.state.turnover}}亿</span></p>
								<p>总股本：<span>20.21亿</span></p>
								<p>流通市值：<span>20.39亿</span></p>
							</div>
							<div class="index_right_info___1BLnq">
								<p>外盘：<span>{{this.$store.state.outVol}}</span></p>
								<p>内盘：<span>{{this.$store.state.inVol}}</span></p>
								<p>市净率：<span>{{this.$store.state.pb}}</span></p>
								<p>市盈率：<span>{{this.$store.state.pe}}</span></p>
							</div>
						</div>
			</div>
</template>
<script>
export default {
    name:'Middle',
    data(){
        return{
			
        }
	},
	methods:{

	},
	mounted(){

	},
	computed:{
		
	},
	watch:{
		

	}
}
</script>
<style scoped>
@import '../../static/flex.css';
.index___2pv9Y {
 	margin-bottom: .14rem;
 	height: 2.25rem;
    background: rgba(0, 0, 0, .1);
 	border-radius: .2rem;
     display: flex;
}

 .index___2pv9Y .index_left___okodi {
 	width: 2.3rem;
 	height: 2.25rem;
 	overflow: hidden
 }

 .index___2pv9Y .index_left___okodi p {
 	font-size: .27rem;
 	height: .67rem;
 	line-height: .67rem;
 	color: #fff;
 	text-align: center;
 	margin-top: .5rem
 }

 .index___2pv9Y .index_left___okodi span {
 	display: block;
 	color: #fff;
 	font-size: .2rem;
 	text-align: center
 }

 .index___2pv9Y .index_left___okodi button {
 	display: block;
 	width: 1.21rem;
 	height: .31rem;
 	padding: 0;
 	margin-left: .48rem;
 	margin-top: .36rem;
 	color: #fff;
 	background: #e11127;
 	border-radius: .05rem;
 	font-size: .17rem
 }

 .index___2pv9Y .index_left___okodi button i {
 	font-size: .2rem;
 	margin-right: .1rem
 }

 .index___2pv9Y .index_middle___31rb0 {
 	width: 4.52rem;
 	height: 1.94rem;
 	border-left: .01rem solid rgba(0, 0, 0, .4);
 	border-right: .01rem solid rgba(0, 0, 0, .4);
 	margin-top: .15rem
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba {
 	height: .86rem;
 	border-bottom: .01rem dotted #363b3e
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba span {
 	display: block;
 	font-size: .35rem;
	color: #df0e3d;
 	margin-left: .38rem;
 	margin-top: .2rem;
 	margin-right: .25rem
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .color___XgPE9 {
 	color: #e21414
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .color1___1DxdT {
 	color: #0ac445
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba img {
 	width: .54rem;
 	height: .56rem;
 	margin-top: .05rem;
 	margin-right: .42rem
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .index_middle_top_info___3yMOk {
 	font-size: .2rem
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .index_middle_top_info___3yMOk .index_middle_price___IEfOJ {
 	display: block;
 	margin-bottom: .18rem;
 	color: #e21414;
 	font-weight: 400
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .index_middle_top_info___3yMOk .index_middle_persent___3HgLe {
 	display: block;
 	color: #e21414
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .index_middle_top_info___3yMOk .index_middle_price1___1cs4s {
 	display: block;
 	margin-bottom: .18rem;
 	color: #0ac445;
 	font-weight: 400
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_top___3f6ba .index_middle_top_info___3yMOk .index_middle_persent1___1ayN8 {
 	display: block;
 	color: #0ac445
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_middle___KRVai {
 	height: .54rem;
 	border-bottom: .01rem dotted #363b3e
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_middle___KRVai p {
 	height: .54rem;
 	line-height: .54rem;
 	margin: 0 .4rem; 	
    font-size: .2rem;
 	color: #d2d2d2
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_middle___KRVai p span {
 	color: #e21416
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_middle___KRVai .color___XgPE9 {
 	color: #e21414
}

 .index___2pv9Y .index_middle___31rb0 .index_middle_middle___KRVai .color1___1DxdT {
 	color: #0ac445
 }

 .index___2pv9Y .index_middle___31rb0 .index_middle_bottom___1nis0 {
 	margin-left: .38rem;
 	font-size: .2rem;
 	color: #f4f4f4;
 	height: .6rem;
 	line-height: .6rem
 }

 .index___2pv9Y .index_right___3yINR {
 	width: 8.8rem;
 	height: 1.82rem;
 	margin-top: .25rem;
 	margin-left: .6rem
 }

 .index___2pv9Y .index_right___3yINR .index_right_info___1BLnq {
 	margin-right: .5rem
 }

 .index___2pv9Y .index_right___3yINR .index_right_info___1BLnq p {
 	width: 3rem;
    color: #d2d2d2;
 	font-size: .2rem;
 	margin-bottom: .2rem
 }

 .index___2pv9Y .index_right___3yINR .index_right_info___1BLnq p .color___XgPE9 {
 	color: #5aa95a
 }

 .index___2pv9Y .index_right___3yINR .index_right_info___1BLnq p .color1___1DxdT {
 	color: #df0e3e
 }

</style>


