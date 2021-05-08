<template>
<div>
  <div>
    <div class="color-picker" style="max-width: 100vw;">
      <a href="#" class="handle">
        <button type="button" class="btn btn-custom logo-color">Tools</button>
      </a>

      <div class="sec-position" >
        <div class="settings-header" >
          <div class="d-flex justify-content-between">
            <h3 class="p-2">ETHO Protocol Tools</h3>
            <a style="cursor: pointer;" @click="closeMenu">
              <h3 class="p-2">X</h3>
            </a>
          </div>
        </div>
        <div class="section">

          <div class="form-button">
            <center>
              <button type="button" v-on:click="ShowExplorer()" class="btn-tools">Explorer</button>
              <!--<button type="button" v-on:click="ShowStaking()" class="btn-tools">Staking</button>-->
              <!--<button type="button" v-on:click="ShowUploads()" class="btn-tools">Upload Data</button>-->
              <!--<button type="button" v-on:click="ShowNodeMap()" class="btn-tools">Node Map</button>-->
            </center>
          </div>
        </div>
      </div>

      <div class="nodemap">
        <div class="sec-position">
          <div class="section">
            <center><p>Coming Soon</p></center>
          </div>
        </div>
      </div>

      <div class="upload-registration">
        <div class="card">
          <form class="theme-form">
            <div class="form-group">
              <div class="md-fgrup-margin">
                <input type="text" class="form-control" placeholder="Username" id="upload_username" ref="upload_username" required="required">
              </div>
            </div>
            <div class="form-button text-center">
              <button type="button" v-on:click="UploadData()" class="btn btn-custom btn-block theme-color">Register</button>
            </div>
          </form>
        </div>
      </div>

      <div class="uploads">
        <div class="sec-position">
          <div class="section">
            <div>
    <!-- Forgetpassword Start -->
    <section class="upload-form">
      <div>
        <h2 class="title text-center">UPLOAD<span> DATA</span></h2>
        <div class="card">
          <form class="theme-form">
            <div class="form-group mt-2">

              <div class="form-row">

                <div class="col-8">
                  <h6 class="mt-0 mb-3">Contract Name:</h6>
                  <input type="tel" class="form-control digits mb-1"  value="Name">
                </div>
                <div class="col-4">
                  <h6 class="mt-0 mb-3">Length:</h6>
                  <input type="text" class="form-control digits mb-1" value="100000">
                </div>
                  <div class="col-12 mt-4">
                    <h6 class="mt-0 mb-3">Data:</h6>
                    <input type="file" webkitdirectory multiple class="form-control digits mb-1">
                  </div>

                <div class="col-12 mt-4">
                  <button type="button" v-on:click="UploadData()" class="btn btn-custom btn-block theme-color">Upload</button>
                </div>

                <div class="col-8">
                  <h6 class="mt-0 mb-3">Size:</h6>
                </div>
                <div class="col-4">
                  <h6 class="mt-0 mb-3">Cost:</h6>
                </div>
              </div>
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
          </div>
        </div>
      </div>

      <div class="staking">
      <div class="sec-position">
        <div class="section">
          <form class="footer-form">
            <div class="form-group">
              <input class="form-control" name="private_key" id="private_key" placeholder="Enter Your Private Key:" type="text" ref="etho_key" required="required">
            </div>
            <div class="form-button">
              <button type="button" v-on:click="StakingLogin()" class="btn btn-custom theme-color">Login</button>
            </div>
          </form>
          <br>
          <div class="form-button">
          <center>
            <button type="button" v-on:click="ShowAllContracts()" class="btn btn-custom theme-color" style="font-size:12px;">All Contracts</button>
            <button type="button" v-on:click="ShowPersonalLenderContracts()" class="btn btn-custom theme-color" style="font-size:12px;">My Lender Contracts</button>
            <button type="button" v-on:click="ShowPersonalBorrowerContracts()" class="btn btn-custom theme-color" style="font-size:12px;">My Borrower Contracts</button>
            </center>
          </div><br>

          <div class="staking-contracts">
            <div class="section">
              <table id="staking-table" class="hover" cellspacing="20" width="100%">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Fee</th>
                    <th>Lender %</th>
                    <th>Available</th>
                    <th>Lender Address</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
          <div class="borrower-staking-contracts">
            <div class="section">
              <table id="borrower-table" class="hover" cellspacing="20" width="100%">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Fee</th>
                    <th>Lender %</th>
                    <th>Available</th>
                    <th>Lender Address</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
          <div class="lender-staking-contracts">
            <div class="section">
              <table id="lender-table" class="hover" cellspacing="20" width="100%">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Fee</th>
                    <th>Lender %</th>
                    <th>Available</th>
                    <th>Lender Address</th>
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

      <div class="explorer">
      <div class="sec-position">
        <div class="section">
          <form class="footer-form">
            <div class="form-group">
              <input class="form-control" name="address" id="address" placeholder="Enter Your Address:" type="text" ref="etho_address" required="required">
            </div>
            <div class="form-button">
              <button type="button" v-on:click="GetBalance()" class="btn btn-custom logo-color">Get Balance</button>
            </div>
          </form>
          <br>
          <div class="address_link">
            <p align="center">Balance: {{ addressBalance }} ETHO</p>
          </div>

          <a href="#" class="expand transaction-button">
            <button type="button" v-on:click="ShowTransactions()" class="btn btn-custom logo-color transaction-button" style="font-size:12px;">Transactions</button>
          </a>
          <div class="transactions" style="overflow-y:auto;">
            <div class="section">
              <table id="transaction-table" class="hover">
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
  </div>
