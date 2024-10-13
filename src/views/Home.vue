<script setup>
import Project from '@/components/Project.vue';
import heroFantasy from '@/assets/img/heroes/hero-fantasy.png'
import heroFantasyWatch from '@/assets/img/heroes/hero-fantasy-watch.png'
import heroDailyFantasy from '@/assets/img/heroes/hero-daily-fantasy.png'
import heroNliven from '@/assets/img/heroes/hero-nliven.png'
import heroRipplematch from '@/assets/img/heroes/hero-ripplematch.png'
</script>

<template>
    <main class="home">
        <router-link to="project/yahoo-fantasy-mobile" :disabled="isNavigating" replace>
            <project
            title="Yahoo! Fantasy App"
            company="Yahoo!"
            year="2011-2015"
            role="Lead UX, UI, Design Manager"
            platform="ios, Android"
            :imgUrl="heroFantasy"
            imgAltText="Yahoo! Fantasy Mobile App"
            />
        </router-link>
        <router-link to="project/yahoo-fantasy-apple-watch" replace>
            <project
            title="Yahoo! Fantasy Apple Watch"
            company="Yahoo!"
            year="2015"
            role="Lead UX, UI"
            platform="watchOS"
            :imgUrl="heroFantasyWatch"
            imgAltText="Yahoo! Fantasy Apple Watch"
            />
        </router-link>
        <router-link to="project/yahoo-daily-fantasy" replace>
            <project
            title="Yahoo! Daily Fantasy Mobile"
            company="Yahoo!"
            year="2015"
            role="Lead UX, UI, Design Manager"
            platform="iOS, Android"
            :imgUrl="heroDailyFantasy"
            imgAltText="Yahoo! Daily Fantasy Mobile"
            />
        </router-link>
        <router-link to="project/tixtrack" replace>
            <project
            title="TixTrack Ticketing"
            company="TixTrack"
            year="2015"
            role="Lead UX, UI, Design Manager"
            platform="Responsive Web"
            :imgUrl="heroNliven"
            imgAltText="Nliven Ticketing"
            />
        </router-link>
        <router-link to="project/ripplematch" replace>
            <project
            title="RippleMatch Recruiting"
            company="RippleMatch"
            year="2023"
            role="Lead UXR, UX & UI"
            platform="Responsive Web"
            :imgUrl="heroRipplematch"
            imgAltText="RippleMatch Recruiting"
            />
        </router-link>
    </main>
</template>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
</style>
