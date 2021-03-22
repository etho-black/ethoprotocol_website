<template>
    <!-- sign up start-->
    <section class="authentication-form">
      <div class="innerpage-decor">
        <div class="innerpage-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
        <div class="innerpage-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
      </div>
      <div>
        <h2 class="title text-center">It's Free<span> Join US</span></h2>
        <p class="text-center">Welcome to tovo, Please join us with your personal account information.</p>
        <div class="card">
          <form class="theme-form">
            <div class="form-group">
              <div class="md-fgrup-margin">
                <input type="text" class="form-control" placeholder="your name" required="required">
              </div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" placeholder="phone" required="required">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="email address" required="required">
            </div>
            <div class="form-group">
              <input required="" type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
            <input :type="showpassword ? 'password' : 'text'" required="required" name="login[conform_password]" class="form-control" placeholder="Conform password">
              <div  v-on:click="showpassword = !showpassword" class="show-hide">
                <span :class="{show:showpassword}"></span>
              </div>
            </div>
            <div class="form-group row">
              <div class="custom-control custom-checkbox col-6">
                <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
                <label class="custom-control-label" for="customControlAutosizing">Remember me</label>
              </div>
              <a :href='"/tovo/forget-Password"' class="text-right col-6 theme-link">lost your password</a>
            </div>
            <div class="form-button text-center">
              <button type="submit" class="btn btn-custom theme-color">Sign Up</button>
            </div>
            <div class="or-saparator"><span>or</span></div>
            <h6 class="text-center mt-0 mb-3">Sign up with:</h6>
            <div class="form-button text-center social-btns">
              <button type="submit" class="btn btn-custom fb">Facebook</button>
              <button type="submit" class="btn btn-custom ggl">Google</button>
            </div>
          </form>
        </div>
      </div>
      <!--strat color change -->
      <color/>
      <!--end color change-->
    </section>
    <!-- sign up end-->
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Signin',
  data () {
    return {
      showpassword: true
    }
  }
}
</script>
