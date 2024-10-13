<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Project from '@/components/Project.vue';
import heroFantasy from '@/assets/img/heroes/hero-fantasy.png';
import heroFantasyWatch from '@/assets/img/heroes/hero-fantasy-watch.png';
import heroDailyFantasy from '@/assets/img/heroes/hero-daily-fantasy.png';
import heroNliven from '@/assets/img/heroes/hero-nliven.png';
import heroRipplematch from '@/assets/img/heroes/hero-ripplematch.png';

const router = useRouter();
const isTransitioning = ref(false);

const beforeEnter = () => {
  isTransitioning.value = true;
};

const afterLeave = () => {
  isTransitioning.value = false;
};

const handleClick = (event, path) => {
  if (isTransitioning.value) {
    event.preventDefault();
    return;
  }
  isTransitioning.value = true;
  router.push(path);
};
</script>

<template>
    <main class="home">
        <a href="#" @click.prevent="handleClick($event, 'project/yahoo-fantasy-mobile')" :class="{ 'disabled': isTransitioning }">
            <project
            title="Yahoo! Fantasy App"
            company="Yahoo!"
            year="2011-2015"
            role="Lead UX, UI, Design Manager"
            platform="ios, Android"
            :imgUrl="heroFantasy"
            imgAltText="Yahoo! Fantasy Mobile App"
            />
        </a>
        <a href="#" @click.prevent="handleClick($event, 'project/yahoo-fantasy-apple-watch')" :class="{ 'disabled': isTransitioning }">
            <project
            title="Yahoo! Fantasy Apple Watch"
            company="Yahoo!"
            year="2015"
            role="Lead UX, UI"
            platform="watchOS"
            :imgUrl="heroFantasyWatch"
            imgAltText="Yahoo! Fantasy Apple Watch"
            />
        </a>
        <a href="#" @click.prevent="handleClick($event, 'project/yahoo-daily-fantasy')" :class="{ 'disabled': isTransitioning }">
            <project
            title="Yahoo! Daily Fantasy Mobile"
            company="Yahoo!"
            year="2015"
            role="Lead UX, UI, Design Manager"
            platform="iOS, Android"
            :imgUrl="heroDailyFantasy"
            imgAltText="Yahoo! Daily Fantasy Mobile"
            />
        </a>
        <a href="#" @click.prevent="handleClick($event, 'project/tixtrack')" :class="{ 'disabled': isTransitioning }">
            <project
            title="TixTrack Ticketing"
            company="TixTrack"
            year="2015"
            role="Lead UX, UI, Design Manager"
            platform="Responsive Web"
            :imgUrl="heroNliven"
            imgAltText="Nliven Ticketing"
            />
        </a>
        <!-- <a href="#" @click.prevent="handleClick($event, 'project/ripplematch')" :class="{ 'disabled': isTransitioning }">
            <project
            title="RippleMatch Recruiting"
            company="RippleMatch"
            year="2023"
            role="Lead UXR, UX & UI"
            platform="Responsive Web"
            :imgUrl="heroRipplematch"
            imgAltText="RippleMatch Recruiting"
            />
        </a> -->
    </main>
</template>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
.disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>
