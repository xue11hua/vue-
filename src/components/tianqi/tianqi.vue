<template>
	<div v-if="tianqi.data.forecast">
		<mt-header :title="difang">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right" @click="qhtq()">切换</mt-button>
		</mt-header>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		<div v-for="(itm,index) in tianqi.data.forecast" v-if="index<1" class="tqtitle">
			<h1>{{tianqi.data.wendu}}</h1>
			<p class="tq_title_p"><span>{{itm.type}}</span><span>{{itm.fengxiang}}</span><span>{{itm.fengli | sum}}</span></p>
			<p class="tq_title_pa">{{tianqi.data.ganmao}}</p>
		</div>
		<div class="tq_con">
			<ul>
				<li v-for="(itm,index) in tianqi.data.forecast">
					<p>{{itm.date}}</p>
					<p><span>{{itm.fengli | sum}}</span></p>
					<p><span>{{itm.fengxiang}}</span></p>
					<p><span>{{itm.high}}</span><span>{{itm.low}}</span></p>
					<p>{{itm.type}}</p>
				</li>
			</ul>
		</div>
			<div class="charts">
	  				<div id="mypie" :style="{width:'600px',height:'260px',padding:'0 10px'}"></div>	
	  		</div>
	  		
	  		</mt-loadmore>
	</div>

	
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
	name: 'tianqi',
	data(){
		return {
			value:'',
			tianqi:[],
			difang:'西安',
			xAxisdata:[],
			highdata:[],
			lowdata:[],
			allLoaded: false,
    	    topStatus: '',
    	    scrollMode:"auto",
    	    forecast:true
    	    

		}
	},
	methods:{
		shuju(){
        const url = '/api/weatherApi?city='+this.difang;
        axios.get(url)
          .then(response=>{
                this.tianqi=response.data;
             
               this.initData (this.tianqi.data.forecast);
              
                
              })
      },
      initData (obj) {
      		var high='';
      		var low='';
	        obj = Object.values(obj)
	        obj.forEach((o, i)=>{
	           this.xAxisdata.push(o.date);
	           high=o.high;
	           low=o.low;
	           high=high.replace('高温 ', "");
               high=high.replace('℃', "");
               low=low.replace('低温 ', "");
               low=low.replace('℃', "");

	           this.highdata.push(high);
	           this.lowdata.push(low);

	          
	        })
	       
	        
	      },
      qhtq(){
      	this.$router.push({path:'/chengshi'});
      },
      handleTopChange(status) {
         this.topStatus = status;
       },
       loadTop(){
       		var self = this;
       		this.shuju();
		   
       		console.log('111');
       		self.$refs.loadmore.onTopLoaded();
       },
       loadBottom(){
       	   
       		this.shuju();
		   
       		console.log('122');
		    this.$refs.loadmore.onBottomLoaded();
       },
      
      huatua(){
				let mychart=this.$echarts.init(document.getElementById('mypie'));
				let options = {
							    title: {
							        text: '气温变化',
							       
							    },
							    tooltip: {
							        trigger: 'axis'
							    },
							    legend: {
							        data:['最高气温','最低气温']
							    },
							    // toolbox: {
							    //     show: true,
							    //     feature: {
							    //         dataZoom: {
							    //             yAxisIndex: 'none'
							    //         },
							          
							    //         magicType: {type: ['line', 'bar']},
							    //     }
							    // },
							    xAxis:  {
							        type: 'category',
							        boundaryGap: false,
							        data: this.xAxisdata
							    },
							    yAxis: {
							        type: 'value',
							        axisLabel: {
							            formatter: '{value} °C'
							        },
							        minInterval: 4
							    },
							    series: [
							        {
							            name:'最高气温',
							            type:'line',
							            data:this.highdata,
							            markPoint: {
							                data: [
							                    {type: 'max', name: '最大值'},
							                    {type: 'min', name: '最小值'}
							                ]
							            },
							            markLine: {
							                data: [
							                    {type: 'average', name: '平均值'}
							                ]
							            }
							        },
							        {
							            name:'最低气温',
							            type:'line',
							            data:this.lowdata,
							            markPoint: {
							                data: [
							                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
							                ]
							            },
							            markLine: {
							                data: [
							                    {type: 'average', name: '平均值'},
							                    [{
							                        symbol: 'none',
							                        x: '90%',
							                        yAxis: 'max'
							                    }, {
							                        symbol: 'circle',
							                        label: {
							                            normal: {
							                                position: 'start',
							                                formatter: '最大值'
							                            }
							                        },
							                        type: 'max',
							                        name: '最高点'
							                    }]
							                ]
							            }
							        }
							    ]
							};

				mychart.setOption(options);
			},
       


	},
	mounted(){
			setTimeout(() => {
			        this.huatua()
			      },1000)
		},
	created(){
		if(this.$route.query.difang){
			this.difang=this.$route.query.difang;
		}
		
		this.shuju();
		
	}

}
Vue.filter("sum", function(value) {
                value=value.replace('<![CDATA[', "");
                value=value.replace(']]>', "");
                return value;
            });
</script>
<style scoped>
.mint-search{
	height: 100%;
}
.tqtitle{
	padding: 0 10px;
}
.tqtitle h1{
	font-size: 80px;
	font-weight: normal;
}
.tqtitle .tq_title_p span{
	margin:0 5px;
	font-size: 13px;
}
.tqtitle .tq_title_pa{
	font-size: 15px;
	line-height: 20px;
	margin-top: 10px;
}
.tq_con{
	width: 100%
}
.tq_con ul li{
	width: 31%;
	float: left;
	font-size: 13px;
	margin:3% 1%;
	text-align: center;
	line-height: 20px;
}
.charts{
	overflow-x: auto;
	height: 270px;
	width: 100%;

}
body{overflow: hidden;}
.rili{
	font-size: 13px;
	line-height: 20px;
	height: 100px;
}
.rili .rili_diva{
	width: 36%;
	float: left;
	text-align: center;
}
.rili .rili_divb{
	width: 64%;
	float: left;
	font-size: 13px;
}
.rili .jieri_tix{
	line-height: 30px;
	padding: 0 10px;
	
	
}
</style>