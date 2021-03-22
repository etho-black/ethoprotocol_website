<template>
  <b-navbar   type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
     <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :to="{name:'Main_page'}" ><img :src='"../assets/images/logo.png"' alt="logo"></b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item :to="{name:'Home_one'}">Home</b-nav-item>
          <b-nav-item :to="{name:'Home_one'}">about</b-nav-item>
          <b-nav-item :to="{name:'Home_one'}">feature</b-nav-item>
          <b-nav-item :to="{name:'Home_one'}">screenshot</b-nav-item>
          <b-nav-item :to="{name:'Home_one'}">team</b-nav-item>

          <b-nav-item-dropdown right-alignment text="blog" class="nav-link">
		        <b-dropdown-item class="nav-link"  :to="{name:'Home_one'}" >Blog</b-dropdown-item>
		        <b-dropdown-item class="nav-link"  :to="{name:'blog_list'}" >Blog list</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="{name:'Blog_details'}" >Blog details</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="{name:'Blog_leftside'}">Left sidebar</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="{name:'Blog_rightside'}">Right sidebar</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="{name:'BlogLeftSidebar'}">Details left sidebar</b-dropdown-item>
            <b-dropdown-item class="nav-link"  :to="{name:'BlogrightSidebar'}" >Details right sidebar</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="{name:'Home_one'}">price</b-nav-item>
          <b-nav-item :to="{name:'Home_one'}">contact us</b-nav-item>

        <b-nav-item-dropdown right-alignment href="#Other_page" text="Other page" class="nav-link ">
          <b-dropdown-item class="nav-link"  :to="{name:'Signin'}" :href='"/tovo/sign-in"'>sign in</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'Signup'}" :href='"/tovo/sign-up"' >sign up</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'ForgetPassword'}" :href='"/tovo/forget-Password"' >Forget Password</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'Thankyou'}" :href='"/tovo/thank-you"' >Thank you</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'Review'}" :href='"/tovo/review"' >Review</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'pagenotfound'}" :href='"/tovo/404"' >404</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'Faq'}" :href='"/tovo/faq"' >FAQ</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'download'}" :href='"/tovo/download"' >Download</b-dropdown-item>
          <b-dropdown-item class="nav-link"  :to="{name:'coming_soon'}" :href='"/tovo/coming-soon"' >coming soon</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
  export default {
   name:'Navbar',
    beforeCreate: function () {
      document.body.className = ''
    }
  }
</script>
