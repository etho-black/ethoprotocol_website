<template>
  <div>
    <div>
      <div class="color-picker">
        <a href="#" class="handle">
          <i class="fa fa-cog"></i>
        </a><div class="sec-position"><div class="settings-header">
          <h3>Select Color:</h3>
        </div>
          <div class="section">
            <div class="colors o-auto">
              <a v-for="color in ['color-1','color-2','color-3']"  v-bind:key="color"  href="#" v-on:click="SetColor(color)"  v-bind:class="[color]"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <component v-bind:is="currentTab" ></component>
  </div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
Vue.component('color-1', {template: '<span></span>'})
Vue.component('color-2', {template: '<link rel="stylesheet" type="text/css" href="/static/color/color-2.css" />'})
Vue.component('color-3', {template: '<link rel="stylesheet" type="text/css" href="/static/color/color-3.css" />'})
export default {
  name:'color',
  data () {
    return {
      currentTab: 'color-1'// set color of website
    }
  },
  mounted () {
    this.colorclass()
      if (localStorage.color) {
        this.currentTab = localStorage.color;
      }
      else{
        this.currentTab = 'color-1'// set color of website
      }
  },
  methods: {
    colorclass: function () {
      var bodyevent = $('body')
      $('.color-picker').animate({right: '-190px'})
      bodyevent.on('click', '.color-picker a.handle', function (e) {
        e.preventDefault()
        var div = $('.color-picker')
        if (div.css('right') === '-190px') {
          $('.color-picker').animate({right: '0px'})
        } else {
          $('.color-picker').animate({right: '-190px'})
        }
      })
    },
    SetColor: function (color) {
      localStorage.color = color;
      this.currentTab = color;
    }
  }
}
</script>
