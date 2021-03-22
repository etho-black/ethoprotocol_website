<template>
  <div style="font-family: 'Roboto Condensed', sans-serif; margin: 20px;">
  <div class="email">
    <img class="logo" :src='"../assets/images/logo.png"' width="200">
    <div class="white-container">
      <div class="white-container">
        <h2>Thank You</h2>
        <h3> Your Inquiry is received, we will respond you soon. For any other queries please email at  <strong>support@test.com</strong></h3>
      </div>
    </div>
    <div class="footer">
      <div class="social-media">
        <a href="#"><img class="sm" src="https://themes.pixelstrap.com/tovo/main/assets/images/email/facebook-email.png"></a>
        <a href="#"><img class="sm" src="https://themes.pixelstrap.com/tovo/main/assets/images/email/twitter-email.png"></a>
        <a href="#"><img class="sm" src="https://themes.pixelstrap.com/tovo/main/assets/images/email/instagram-email.png"></a>
        <a href="#"><img class="sm" src="https://themes.pixelstrap.com/tovo/main/assets/images/email/google.png"></a>
        <a href="#"><img class="sm" src="https://themes.pixelstrap.com/tovo/main/assets/images/email/feed.png"></a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
}
</script>
<style type="text/css" scoped>
  h2{
    color: #18e7d3;
  }
  .email {
    text-align: center;
    margin: 0 auto;
    background-color: #ffffff;
    width: 600px;
    display: block;
    padding-top: 10px;
    box-shadow: 0 1px 6px rgba(57,73,76,0.35);
  }
  .logo {
    margin: 0 auto;
    text-align: center;
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .white-container {
    background: #ffffff;
    width: 560px;
    text-align: center;
    margin: 0 auto;
    padding: 20px 0 0;
    margin-top: -10px;
  }
  .sm {
    max-width: 35px;
    display: inline-block;
    margin: 30px 5px;
  }
  h3 {
    width: 400px;
    margin: 0 auto;
    margin-bottom: 50px;
    font-weight: lighter;
    font-size: 14px;
  }
  .footer{
    background-color: #f1f1f1;
  }
  .social-media {
    height: 90px;
  }
  @media screen and (max-width: 768px){
    .email {
      width: 100%;
    }
    .white-container{
      width: 100%;
    }
    h3{
      width: 100%;
    }
  }
</style>
