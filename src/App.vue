<template>

  <div id="app">
    <router-view to="/home"></router-view>
  </div>

</template>

<script>

  import HomePage from '../src/components/HomePage.vue';

  export default {
    name: "App",
    components: {
      HomePage,
    }
  }

</script>

<style>

  @import url('https://fonts.cdnfonts.com/css/toxigenesis');  
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");


  *{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Toxigenesis', sans-serif;   
    scroll-behavior: smooth;
 }

</style>

