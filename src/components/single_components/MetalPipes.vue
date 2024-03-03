<template>
    <div class="metal-pipes">
      <div class="products-header-container">
        <p class="products-header">Профили и тръби</p>
      </div>
      <div class="pipe-products">
        <div class="pipe-product" v-for="(product, index) in pipes" :key="index" v-scroll>
            <div class="header-pipe" :id="'pipe' + (index + 1)">  
                <div class="pipe-mask"></div>             
                <img :src="product.imgPath"  class="pipe-img">
                <p class="pipe-title" :id="'title' + (index + 1)">{{ product.title }}</p>
            </div>
 
          <p class="pipe-desc" :id="'desc' + (index + 1)">{{ product.description }}</p>
          <!-- <div class="order">
            <p>Поръчай сега!</p>
            <a href="tel:0887772677" class="phone-num"><i class="fas fa-phone"></i> +359 88 777 2677</a>
          </div> -->
        </div>
      </div>
    </div>
  </template>
 
<script>
import image1Path from '../../utils/IMG_0743.jpeg';
import image2Path from '../../utils/IMG_0749.jpeg';
 
export default {
  data() {
    return {
      pipes: [
        {
          title: 'Първо качество',
          description: 'Всички метални тръби и профили във всички размери по поръчка.',
          imgPath: image1Path,
        },
        {
          title: 'Второ и Трето качество',
          description: 'Метални тръби и профили по наличие.',
          imgPath: image2Path,
        },
      ],
    };
  },
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
  setupScrollAnimations() {
    const pipeProducts = document.querySelectorAll('.pipe-product');
    pipeProducts.forEach((product) => {
      product.classList.add('before-enter');
 
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            product.classList.add('enter');
            // Remove the observer once the animation is done
            observer.disconnect();
          } else {
            product.classList.remove('enter');
          }
        },
        { once: true } // This ensures the observer is only triggered once
      );
 
      observer.observe(product);
    });
  },
},
};
</script>
 
 
<style>
 
.metal-pipes {
    width: 100%;
    background-color: #eae7e6;
    padding: 0 1em;
}
 
.header-pipe{
    width: 40%;
    position: absolute;
    height: 100%;
}
 
.pipe-img{
    height: 100%;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
}
 
#pipe2{
    margin-left: 60%;
 
}
 
.pipe-mask{
    background-color: rgb(0, 0, 0, 0.5);
    width: 100%;
    z-index: 10;
    height: 100%;
    position: absolute;
    border-radius: 20px;
}
 
#desc1{
    margin-left: 40%;
    margin-top: 3%;
 
}
 
#desc2{
    margin-left: 5%;
    margin-top: 5%;
}
 
.pipe-products{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1em;
}
 
.pipe-product{
    width: 70%;
    border: 2px solid black;
    margin-bottom: 5em;
    border-radius: 20px;
    border-color: white;
    background-color: #6490af;
    color: #f8fcf8;
    height:15em;
    display: flex;
}
 
.pipe-title{
    font-size: 2.7em;
    z-index: 20;
    bottom: 30%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    text-align: center;
    padding:1em 2em;
    bottom: 5em;
    position: relative;
}
 
#title2{
    bottom: 5em;
    padding: 1em 0;
}
 
.pipe-desc{
    font-size: 1.7em;
    height: 30%;
    padding: 1em;
    text-align: center;
    width: 50%;
}
 
 
 
.pipe-product.before-enter {
    opacity: 0;
    transform: translateY(20px);
  }
 
.pipe-product.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
 
.phone-num{
    text-decoration: none;
    color: #f8fcf8;
 
}
 
.order{
    padding: 1em;
}
 
 
@media (max-width: 960px) {
 
.metal-pipes{
  font-size: 60%;
}
 
.products-header-container{
  margin: 0 5em;
}
 
}
 
@media(max-width: 1310px){
 
    .pipe-product{
        width: 90%;
    }
 
 
}
 
@media(max-width: 630px){
 
 
 
.pipe-product{
    width: 100%;
    font-size: 70%;
}
 
 
}
 
 
@media(max-width: 500px){
 
  #title2{
    bottom: 4.5em;
    padding:0;
}
 
#title1{
    bottom: 4em;
    padding:0;
}
 
#desc1{
    margin-left: 45%;
    width: 50%;    
    margin-top: 1.5em;
    padding: 0;
}
 
.products-header{
  font-size: 350%;
}

.pipe-product{
  height:100%;
}
}
 
 
</style>