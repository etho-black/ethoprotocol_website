<template>
  <div>
    <div class="full-page">
      <div class="thanks-bg">
        <div class="container">
          <div class="col-md-12">
            <div class="thanks-section">
              <div>
                <img :src='"../assets/images/thank-you.png"' class="img-fluid downlod-img" alt="">
                <div class="col-lg-8 offset-lg-2">
                  <h2>Thank You</h2>
                </div>
                <h3>If it doesn’t start automatically, <a href="#" class="manual-down">please click here to downlaod manually.</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- copy-right-section -->
      <footer class="bg-thanks">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-section">
                <p>2018-19 Copyright &copy; By Themeforest Powered By Pixel Strap</p>
                <div class="mt-3 text-center">
                  <a :to="{path:'/tovo'}" class="btn btn-custom theme-color theme-color pt-2 pb-2">BACK TO HOME PAGE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!--end copy right section-->
      <!--color select-->
      <color/>
      <js/>
      <!--end of color select tag -->
  </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  mounted () {
    this.loader()
  },
  methods: {

  }
}
</script>
