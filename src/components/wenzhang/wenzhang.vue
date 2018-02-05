<template>
	<div>
   
	   <mt-header title="每日一文">
	     
	       <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
	     
	   </mt-header>
		<div class="wenzhang">
			<div class="wenzhang_diva">
				<h1>{{pinglun.data.title}}</h1>
				<p class="p1">
					<span>时间：{{pinglun.data.date.curr}}</span>
					<span>作者：{{pinglun.data.author}}</span>
				</p>
			</div>
			
			<div class="wenzhang_divb">
				导读：{{pinglun.data.digest}}
			</div>
			<div v-html="pinglun.data.content" class="wenzhang_divc">
				
			</div>
			<div class="wenzhang_divd">
				<p><span @click="qh(pinglun.data.date.next)">上一篇</span><span @click="qh(pinglun.data.date.prev)">下一篇</span></p>
			</div>
		</div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
	name: 'wenzhang',
	data(){
		return {
			shijian:'',
			pinglun:[]
	 

		}
	},
	methods:{
		shuju(){
        const url = '/wzapi/article/today?dev=1';
        axios.get(url)
          .then(response=>{
                this.pinglun=response.data;
               
              })
      },
      shujua(){
        const url = '/wzapi/article/day?dev=1&date='+this.shijian;
        axios.get(url)
          .then(response=>{
          		this.pinglun='';
                this.pinglun=response.data;
               
              })
      },
      qh(index){
      	
      	var d = new Date();
      	var y=d.getMonth()+1;
      	var r=d.getDate();
      	if(y<10){
      		y='0'+y;
      	}
      	if(r<10){
      		r='0'+r;
      	}
		var str = d.getFullYear()+y+r;
		str=parseInt(str);
		var shi=parseInt(index);
		console.log(shi+"-"+str);
		if(shi>str){
			alert('没有了')
			
		}else{
			this.shijian=index;
		
      	    this.shujua();
		}
		
      }
      
	},
	created(){
		this.shuju();
	}

}
</script>
<style scoped>
.wenzhang{
	padding: 0 10px;
}
.wenzhang .wenzhang_diva{
	text-align: center;
}
.wenzhang .wenzhang_diva .p1{
	line-height: 30px;
	font-size: 12px;
}
.wenzhang .wenzhang_diva h1{
	margin-top: 10px;
}
.wenzhang .wenzhang_divb{
	line-height: 20px;
	font-size: 14px;
	background-color: #eee;
	padding: 10px;
}
.wenzhang .wenzhang_divc{
	font-size: 16px;
	line-height: 24px;
	text-indent: 32px;
}
.wenzhang .wenzhang_divd{
	margin-top: 20px;
	text-align: center;
}
.wenzhang .wenzhang_divd span{
	margin:0 10px;
}
</style>