<template>
    <div class="navbar">
      <router-link to="/home" class="nav-sitename" @click="enableScroll">Русе Метал Груп</router-link>
 
      <button class="nav-toggle" @click="toggleMenu">&#9776; Меню</button>
 
      <ul class="nav-list" :class="{ 'nav-list-open': isMenuOpen }">
        <li v-for="page in pages" :key="page.text" class="nav-item">
          <router-link :to="page.route" tag="button" class="nav-link" @click="closeMenu">{{ page.text }}</router-link>
        </li>
      </ul>
    </div>
  </template>
 
  <script>
  export default {
    name: 'navbar',
    data() {
      return {
        pages: [
          { text: 'НАЧАЛО', route: '/home' },
          { text: 'ЗА НАС', route: '/about-us' },
          { text: 'ПРОДУКТИ', route: '/products' },
          { text: 'КОНТАКТИ', route: '/contacts' },
        ],
        isMenuOpen: false,
      };
    },
    methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.enableScroll();
    },
    enableScroll() {
      document.body.style.overflow = 'auto';
    },
  },
};
 
 
  </script>
 
  <style>
  .navbar {
    background-color: #476c8a;
    padding: 25px 0;
    text-align: center;
    height: 4.5em;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    display: flex;
    justify-content: space-around;
    z-index: 1000;
    top: 0;
  }
 
  .nav-toggle {
    background-color: #476c8a;
    color: #f8fcf8;
    font-size: 1em;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: none;
  }
 
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 4em;
    align-items: center;
    font-size: 1em;
    transition: transform 0.3s ease; 
  }
 
  .nav-item {
    margin-right: 15px;
  }
 
  .nav-link {
    text-decoration: none;
    color: #f8fcf8;
    padding: 27px 20px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bolder;
  }
 
  .nav-link:hover {
    color: white;
    background-color: #49657b;
    border-bottom: solid 2px white;
  }
 
  .nav-sitename {
    color: #f8fcf8;
    font-size: 2.3em;
    text-decoration: none;
  }
 
 
  @media (max-width: 1150px) {
    .navbar{
      font-size: 80%;
    }
  }
 
  @media (max-width: 960px) {
    .nav-list {
      flex-direction: column;
      gap: 1em;
      display: none; 
      position: absolute;
      top: 4.5em;
      left: 0;
      width: 100%;
      background-color: #476c8a;
      text-align: center;
    }
 
    .nav-list-open {
      display: flex; 
      transform: translateY(0); 
      width: 100%;
    }
 
    .nav-toggle {
      display: block; 
    }
 
    .nav-sitename {
        font-size: 1.5em;
    }
 
    .navbar{
      font-size: 80%;
    }
 
    .nav-link{
      padding: 0;
    }
 
    .nav-item{
      margin-right: 0;
      border-bottom: solid 2px white;
      width: 100%;
      padding: 0.5em;
    }
 
    .nav-list-open{
      padding: 1em 0 0 0;
    }
 
    .navbar{
      border-bottom: solid 2px white;
    }
  }
  </style>