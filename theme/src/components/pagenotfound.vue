<template>
 <div>

   <div class="authentication-form not-found">
     <div class="innerpage-decor">
       <div class="innerpage-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
       <div class="innerpage-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
     </div>
     <div class="text-center">
       <h2 class="error-font">4<span>0</span>4</h2>
       <h2 class="f-bold">Not found</h2>
       <div class="col-md-8 offset-md-2 col-12">
         <h3>The page you are attempting to reach is currently not available. This may be because
           the page does not exist or has been moved.
         </h3>
       </div>
       <div class="mt-5">
         <a :href='"/tovo"' class="btn btn-custom theme-color theme-color pt-2 pb-2">BACK TO HOME PAGE</a>
       </div>
     </div>
   </div>
   <!-- start color select tag-->
   <color/>
   <!-- end color select tag-->
 </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'pagenotfound',
  mounted () {
    this.loader()
  },
  methods: {

  }
}
</script>

<style lang="scss">
  @import '../assets/index.scss';
</style>
