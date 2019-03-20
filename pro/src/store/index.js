import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) :{
	//改变属性开关
	isB : true,//控制mine
	isC : true,//控制login,top
	isC_c :true,//控制注册,top
	isD : true,//控制zimx，资金明细
	isE : true,//控制bankcard
	isF : true,//changepassword修改登陆密码
	isF_f: true,//重置登陆密码
	isG : true,//修改支付密码
	isG_g :true,//重置支付密码
	isH : true,//inquiry询价
	isH_h:true,//pay
	isE_e:true,//Bank
	isE_E:true,//addbank
	ispay:true,
	isShengou:true,
	isChicang:true,
	isJiesuan:true,
	islogin:true,
	ismine:true,
	iszxcz:true,
	iszxtx:true,
	ischart:false,
	isfenshi:false,
	isweek:false,
	authorization:'',//用户的token
	available_amount:"",//用户可用余额
	phone_num:'',//用户手机号
	keyword:'',
	stockcode:'',
	password:"",//支付密码
	stockname:'',
	choMoney:'',//执行金
	authorization:'',//用户token
	stock_code:'',
	stock_name:'',
	//股票的盘口信息
	symbol:'SH600030',//股票代码
	name:'中国平安',//每一支股票名字
	change:'25.71',//涨跌
	changeRate:'21.03',//涨跌幅
	bid1Price:'',
	bid1Volume:'',
	volume:'2464579',//成交量
	highPrice:'24.1',//最高
	lowPrice:'23.43',//最低
	lastPrice:'23.81',//最新价
	pClose:'23.37',//昨收价
	turnover:'586.36',//成交金额
	pe:'26.66',//市盈率
	pb:'1.89',//市净率
	time:'',
	openPrice:'23.81',
	bid1Price:'23.81',//买1价
	bid2Price :'23.80',
	bid3Price :'23.79',
	ask1Price:'23.86',//卖1价
	ask2Price:'23.85',
	ask3Price:'23.84',
	bid1Volume:"1461",//买1量
	bid2Volume:'8384',
	bid3Volume:'3608',
	ask1Volume:'2358',//卖1量
	ask2Volume:'2984',
	ask3Volume:'1705',
	charge_amount:"",//充值金额
	withdraw_amount:'',//提现金额
	stock_marketcode:'',//每一支股票市场代码
	now_stock_price:'',//每一支股票价格信息
	code:'',//每一支股票代码
	outVol:'1421650',//外盘
	inVol :'598097',//内盘
	pClose1:'',//涨停
	pClose2:'',//跌停
	cycle_text:'',
	cycle:'',//选买周期
	server:'',//选买服务费
	kData:[],

}
const mutations = {
	SET_USER: (state, userInfo) => {//登录
		state.token = userInfo.token;
		state.phone = userInfo.phone;
	  },
	  SET_INFO: (state, userInfo) => {//我的
		state.userInfo = userInfo
	  },
}
const actions = {

}
const getters = {

}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});