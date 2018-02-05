<template>
	<div>
   
	   <mt-header :title="title">
	     
	      <mt-button @click="fh()" slot="left" icon="back"></mt-button>
	     
	   </mt-header>
	 <div class="images" >
      <ul>
        <li v-for="itm in pinglun.images"><img :src="itm.image" alt=""> </li>
      </ul>
      
   </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
	name: 'juzhao',
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
        const url = '/dyapi/Movie/ImageAll.api?movieId='+this.movieId;
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
.images{
  column-count:3
}
.images ul li{
width: 100%
}
.images img{
  width: 100%
}
</style>