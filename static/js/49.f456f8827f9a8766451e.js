webpackJsonp([49],{"0hV/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),i=a.n(l),r=a("6D10"),n=a("NYxO"),o=a("Z4dx"),s={name:"ConfigLifeTable",components:{CommonTable:function(){return a.e(135).then(a.bind(null,"Lk4z"))},BackButton:function(){return a.e(124).then(a.bind(null,"uOVF"))},BizSectorList:function(){return a.e(125).then(a.bind(null,"jpoa"))},BaseTable:function(){return a.e(123).then(a.bind(null,"ss0d"))}},mounted:function(){this.$store.commit("SHOW_ROLLBACK")},beforeRouteLeave:function(e,t,a){this.$store.commit("HIDE_ROLLBACK"),a()},created:function(){var e=this;Object(o.c)(this.param).then(function(t){var a=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",a),e.lifeData=t.data,e.businessSmallType=e.lifeData[0].cols,e.data=e.lifeData[0].detailData})},data:function(){return{monishow:!1,totalvisble:!1,expect:{startDate:"",endDate:"",minpremium:"",maxpremium:""},businessSmallType:[],columns:[{prop:"intelligentRecommendationResult",firstTitle:"智能推荐结果",isShow:!0,secondContents:[{prop:"comAuto",secondTitle:"推荐商业险自主折扣系数",width:120,align:"center"},{prop:"market",secondTitle:"推荐车险手续费率",width:130,align:"center"}]},{prop:"parameterConfig",firstTitle:"参数配置",isShow:!0,secondContents:[{prop:"psmode",secondTitle:"定价策略模式",width:170,align:"center"},{prop:"hispremium",secondTitle:"历史保费收入",width:170,align:"center"},{prop:"hispreratio",secondTitle:"历史保费占比",width:170,align:"center"},{prop:"targepreratio",secondTitle:"目标保费占比",width:170,align:"center"},{prop:"targetocost",secondTitle:"目标车险保单成本率",width:200,align:"center"},{prop:"targebicost",secondTitle:"目标商业险保单成本率",width:210,align:"center"},{prop:"targepayrate",secondTitle:"目标保单赔付率",width:240,align:"center"},{prop:"autorate",secondTitle:"自主折扣系数",width:170,align:"center"},{prop:"marketrate",secondTitle:"手续费率",width:170,align:"center"},{prop:"hisfullpayrate",secondTitle:"历史满期标费赔付率",width:240,align:"center"},{prop:"bfpayrate",secondTitle:"标费赔付率（含ncd）",width:200,align:"center"},{prop:"cibjcostrate",secondTitle:"交强险边际成本率",width:170,align:"center"},{prop:"salecostRate",secondTitle:"销售人力成本率(%)",width:120,align:"center"},{prop:"saledriverRate",secondTitle:"营销推动费用率(%)",width:120,align:"center"},{prop:"claimRate",secondTitle:"理赔费用率(%)",width:120,align:"center"},{prop:"otherRate",secondTitle:"其他费用率(%)",width:120,align:"center"},{prop:"forcerate",secondTitle:"交强险保费占比(%)",width:120,align:"center"}]},{prop:"carInsurance",firstTitle:"经营结果预测",isShow:!0,secondContents:[{prop:"fucostRate",secondTitle:"预测车险合计保单成本率(%)",width:220,align:"center"},{prop:"fupayRate",secondTitle:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",secondTitle:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",secondTitle:"预测手续费率(%)",width:120,align:"center"},{prop:"fusalecostRate",secondTitle:"预算销售人力成本率(%)",width:120,align:"center"},{prop:"fusaledriverRate",secondTitle:"预算营销推动费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",secondTitle:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",secondTitle:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",secondTitle:"预测折扣率(%)",width:120,align:"center"}]},{prop:"disCarInsurance",firstTitle:"目标偏离程度",isShow:!0,secondContents:[{prop:"discostRate",secondTitle:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"dispayRate",secondTitle:"目标保单赔付率(%)",width:140,align:"center"},{prop:"disfeeRate",secondTitle:"目标保单费用率(%)",width:120,align:"center"},{prop:"disserverRate",secondTitle:"目标手续费率(%)",width:120,align:"center"},{prop:"dissalecostRate",secondTitle:"目标销售人力成本率(%)",width:120,align:"center"},{prop:"dissaledriverRate",secondTitle:"目标营销推动费用率(%)",width:120,align:"center"},{prop:"disclaimRate",secondTitle:"目标理赔费用率(%)",width:120,align:"center"},{prop:"disfixedRate",secondTitle:"目标固定费用率(%)",width:120,align:"center"},{prop:"disotherRate",secondTitle:"目标其他费用率(%)",width:120,align:"center"},{prop:"disdiscoutRate",secondTitle:"目标折扣率(%)",width:120,align:"center"}]}],data:[],impDialogVisible:!1,editFlag:!1,editDialogVisible:!1,selectArr:["isDisCount","isFee"],inputArr:["targepreratio","targetocost","targebicost","targepayrate","hisfullpayrate","bfpayrate","salecostRate","saledriverRate","claimRate","otherRate","forcerate"],bizSmallTypeColumn:[{prop:"lastYearComInsCount",label:"商业险上年出险次数",width:220,align:"center"},{prop:"lastYearComInsAmount",label:"商业险上年出险金额",width:250,align:"center"},{prop:"age",label:"年龄",width:120,align:"center"},{prop:"comAuto",label:"推荐商业险自主折扣系数",width:120,align:"center"},{prop:"marketRate",label:"推荐车险手续费率",width:130,align:"center"}],bizSmallTypeData:[{lastYearComInsAmount:"5000-10000",lastYearComInsCount:"3次及以上",age:"20-30",comAuto:.49,marketRate:"39%"}],paramConfigColumn:[{prop:"psmode",label:"定价策略模式",width:170,align:"center"},{prop:"hispremium",label:"历史保费收入",width:170,align:"center"},{prop:"hispreratio",label:"历史保费占比",width:170,align:"center"},{prop:"targepreratio",label:"目标保费占比",width:170,align:"center"},{prop:"targetocost",label:"目标车险保单成本率",width:200,align:"center"},{prop:"targebicost",label:"目标商业险保单成本率",width:210,align:"center"},{prop:"targepayrate",label:"目标保单赔付率",width:240,align:"center"},{prop:"autorate",label:"自主折扣系数",width:170,align:"center"},{prop:"marketrate",label:"手续费率",width:170,align:"center"},{prop:"hisfullpayrate",label:"历史满期标费赔付率",width:240,align:"center"},{prop:"bfpayrate",label:"标费赔付率（含ncd）",width:200,align:"center"},{prop:"cibjcostrate",label:"交强险边际成本率",width:170,align:"center"},{prop:"salecostRate",label:"销售人力成本率(%)",width:120,align:"center"},{prop:"saledriverRate",label:"营销推动费用率(%)",width:120,align:"center"},{prop:"claimRate",label:"理赔费用率(%)",width:120,align:"center"},{prop:"otherRate",label:"其他费用率(%)",width:120,align:"center"},{prop:"forcerate",label:"交强险保费占比(%)",width:120,align:"center"}],paramConfigData:[{psmode:"",hispremium:"460",hispreratio:"12",targepreratio:"13",targetocost:"160.32",targebicost:"105.03",targepayrate:"65",autorate:"0.83",marketrate:"8",hisfullpayrate:"70",bfpayrate:"55",cibjcostrate:"99",salecostRate:"15",saledriverRate:"3",claimRate:"55",otherRate:"4",forcerate:"45"}],targetColumn:[{prop:"fucostRate",label:"预测车险合计保单成本率(%)",width:220,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fusalecostRate",label:"预算销售人力成本率(%)",width:120,align:"center"},{prop:"fusaledriverRate",label:"预算营销推动费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}],disColumn:[{prop:"discostRate",label:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"dispayRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"disfeeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"disserverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"dissalecostRate",label:"目标销售人力成本率(%)",width:120,align:"center"},{prop:"dissaledriverRate",label:"目标营销推动费用率(%)",width:120,align:"center"},{prop:"disclaimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"disfixedRate",label:"目标固定费用率(%)",width:120,align:"center"},{prop:"disotherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"disdiscoutRate",label:"目标折扣率(%)",width:120,align:"center"}],targetData:[{fupremium:"100",fucostRate:"96",fupayRate:"103.45",fufeeRate:"11",fuserverRate:"9",fusalecostRate:"15",fusaledriverRate:"3",fuclaimRate:"55",fuotherRate:"4",fudiscoutRate:"82"}],disData:[{discostRate:"1",dispayRate:"1",disfeeRate:"1",disserverRate:"1",dissalecostRate:"-1",dissaledriverRate:"2",disclaimRate:"1",disfixedRate:"1",disotherRate:"1",disdiscoutRate:"1"}],totaltargetColumn:[{prop:"fucostRate",label:"预测车险合计保单成本率(%)",width:120,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fusalecostRate",label:"预算销售人力成本率(%)",width:120,align:"center"},{prop:"fusaledriverRate",label:"预算营销推动费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}],totaldisColumn:[{prop:"discostRate",label:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"dispayRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"disfeeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"disserverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"dissalecostRate",label:"目标销售人力成本率(%)",width:120,align:"center"},{prop:"dissaledriverRate",label:"目标营销推动费用率(%)",width:120,align:"center"},{prop:"disclaimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"disfixedRate",label:"目标固定费用率(%)",width:120,align:"center"},{prop:"disotherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"disdiscoutRate",label:"目标折扣率(%)",width:120,align:"center"}],totaltargetData:[{fucostRate:"96",fupayRate:"103.45",fufeeRate:"11",fuserverRate:"9",fusalecostRate:"15",fusaledriverRate:"3",fuclaimRate:"55",fuotherRate:"4",fudiscoutRate:"82"}],totaldisData:[{discostRate:"1",dispayRate:"1",disfeeRate:"1",disserverRate:"1",dissalecostRate:"-1",dissaledriverRate:"2",disclaimRate:"1",disfixedRate:"1",disotherRate:"1",disdiscoutRate:"1"}],selectDialogArr:["isInverseDiscount","isInverseCost"],inputDialogArr:["targepreratio","targetocost","targebicost","targepayrate","hisfullpayrate","bfpayrate","salecostRate","saledriverRate","claimRate","otherRate","forcerate"],columnShowList:["智能推荐结果","参数配置","经营结果预测","目标偏离程度"],autoDownEdit2:!1,marketEdit2:!1,chartDialogVisible:!1,chartQuery:{lastYearCount:[],lastYearAmount:[],age:[]},itemList:[{code:"lastYearCount",name:"商业险上年出险次数",detail:[{code:"未投保商业险",name:"未投保商业险"},{code:"0次",name:"0次"},{code:"1次",name:"1次"},{code:"2次",name:"2次"},{code:"3次及以上",name:"3次及以上"}]},{code:"lastYearAmount",name:"商业险上年出险金额",detail:[{code:"0-1000",name:"0-1000"},{code:"1000-2000",name:"1000-2000"},{code:"2000-5000",name:"2000-5000"},{code:"5000-10000",name:"5000-10000"},{code:"10000+",name:"10000+"}]},{code:"age",name:"年龄",detail:[{code:"20以下",name:"20以下"},{code:"20-30",name:"20-30"},{code:"30-45",name:"30-45"},{code:"45-60",name:"45-60"},{code:"60以上",name:"60以上"}]}],chartDataVisible:!1,chartVisible:!1,chartCols:[{prop:"groupNo",width:60,label:"分组编号"},{prop:"groupContent",width:120,label:"分组描述"}],chartData:[{groupNo:"分组1",groupContent:"0次,0-1000,20-30"},{groupNo:"分组2",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组3",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组4",groupContent:"2次,2000-5000,20以下"},{groupNo:"分组5",groupContent:"3次及以上,5000-10000,20-30"},{groupNo:"分组6",groupContent:"3次及以上,5000-10000,20-30"}],lifeData:[],columns1:[{prop:"channel1",label:"对外报送渠道",width:120},{prop:"channel2",label:"公司内部渠道",width:120},{prop:"a",label:"保单年中介机构手续费率或个人代理人费用率平均值",width:360},{prop:"b",label:"保单年费用率",width:120},{prop:"c",label:"保单年赔付率",width:120},{prop:"d",label:"保单年成本率",width:120},{prop:"e",label:"保单年赔付率不含理赔费用",width:240},{prop:"f",label:"理赔费用率",width:120},{prop:"g",label:"保费(元)",width:120},{prop:"h",label:"总折扣率",width:120},{prop:"i",label:"自主折扣率",width:120},{prop:"j",label:"降价保单占比",width:120},{prop:"k",label:"涨价保单占比",width:120}],data1:[{channel1:"传统直销",channel2:"直接业务"},{channel1:"传统直销",channel2:"三进直销"},{channel1:"传统直销",channel2:"小计"},{channel1:"新渠道直销",channel2:"新渠道直销"},{channel1:"电话销售",channel2:"新渠道直销"},{channel1:"网络销售",channel2:"新渠道直销"},{channel1:"网络销售",channel2:"小计"},{channel1:"个人代理",channel2:"个人代理"},{channel1:"个人代理",channel2:"咨询服务个代"},{channel1:"个人代理",channel2:"三进个代"},{channel1:"个人代理",channel2:"小计"},{channel1:"兼业代理",channel2:"寿代产"},{channel1:"兼业代理",channel2:"车行业务"},{channel1:"兼业代理",channel2:"普通兼业代理"},{channel1:"兼业代理",channel2:"银行邮政代理"},{channel1:"兼业代理",channel2:"养老代产"},{channel1:"兼业代理",channel2:"小计"},{channel1:"专业代理",channel2:"专业代理"},{channel1:"专业代理",channel2:"EA门店"},{channel1:"专业代理",channel2:"小计"},{channel1:"经纪业务",channel2:"经纪业务"},{channel1:"经纪业务",channel2:"小计"}],columns2:[{prop:"cartype1",label:"车种",width:120},{prop:"cartype2",label:"细分车种",width:120},{prop:"a",label:"保单年中介机构手续费率平均值",width:240},{prop:"b",label:"保单年个人代理人费用率平均值",width:240},{prop:"c",label:"保单年费用率",width:120},{prop:"d",label:"保单年赔付率含理赔费用",width:120},{prop:"e",label:"保单年成本率",width:120},{prop:"f",label:"保单年赔付率不含理赔费用",width:120},{prop:"g",label:"理赔费用率",width:120},{prop:"h",label:"保费(元)",width:120},{prop:"i",label:"总折扣率",width:120},{prop:"j",label:"自主折扣率",width:120},{prop:"k",label:"降价保单占比",width:120},{prop:"l",label:"涨价保单占比",width:120}],data2:[{cartype1:"客车",cartype2:"家庭自用车"},{cartype1:"客车",cartype2:"营业客车"},{cartype1:"客车",cartype2:"非营业客车"},{cartype1:"货车",cartype2:"营业货车"},{cartype1:"货车",cartype2:"非营业货车"},{cartype1:"其他",cartype2:"其他"}],columns3:[{prop:"val",label:"",width:120},{prop:"cartype1",label:"自主折扣模拟值",width:240,children:[{prop:"a",label:"保单数占比",width:120},{prop:"b",label:"保单赔付率",width:120}]}],data3:[{val:"01|(low,0.1]"},{val:"02|(0.1,0.2]"},{val:"03|(0.2,0.3]"},{val:"04|(0.3,0.4]"},{val:"05|(0.4,0.5]"},{val:"06|(0.5,0.6]"},{val:"07|(0.6,0.7]"},{val:"08|(0.7,0.8]"},{val:"09|(0.8,0.9]"},{val:"10|(0.9,1.0]"},{val:"11|(1.0,1.1]"},{val:"12|(1.1,1.2]"},{val:"13|(1.2,1.3]"},{val:"14|(1.3,1.4]"},{val:"15|(1.4,1.5]"},{val:"16|(1.5,1.6]"},{val:"17|(1.6,1.7]"},{val:"18|(1.7,1.8]"},{val:"19|(1.8,1.9]"},{val:"20|(1.9,2.0]"},{val:"21|(2.0,high]"}],loading:!1}},computed:i()({autoDownEdit:function(){for(var e=[],t=0;t<this.data.length;t++)e.push(!1);return e},marketEdit:function(){for(var e=[],t=0;t<this.data.length;t++)e.push(!1);return e},mergeData1:function(){return Object(r.a)(this.data1,["channel1"])},mergeData2:function(){return Object(r.a)(this.data2,["cartype1"])}},Object(n.d)({sectors:function(e){return e.individual.sectors},lifeTable:function(e){return e.individual.lifeTable},tableHeader:function(e){return e.app.tableHeader}})),beforeRouteEnter:function(e,t,a){a(function(e){e.oldUrl=t.path})},methods:{simulate:function(){this.monishow=!0,this.loading=!0;var e=this;setTimeout(function(){e.loading=!1},2e3)},merge1:function(e){var t=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["channel1"].includes(a.property)){if(t.rowSpan[a.property]>1)return[t.rowSpan[a.property],1];if(0===t.rowSpan[a.property])return[0,0]}},merge2:function(e){var t=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["cartype1"].includes(a.property)){if(t.rowSpan[a.property]>1)return[t.rowSpan[a.property],1];if(0===t.rowSpan[a.property])return[0,0]}},handlePrev:function(){"/admin/individual/declare/supply"===this.oldUrl?this.$router.push({path:"/admin/individual/declare/recommend"}):this.$router.push({path:this.oldUrl})},exportData:function(){var e=this;this.$confirm("确定导出数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"导出成功!"})}).catch(function(){})},importData:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"})},supply:function(){this.$router.push({path:"/admin/individual/declare/supply"})},sectorClick:function(e){if("8"===e)this.totalvisble=!0;else{var t=this.sectors.findIndex(function(t){return t.id===e});this.businessSmallType=this.lifeData[t].cols,this.data=this.lifeData[t].detailData}},toggleColumn:function(e,t){this.columns.forEach(function(a){e.includes(a.firstTitle)&&(a.isShow=t)})},toggleColumnShow:function(e){var t=["智能推荐结果","参数配置","经营结果预测","目标偏离程度"],a=[],l=[];4===e.length?a=t:0===e.length?l=t:t.forEach(function(t){e.includes(t)?a.push(t):l.push(t)}),this.toggleColumn(a,!0),this.toggleColumn(l,!1)},disCountChange:function(e,t){this.autoDownEdit[t]="是"===e},costChange:function(e,t){this.marketEdit[t]="是"===e},disCountChange2:function(e){this.autoDownEdit2="是"===e},costChange2:function(e){this.marketEdit2="是"===e},drawLine:function(e,t){var a=this.$echarts.init(document.getElementById(e),"light");a.clear(),a.setOption(t)},showChartList:function(){var e=this,t=["分组1","分组2","分组3","分组4","分组5","分组6"];this.$nextTick(function(){var a={title:{text:"核保定价-经营成本率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{itemWidth:15,itemHeight:8,itemGap:8,data:["预期经营成本率","预期市场费用率","非市场费用率","优惠比率"],top:50},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:120,interval:20,axisLabel:{formatter:"{value}"}}],series:[{name:"预期经营成本率",type:"bar",stack:"合计比率",barWidth:30,data:[40.56,19.56,19.65,10.17,19.9,40.01],itemStyle:{normal:{color:"#29A1DC"}}},{name:"预期市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[26.1,27.3,16.5,15.4,25.6,27.2],itemStyle:{normal:{color:"#F49C1B"}}},{name:"非市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[20.1,19.9,21.2,18.9,19.7,21.6],itemStyle:{normal:{color:"#F0466E"}}},{name:"优惠比率",type:"bar",stack:"合计比率",barWidth:30,data:[11.23,12.32,10.95,10.88,10.97,10.96],itemStyle:{normal:{color:"#A4B2B1"}}}]};e.drawLine("myChart1",a);var l={title:{text:"核保定价-预期赔付率对比分析 ",top:10,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["预期商业险","实际商业险","预期交强险","实际交强险"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:75,interval:15,axisLabel:{formatter:"{value} %"}},{type:"value",min:110,max:130,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期商业险",type:"line",yAxisIndex:0,data:[39.5,43.1,48.4,53.5,65.2,73.3],itemStyle:{normal:{color:"#F0466E"}}},{name:"实际商业险",type:"line",yAxisIndex:0,data:[34.9,42.4,44.1,50.3,60.9,62.8],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期交强险",type:"line",yAxisIndex:1,data:[118.83,121.79,122.76,119.81,121.78,119.79],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际交强险",type:"line",yAxisIndex:1,data:[119.13,122.09,123.06,118.91,120.61,119.57],itemStyle:{normal:{color:"#29A1DC"}}}]};e.drawLine("myChart2",l);var i={title:{text:"核保定价-保费收入对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,itemWidth:15,itemHeight:8,itemGap:8,data:["预期年保费收入","实际年保费收入","预期年保费收入","实际年保费收入"]},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:1500,max:5e3,interval:500,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:5,max:25,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期年保费收入",type:"bar",data:[4371.3,2914.2,2428.5,2586.6,3161.5,4538.2],itemStyle:{normal:{color:"#29A1DC"}}},{name:"实际年保费收入",type:"bar",data:[4383.2,2916.4,2427.9,2588.7,3162.3,4537.9],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期年保费收入",type:"line",yAxisIndex:1,data:[21.86,14.57,12.14,12.93,15.81,22.69],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际年保费收入",type:"line",yAxisIndex:1,data:[21.14,14.93,12.86,12.57,16.31,22.19],itemStyle:{normal:{color:"red"}}}]};e.drawLine("myChart3",i);var r={title:{text:"核保定价-市场费用率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["推荐市场费用率","商业险市场费用率均值","历史保单市场费用率"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:40,interval:2,axisLabel:{formatter:"{value} %"}}],series:[{name:"推荐市场费用率",type:"line",data:[38.5,39.1,36.4,39.5,39.2,36.3],markLine:{data:[[{name:"行业自律线:21%",coord:[0,21]},{coord:[5,21]}],[{name:"阈值线:35%",coord:[0,35]},{coord:[5,35]}]]},itemStyle:{normal:{color:"#F49C1B"}}},{name:"商业险市场费用率均值",type:"line",data:[35.9,36.4,37.1,36.3,34.8,36.5],itemStyle:{normal:{color:"#29A1DC"}}},{name:"历史保单市场费用率",type:"line",data:[37.9,38.9,35.8,39.7,38.6,36.7],itemStyle:{normal:{color:"#A4B2B1"}}}]};e.drawLine("myChart4",r)})},chartDataQuery:function(){this.chartDialogVisible=!0,this.chartDataVisible=!0,this.chartVisible=!0,this.showChartList()},premiumExpect:function(){}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("biz-sector-list",{attrs:{title:"车种选择",sectors:e.sectors},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.simulate}},[e._v("经营结果模拟")]),e._v(" "),a("el-checkbox-group",{on:{change:e.toggleColumnShow},model:{value:e.columnShowList,callback:function(t){e.columnShowList=t},expression:"columnShowList"}},[a("el-checkbox",{attrs:{label:"智能推荐结果"}}),e._v(" "),a("el-checkbox",{attrs:{label:"参数配置"}}),e._v(" "),a("el-checkbox",{attrs:{label:"经营结果预测"}}),e._v(" "),a("el-checkbox",{attrs:{label:"目标偏离程度"}})],1),e._v(" "),a("div",{staticStyle:{float:"right"}})],1)]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,stripe:"","max-height":"450","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{"header-align":"center",fixed:"",label:"",align:"center","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.editDialogVisible=!0}}},[e._v("编辑")])]}}])}),e._v(" "),e._l(e.businessSmallType,function(e){return a("el-table-column",{key:e.prop,attrs:{fixed:"","header-align":"center",align:e.align?e.align:"center","min-width":e.width,label:e.label,prop:e.prop}})}),e._v(" "),e._l(e.columns,function(t){return t.isShow?a("el-table-column",{key:t.prop,attrs:{"header-align":"center",label:t.firstTitle}},e._l(t.secondContents,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",label:t.secondTitle,align:t.align,"min-width":t.width,prop:t.prop},scopedSlots:e._u([{key:"default",fn:function(l){return[e.editFlag&&("价格优先"===l.row.psmode||"自定义"===l.row.psmode)&&"autorate"===t.prop||e.editFlag&&("费用优先"===l.row.psmode||"自定义"===l.row.psmode)&&"marketrate"===t.prop?a("el-input",{attrs:{size:"small"},model:{value:l.row[t.prop],callback:function(a){e.$set(l.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}}):e.editFlag&&-1!==e.inputArr.indexOf(t.prop)?a("el-input",{attrs:{size:"small"},model:{value:l.row[t.prop],callback:function(a){e.$set(l.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}}):e.editFlag&&"psmode"===t.prop?a("el-select",{attrs:{size:"small"},model:{value:l.row[t.prop],callback:function(a){e.$set(l.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),e._v(" "),a("el-option",{attrs:{label:"费用优先",value:"费用优先"}}),e._v(" "),a("el-option",{attrs:{label:"自定义",value:"自定义"}})],1):a("span",[e._v(e._s(l.row[t.prop]))])]}}])})})):e._e()})],2)],1)]),e._v(" "),a("div",{staticClass:"data"},[e._m(0),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.totaltargetData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.totaltargetColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[e._m(1),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.totaldisData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.totaldisColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[e._m(2),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.totaldisData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.totaldisColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticStyle:{height:"30px","line-height":"30px",margin:"15px 0 50px 15px"}},[a("el-form",{attrs:{inline:!0,size:"small",model:e.expect}},[a("el-form-item",{attrs:{label:"保费预测区间"}},[a("el-date-picker",{attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.expect.startDate,callback:function(t){e.$set(e.expect,"startDate",t)},expression:"expect.startDate"}}),e._v(" "),a("span",[e._v("至")]),e._v(" "),a("el-date-picker",{attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.expect.endDate,callback:function(t){e.$set(e.expect,"endDate",t)},expression:"expect.endDate"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.premiumExpect}},[e._v("保费预测")])],1),e._v(" "),a("el-form-item",{attrs:{label:"保费规模"}},[a("el-input",{staticStyle:{width:"150px"},model:{value:e.expect.minpremium,callback:function(t){e.$set(e.expect,"minpremium",t)},expression:"expect.minpremium"}}),e._v(" "),a("span",[e._v("至")]),e._v(" "),a("el-input",{staticStyle:{width:"150px"},model:{value:e.expect.maxpremium,callback:function(t){e.$set(e.expect,"maxpremium",t)},expression:"expect.maxpremium"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("back-button",{on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("下载模板")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("导入模板")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportData}},[e._v("导出数据")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(t){e.editFlag=!1}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("确认")])],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editDialogVisible,width:"80%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("业务单元")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.bizSmallTypeData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.bizSmallTypeColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("参数配置")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.paramConfigData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.paramConfigColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align},scopedSlots:e._u([{key:"default",fn:function(l){return[("价格优先"!==l.row.psmode&&"自定义"!==l.row.psmode||"autorate"!==t.prop)&&("费用优先"!==l.row.psmode&&"自定义"!==l.row.psmode||"marketrate"!==t.prop)?-1!==e.inputDialogArr.indexOf(t.prop)?a("el-input",{attrs:{size:"small"},model:{value:l.row[t.prop],callback:function(a){e.$set(l.row,t.prop,a)},expression:"scope.row[column.prop]"}}):"psmode"===t.prop?a("el-select",{attrs:{size:"small"},model:{value:l.row[t.prop],callback:function(a){e.$set(l.row,t.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),e._v(" "),a("el-option",{attrs:{label:"费用优先",value:"费用优先"}}),e._v(" "),a("el-option",{attrs:{label:"自定义",value:"自定义"}})],1):a("span",[e._v(e._s(l.row[t.prop]))]):a("el-input",{attrs:{size:"small"},model:{value:l.row[t.prop],callback:function(a){e.$set(l.row,t.prop,a)},expression:"scope.row[column.prop]"}})]}}])})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("经营结果预测")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.targetData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.targetColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("目标偏离程度")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.disData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.disColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"}},[e._v("计算")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("下一行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editDialogVisible=!1}}},[e._v("关闭")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"导入数据",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.importData}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"图表展示",fullscreen:"",visible:e.chartDialogVisible},on:{"update:visible":function(t){e.chartDialogVisible=t}}},[a("el-container",[a("el-header",[a("el-form",{attrs:{inline:!0,size:"small",model:e.chartQuery}},[e._l(e.itemList,function(t){return a("el-form-item",{key:t.code,attrs:{label:t.name,prop:t.code}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium",multiple:""},model:{value:e.chartQuery[t.code],callback:function(a){e.$set(e.chartQuery,t.code,a)},expression:"chartQuery[item.code]"}},e._l(t.detail,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1)}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.chartDataQuery}},[e._v("查看")])],1)],2)],1),e._v(" "),a("el-container",[a("el-aside",{directives:[{name:"show",rawName:"v-show",value:e.chartDataVisible,expression:"chartDataVisible"}],attrs:{width:"20%"}},[a("base-table",{attrs:{width:e.chartCols.width,columns:e.chartCols,data:e.chartData}})],1),e._v(" "),a("el-main",{directives:[{name:"show",rawName:"v-show",value:e.chartVisible,expression:"chartVisible"}],staticStyle:{"margin-left":"10px",background:"#F6F5F5"},attrs:{width:"80%"}},[a("span",{on:{click:function(t){e.chartDataVisible=!e.chartDataVisible}}},[a("i",{staticClass:"iconfont icon-showleft"})]),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart1"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart2"}})])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart3"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart4"}})])],1)],1)],1)],1)],1),e._v(" "),a("el-dialog",{staticClass:"result",attrs:{title:"经营结果模拟",visible:e.monishow,width:"80%"},on:{"update:visible":function(t){e.monishow=t}}},[e.loading?a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"1308.98px",height:"519.24px",position:"absolute","z-index":"99999","background-color":"rgba(0,0,0,.1)"},attrs:{"element-loading-text":"系统正在进行经营结果模拟测算，预计 n分钟测算完成以后可查看结果"}}):e._e(),e._v(" "),e.loading?e._e():a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"业务来源"}},[a("base-table",{attrs:{columns:e.columns1,data:e.mergeData1,spanMethod:e.merge1,rowKey:"id",showSummary:!0}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"车种"}},[a("base-table",{attrs:{columns:e.columns2,data:e.mergeData2,spanMethod:e.merge2,rowKey:"id",showSummary:!0}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"折扣系数分布"}},[a("base-table",{attrs:{columns:e.columns3,data:e.data3,rowKey:"id",showSummary:!0}})],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportData}},[e._v("导出模拟经营结果")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"整体",visible:e.totalvisble,width:"80%"},on:{"update:visible":function(t){e.totalvisble=t}}},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("整体经营结果预测")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.totaltargetData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.totaltargetColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("整体目标偏离程度")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.totaldisData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.totaldisColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("监管报送偏离程度")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.totaldisData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.totaldisColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc"},[this._v("经营结果预测")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc"},[this._v("目标偏离程度")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc"},[this._v("监管报送偏离程度")])])}]};var p=a("VU/8")(s,c,!1,function(e){a("i9BW")},"data-v-6c2ebf84",null);t.default=p.exports},i9BW:function(e,t){}});