<template>
<!--Map Section Start-->
<section>

  <div class="container">
    <div class="row" style="margin: auto; ">

      <div class="col-sm-12">
        <div style="float:left; width:25%;">
          <router-link to="/">
            <b-navbar-brand class="navbar-brand" :to="{name:'Main_page'}"><img :src='"../assets/images/etho/logo.png"' height="60" alt="logo"></b-navbar-brand>
          </router-link>

          <ul class="footer-widget__list">
            <li><i class="fas fa-globe"></i>Decentralized</li>
            <li><a href="mailto:admin@ether1.org" class="hover-style-link">admin@ether1.org</a></li>
            <li><a href="tel:888-700-3846" class="hover-style-link">+1.888.700.ETHO</a></li>
          </ul>
        </div>
        <div style="float:left; width:25%;">
          <h6 class="footer-widget__title mb-20">VPS Providers</h6>
          <ul class="footer-widget__list">
            <li><a href="https://control.cloud.co.za/aff.php?aff=61" class="hover-style-link">VPS.co.za</a></li>
            <li><a href="https://m.do.co/c/3d164b7256f7" class="hover-style-link">Digital Ocean</a></li>
            <li><a href="https://www.vultr.com/?ref=7613496" class="hover-style-link">Vultr</a></li>
            <li><a href="https://www.hetzner.com/" class="hover-style-link">Hetzner</a></li>
            <li><a href="https://contabo.com/" class="hover-style-link">Contabo</a></li>
          </ul>
        </div>
        <div style="float:left; width:25%;">
          <h6 class="footer-widget__title mb-20">Quick links</h6>
          <ul class="footer-widget__list">
            <li><a href="whitepaper.pdf" class="hover-style-link">Whitepaper</a></li>
            <li><a href="https://github.com/etho-black/ethopay" class="hover-style-link">ETHOPay</a></li>
            <li><a href="https://explorer.ether1.org/" class="hover-style-link">Explorer 1</a></li>
            <li><a href="https://blocks.ether1.org/" class="hover-style-link">Explorer 2</a></li>
            <li><a href="https://docs.ether1.org" class="hover-style-link">Documentation</a></li>
            <li><a href="https://nodes.ether1.org" class="hover-style-link">Node Dashboard</a></li>
            <li><a href="https://bitcointalk.org/index.php?topic=3725742.0" class="hover-style-link">Bitcointalk Thread</a></li>
          </ul>
        </div>
        <div style="float:left; width:25%;">
          <h6 class="footer-widget__title mb-20">Etho Protocol Teams</h6>
          <ul class="footer-widget__list">
            <li><a href="http://www.etho.black" class="hover-style-link">Etho Black</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Map Section Ends-->
</template>
<script>
export default {
  name: 'Map',
};
</script>
