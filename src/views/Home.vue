<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Project from '@/components/Project.vue';
import heroFantasy from '@/assets/img/heroes/hero-fantasy.png';
import heroFantasyWatch from '@/assets/img/heroes/hero-fantasy-watch.png';
import heroDailyFantasy from '@/assets/img/heroes/hero-daily-fantasy.png';
import heroNliven from '@/assets/img/heroes/hero-nliven.png';
//import heroRipplematch from '@/assets/img/heroes/hero-ripplematch.png';

// Daily Fantasy
import dailyDeviceHero from '@/assets/img/daily/daily-device-hero.png'
import dailyHighLevelFlow from '@/assets/img/daily/daily-high-level-flow.png'
import dailySplash from '@/assets/img/daily/Daily-Splash.png'
import dailyMyContests from '@/assets/img/daily/Daily-My-Contests.png'
import dailyContests from '@/assets/img/daily/Daily-Contests.png'
import dailyLineup from '@/assets/img/daily/Daily-Lineup.png'
import dailyH2HContest from '@/assets/img/daily/Daily-H2H-Contest.png'
import dailyPlayer from '@/assets/img/daily/Daily-Player.png'

// TixTrack
import boxOfficeBroadway from '@/assets/img/tixtrack/box-office-broadway.png'
import boxOfficeDocuments from '@/assets/img/tixtrack/box-office-documents.png'
import boxOfficeInterior from '@/assets/img/tixtrack/box-office-interior.png'
import boxOfficeInterview from '@/assets/img/tixtrack/box-office-interview.png'
import boxOfficeWillCall from '@/assets/img/tixtrack/box-office-will-call.png'
import chrysalisDesignSystem from '@/assets/img/tixtrack/chrysalis-design-system.png'
import chrysalisDocumentationWebsite from '@/assets/img/tixtrack/chrysalis-documentation-website.png'
import consumerUserTest from '@/assets/img/tixtrack/consumer-user-test.png'
import designStudio from '@/assets/img/tixtrack/design-studio.png'
import empathyMapping from '@/assets/img/tixtrack/empathy-mapping.png'
import nlivenConsumerMobile from '@/assets/img/tixtrack/nliven-consumer-mobile.png'
import nlivenUI from '@/assets/img/tixtrack/nliven-ui.png'
import smeCollaboration from '@/assets/img/tixtrack/sme-collaboration.png'
import tixtrackBrand from '@/assets/img/tixtrack/tixtrack-brand.png'
import tixtrackBusinessCards from '@/assets/img/tixtrack/tixtrack-business-cards.png'
import tixtrackCorporateSite from '@/assets/img/tixtrack/tixtrack-corporate-site.png'
import tixtrackOfficeSign from '@/assets/img/tixtrack/tixtrack-office-sign.png'
import tixtrackOfficeSignDetail from '@/assets/img/tixtrack/tixtrack-office-sign-detail.png'
import tixtrackTradeShowBooth1 from '@/assets/img/tixtrack/tixtrack-trade-show-booth-1.png'
import tixtrackTradeShowBooth2 from '@/assets/img/tixtrack/tixtrack-trade-show-booth-2.png'
import whiteboarding3ps from '@/assets/img/tixtrack/whiteboarding-3ps.png'

// Fantasy Watch
import watchGlanceShort from '@/assets/img/watch/watch-glance-short.png'
import watchGlanceLong from '@/assets/img/watch/watch-glance-long.png'
import watchApp from '@/assets/img/watch/watch-app.png'
import appleWatchHig from '@/assets/img/watch/apple-watch-HIG.png'
import matchupSketchBars from '@/assets/img/watch/matchup-sketch-bars.png'
import uiAppH2h from '@/assets/img/watch/ui-app-h2h.png'
import uiGlanceH2h from '@/assets/img/watch/ui-glance-h2h.png'
import uiAppRoto from '@/assets/img/watch/ui-app-roto.png'
import uiGlanceRoto from '@/assets/img/watch/ui-glance-roto.png'
import mockupPreviewer from '@/assets/img/watch/mockup-previewer.png'
import meetupSpeaking from '@/assets/img/watch/meetup-speaking.png'

// Fantasy App
import splash2011 from '@/assets/img/fantasy/2011-Splash.png'
import team2011 from '@/assets/img/fantasy/2011-Team.png'
import matchup2011 from '@/assets/img/fantasy/2011-Matchup.png'
import player2011 from '@/assets/img/fantasy/2011-Player.png'

import splash2012 from '@/assets/img/fantasy/2012-Splash.png'
import team2012 from '@/assets/img/fantasy/2012-Team.png'
import matchup2012 from '@/assets/img/fantasy/2012-Matchup.png'
import player2012 from '@/assets/img/fantasy/2012-Player.png'

