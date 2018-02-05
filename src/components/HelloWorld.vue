<template>
  <div class="header">
   <mt-header fixed title="小网站"></mt-header>
    <mt-navbar>
    <mt-tab-item ><router-link to="/">搞笑图片</router-link></mt-tab-item>
    <mt-tab-item ><router-link to="/tianqi">天气</router-link></mt-tab-item>
    <mt-tab-item ><router-link to="/duanzi">段子</router-link></mt-tab-item>
    <mt-tab-item ><router-link to="/move">电影</router-link></mt-tab-item>
    <mt-tab-item ><router-link to="/wenzhang">每日一文</router-link></mt-tab-item>
  </mt-navbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{padding-bottom: 10px;}
.mint-navbar .mint-tab-item.is-selected{
  border-bottom: #ffffff;
}
.header{
  margin-top: 40px;
}
.header a{
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #26a2ff
}
.router-link-exact-active{
  border-bottom:2px solid #26a2ff;

}
  

</style>
