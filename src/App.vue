<template>
  <Header />
  <main>
     <RouterView />
  </main>
  <Footer />
</template>

<script>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default{
  components: { 
    RouterView, Footer, Header
  }
}

</script>


<style scoped>

</style>