import splash2013 from '@/assets/img/fantasy/2013-Splash.png'
import team2013 from '@/assets/img/fantasy/2013-Team.png'
import matchup2013 from '@/assets/img/fantasy/2013-Matchup.png'
import player2013 from '@/assets/img/fantasy/2013-Player.png'

import splash2014 from '@/assets/img/fantasy/2014-Splash.png'
import team2014 from '@/assets/img/fantasy/2014-Team.png'
import matchup2014 from '@/assets/img/fantasy/2014-Matchup.png'
import player2014 from '@/assets/img/fantasy/2014-Player.png'

import splash2015 from '@/assets/img/fantasy/2015-Splash.png'
import team2015 from '@/assets/img/fantasy/2015-Team.png'
import matchup2015 from '@/assets/img/fantasy/2015-Matchup.png'
import player2015 from '@/assets/img/fantasy/2015-Player.png'

import fsgaAward from '@/assets/img/fantasy/fsga-award.png'

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

const imagesToPreload = [
  dailyDeviceHero,
  dailyHighLevelFlow,
  dailySplash,
  dailyMyContests,
  dailyContests,
  dailyLineup,
  dailyH2HContest,
  dailyPlayer,
  boxOfficeBroadway,
  boxOfficeDocuments,
  boxOfficeInterior,
  boxOfficeInterview,
  boxOfficeWillCall,
  chrysalisDesignSystem,
  chrysalisDocumentationWebsite,
  consumerUserTest,
  designStudio,
  empathyMapping,
  nlivenConsumerMobile,
  nlivenUI,
  smeCollaboration,
  tixtrackBrand,
  tixtrackBusinessCards,
  tixtrackCorporateSite,
  tixtrackOfficeSign,
  tixtrackOfficeSignDetail,
  tixtrackTradeShowBooth1,
  tixtrackTradeShowBooth2,
  whiteboarding3ps,
  watchGlanceShort,
  watchGlanceLong,
  watchApp,
  appleWatchHig,
  matchupSketchBars,
  uiAppH2h,
  uiGlanceH2h,
  uiAppRoto,
  uiGlanceRoto,
  mockupPreviewer,
  meetupSpeaking,
  splash2011,
  team2011,
  matchup2011,
  player2011,
  splash2012,
  team2012,
  matchup2012,
  player2012,
  splash2013,
  team2013,
  matchup2013,
  player2013,
  splash2014,
  team2014,
  matchup2014,
  player2014,
  splash2015,
  team2015,
  matchup2015,
  player2015,
  fsgaAward,  
];

onMounted(() => {
  imagesToPreload.forEach(imageUrl => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageUrl;
    document.head.appendChild(link);
  });
});
</script>

<template>
    <main class="home">
        <a href="#" @click.prevent="handleClick($event, 'project/tixtrack')" :class="{ 'disabled': isTransitioning }">
            <project
            title="TixTrack Ticketing"
            company="TixTrack"
            year="2015-2022"
            role="Lead UX, UI, Design Manager"
            platform="Responsive Web"
            :imgUrl="heroNliven"
            imgAltText="Nliven Ticketing"
            />
        </a>
        <a href="#" @click.prevent="handleClick($event, 'project/yahoo-daily-fantasy')" :class="{ 'disabled': isTransitioning }">
            <project
            title="Yahoo! Daily Fantasy Mobile"
            company="Yahoo!"
            year="2014-2015"
            role="Lead UX, UI, Design Manager"
            platform="iOS, Android"
            :imgUrl="heroDailyFantasy"
            imgAltText="Yahoo! Daily Fantasy Mobile"
            />
        </a>
        
        <a href="#" @click.prevent="handleClick($event, 'project/yahoo-fantasy-apple-watch')" :class="{ 'disabled': isTransitioning }">
            <project
            title="Yahoo! Fantasy Sports Apple Watch"
            company="Yahoo!"
            year="2014"
            role="Lead UX, UI"
            platform="watchOS"
            :imgUrl="heroFantasyWatch"
            imgAltText="Yahoo! Fantasy Sports Apple Watch"
            />
        </a>
        <a href="#" @click.prevent="handleClick($event, 'project/yahoo-fantasy-mobile')" :class="{ 'disabled': isTransitioning }">
            <project
            title="Yahoo! Fantasy Sports Mobile App"
            company="Yahoo!"
            year="2010-2015"
            role="Lead UX, UI, Design Manager"
            platform="iOS, Android"
            :imgUrl="heroFantasy"
            imgAltText="Yahoo! Fantasy SportsMobile App"
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

