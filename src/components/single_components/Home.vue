<template>
  <div class="home-section">
    <div class="image-container">
      <video :src="videoPath" autoplay muted loop controls controlsList="nofullscreen" class="bg-video"></video>
      <div ref="imageOverlay" class="image-overlay" :class="{ 'fade-in': shouldFadeIn }">
        <p class="home-title">Разгледайте нашите продукти!</p>
        <router-link to="/products" class="products-btn">ПРОДУКТИ</router-link>
      </div>
    </div>
  </div>
</template>
 
<script>
import bgVideo from '../../utils/bgvideo.mp4';
 
export default {
  name: "home-main",
  data() {
    return {
      videoPath: bgVideo,
      shouldFadeIn: true, 
    };
  },
  created() {
    this.checkFadeIn();
  },
  methods: {
    checkFadeIn() {
      if (this.shouldFadeIn) {
        const imageOverlay = this.$refs.imageOverlay;
 
        if (imageOverlay) {
          imageOverlay.classList.add("fade-in");
          imageOverlay.addEventListener("transitionend", this.handleTransitionEnd, { once: true });
          this.shouldFadeIn = false;
        }
      }
    },
    handleTransitionEnd() {
      this.$refs.imageOverlay.classList.remove("fade-in");
    },
  },
};
</script>
 
<style>
.home-section {
  text-align: center;
  position: relative;
  overflow: hidden;
}
 
.image-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
 
.bg-video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
 
.image-overlay {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #f8fcf8;
  font-weight: bold;
  z-index: 10;
  width: 70%;
  opacity: 0;
}
 
.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}
 
.home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: radial-gradient(circle at top right, transparent 80%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
}
video::-webkit-media-controls-fullscreen-button {
  display: none;
}
 
.home-title {
  font-size: 5em;
  padding-bottom: 1em;
  text-shadow: 3px 3px 3px #476c8a;
  margin: 0;
}
 
.products-btn {
  padding: 1em 3em;
  font-size: 1em;
  border-radius: 30px;
  background-color: rgb(71, 108, 138, 1);
  border: solid 2px #fff6e5;
  color: #f8fcf8;
  font-weight: bold;
  text-decoration: none;
  z-index: 10;
}
 
.products-btn:hover {
  border: solid 2px #476c8a;
  color: #476c8a;
  background-color: rgb(229, 223, 218, 0.8);
}
 
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
 
@media (max-width: 768px) {
  .image-overlay {
    width: 80%;
  }
 
  .home-title {
    font-size: 2.5em;
  }
 
  .products-btn {
    padding: 0.8em 2em;
    font-size: 0.9em;
    border-radius: 25px;
  }
 
  .home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  background: radial-gradient(circle at top right, transparent 0%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
 
 
 
}
}
 
@media (max-width: 585px) {
  .home-title {
    font-size: 2em;
  }
 
  .products-btn {
    padding: 0.6em 1.5em;
    font-size: 0.8em;
    border-radius: 20px;
  }
 
}
 
 
 
@media (max-width: 1600px) {
  .home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 65%;
  height: 100%;
  background: radial-gradient(circle at top right, transparent 80%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
}
}
 
@media (max-width: 1050px) {
  .home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, transparent 85%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
}
}
 
@media (max-width: 590px) {
  .home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, transparent 87%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
}
}
 
@media (max-width: 460px) {
  .home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 125%;
  background: radial-gradient(circle at top right, transparent 75%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
}
}
 
@media (max-width: 1400px) {
  .home-section::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 125%;
  background: radial-gradient(circle at top right, transparent 75%, #476c8a 51%);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 1;
}
}
 
</style>