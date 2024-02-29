<template>
    <div class="gallery-section">

        <div class="products-header-container">
            <p class="products-header">Галерия</p>
        </div>

        <div class="slideshow-container">
            <div v-for="(image, index) in images" :key="index" class="mySlides" v-bind:class="{ active: index === currentIndex }">
            <img :src="image.src" :alt="image.alt" style="width:100%" class="gallery-img">
            </div>

            <div class="dot-container">
            <span v-for="(image, index) in images" :key="index" class="dot" @click="goToSlide(index)" v-bind:class="{ active: index === currentIndex }"></span>
            </div>

            <a class="prev" @click="prevSlide">&#10094;</a>
            <a class="next" @click="nextSlide">&#10095;</a>
        </div>



    </div>
</template>
  
<script>

import image1Path from '../../utils//_MG_9685.jpeg';
import image2Path from '../../utils//_MG_9695.jpeg';
import image3Path from '../../utils//_MG_9697.jpeg';
import image4Path from '../../utils//_MG_9736.jpeg';
import image5Path from '../../utils//_MG_9766.jpeg';
import image6Path from '../../utils//_MG_9768.jpeg';
import image7Path from '../../utils//_MG_9826.jpeg';
import image8Path from '../../utils//IMG_0743.jpeg';
import image9Path from '../../utils//IMG_0744.jpeg';
import image10Path from '../../utils//IMG_0745.jpeg';
import image11Path from '../../utils//IMG_0746.jpeg';
import image12Path from '../../utils//IMG_0747.jpeg';
import image13Path from '../../utils//IMG_0748.jpeg';
import image14Path from '../../utils//IMG_0749.jpeg';
import image15Path from '../../utils//IMG_0750.jpeg';



export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: image3Path, alt: 'Image 1' },
        { src: image1Path, alt: 'Image 2' },
        { src: image2Path, alt: 'Image 3' },
        { src: image4Path, alt: 'Image 4' },
        { src: image5Path, alt: 'Image 5' },
        { src: image6Path, alt: 'Image 6' },
        { src: image7Path, alt: 'Image 7' },
        { src: image8Path, alt: 'Image 8' },
        { src: image9Path, alt: 'Image 9' },
        { src: image10Path, alt: 'Image 10' },
        { src: image11Path, alt: 'Image 11' },
        { src: image12Path, alt: 'Image 12' },
        { src: image13Path, alt: 'Image 13' },
        { src: image14Path, alt: 'Image 14' },
        { src: image15Path, alt: 'Image 15' },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 10000);
  },
};
   
</script>
  
<style>


  .slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;
  margin-bottom: 5em;
}

.gallery-img{
  width: 100%;
  height: 100%;
  max-height: 45em;
  object-fit: cover;

}

.mySlides {
  display: none;
  transition: background-color 0.6s ease;
  width: 70%;
  margin: 0 auto;
  object-fit: cover;
  height: 100%em;
}

.mySlides.active {
  display: block;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

.prev {
  left: 15%;
  border-radius: 3px 0 0 3px;
}

.next {
  right: 15%;
  border-radius: 0 3px 3px 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.dot-container {
  text-align: center;
  padding: 10px;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  cursor: pointer;
}

.dot.active {
  background-color: #717171;
}


@media (max-width: 960px) {

.gallery-section{
  font-size: 60%;
  text-align: center;
}
.mySlides{
    width:100%;
}

.gallery-img{
  width: 100%;
  height: 100%;
  max-height: 35em;
  object-fit: cover;

}


.prev{
    left: 0;
}
.next{

    right: 0;
}
.dot {
  height: 10px;
  width: 10px;
}

}


@media(max-width: 530px){

  .gallery-img{
  width: 100%;
  height: 100%;
  max-height: 25em;
  object-fit: cover;

}
}

@media(max-width: 350px){

.gallery-img{
width: 100%;
height: 100%;
max-height: 20em;
object-fit: cover;

}

.dot {
  height: 6px;
  width: 6px;
}
}


</style>
  