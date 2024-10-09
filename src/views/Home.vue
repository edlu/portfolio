<script>
import Project from '@/components/Project.vue';

export default {
    components: {
        Project
    }
}
</script>

<template>
    <main class="home">
        <router-link to="project/yahoo-fantasy-mobile">
            <project
            title="Yahoo! Fantasy App"
            company="Yahoo!"
            year="2011-2015"
            role="Lead UX, UI, Design Manager"
            platform="ios, Android"
            imgUrl="/src/assets/heroes/hero-fantasy.png"
            imgAltText="Yahoo! Fantasy Mobile App"
            />
        </router-link>
        <router-link to="project/yahoo-fantasy-apple-watch">
            <project
            title="Yahoo! Fantasy Apple Watch"
            company="Yahoo!"
            year="2015"
            role="Lead UX, UI"
            platform="watchOS"
            imgUrl="/src/assets/heroes/hero-fantasy-watch.png"
            imgAltText="Yahoo! Fantasy Apple Watch"
            />
        </router-link>
        <router-link to="project/yahoo-daily-fantasy">
            <project
            title="Yahoo! Daily Fantasy Mobile"
            company="Yahoo!"
            year="2015"
            role="Lead UX, UI, Design Manager"
            platform="iOS, Android"
            imgUrl="/src/assets/daily_fantasy_hero.png"
            imgAltText="Yahoo! Daily Fantasy Mobile"
            />
        </router-link>
        <router-link to="project/tixtrack">
            <project
            title="TixTrack Ticketing"
            company="TixTrack"
            year="2015"
            role="Lead UX, UI, Design Manager"
            platform="Responsive Web"
            imgUrl="/src/assets/heroes/hero-nliven.png"
            imgAltText="Nliven Ticketing"
            />
        </router-link>
        <router-link to="project/ripplematch">
            <project
            title="RippleMatch Recruiting"
            company="RippleMatch"
            year="2023"
            role="Lead UXR, UX & UI"
            platform="Responsive Web"
            imgUrl="/src/assets/ripplematch_hero.png"
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