</div>
</template>

<script>
// import Vue from 'vue';
import $ from 'jquery';
import Web3 from 'web3';
import DataTable from 'datatables.net';
// import ethofsSDK from'@ethofs/sdk';

export default {
  name: 'explorer',
  data() {
    return {
      currentTab: 'color-1', // set color of website
      blockHeight: 0,
      addressBalance: 0,
      transactionArray: [],
      borrowerContractArray: [],
      lenderContractArray: [],
      uploadKey: '',
    };
  },
  mounted() {
    this.colorclass();
    if (localStorage.color) {
      this.currentTab = localStorage.color;
    } else {
      this.currentTab = 'color-1'; // set color of website
    }
  },
  methods: {
    closeMenu() {
      $('.transactions').hide();
      $('.color-picker').animate({
        right: '-600px',
      });
    },
    colorclass() {
      const bodyevent = $('body');
      $('.color-picker').animate({
        right: '-600px',
      });
      $('.upload-registration').hide();
      $('.transactions').hide();
      $('.explorer').hide();
      $('.staking').hide();
      $('.nodemap').hide();
      $('.uploads').hide();
      $('.staking-contracts').hide();
      $('.borrower-staking-contracts').hide();
      $('.lender-staking-contracts').hide();
      $('#staking-table').on('click', 'tbody tr', function () {
        const table = $('#staking-table').DataTable();
        console.log('Staking contract values : ', table.row(this).data());
      });
      $('#lender-table').on('click', 'tbody tr', function () {
        const table = $('#lender-table').DataTable();
        console.log('Staking contract values : ', table.row(this).data());
      });
      $('#borrower-table').on('click', 'tbody tr', function () {
        const table = $('#borrower-table').DataTable();
        console.log('Staking contract values : ', table.row(this).data());
      });
      $('#transaction-table').on('click', 'tbody tr', function (e) {
        e.preventDefault();
        const table = $('#transaction-table').DataTable();
        const url = `https://blocks.ether1.org/tx/${table.row(this).data().txhash}`;
        window.open(url, '_blank');
      });
      bodyevent.on('click', '.color-picker a.handle', (e) => {
        e.preventDefault();
        const div = $('.color-picker');
        if (div.css('right') === '-600px') {
          $('.color-picker').animate({
            right: '0',
          });
        } else {
          $('.transactions').hide();
          $('.color-picker').animate({
            right: '-600px',
          });
        }
      });
    },
    ShowTransactions() {
      const div = $('.transactions');
      if (div.css('display') === 'none') {
        $('.transactions').show();
      } else {
        $('.transactions').hide();
      }
    },
    ShowNodeMap() {
      const div = $('.nodemap');
      if (div.css('display') === 'none') {
        $('.uploads').hide();
        $('.explorer').hide();
        $('.staking').hide();
        $('.nodemap').show();
      } else {
        $('.nodemap').hide();
      }
    },
    ShowUploads() {
      const div = $('.uploads');
      if (div.css('display') === 'none') {
        $('.nodemap').hide();
        $('.explorer').hide();
        $('.staking').hide();
        $('.uploads').show();
      } else {
        $('.uploads').hide();
      }
    },
    ShowExplorer() {
      const div = $('.explorer');
      if (div.css('display') === 'none') {
        $('.nodemap').hide();
        $('.uploads').hide();
        $('.staking').hide();
        $('.explorer').show();
      } else {
        $('.transactions').hide();
        $('.explorer').hide();
      }
    },
    ShowStaking() {
      const div = $('.staking');
      if (div.css('display') === 'none') {
        $('.nodemap').hide();
        $('.uploads').hide();
        $('.transactions').hide();
        $('.explorer').hide();
        $('.staking').show();
      } else {
        $('.staking').hide();
      }
    },
    ShowAllContracts() {
      const div = $('.staking-contracts');
      if (div.css('display') === 'none') {
        $('.borrower-staking-contracts').hide();
        $('.lender-staking-contracts').hide();
        $('.staking-contracts').show();
      } else {
        $('.staking-contracts').hide();
      }
    },
    ShowPersonalBorrowerContracts() {
      const div = $('.borrower-staking-contracts');
      if (div.css('display') === 'none') {
        $('.staking-contracts').hide();
        $('.lender-staking-contracts').hide();
        $('.borrower-staking-contracts').show();
      } else {
        $('.borrower-staking-contracts').hide();
      }
    },
    ShowPersonalLenderContracts() {
      const div = $('.lender-staking-contracts');
      if (div.css('display') === 'none') {
        $('.staking-contracts').hide();
        $('.borrower-staking-contracts').hide();
        $('.lender-staking-contracts').show();
      } else {
        $('.lender-staking-contracts').hide();
      }
    },
    UploadLogin() {
      /* this.uploadKey = this.$refs.etho_upload_key.value;
      var ethofs = ethofsSDK(this.uploadKey);

      ethofs.testAuthentication().then((result) => {
        console.log(result);
        this.ShowUploadData(ethofs);
      }).catch((err) => {
        console.log(err);
        this.ShowUploadRegistration();
      }); */
    },
    ShowUploadRegistration() {
      $('.upload-registration').show();
      console.log('User Login Successful - Displaying Upload Data');
    },
    RegisterUploadUser() {
      // const ethofs = ethofsSDK(this.uploadKey);
      // const userName = this.$refs.etho_upload_user.value;

      // ethofs.addUser(userName).then((result) => {
      // handle results here
      //  console.log(result);
      // }).catch((err) => {
      // handle error here
      //  console.log(err);
      // });
    },
    async StakingLogin() {
      const web3 = new Web3('https://rpc.ether1.org');
      // const CONTRACT_ADDRESS = '0x7eE5B10cad23D36F8Ba9AD30aD1B67A741f39769';
      const CONTROLLER_ADDRESS = '0x921b2bcEE3e6e413A81150bda671b2b47c6EF944';
      // const CONTRACT_ABI = JSON.parse('[{"constant":false,"inputs":[{"name":"contractAddress","type":"address"},{"name":"contractMessage","type":"string"},{"name":"messageSide","type":"string"}],"name":"addContractMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"contractAddress","type":"address"}],"name":"borrowerContractSelection","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"contractAddress","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"contractBorrowerTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"split","type":"uint256"},{"name":"nodeType","type":"string"},{"name":"fee","type":"uint256"},{"name":"contractText","type":"string"}],"name":"createLendingContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"contractAddress","type":"address"}],"name":"removeContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"contractAddress","type":"address"}],"name":"resetContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setGnCollateralAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setMnCollateralAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"setSnCollateralAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"borrowerCountMapping","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"contractAddress","type":"address"}],"name":"getContractCollateralAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"contractAddress","type":"address"}],"name":"getContractLastPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"contractAddress","type":"address"}],"name":"getContractLastReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gnCollateralRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"lenderContractMessaging","outputs":[{"name":"lendingContractAddress","type":"address"},{"name":"message","type":"string"},{"name":"blockHeight","type":"uint256"},{"name":"side","type":"string"},{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lenderCountMapping","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lendingContractCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lendingContractCountMapping","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lendingContractMapping","outputs":[{"name":"nodeType","type":"string"},{"name":"index","type":"uint256"},{"name":"lenderIndex","type":"uint256"},{"name":"borrowerIndex","type":"uint256"},{"name":"lenderAddress","type":"address"},{"name":"borrowerAddress","type":"address"},{"name":"lendingContractAddress","type":"address"},{"name":"originationFee","type":"uint256"},{"name":"available","type":"bool"},{"name":"lenderSplit","type":"uint256"},{"name":"text","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"lendingContractsMappingByBorrower","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"lendingContractsMappingByLender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"messageCountMapping","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minOriginationFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mnCollateralRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"snCollateralRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"contractAddress","type":"address"}],"name":"totalContractMessages","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
      // const INDIVIDUAL_CONTRACT_ABI = JSON.parse('[{"constant":true,"inputs":[],"name":"borrowerDeploymentBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nodeType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"available","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"borrowerTxAllowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deleteContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lenderSplit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrower","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"resetContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paymentThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"originationFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lender","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"borrowerTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newBorrower","type":"address"}],"name":"setBorrower","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"nodeCollateralAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"split","type":"uint256"},{"name":"contractType","type":"string"},{"name":"fee","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"senderAddress","type":"address"}],"name":"logSender","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"receiverAddress","type":"address"}],"name":"logReceiver","type":"event"}]');
      const CONTROLLER_ABI = JSON.parse('[{"inputs":[{"name":"lendingContractAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"getLendingContractData","outputs":[{"components":[{"name":"nodeType","type":"string"},{"name":"index","type":"uint256"},{"name":"lenderIndex","type":"uint256"},{"name":"borrowerIndex","type":"uint256"},{"name":"lenderAddress","type":"address"},{"name":"borrowerAddress","type":"address"},{"name":"lendingContractAddress","type":"address"},{"name":"originationFee","type":"uint256"},{"name":"available","type":"bool"},{"name":"lenderSplit","type":"uint256"},{"name":"text","type":"string"},{"name":"collateralAmount","type":"uint256"},{"name":"lastPaid","type":"uint256"},{"name":"lastReward","type":"uint256"},{"name":"deploymentBlock","type":"uint256"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lenderManagementContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]');
      // var currentBlockHeight = await web3.eth.getBlockNumber();
      // const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      const controllerContract = new web3.eth.Contract(CONTROLLER_ABI, CONTROLLER_ADDRESS);
      // const totalContractCount = await contract.methods.lendingContractCount().call()
      // console.log("Total Contract Count: " + totalContractCount);
      // console.log("Current Block Height: " + currentBlockHeight);

      const contractMapping = await controllerContract.methods.getLendingContractData().call();
      console.log(contractMapping);

      const account = await web3.eth.accounts.privateKeyToAccount(this.$refs.etho_key.value);
      console.log(`Login Address: ${account.address}`);

      contractMapping.forEach(function (element) {
        if (account.address === element.lenderAddress) {
          this.lenderContractArray.push(element);
        } else if (account.address === element.borrowerAddress) {
          this.borrowerContractArray.push(element);
        }
      });

      let table = $('#staking-table').DataTable();
      table.destroy();

      $('#staking-table').DataTable({
        data: contractMapping,
        columns: [{
          data: 'nodeType', title: 'Type',
        },
        {
          data: 'originationFee', title: 'Fee',
        },
        {
          data: 'lenderSplit', title: 'Lender %',
        },
        {
          data: 'available', title: 'Available',
        },
        {
          data: 'lenderAddress', title: 'Lender Address',
        },
        ],
        responsive: true,
        pageLength: 10,
      });

      table = $('#borrower-table').DataTable();
      table.destroy();

      $('#borrower-table').DataTable({
        data: this.borrowerContractArray,
        columns: [{
          data: 'nodeType', title: 'Type',
        },
        {
          data: 'originationFee', title: 'Fee',
        },
        {
          data: 'lenderSplit', title: 'Lender %',
        },
        {
          data: 'available', title: 'Available',
        },
        {
          data: 'lenderAddress', title: 'Lender Address',
        },
        ],
        responsive: true,
        pageLength: 10,
      });
      table = $('#lender-table').DataTable();
      table.destroy();

      $('#lender-table').DataTable({
        data: this.lenderContractArray,
        columns: [{
          data: 'nodeType', title: 'Type',
        },
        {
          data: 'originationFee', title: 'Fee',
        },
        {
          data: 'lenderSplit', title: 'Lender %',
        },
        {
          data: 'available', title: 'Available',
        },
        {
          data: 'lenderAddress', title: 'Lender Address',
        },
        ],
        responsive: true,
        pageLength: 10,
      });
    },
    SetColor(color) {
      localStorage.color = color;
      this.currentTab = color;
    },
    getTransactions(address, self) {
      $.getJSON(`https://api.ether1.org/api.php?api=account_balance&address=${address}`, (data) => {
        console.log(`Balance: ${data.account_balance}`);
        self.addressBalance = Number(data.account_balance).toFixed(3);
      });
      $.getJSON('https://api.ether1.org/api.php?api=network_stats', (data) => {
        console.log(`Block Height: ${data.block_height}`);
        self.blockHeight = Number(data.block_height);

        const table = $('#transaction-table').DataTable();
        table.destroy();

        $.ajax({
          type: 'POST',
          url: `https://ethoprotocol.com/richlist/transactions_list.php?address=${address}&fromBlock=0&toBlock=${self.blockHeight}`,
          dataType: 'json',
          cache: false,
          success(result) {
            console.log(result);
            $('#transaction-table').DataTable({
              data: result.data,
              columns: [{
                data: 'block', title: 'Block',
              },
              {
                data: 'txhash',
                title: 'Hash',
                render(data) {
                  if (data) {
                    return (data.length > 10) ? `${data.substring(0, 5)}...${data.substring(data.length - 5, data.length)}` : data;
                  }
                  return '';
                },
              },
              {
                data: 'fromaddr',
                title: 'From',
                render(data) {
                  if (data) {
                    return (data.length > 10) ? `${data.substring(0, 5)}...${data.substring(data.length - 5, data.length)}` : data;
                  }
                  return '';
                },
              },
              {
                data: 'toaddr',
                title: 'To',
                render(data) {
                  if (data) {
                    return (data.length > 10) ? `${data.substring(0, 5)}...${data.substring(data.length - 5, data.length)}` : data;
                  }
                  return '';
                },
              },
              {
                data: 'value',
                title: 'Amount',
                render(data) {
                  if (data) {
                    return (Number(data) / 1000000000000000000).toFixed(4);
                  }
                  return 0;
                },
              },
              ],
              createdRow: (row, data, dataIndex, cells) => {
                // $(cells[3]).css('background-color', '#18e7d3')
                $(row).on('mouseover', function () {
                  $(this).css('background', '#f7d4e0');
                }).on('mouseout', function () {
                  $(this).css('background', '#ffffff');
                });
              },
              processing: true,
              lengthChange: false,
              responsive: true,
              searching: false,
              pageLength: 5,
            });
          },
        });
      });
    },
    GetBalance() {
      this.getTransactions(this.$refs.etho_address.value, this);
    },
  },
};
</script>
<style>
@import 'https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css';
@import 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css';
</style>
