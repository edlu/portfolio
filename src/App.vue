<script setup>
import Header from './components/Header.vue';
import Project from './components/Project.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main>
    <router-link :to="{name: 'ProjectDetail'}">
      <Project
        title="Yahoo! Fantasy Mobile"
        company="Yahoo!"
        year="2011-2015"
        role="Lead UX, UI, Design Manager"
        platform="iOS, Android"
        imgUrl="/src/assets/heroes/hero-fantasy.png"
        imgAltText="Yahoo! Fantasy Mobile"
      />
    </router-link>
    <Project
      title="Yahoo! Fantasy Apple Watch"
      company="Yahoo!"
      year="2015"
      role="Lead UX, UI"
      platform="watchOS"
      imgUrl="/src/assets/heroes/hero-fantasy-watch.png"
      imgAltText="Yahoo! Fantasy Apple Watch"
    />
    <Project
      title="Yahoo! Daily Fantasy Mobile"
      company="Yahoo!"
      year="2015"
      role="Lead UX, UI, Design Manager"
      platform="iOS, Android"
      imgUrl="/src/assets/daily_fantasy_hero.png"
      imgAltText="Yahoo! Daily Fantasy Mobile"
    />
    <Project
      title="TixTrack Ticketing"
      company="TixTrack"
      year="2015"
      role="Lead UX, UI, Design Manager"
      platform="Responsive Web"
      imgUrl="/src/assets/heroes/hero-nliven.png"
      imgAltText="Nliven Ticketing"
    />
    <Project
      title="RippleMatch Recruiting"
      company="RippleMatch"
      year="2023"
      role="Lead UXR, UX & UI"
      platform="Responsive Web"
      imgUrl="/src/assets/ripplematch_hero.png"
      imgAltText="RippleMatch Recruiting"
    />
  </main>
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
