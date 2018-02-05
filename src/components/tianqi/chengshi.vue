<template>
	<div class="chens">
		<p class="p1">城市：<input placeholder="输入城市" v-model="chengshi" type="text" @focus="handleFocus" @blur="handleblur"></p>
		<div>
			<p v-for="itm in rchenshi.p" v-if="itm.n==chengshi" @click="qhtq(itm.n,itm.id)" class="p2">{{chengshi}}</p>
		</div>
		
		
		<div class="chengshi" :class="{active:isActive}">
		<mt-index-list>
		<mt-index-section index="">
			<p>热门城市</p>
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.count>90" >
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		    </mt-index-section>
		  <mt-index-section index="A">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='a'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		   
		  </mt-index-section>
		  <mt-index-section index="B">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='b'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="C">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='c'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="D">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='d'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="E">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='e'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="F">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='f'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="G">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='g'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="H">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='h'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		  
		   <mt-index-section index="J">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='j'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="K">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='k'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="L">
		    <mt-cell v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='l'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="M">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='m'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="N">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='n'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   
		   <mt-index-section index="P">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='p'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="Q">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='q'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="R">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='r'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="S">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='s'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="T">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='t'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="W">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='w'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="X">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='x'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="Y">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='y'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		   <mt-index-section index="Z">
		    <mt-cell  v-for="itm in rchenshi.p" v-if="itm.pinyinShort=='z'" @click="qhtq(itm.n,itm.id)">
		    	<div class="list_div">
		    		<span @click="qhtq(itm.n,itm.id)">{{itm.n}}</span>
		    	</div>
		    </mt-cell>
		  </mt-index-section>
		  
		</mt-index-list>
	</div>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
	name: 'chengshi',
	data(){
		return {
			chengshi:'',
			rchenshi:[],
			isActive: false,
			lista:'',


		}
	},
	methods:{
		
			qhtq(chengshi,locationId){
				
				if(chengshi){
					this.$router.push({path:'/tianqi',query:{difang:chengshi}});
				}else{
					this.$router.push({path:'/tianqi',query:{difang:this.chengshi}});
				}
				if(this.lista=='move'){
					this.$router.push({path:'/move',query:{difang:chengshi,locationId:locationId}});
				}
		      	
		      },
		      handleFocus(){
		      	this.isActive=true;
		      },
		      handleblur(){
		      	this.isActive=false;
		      },
		      shuju(){
		        const url = '/dyapi/Showtime/HotCitiesByCinema.api';
		        axios.get(url)
		          .then(response=>{
		                this.rchenshi=response.data;
		                for(var i=0;i<this.rchenshi.p.length;i++){
		                	 this.rchenshi.p[i].pinyinShort=this.rchenshi.p[i].pinyinShort[0];
		                }
		              console.log(this.rchenshi);
		               
		              })
		      },   

	},
	created(){
		 this.shuju();
		 if(this.$route.query.lista){
        this.lista=this.$route.query.lista;
      }

	}

}

</script>
<style scoped>
	.chens{
		padding: 10px;
		font-size: 14px;
	}
	.chens p{margin:0 10px;}
	.chengshi{
		margin-top: 40px;
	}
	.chengshi .mint-button{
		margin:5% 8%;
	}
	.chens .p1 input{
		width: 60%;
		height: 30px;
		text-indent: 10px;
		font-size: 14px;
	}
	.chens .p2{
		line-height: 50px;
	}
	.active{
		display: none;
	}
	.mint-cell-wrapper{
		position: relative;
	}

	.chengshi .list_div{
		position: absolute;
		left:6%;
		float: left;
	}
</style>