<template>
<div>
	<mt-header title="电影" class="mint-headera">
	 
	    <mt-button @click="fh()" slot="left" icon="back"></mt-button>
	 
	  <mt-button slot="right"></mt-button>
	</mt-header>
	 <div class="title_con">
		<div class="title_img">
			<img :src="moves.image" alt="">
		</div>

		<div class="title_ti">
			<div class="title_jj">
				<p class="p1">{{moves.titleCn}}</p>
				<p class="p2">{{moves.runTime}}</p>
				<p>{{moves.commonSpecial}}</p>
				<p><span>类型:</span><span v-for="itm in moves.type">{{itm}}</span></p>
				<p><span>地点/时间:</span><span v-for="itm in moves.release">{{itm}}</span></p>
				<p><span v-if="moves.is3D">3D</span></p>
				
			</div>
			<div class="title_pf">
				<p>豆瓣评分</p>
				<p class="p1">{{moves.rating}}</p>
				<p>票房排名：{{moves.personCount}}</p>
			</div>
		</div>
		
	</div>
	<div class="con_jj">
		<p class="p1">简介</p>
		<p>{{moves.content}}</p>
	</div>
	<mt-header class="mint-headerb">
		    <mt-button  slot="left">演职员</mt-button>
		      <mt-button slot="right" @click="gengduo('影人')">更多</mt-button>
		   </mt-header>
	<div class="con_jj">
		<p class="p1">导演</p>
		<ul class="con_jj_list">
			<li>
				<div class="con_jj_diva">
					<img :src="moves.director.directorImg" alt="">
				</div>
				<div class="con_jj_divb">
					<p><span>{{moves.director.directorName}}</span><span>{{moves.director.directorNameEn}}</span></p>
				</div>
			</li>
		</ul>
	</div>
	<div class="con_jj">
		<p class="p1">影人</p>
		
		<ul class="con_jj_list">
			<li v-for="itm in moves.actorList">
				<div class="con_jj_diva">
					<img :src="itm.actorImg" alt="">
				</div>
				<div class="con_jj_divb">
					<p>{{itm.actor}}饰演{{itm.roleName}}</p>
				</div>
			</li>
		</ul>
	</div> 
	<div class="con_jj ">
		
		<mt-header class="mint-headerb">
		    <mt-button  slot="left">剧照</mt-button>
		      <mt-button slot="right" @click="gengduo('剧照')">更多</mt-button>
		   </mt-header>
		<ul class="conlist">
			<li v-for="itm in moves.images">
				<div>
					<img :src="itm" alt="">
				</div>
			</li>
		</ul>
	</div>
<div class="con_jj ">
		<mt-header class="mint-headerb">
		    <mt-button  slot="left">短评</mt-button>
		      <mt-button slot="right" @click="gengduo('短评')">更多</mt-button>
		   </mt-header>
		  
		
		<div class="duanzi" v-for="itm in pinglun.data.mini.list">
			<div class="duanzi_diva">
				<p class="p1"><img width="50" :src="itm.headImg" alt=""></p>
				<p class="p2"><span>{{itm.nickname}}</span><span>{{itm.commentDate | suma}}</span></p>
			</div>
			<div class="duanzi_divb">
				{{itm.content}}
			</div>
		</div>
		
	</div>
	<div class="con_jj ">
		
		   <mt-header class="mint-headerb">
		    <mt-button  slot="left">影评</mt-button>
		      <mt-button slot="right" @click="gengduo('影评')">更多</mt-button>
		   </mt-header>
		  
		
		<div class="duanzi" v-for="itm in pinglun.data.plus.list">
			<div class="duanzi_diva">
				<p class="p1"><img width="50" :src="itm.headImg" alt=""></p>
				<p class="p2"><span>{{itm.nickname}}</span><span>{{itm.commentDate | suma}}</span></p>
			</div>
			<div class="duanzi_divb">
				{{itm.content}}
			</div>
		</div>
		
	</div>
	
	
