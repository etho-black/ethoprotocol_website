<template>
  <div>
    <!-- Forgetpassword Start -->
    <section class="authentication-form">
      <div class="innerpage-decor">
        <div class="innerpage-circle1"><img :src='"../assets/images/Testimonial2.png"' alt=""></div>
        <div class="innerpage-circle2"><img :src='"../assets/images/Testimonial1.png"' alt=""></div>
      </div>
      <div>
        <h2 class="title text-center">RESET YOUR<span> PASSWORD</span></h2>
        <div class="card">
          <form class="theme-form">
            <div class="form-group mt-2">
              <h6 class="mt-0 mb-3">Enter Your Mobile Number :</h6>
              <div class="form-row">
                <div class="col-4">
                  <input type="text" class="form-control digits mb-1" value="+ 91">
                </div>
                <div class="col-8">
                  <input type="tel" class="form-control digits mb-1"  value="000-000-0000">
                </div>
                <div class="col-12 mt-4">
                  <button type="submit" class="btn btn-custom btn-block theme-color">Send</button>
                </div>
              </div>
            </div>
            <h6 class="text-center mt-0 mb-3">If don't receive OTP? <a href="#" class="text-danger">Resend</a></h6>
            <div class="form-group rounded p-4 bg-light">
              <label class="col-form-label pt-0">Enter OTP</label>
              <div class="form-row">
                <div class="col">
                  <input type="text" class="form-control digits text-center opt-text" value="00">
                </div>
                <div class="col">
                  <input type="text" class="form-control digits text-center opt-text" value="00">
                </div>
                <div class="col">
                  <input type="text" class="form-control digits text-center opt-text" value="00">
                </div>
              </div>
            </div>
            <div class="form-group">
              <input required="" type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input :type="showpassword ? 'password' : 'text'" required="required" name="login[retype_password]" class="form-control" placeholder="Retype password">
              <div  v-on:click="showpassword = !showpassword" class="show-hide">
                <span :class="{show:showpassword}"></span>
              </div>
            </div>
            <div class="form-button text-center">
              <button type="submit" class="btn btn-custom theme-color">Done</button>
            </div>
          </form>
        </div>
      </div>
      <!--strat color change -->
      <color/>
      <!--end color change-->
    </section>
    <!-- Forgetpassword End -->
  </div>
</template>
<script>

export default {
  name: 'Signin',
  data () {
    return {
      showpassword: true
    }
  }
}
</script>
