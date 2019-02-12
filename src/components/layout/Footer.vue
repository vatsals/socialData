<template>
  <footer class="footer">
    <p>Copyright &copy; 2019 | {{ developer }}</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
      return {
        developer: 'Vatsal'
      }
  }
}
</script>

<style scoped>
  .footer {
    background: #010101;
    color: #1e80ed;
    color: #fff;
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0;
    font-size: 15px;
    padding: 10px;
    z-index: 9999;
  }

  .footer p {
    margin-bottom: 0px;
  }
</style>
