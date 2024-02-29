<template>

    <Navbar></Navbar>
    <Gallery></Gallery>
    <Footer></Footer>

</template>

<script>

    import Navbar from '../components/single_components/Navbar.vue';
    import Footer from '../components/single_components/Footer.vue'
    import Gallery from '../components/single_components/Gallery.vue'
    export default{
    name: "iso-products",  
    components: {
        Navbar,
        Footer,
        Gallery,
        }
    }


</script>