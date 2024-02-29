<template>

    <Navbar></Navbar>
    <Home></Home>
    <AboutUs></AboutUs>
    <Products></Products>
    <Footer></Footer>

</template>

<script>

    import Navbar from '../components/single_components/Navbar.vue';
    import Home from '../components/single_components/Home.vue';
    import AboutUs from '../components/single_components/AboutUs.vue';
    import Footer from '../components/single_components/Footer.vue'
    import Products from '../components/single_components/Products.vue'
    export default{
    name: "home-page",  
    components: {
        Navbar,
        Home,
        AboutUs,
        Footer,
        Products,
        }
    }


</script>
