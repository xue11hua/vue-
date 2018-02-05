<template>
  <div>
    <myheader></myheader>
    <mt-loadmore :top-method="loadTop" :bottomDistance='100' :topDistance='100' :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div v-for="it in duanzi">
      <div class="duanzi" v-for="itm in it.data">
        <div class="duanzi_diva">
          <p class="p1"><img width="50" :src="itm.profile_image" alt=""></p>
          <p class="p2"><span>{{itm.screen_name}}</span><span>{{itm.passtime}}</span></p>
        </div>
        <div class="duanzi_divb">
          <p class="p1">{{itm.text}}</p>
          <p><img width="100%" :src="itm.cdn_img" alt=""></p>
        </div>
      </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import myheader from '@/components/HelloWorld'
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'tupian',
  data () {
    return {
          duanzi:[],
          allLoaded: false,
          topStatus: '',
          scrollMode:"auto",
          page:'1'
    }
  },
  components:{
    myheader
  },
   methods:{
    shuju(){
        const url = '/api/satinApi?type=3&page='+this.page;
        axios.get(url)
          .then(response=>{
               this.duanzi.push(response.data);
                
              })
      },
      shujua(){
        const url = '/api/satinApi??type=3&page='+this.page;
        axios.get(url)
          .then(response=>{
               this.duanzi.unshift(response.data);
               
              })
      },
      handleTopChange(status) {
         this.topStatus = status;
       },
       loadTop(){
          var self = this;
           this.page++;
          this.shujua();
       
          console.log('111');
          self.$refs.loadmore.onTopLoaded();
       },
       loadBottom(){
            this.page++;
          this.shuju();
       
          console.log('122');
        this.$refs.loadmore.onBottomLoaded();
       },

  },
  created(){
    this.shuju();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.duanzi .duanzi_divb .p1{
  margin-bottom: 10px;
  line-height: 24px;
}
</style>
