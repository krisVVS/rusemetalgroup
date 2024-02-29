import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue';
import ContactsPage from '../components/ContactsPage.vue'
import IsoProductsPage from '../components/IsoProductsPage.vue'
import AboutUsPage from '../components/AboutUsPage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import MetalPipesPage from '../components/MetalPipesPage.vue'
import GalleryPage from '../components/GalleryPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },
  {
    path: '/isoproducts',
    name: 'iso-products',
    component: IsoProductsPage
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsPage
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  { 
    path: '/', 
    redirect: '/home' 
  },
  { 
    path: '/metal-pipes', 
    name: 'metal-pipes',
    component: MetalPipesPage
  },
  { 
    path: '/gallery', 
    name: 'gallery',
    component: GalleryPage
  },
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});


export default router;
