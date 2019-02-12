<template>
  <header class="header">
    <router-link to="/"><img src="../../assets/social.svg" class="socimg" /></router-link>
    <div id="nav">
      <router-link to="/" exact>Social</router-link> |
      <router-link to="/query" exact>Query</router-link> |
      <router-link to="/about" exact>About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .socimg {
    width: 15%;
    margin: 5px 0px;
  }

  .header p {
    color: #fff;
    font-size: 26px;
    margin-bottom: 0px;
    padding-right: 0px;
  }

  .header a {
    color: #ccc;
    padding-right: 5px;
    text-decoration: none;
    font-size: 13px;
  }

  #nav .router-link-active {
    color: #fff;
  }
</style>
