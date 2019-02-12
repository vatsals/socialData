<template>
  <div id="app">
    <Header />
    <router-view class="routeBox" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
  name:"app",
  components: {
    Header,
    Footer
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif !important;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }

  .routeBox {
    width: 90%;
    margin: 3% 5% 10% 5%;
  }
</style>
