import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sports from '../views/Sports.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import BookNow from '../views/BookNow.vue'
import Contact from '../views/Contact.vue'
import LoaBoards from '../views/LoaBoards.vue'
import Feedback from '../views/Feedback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/book_now',
    name: 'BookNow',
    component: BookNow
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/brands/loa_boards',
    name: 'LoaBoards',
    component: LoaBoards
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
