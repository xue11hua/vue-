<template>
	<div>
    
	   <mt-header :title="title">
	    
	      <mt-button @click="fh()" slot="left" icon="back"></mt-button>
	    
	   </mt-header>
	 <div class="duanzi" v-for="itm in pinglun.data.cts">
      <div class="duanzi_diva">
        <p class="p1"><img width="50" :src="itm.caimg" alt=""></p>
        <p class="p2"><span>{{itm.ca}}</span><span>{{itm.cd | suma}}</span></p>
      </div>
      <div class="duanzi_divb">
        {{itm.ce}}
      </div>
    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
	name: 'gengduo',
	data(){
		return {
			
			title:'',
      page:'0',
      movieId:'',
      pinglun:[]

		}
	},
	methods:{
		shuju(){
        const url = '/plapi/Showtime/HotMovieComments.api?pageIndex='+this.page+'&movieId='+this.movieId;
        axios.get(url)
          .then(response=>{
                this.pinglun=response.data;
               console.log(this.pinglun)
              })
      },
       fh(){
        this.$router.go(-1)
      }
	},
	created(){
		
		this.title=this.$route.query.title;
    this.movieId=this.$route.query.movieId;
		this.shuju();
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