<template>
<div id="app">

  <!-- Preloader -->
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
  <!-- Preloader end -->

  <router-view name="navbar"></router-view>
  <router-view />
  <vue-progress-bar></vue-progress-bar>
</div>
</template>
<script>
import $ from 'jquery';

export default {
  name: 'App',
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
    this.loader();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, _from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    // eslint-disable-next-line no-unused-vars
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
  methods: {
    loader() {
      $(document).ready(() => {
        // ----------------------------------------
        //  Pre Loader
        // ----------------------------------------
        $(window).on('load', () => {
          $('.loader-wrapper').fadeOut('slow');
          $('.loader-wrapper').remove('slow');
        });
      });
    },
  },
};
</script>
