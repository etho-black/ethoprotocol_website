import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/demo_page/main'
import Homeone from '@/demo_page/home_one'
import Hometwo from '@/demo_page/home_two'
import Homethree from '@/demo_page/home_three'
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Feature from '@/components/feature'
import Screenshots from '@/components/screenshots'
import Team from '@/components/team'
import LatestBlog from '@/components/latest_blog'
import Price from '@/components/price'
import Testimonial from '@/components/testimonial'
import ContactUs from '@/components/contact_us'
import Subscribe from '@/components/subscribe'
import Map from '@/components/map'
import Tile from '@/components/tile'
import Footer from '@/components/footer'
import PageNotFound from '@/components/pagenotfound'
import js from '@/components/js'
import Bloglist from '@/blog/blog_list'
import BlogDetails from '@/blog/blog_details'
import BlogLeftSide from '@/blog/blog_leftside'
import BlogRightSide from '@/blog/blog_rightside'
import BlogLeftSidebar from '@/blog/blog_left_sidebar'
import BlogRightSidebar from '@/blog/blog_right_sidebar'
import Signin from '@/pages/sign_in'
import Signup from '@/pages/sign_up'
import ForgetPassword from '@/pages/forget_Password'
import Review from '@/pages/review'
import Thankyou from '@/pages/thank_you'
import Faq from '@/pages/faq'
import download from '@/pages/download'
import comingsoon from '@/pages/coming_soon'
import Emailtemplate from '@/pages/email_template'
import color from '@/components/color'
import NavbarBlog from '../components/navbar_blog'

Vue.use(Router)
Vue.component('Navbar', Navbar)
Vue.component('About', About)
Vue.component('Feature', Feature)
Vue.component('Screenshots', Screenshots)
Vue.component('Team', Team)
Vue.component('Latest-blog', LatestBlog)
Vue.component('Price', Price)
Vue.component('Testimonial', Testimonial)
Vue.component('Contact_us', ContactUs)
Vue.component('Subscribe', Subscribe)
Vue.component('Map', Map)
Vue.component('Footer', Footer)
Vue.component('BlogList', Bloglist)
Vue.component('BlogDetails', BlogDetails)
Vue.component('BlogLeftSide', BlogLeftSide)
Vue.component('BlogRightSide', BlogRightSide)
Vue.component('BlogLeftSidebar', BlogLeftSidebar)
Vue.component('BlogRightSidebar', BlogRightSidebar)
Vue.component('Signin', Signin)
Vue.component('Signup', Signup)
Vue.component('ForgetPassword', ForgetPassword)
Vue.component('Thankyou', Thankyou)
Vue.component('Review', Review)
Vue.component('Faq', Faq)
Vue.component('download', download)
Vue.component('comingsoon', comingsoon)
Vue.component('Emailtemplate', Emailtemplate)
Vue.component('js', js)
Vue.component('Tile', Tile)
Vue.component('color', color)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {path: '/', redirect: '/tovo'},
    {
      path: '/tovo',
      name: 'Main_page',
      component: Main
    },
    {
      path: '/tovo/home-one',
      name: 'Home_one',
      components: {
        default: Homeone,
        navbar: Navbar,
      }

    },
    {
      path: '/tovo/home-two',
      name: 'Home_two',
      components: {
        default: Hometwo,
        navbar: Navbar,
      }
    },
    {
      path: '/tovo/home-three',
      name: 'Home_three',
      components: {
        default: Homethree,
        navbar: Navbar,
      }
    },
    {
      path: '/tovo/404',
      name: 'pagenotfound',
      component: PageNotFound
    },
    {
      path: '/tovo/blog-list',
      name: 'blog_list',
      components: {
        default: Bloglist,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/blog-details',
      name: 'Blog_details',
      components: {
        default: BlogDetails,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/blog-leftside',
      name: 'Blog_leftside',
      components: {
        default: BlogLeftSide,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/blog-rightside',
      name: 'Blog_rightside',
      components: {
        default: BlogRightSide,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/blog-left-sidebar',
      name: 'BlogLeftSidebar',
      components: {
        default: BlogLeftSidebar,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/blog-right-sidebar',
      name: 'BlogrightSidebar',
      components: {
        default: BlogRightSidebar,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/sign-in',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/tovo/sign-up',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/tovo/forget-Password',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/tovo/thank-you',
      name: 'Thankyou',
      component: Thankyou
    },
    {
      path: '/tovo/review',
      name: 'Review',
      components: {
        default: Review,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/faq',
      name: 'Faq',
      components: {
        default: Faq,
        navbar: NavbarBlog,
      }
    },
    {
      path: '/tovo/download',
      name: 'download',
      component: download
    },
    {
      path: '/tovo/coming-soon',
      name: 'coming_soon',
      component: comingsoon
    },
    {
      path: '/tovo/email-template',
      name: 'Emailtemplate',
      component: Emailtemplate
    },
    {
      path: '*',
      redirect: '/tovo/404'
    }]
})
