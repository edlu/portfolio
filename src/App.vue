<script setup>
import Header from './components/Header.vue';
import Project from './components/Project.vue';
</script>

<template>
  <Header />
  <main>
    <Project
      title="Yahoo! Fantasy Mobile"
      company="Yahoo!"
      year="2011-2015"
      role="Lead UX, UI, Design Manager"
      platform="iOS, Android"
      imgUrl="/src/assets/fantasy_hero.png"
      imgAltText="Yahoo! Fantasy Mobile"
    />
    <Project
      title="Yahoo! Fantasy Apple Watch"
      company="Yahoo!"
      year="2015"
      role="Lead UX, UI"
      platform="watchOS"
      imgUrl="/src/assets/fantasy_watch_hero.png"
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
      title="Nliven Ticketing"
      company="TixTrack"
      year="2015"
      role="Lead UX, UI, Design Manager"
      platform="Responsive Web"
      imgUrl="/src/assets/nliven_hero.png"
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
