<template>
<div>
  <div></div>
  <div id="fb-root"></div>
  <div class="fb-customerchat" attribution=setup_tool page_id="2123438804574660" theme_color="#18ECD6" logged_in_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"
    logged_out_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?">
  </div>
</div>
</template>
<script>
import $ from 'jquery';

export default {
  mounted() {
    this.getColor();
  },
  methods: {
    getColor() {
      $(document).ready(() => {
        // eslint-disable-next-line func-names
        (function (d, s, id) {
          const fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          const js = d.createElement(s);
          js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // ----------------------------------------
        //  Pre Loader
        // ----------------------------------------
        $(window).on('load', () => {
          $('.loader-wrapper').fadeOut('slow');
          $('.loader-wrapper').remove('slow');
        });
        // ----------------------------------------
        // Dark Header
        // ----------------------------------------
        $(window).scroll(() => {
          const scroll = $(window).scrollTop();
          if (scroll >= 60) {
            $('.navbar').addClass('darkHeader');
          } else {
            $('.navbar').removeClass('darkHeader');
          }
        });

        const mobilemenu = $(window).width();
        if (mobilemenu < 991) {
          $('nav a.nav-link').on('click',
            // eslint-disable-next-line func-names
            function () {
              if (!$(this).hasClass('dropdown-toggle')) {
                // console.log('click');
                $('.navbar-collapse').collapse('hide');
              }
            });
        }
        // ----------------------------------------
        // home removeclass section
        // ----------------------------------------

        const slidercaption = $(window).width();
        if (slidercaption >= 2000) {
          $('.home-right').addClass('home-contain');
        }
        if (slidercaption <= 1024) {
          $('.home-right').addClass('home-contain');
        }

        // ----------------------------------------
        //  GO to Home
        // ----------------------------------------
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 500) {
            $('.tap-top').fadeIn();
          } else {
            $('.tap-top').fadeOut();
          }
        });
        $('.tap-top').on('click', () => {
          $('html, body').animate({
            scrollTop: 0,
          }, 600);
          return false;
        });
      });
      $(document).ready(() => {
        if ($(window).width() >= 991) {
          // eslint-disable-next-line func-names
          $('nav a').on('click', function (event) {
            if (this.hash !== '') {
              event.preventDefault();
              const {
                hash,
              } = this;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - 0,
              }, 1000, () => {});
              return false;
            }
            return null;
          });
        } else {
          // eslint-disable-next-line func-names
          $('nav a').on('click', function (event) {
            if (this.hash !== '') {
              event.preventDefault();
              const {
                hash,
              } = this;
              $('html, body').animate({
                scrollTop: $(hash).offset().top - 0,
              }, 1000, () => {});
              return false;
            }
            return null;
          });
        }
      });
    },
  },
};
</script>
