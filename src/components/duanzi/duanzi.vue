<template>
	<div>
		<mt-header title="段子">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
		<ul class="duanzia" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
		 
		<div v-for="it in duanzi">
		<div class="duanzi" v-for="itm in it.data">
			<div class="duanzi_diva">
				<p class="p1"><img width="50" :src="itm.profile_image" alt=""></p>
				<p class="p2"><span>{{itm.screen_name}}</span><span>{{itm.passtime}}</span></p>
			</div>
			<div class="duanzi_divb">
				{{itm.text}}
			</div>
		</div>
		</div>
		<div class="logoing">
			正在加载。。。。
		</div>
		</ul>
		</mt-loadmore>
	</div>
	
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'duanzi',
  data () {
    return {
    	page:'1',
    	duanzi:[],
    	loading:false,
    	allLoaded: false,
    	topStatus: ''
    }
  },
  methods:{
		shuju(){
        const url = '/api/satinApi?type=2&page='+this.page;
        axios.get(url)
          .then(response=>{
          	
               this.duanzi.push(response.data);
                
              })
      },
      shujua(){
        const url = '/api/satinApi?type=2&page='+this.page;
        axios.get(url)
          .then(response=>{
               this.duanzi.unshift(response.data);
               
              })
      },
      loadMore() {
      	this.loading = true;
      	
      	     this.page++;
		     this.shuju();
      		 this.loading = false;
      	 
		},
		handleTopChange(status) {
         this.topStatus = status;
       },
       loadTop(){
       		var self = this;
       		 this.page++;
		     this.shujua();
       		self.$refs.loadmore.onTopLoaded();
       },

	},
	created(){
		this.shuju();
	}
}
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
.logoing{
	text-align: center;
}
</style>