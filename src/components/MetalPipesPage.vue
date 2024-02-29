<template>

    <Navbar></Navbar>
    <Products></Products>
    <Footer></Footer>

</template>

<script>

    import Navbar from '../components/single_components/Navbar.vue';
    import Footer from '../components/single_components/Footer.vue'
    import Products from '../components/single_components/MetalPipes.vue'
    export default{
    name: "iso-products",  
    components: {
        Navbar,
        Footer,
        Products,
        }
    }


</script>


<style>

    #app{    
      background-color: #eae7e6;
    }

</style>