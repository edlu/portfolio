<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<style lang="css">

main {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width:1440px;
  padding: 0;
  margin: auto;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity var(--transition-slow);
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
