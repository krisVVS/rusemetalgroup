<template>

    <div class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Контакти</h3>
          <a href="mailto:vladimir.hristov74@abv.bg"><i class="fas fa-envelope"></i> vladimir.hristov74@abv.bg</a>
          <a href="tel:0887772677"><i class="fas fa-phone"></i> +359 88 777 2677</a>
          <a href="https://www.facebook.com/p/%D0%A0%D1%83%D1%81%D0%B5-%D0%9C%D0%B5%D1%82%D0%B0%D0%BB-%D0%93%D1%80%D1%83%D0%BF-100084805603523/?locale=bg_BG">
            <i class="fab fa-facebook"></i> Facebook
          </a>       
       </div>
  
        <div class="footer-section">
          <h3>Адрес</h3>
          <p> бул. „Тутракан“ 44</p>
          <p>Русе</p>
          <p>България</p>
          <router-link to="/contacts" ><i class="fas fa-map-marker-alt"></i>  Карта</router-link>
        </div>


        <div class="footer-section">
          <h3>Продукти</h3>
          <router-link to="/isoproducts" >Tермоизолационни панели</router-link>
          <router-link to="/metal-pipes" >Метални профили и тръби</router-link>
        </div>
  
        <div class="footer-section">
          <h3>Бърза навигация</h3>
          <router-link to="/home" >Начало</router-link>
          <router-link to="/about-us" >За Нас</router-link>
          <router-link to="/products" >Продукти</router-link>
          <router-link to="/contacts" >Контакти</router-link>

        </div>
      </div>

      
      
  
      <div class="footer-bottom">
        <p>&copy; 2024 Русе Метал Груп. Всички права запазени.</p>
        <a href="tel:0889010006" class="wm">Създадено от ABK Marketing Agency</a>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    
    background-color: #476c8a;
    color: #fff6e5;
    padding-top: 5em;
    
  }
  
  .wm{
    font-size: 0.8em;
    text-decoration: underline dotted;
  }

  .footer-content {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  
  .footer-section {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  
  .footer h3 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .gallery-content {
    text-align: center;
    font-size: 1.5em;
    padding: 1em;
    margin-top: 3em;
    max-width: 30%;
    margin: 0 auto;
    margin-top: 3em;
    align-self: center; 
  }

  .gallery-content а {
    color: #476c8a;
  }



  .footer p {
    margin: 0.5em 0;
    font-weight: 50;
  }

  .footer a {
    margin: 0.5em 0;
    font-weight: 50;
    text-decoration: none;
  }

  a{
    color: #fff6e5;
  }
  
  .footer-bottom {
    border-top: solid 2px #f8fcf8;
    text-align: center;
    margin-top: 4em;
    padding: 2em;
    background-color: #7f8e9e;
  }
  .footer-bottom a {
    text-decoration:underline;
  }

  .fab{
    color: white;
  }

  .gallery-buttonа {
    background-color: #f8fcf8;
    padding: 1em 2em;
    border-radius: 30px;
    color: #476c8a;
    text-align: center;
  }

  .gallery-buttonа:hover {
    background-color: rgb(365, 365, 365, 0.3);
    border: solid 2px white;
    padding: 1em 2em;
    color: #f8fcf8;
    border-radius: 30px;
  }

  @media (max-width: 750px) {
  .footer-content {
    flex-direction: column;
    gap: 2.5em  ;
  }

  .footer-section {
    flex: none; 
    width: 100%;
  }

  .footer{
    font-size: 80%;
  }

  .gallery-content {
      max-width: 100%; 
    }

    .gallery-buttonа {
      font-size: 90%;
      padding: 0.7em 1.5em;
      border-radius: 30px;
      color: #476c8a;
      text-align: center;
      align-self: center;
    }
}
  </style>