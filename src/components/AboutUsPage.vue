<template>

    <Navbar></Navbar>
    <AboutUs class="about-us-page"></AboutUs>
    <Footer></Footer>

</template>

<script>

    import Navbar from '../components/single_components/Navbar.vue';
    import Footer from '../components/single_components/Footer.vue'
    import AboutUs from '../components/single_components/AboutUsIndividual.vue';
    export default{
    name: "contacts-page",  
    components: {
        Navbar,
        Footer,
        AboutUs
        }
    }


</script>

<style>

    .about-us-page{
        margin-bottom: 5em;
    }

    #app{
        background-color: #f8fcf8;
    }

    .products-container{
        margin: 0;
    }
</style>