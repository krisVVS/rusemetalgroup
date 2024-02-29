<template>
  <div class="products">
    <div class="products-header-container">
      <p class="products-header">Нашите продукти</p>
    </div>
    <div class="products-container">
      <div
        class="product"
        v-for="(product, index) in products"
        :key="index"
        ref="productsRef"
        v-scroll="{
          enter: 'enter',
          beforeEnter: 'before-enter',
          target: index === 1 ? '#info2' : null
        }"
      >
        <img :src="product.imgPath" class="product-image">
        <p class="product-name">{{ product.productName }}</p>
        <router-link :to="product.route" tag="button" class="product-btn">ВИЖ ВСИЧКИ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import image1Path from '../../utils/_MG_9697.jpeg';
import image2Path from '../../utils/IMG_0746.jpeg';

export default {
  name: 'products',
  data() {
    return {
      products: [
        { productName: 'Термоизолационни панели', route: '/isoproducts', imgPath: image1Path },
        { productName: 'Метални профили и тръби', route: '/metal-pipes', imgPath: image2Path },
      ],
    };
  },
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
  setupScrollAnimations() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add('enter');

          // Disconnect the observer once the target enters the view
          observer.unobserve(target);
        }
      });
    }, options);

    const products = this.$refs.productsRef;
    products.forEach((product) => {
      product.classList.add('before-enter');
      observer.observe(product);
    });
  },
},
};
</script>


  
  <style scoped>

  .product.before-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .product.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
    .products {
      width: 100%;
      background-color: #eae7e6;
      padding: 0 1em;
    }
  
    .products-container {
      display: flex;
      justify-content: space-around;
      gap: 1.5em;
      margin: 2em 0 0 0;
      flex-wrap: wrap;
      padding-bottom: 2em;
    }
  
    .product {
      border-radius: 10px;
      background-color: #e5dfda;
      margin-bottom: 2em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: 2px solid #7f8e9e;
      box-shadow: 8px 5px 8px rgb(71, 108, 138, 0.55);
    }
  
    .product-image {
      position: relative;
      overflow: hidden;
      object-fit: cover;
      height: 25em;
      width: 100%;
      border-top-right-radius: 2%;
      border-top-left-radius: 2%;
      border-bottom: 2px solid #7f8e9e;
    }
  
    .product-name {
      font-size: 2em;
      padding: 1em 0 2em 1em;
      color: #49657b;
    }
  
    .product-btn {
      text-decoration: none;
      color: white;
      border-color: white;
      background-color: #476c8a;
      padding: 1em;
      border: 1px solid #f8fcf8;
      border-radius: 30px;
      width: 80%; 
      text-align: center;
      align-self: center;
      margin: 2em 0;
    }
  
    .product-btn:hover {
      border: solid 2px #476c8a;
      color: #476c8a;
      background-color: rgb(255, 255, 255, 0.5);
    }
  
    .products-header{
      text-align: center;
      padding: 1em 0; 
      padding-bottom: 0.5em;
    }
  
    .products-header {
      font-size: 5em;
      font-weight: bold;
      color: #49657b;
      outline-color: white;
      padding-bottom: 1em;
    }
  
    .products-info {
      font-size: 1.5em;
      color: #404040;
      padding-bottom: 3em; 
      border-bottom: 3px solid #49657b;
      margin-bottom: 3em;
      margin-left: 3em;
      margin-right: 3em;
      padding-bottom: 3em;
      text-align: center;
    }
  
    
    @media (max-width: 960px) {
      .product {
        width: 100%; 
      }
  
      .product-btn {
        width: 50%; 
      }

      .products{
        font-size: 60%;
      }
    }


    @media (max-width: 300px) {
      .product {
        width: 100%; 
      }
  
      .product-btn {
        width: 50%; 
      }

      .products{
        font-size: 45%;
      }
    }
  </style>
  