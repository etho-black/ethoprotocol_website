<template>
  <div>
    <div>
      <div class="color-picker">
        <a href="#" class="handle">
          <button type="button" class="btn btn-custom theme-color">ETHO Balance</button>

        </a><div class="sec-position"><div class="settings-header">
          <h3>Check Your ETHO Balance</h3>
        </div>
          <div class="section">
            <form class="footer-form">
                <div class="form-group">
                  <input class="form-control" name="address" id="address" placeholder="Enter Your Address:" type="text" ref="etho_address" required="required" >
                </div>
                <div class="form-button">
                  <button type="button" v-on:click="GetBalance()" class="btn btn-custom theme-color">Get Balance</button>
                </div>
              </form>
              <br><h4 align="center">Balance: <span id="actual_balance">0.000</span> ETHO</h4>
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
export default {
  name:'explorer',
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
      $('.color-picker').animate({right: '-600px'})
      bodyevent.on('click', '.color-picker a.handle', function (e) {
        e.preventDefault()
        var div = $('.color-picker')
        if (div.css('right') === '-600px') {
          $('.color-picker').animate({right: '0'})
        } else {
          $('.color-picker').animate({right: '-600px'})
        }
      })
    },
    SetColor: function (color) {
      localStorage.color = color;
      this.currentTab = color;
    },
    GetBalance: function (address) {
      $.getJSON('http://api.ether1.org/api.php?api=account_balance&address='+this.$refs.etho_address.value, function(data) {
        console.log('Balance: ' + data.account_balance);
        $('#actual_balance').text(Number(data.account_balance).toFixed(3));
      });
    }
  }
}
</script>