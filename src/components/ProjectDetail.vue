<script setup>
import Header from './components/Header.vue';
import Project from './components/Project.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <p>This is the project detail page!!!</p>
  <Footer />
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width:1440px;
  padding: 0;
  margin: auto;
}

</style>
