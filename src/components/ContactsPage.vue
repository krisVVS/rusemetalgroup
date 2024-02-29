<template>
    
    <Navbar></Navbar>
    <Contacts></Contacts>
    <Footer></Footer>

</template>

<script>

    import Navbar from '../components/single_components/Navbar.vue';
    import Footer from '../components/single_components/Footer.vue'
    import Contacts from '../components/single_components/Contacs.vue'
    export default{
    name: "contacts-page",  
    components: {
        Navbar,
        Footer,
        Contacts
        }
    }


</script>