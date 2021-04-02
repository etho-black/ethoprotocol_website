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
              <br>
              <div class="address_link">
                <p align="center"><a href="https://explorer.ether1.org">Balance: {{ addressBalance }} ETHO</a></p>
              </div>

                <a href="#" class="expand">
                    <button type="button" class="btn btn-custom theme-color">View Transactions</button>
                </a>
              <div class="transactions">
                <div class="section">
                  <table id="transaction-table" class="hover" width="100%">
                    <thead>
                      <tr>
                        <th>Block</th>
                        <th>Hash</th>
                        <th>To</th>
                        <th>From</th>
                        <th>Amount</th>
                      </tr>
                    </thead> 
                    <tbody>
                    </tbody>
                  </table>
                </div>
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
import DataTable from 'datatables.net';

export default {
  name:'explorer',
  data () {
    return {
      currentTab: 'color-1',// set color of website
      blockHeight: 0,
      addressBalance: 0,
      transactionArray: []
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
      $('.transactions').hide();
      bodyevent.on('click', '.color-picker a.handle', function (e) {
        e.preventDefault()
        var div = $('.color-picker')
        if (div.css('right') === '-600px') {
          $('.color-picker').animate({right: '0'})
        } else {
          $('.transactions').hide();
          $('.color-picker').animate({right: '-600px'})
        }
      })
      bodyevent.on('click', '.color-picker a.expand', function (e) {
        console.log("EXPAND");
        e.preventDefault()
        var div = $('.transactions')
        if (div.css('display') === 'none') {
          $('.transactions').slideDown("slow");
        } else {
          $('.transactions').slideUp("slow")
        }
      })
    },
    SetColor: function (color) {
      localStorage.color = color;
      this.currentTab = color;
    },
    GetBalance: function (address) {
      getTransactions(this.$refs.etho_address.value, this)
    }
  }
}

function getTransactions(address, self) {
  $.getJSON('https://api.ether1.org/api.php?api=account_balance&address='+address, function(data) {
    console.log('Balance: ' + data.account_balance);
    self.addressBalance = Number(data.account_balance).toFixed(3);
  });
  $.getJSON('https://api.ether1.org/api.php?api=network_stats', function(data) {
    console.log('Block Height: ' + data.block_height);
    self.blockHeight = Number(data.block_height);

    var table = $('#transaction-table').DataTable();
    table.destroy();

    $('#transaction-table').DataTable( {
      ajax: 'https://richlist.ether1.org/transactions_list.php?address='+address+'&fromBlock=0&toBlock='+self.blockHeight,
      columns: [
        {
          data: 'block'
        },
        {
          data: 'txhash',
          render: function(data) {
            var str = data.toString();
            return str.length < 7 ?
              str :
              str.substr(0, 6) +'&#8230;';
          }
        },
        {
          data: 'toaddr',
          render: function(data) {
            var str = data.toString();
            return str.length < 7 ?
              str :
              str.substr(0, 6) +'&#8230;';
          }
        },
        {
          data: 'fromaddr',
          render: function(data) {
            var str = data.toString();
            return str.length < 7 ?
              str :
              str.substr(0, 6) +'&#8230;';
          }
        },
        {
          data: 'value',
          render: function(data) {
            var value = (Number(data) / 1000000000000000000).toFixed(3);
            return value;
          }
        },
      ],
      responsive: true,
      "pageLength": 10
    });
  });
  
}
</script>
<style>
@import 'https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css';
@import 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';
</style>