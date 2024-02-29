<template>
  <div class="contacts">
    <div class="contacts-header">
      <p class="contacts-title">Контакти</p>
      <p class="contacts-desc">Свържете се с нас още сега!</p>
    </div>
    <div class="contact-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5752.457781312248!2d26.00066!3d43.871809!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDUyJzE4LjUiTiAyNsKwMDAnMDIuNCJF!5e0!3m2!1sbg!2sus!4v1707251718041!5m2!1sbg!2sus"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="ruse-map"
      ></iframe>
      <div class="contact-info" v-scroll>
        <h3 class="how-to-cont">Как да се свържете с нас?</h3>
        <a href="mailto:vladimir.hristov74@abv.bg"><i class="fas fa-envelope"></i> vladimir.hristov74@abv.bg</a>
        <a href="tel:0887772677"><i class="fas fa-phone"></i> +359 88 777 2677</a>
        <a href="https://www.facebook.com/p/%D0%A0%D1%83%D1%81%D0%B5-%D0%9C%D0%B5%D1%82%D0%B0%D0%BB-%D0%93%D1%80%D1%83%D0%BF-100084805603523/?locale=bg_BG"><i class="fab fa-facebook"></i> Facebook</a>
        <p><i class="fas fa-map-marker-alt"></i> гр. Русе, бул. "Тутракан" 44</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const contactInfo = document.querySelector('.contact-info');
      contactInfo.classList.add('before-enter');

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            contactInfo.classList.add('enter');
            observer.unobserve(entry.target); // Disconnect the observer after the first entry
          }
        },
        { once: true } // Use the once option
      );

      observer.observe(contactInfo);
    },
  },
};
</script>

<style>

    .ruse-ma{
        width: 100%;
        height: 100%;
    }

    .contacts{
        background-color: #eae7e6;
    }

    .contacts-title{
        font-size: 5em;
        font-weight: bold;
        text-align: center;
        padding-top: 1em;
        color: #49657b;
        outline-color: white;
    }

    .contact-section{
        display: flex;
        width: 70%;
        margin: 0 15%;
        margin-bottom: 5em;
        background-color: #f8fcf8;
    }

    .contact-info{
        width: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 0 4em;
        font-size: 1.1em;
    }

    .contact-info.before-enter {
        opacity: 0;
        transform: translateY(20px);
    }

    .contact-info.enter {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    }

    .how-to-cont{
        color: #49657b;
        font-size: 2.3em;
        text-align: center;
        padding: 1em 0;
    }

       .contact-info a i,  .contact-info p i{
          color: #49657b;
      } 

    .contacts-desc{
        text-align: center;
        padding: 1em;
        font-size: 1.5em;
        color: 	#404040;
    }

    .contacts-header{
        padding-bottom: 2em;
    }

    .contact-info a, .contact-info p{
        text-decoration: none;
        color: #404040;
        margin-bottom: 1em;
    }

    @media (max-width: 960px) {
        .contacts{
            font-size: 60%;
        }

    @media (max-width: 750px) {
        .contact-section{
            flex-direction: column;
            width: 90%;
            margin: 0 5%;
            margin-bottom: 5em;
        }

        .contact-info{
            width: 100%;
        }

        .contact-info a, .contact-info p{
            width: 80%;
            margin: 0 10%;
            margin-bottom: 1em;
        }

    }
  }    
</style>