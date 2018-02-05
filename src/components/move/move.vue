<template>
  <div class="move">
    <mt-header :title="difang">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="qhtq()">切换</mt-button>
    </mt-header>
   <mt-header class="mint-headera">
    <mt-button  slot="left">影院热映</mt-button>
     
   </mt-header>
    <div class="section-content">
      <ul class="row items">
        <li class="item item__movie" v-for="(itm,index) in moves.ms" @click="xiangqing(itm.id)">
          <img :src="itm.img" alt="">
          <div class="item_div">
            <p><span>{{itm.tCn}}</span></p>
            <p>类型：<span>{{itm.movieType}}</span></p>
            <p>评分：<span>{{itm.r}}</span></p>
          </div>
        </li>
      </ul>
    </div>
     <mt-header class="mint-headera">
      <mt-button  slot="left">即将上映-最受关注</mt-button>
       
     </mt-header>
      <div class="section-content">
      <ul class="row items">
        <li class="item item__movie" v-for="(itm,index) in jmoves.attention">
          <img :src="itm.image" alt="">
          <div class="item_div">
            <p><span>{{itm.title}}</span></p>
            <p><span>{{itm.releaseDate}}</span></p>
          </div>
        </li>
      </ul>
    </div>
    <mt-header class="mint-headera">
      <mt-button  slot="left">即将上映-电影</mt-button>
       
     </mt-header>
      <div class="section-content">
      <ul class="row items">
        <li class="item item__movie" v-for="(itm,index) in jmoves.moviecomings">
          <img :src="itm.image" alt="">
          <div class="item_div">
            <p><span>{{itm.title}}</span></p>
            <p><span>{{itm.releaseDate}}</span></p>

          </div>
        </li>
      </ul>
    </div>
   
  </div>
  
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import myheader from '@/components/HelloWorld'
export default {
  name: 'move',
  data(){
    return {
     moves:[],
     jmoves:[],
     newmoves:[],
     us_box:[],
     difang:'西安',
     move:'move',
     locationId:'791'
    }
  },
  components:{
    myheader
  },
  methods:{
      shuju(){
        const url = '/dyapi/Showtime/LocationMovies.api?locationId='+this.locationId;
        axios.get(url)
          .then(response=>{
                this.moves=response.data;
                console.log(this.moves.ms)
               
               
              })
      },   
      shujua(){
        const url = '/dyapi/Movie/MovieComingNew.api?locationId='+this.locationId;
        axios.get(url)
          .then(response=>{
                this.jmoves=response.data;
               
              })
      },  
      xiangqing(movesid){
        this.$router.push({path:'/xiangqing',query:{movieId:movesid,locationId:this.locationId}});
      } ,
      gengduo(list,title){
        this.$router.push({path:'/gengduo',query:{list:list,title:title}});
      } ,
      qhtq(){
        this.$router.push({path:'/chengshi',query:{lista:this.move}});
      },
      
      
    },
    created(){
      if(this.$route.query.difang){
         this.difang=this.$route.query.difang;
      }
      if(this.$route.query.locationId){
           this.locationId=this.$route.query.locationId;
      }
     
    
      this.shuju();
       this.shujua();
    },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-headera{
  clear: both;
background-color: #ffffff;
color: black
}
.mint-header-button{
  font-size: 18px;
}
.section-content{
  width: 100%;
  column-count:3
  
}
.section-content .items{
  width: 100%;
}
 .section-content .item{
  margin:10px 5px;
  
 }
.section-content .item__movie{
  
  
 
}
.section-content .item__movie img{
  width: 100%;
}
.section-content .item__movie .item_div{
  font-size: 14px;
  line-height: 20px;
}

</style>
