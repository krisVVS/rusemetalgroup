<template>
  <div class="about-us">
    <div class="about-header">
      <p class="about-title">Русе Метал Груп</p>
    </div>
    <div class="image-info-container">
      <div class="info" v-for="(info, index) in infoData" :key="index">
        <div class="mask"></div>
        <img :src="info.imgPath" class="info-image">
        <div
          class="info-rectangle"
          :id="'info' + (index + 1)"
        >
          <h2 class="info-title">{{ info.title }}</h2>
          <p class="info-desc">{{ info.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1Path from '../../utils/_MG_9736.jpeg';
import image2Path from '../../utils/IMG_0743.jpeg';
import image3Path from '../../utils/IMG_0749.jpeg';

export default {
  data() {
    return {
      infoData: [
        {
          title: 'За Компанията',
          description: 'Русе Метал Груп ООД е създадена през 2004г. и се занимава с продажба на метални профили и тръби и термоизолационни панели.  ',
          imgPath: image1Path
        },
        {
          title: 'Специализация',
          description: 'Русе Метал Груп ООД се занимава с Първо, Второ и Трето качество профили и тръби.',
          imgPath: image2Path
        },
        {
          title: 'Собственик',
          description: 'Едноличен собственик на капитала на Русе Метал Груп ООД е Владимир Христов.',
          imgPath: image3Path
        },
      ],
    };
  },
  mounted() {
    const elements = document.querySelectorAll('.info-rectangle');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting) {
          element.classList.add('enter');
        }
      });
    });

    elements.forEach((element) => {
      element.classList.add('before-enter');
      observer.observe(element);
    });
  },
};
</script>




<style>

  .about-us{
    background-color: #eae7e6;
  }

  .info-image{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 30em;
    object-fit: cover;
    margin-top: 5em;
  }

  .info-rectangle{
    border: solid 2px white;
    width: 30%;
    height: 40%;
    padding: 1.5em;
    background-color: #476c8a;
    border-radius: 10px;
    position: relative;
    z-index: 20;
    top: -20em;
    transform: translateX(-100%);
    transition: transform 1s ease-in-out, opacity 2s ease-in-out;
  }

  #info1, #info3 {
    margin-left: 65%;
    animation: slideInRightToLeft s ease-in forwards;
  }

  #info2 {
    margin-left: 5%;
    animation: slideInLeftToRight s ease-out forwards;
  }

  @keyframes slideInRightToLeft {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInLeftToRight {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .info-rectangle.before-enter {
    transform: translateX(-100%);
    opacity: 0;
  }

  .info-rectangle.enter {
    transform: translateX(0);
    opacity: 1;
  }


  .info-title{
    padding-bottom: 0.5em;
    color: #f8fcf8;
    font-size: 2.3em;
  }

  .info-desc{
    color: #e5dfda;
    font-size: 1.3em;
  }

  .about-title{
    font-size: 5em;
    font-weight: bold;
    text-align: center;
    padding-top: 1em;
    color: #49657b;
    outline-color: white;
  }

  .about-img{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 30em;
    object-fit: cover;
    margin-top: 5em;

  } 

  .info{
    height: 35em;
  }

  .about-desc{
    text-align: center;
    padding: 1em;
    font-size: 1.5em;
    color: 	#404040;
  }

  .mask{
    background-color: rgba(0, 0, 0, 0.5); 
    width: 100%;
    margin-top: 5em;
    height: 30em;
    position: absolute;
    z-index: 1;
  }

  #info1, #info3{
    margin-left: 65%;
  }

  #info2{
    margin-left: 5%;
  }

  @media (max-width: 1700px) {
    .info-rectangle {
      width: 30%;
    }

    #info1, #info3{
      margin-left: 55%;
    }

  #info2{
      margin-left: 15%;
    }

  }

  @media (max-width: 1330px) {

    .info-rectangle {
      width: 35%;
    }

    #info1, #info3{
    margin-left: 55%;
  }

    #info2{
      margin-left: 10%;
    }

  }


  @media (max-width: 1150px) {

  .info-rectangle {
    width: 43%;
  }

  #info1, #info3{
  margin-left: 48%;
  }

  #info2{
    margin-left: 3%;
  }

}

  @media (max-width: 700px) {

      .info-rectangle {
        width: 40%;
      }

      #info1, #info3{
      margin-left: 45%;
      }

      #info2{
        margin-left: 10%;
      }

  }


  @media (max-width: 600px) {

    .info-rectangle {
      width: 60%;
      
    }


    #info1, #info3{
    margin-left: 30%;
    }

    #info2{
      margin-left: 10%;
    }

  }

  @media (max-width: 400px) {

    .info-rectangle {
      width: 80%;
      
    }


    #info1, #info3{
    margin-left: 10%;
    }

    #info2{
      margin-left: 10%;
    }

    }


  @media (max-width: 960px) {
    .info-rectangle {
      max-width: 100%;
      margin: 0 auto;
    }

    .about-us{
      font-size: 60%;
    }

  }

  @media (max-width: 300px) {

.info-rectangle{
  font-size: 90%;
  width: 100%;
  margin: 0;
}


}
</style>