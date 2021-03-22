<template>
  <div>
    <!--Map Section Start-->
    <section class="p-0">
      <div class="container-fluid">
        <div class="bottom-section">
          <div class="row">
            <div class="col-md-6 p-0">
              <div class="address-bar">
                <div>
                  <ul class="footer-style">
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/locate.png"' alt="locate">
                      </div>
                      <div class="footer-address">
                        <a href="#">B-17 ABC Center,  Near Temple, USA  123456</a>
                      </div>
                    </li>
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/telephone.png"' alt="telephone">
                      </div>
                      <div class="footer-address">
                        <a href="#">122-456-7890  /  124-789-5690</a>
                      </div>
                    </li>
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/fotter-email.png"' alt="fotter-email">
                      </div>
                      <div class="footer-address">
                        <a href="#">support@compnay.com</a>
                      </div>
                    </li>
                    <li>
                      <div class="footer-icon">
                        <img :src='"../assets/images/fax.png"' alt="">
                      </div>
                      <div class="footer-address">
                        <a href="#">123-456  /  456-789</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 p-0">
              <iframe :src='"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d35391.48685150366!2d72.77537852898678!3d21.18930639680146!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1530610361925"'  class="md-height"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Map Section Ends-->
  </div>
</template>
<script>
export default {
  name: 'Map'
}
</script>
