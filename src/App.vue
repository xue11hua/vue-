<template>
  <div id="app">
    
     <div>
        <router-view/>
     </div>
   
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{margin:0 ;padding:0;}
a{text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,'微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
li{list-style: none;}
</style>
