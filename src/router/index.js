import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage';
import ToursPage from '../views/pages/ToursPage';
import TourguiedsPage from '../views/pages/TourguiedsPage';
import BlogPage from '../views/pages/BlogPage';
import CustomizePage from '../views/pages/CustomizePage';
import BloginfoPage from '../views/pages/BloginfoPage';
import BookPage from '../views/pages/BookPage';
import PyramidsPage from '../views/pages/PyramidsPage';
import FavoPage from '../views/pages/FavoPage';
import CheckoutPage from '../views/pages/CheckoutPage';
import PolicyPage from '../views/pages/PolicyPage';
import TermServices from '../views/pages/TermServices';
import ContactPage from '../views/pages/ContactPage';
import AboutPage from '../views/pages/AboutPage';
import AllphotosPage from '../views/pages/AllphotosPage' ;
import Tour_gprofilePage from '../views/pages/Tour_gprofilePage';
import HeaderComp2 from '../../src/components/HeaderComp2';
import NotificationsPage from '../views/pages/NotificationsPage';
import UserprofilePage from '../views/pages/UserprofilePage';
import FAQPage from '../views/pages/FAQPage';
import DownloadHisPage from '../views/pages/DownloadHisPage';
import Tourg_profileNewtour from '../views/pages/Tourg_profileNewtour';
import NewTour from '../views/pages/NewTour';
import SignIn from '../views/pages/SignIn';
import ForgetPassword from '../views/pages/ForgetPassword';
import VerifyPass from '../views/pages/VerifyPass';
import ResetPassword from '../views/pages/ResetPassword';
import SignUp from '../views/pages/SignUp';
import SignUpTour from '../views/pages/SignUpTour';
import JoinTourGuid from '../views/pages/JoinTourGuid';
import VerifySignUp from '../views/pages/VerifySignUp';
import ModalSignup_tour from '../components/Design/ModalSignup_tour';
import ChatPage from '../views/pages/ChatPage';









import DestinationsComp from '../views/destinations.vue';
import DestinationsSearch from '../views/search.vue'
import DestinationsSearchSingle from '../views/search-single.vue'
import TourSearchSingle from '../views/tour-single.vue'






const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/tours',
    name: 'tours',
    component: ToursPage
  },
  {
    path: '/tour-guides',
    name: 'tours-guides',
    component: TourguiedsPage
  },

  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },

  
  {
    path: '/customize',
    name: 'customize',
    component: CustomizePage
  },

  {
    path: '/blog-info',
    name: 'blog-info',
    component: BloginfoPage
  },

  {
    path: '/book',
    name: 'book-page',
    component: BookPage
  },
  {
    path: '/pyramids',
    name: 'pyramids-page',
    component: PyramidsPage
  },

  {
    path: '/favo',
    name: 'favo',
    component: FavoPage
  },
  {
    path: '/checkout-page',
    name: 'checkout',
    component: CheckoutPage
  },
  {
    path: '/policy',
    name: 'policy',
    component: PolicyPage
  },
  {
    path: '/term_of_services',
    name: 'term',
    component: TermServices
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/photos',
    name: 'all-photos',
    component: AllphotosPage
  },
  {
    path: '/nav2',
    name: 'nav_2',
    component: HeaderComp2
  },
  {
    path: '/notifications',
    name: 'notify',
    component: NotificationsPage
  },

  {
    path: '/u-profile',
    name: 'u-profile',
    component: UserprofilePage
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQPage
  },
  {
    path: '/tour-guide',
    name: 'tour-guide',
    component: Tour_gprofilePage
  },
  {
    path: '/book',
    name: 'book',
    component: BookPage
  },
{
  path: '/destinations',
  name: 'destinationsComp',
  component: DestinationsComp
},
{
  path: '/search',
  name: 'search',
  component: DestinationsSearch
},

{
  path: '/search-single',
  name: 'search-single',
  component: DestinationsSearchSingle
},

{
  path: '/tour-single',
  name: 'tour-single',
  component: TourSearchSingle
},

{
  path: '/download',
  name: 'download',
  component: DownloadHisPage
},

{
  path: '/newTour',
  name: 'new_tour',
  component: Tourg_profileNewtour
},
{
  path: '/newTourform',
  name: 'add_tour_page_form',
  component: NewTour
},

{
  path: '/sign_in',
  name: 'sing_in',
  component: SignIn
},

{
  path: '/forgetpassword',
  name: 'forgetpass',
  component: ForgetPassword
},

{
  path: '/verify',
  name: 'verify',
  component: VerifyPass
},

{
  path: '/resetpass',
  name: 'resetpass',
  component: ResetPassword
},

{
  path: '/sign-up-tour',
  name: 'sign-up-tour',
  component: SignUpTour
},

{
  path: '/sign-up',
  name: 'sign-up',
  component: SignUp
},

{
  path: '/join_tour',
  name: 'join_tour',
  component: JoinTourGuid

},
{
  path: '/verify-signup',
  name: 'verify-signup',
  component: VerifySignUp

},

{
  path: '/modal-signup-tour',
  name: 'modal-signup-tour',
  component: ModalSignup_tour

},
{
  path: '/messages',
  name: 'messages',
  component: ChatPage

},
































  
  





  
  
 
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