</div>
 
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import moment from "moment"
Vue.prototype.$moment = moment;
export default {
	name: 'xiangqing',
	data(){
		return {
			movieId:'',
			moves:[],
			locationId:'',
			pinglun:[]

		}
	},
	methods:{
		shuju(){
        const url = '/dyapi/movie/detail.api?locationId='+this.locationId+'&movieId='+this.movieId;
        axios.get(url)
          .then(response=>{
                this.moves=response.data;
               console.log(response.data)
              })
      },
      shujua(){
        const url = '/plapi/movie/hotComment.api?movieId='+this.movieId;
        axios.get(url)
          .then(response=>{
                this.pinglun=response.data;
               console.log(response.data)
              })
      },
      gengduo(title){
      	if(title=='短评'){

      	 this.$router.push({path:'/gengduo',query:{title:title,movieId:this.movieId}});
      	}else if(title=='影评'){
      		this.$router.push({path:'/yingping',query:{title:title,movieId:this.movieId}});
      	}else if(title=='剧照'){
      		this.$router.push({path:'/juzhao',query:{title:title,movieId:this.movieId}});
      	}else if(title=='影人'){
      		this.$router.push({path:'/yingren',query:{title:title,movieId:this.movieId}});
      	}
      },
       fh(){
        this.$router.go(-1)
      }
      


	},
	created(){
		this.movieId=this.$route.query.movieId;
		this.locationId=this.$route.query.locationId;
		this.shuju();
		this.shujua();
	}

}
Vue.filter("suma",function(date){
    var date = new Date(date*1000);//如果date为10位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
            });
</script>
<style scoped>

.title_con{
	width: 100%
}
.mint-headera{
	background-color: #3e1805;
}
.mint-headerb{
	background-color: #fff;
	color: #000
}
.title_con .title_img{
	background-color:#3e1805; 
	width: 100%;
	text-align: center;
}
.title_con .title_img img{
	width: 40%;
	margin:20px 0;
}
.title_con .title_ti{
	padding: 0 5%;
	margin-top: 20px;
}
.title_con .title_ti .title_jj{
	width: 70%;
	float: left;
}
.title_con .title_ti .title_jj p{
	float: left;
	width: 100%;
	line-height: 20px;
}
.title_con .title_ti .title_jj p span{
	float: left;
	margin:0 5px;
	display: inline-block;
}
.title_con .title_ti .title_pf{
	width: 28%;
	text-align: center;
	float: right;
	box-shadow: 2px 2px 4px #666666;
	padding: 2% 1%;
}
.title_con .title_ti .p1{
	font-size: 20px;
	font-weight: bold;
	color: black
}
.title_con .title_ti .p2{
	margin-top: 10px;
}
.title_con .title_ti p{
	font-size: 12px;
	color: #666;
}
.con_jj{
	clear: both;
	padding: 10px;
	font-size: 12px;
	line-height: 20px;
}
.con_jj .p1{
	font-size: 14px;
	color: #666;
	line-height: 40px;
}
.con_jj .con_jj_list li{
	width: 30%;
	float: left;
}
.con_jj .con_jj_list .con_jj_diva img{
	width: 80%;
	margin:0 10%;
}
.con_jj .con_jj_list .con_jj_divb{
	text-align: center;
	height: 30px;
}
.con_jj .con_jj_list .con_jj_divb span{
	display: inline-block;width: 100%
}
.conlist{
	 column-count:3
}
.conlist img{
	width: 100%
}
.duanzi{
	width: 96%;
	padding:10px 2%;
	float: left;
}
.duanzi .duanzi_diva{
	width: 100%;

}
.duanzi .duanzi_diva p{
	float: left;
}
.duanzi .duanzi_diva .p1{
	width: 20%;

}
.duanzi .duanzi_diva .p2{
	width: 80%;
}
.duanzi .duanzi_diva .p2 span{
	display: inline-block;
	width: 100%;
	line-height: 26px;
	font-size: 14px;
}
.duanzi .duanzi_divb{
	width: 100%;
	float: left;
	margin-top: 10px;
	font-size: 15px;
	line-height: 20px;
}
.duanzia{
	float: left;
}
</style>