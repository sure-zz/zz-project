<template>
  <div id="app">

   <router-view></router-view>
   <router-view name="left"></router-view name="right">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  methods:{
    rem(){
      var width = document.documentElement.clientWidth || document.body.clientWidth;
      document.documentElement.style.fontSize = width / 7.5 + 'px';
    }
  },
  created(){
    var _this = this;
    _this.rem();
    window.addEventListener('resize', _this.rem, false);
  }
}

</script>

<style>
*{margin:0px;padding:0px;}
img{border:none;}
input{padding:0px;margin:0px;}
</style>
