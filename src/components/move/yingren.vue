<template>
	<div>
   
	   <mt-header :title="title">
	     
	      <mt-button @click="fh()" slot="left" icon="back"></mt-button>
	     
	   </mt-header>
	 <div class="con_jj" v-for="itm in pinglun.types">
		<p class="p1"><span>{{itm.typeName}}</span><span>{{itm.typeNameEn}}</span></p>
		<ul class="con_jj_list" v-for="it in itm.persons">
			<li>
				<div class="con_jj_diva">
					<img :src="it.image" alt="">
				</div>
				<div class="con_jj_divb">
					<p><span>{{it.name}}</span><span>{{it.nameEn}}</span></p>
				</div>
			</li>
		</ul>
	</div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
	name: 'yingren',
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
        const url = '/dyapi/Movie/MovieCreditsWithTypes.api?movieId='+this.movieId;
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
</script>
<style scoped>
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
</style>