<script setup>
import dailyDeviceHero from '@/assets/img/daily/daily-device-hero.png'
import dailyHighLevelFlow from '@/assets/img/daily/daily-high-level-flow.png'
import dailySplash from '@/assets/img/daily/Daily-Splash.png'
import dailyMyContests from '@/assets/img/daily/Daily-My-Contests.png'
import dailyContests from '@/assets/img/daily/Daily-Contests.png'
import dailyLineup from '@/assets/img/daily/Daily-Lineup.png'
import dailyH2HContest from '@/assets/img/daily/Daily-H2H-Contest.png'
import dailyPlayer from '@/assets/img/daily/Daily-Player.png'
</script>

<template>
  <main class="padding-1x padding-4x-tablet-portrait gap-2x gap-4x-tablet-portrait">

        <section>
            <h1>Yahoo! Daily Fantasy</h1>

            <p class="size-l">In 2015, we made a strategic bet to get ahead of the market shift from season-long Fantasy Sports to Daily Fantasy. Our goal was to create a monetized daily lineup challenge that would drive heavy engagement while capitalizing on our existing user base. We would focus on social features from the start with the hope that the product would experience explosive growth.</p>

            <div class="project-summary card">
                <div class="project-summary__data padding-1x padding-2x-tablet-portrait">
                    <table>
                        <tbody>
                            <tr>
                                <td class="label">Company</td>
                                <td class="value">Yahoo!</td>
                            </tr>
                            <tr>
                                <td class="label">Year</td>
                                <td class="value">2015</td>
                            </tr>
                            <tr>
                                <td class="label">Role</td>
                                <td class="value">Lead UX, UI</td>
                            </tr>
                            <tr>
                                <td class="label">Platform</td>
                                <td class="value">iOS, Android</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="project-summary__achievements padding-1x padding-2x-tablet-portrait">
                    <ul>
                        <li>Inaugural Yahoo! Daily Fantasy product</li>
                        <li>First major mobile-led product that would inform the web product</li>
                        <li>Product continues to thrive and be used by millions today</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <img :src="dailyDeviceHero" alt="Yahoo! Daily Fantasy devices" class="img-full-width" loading="lazy" data-aos="fade-up">
        </section>

    <section class="margin-bottom-2x">
        <h3>Planning for Social</h3>
        <p>Our strategy was to capture users through every avenue possible at the time for Daily because it had the potential to be a much broader social gathering in a similar way that Tourney Pick'em was.  Groups of coworkers, friends, families could all compete together.  To do this, we leveraged users of the existing Yahoo! Fantasy App, their device contacts, desktop users, marketing, and social media.</p>

        <p>We began by mapping out how the funnel would look for incoming users and how we could facilitate social media sharing.</p>
        
        <img :src="dailyHighLevelFlow" alt="Yahoo! Daily Fantasy social sketch" class="img-full-width" loading="lazy" data-aos="fade-up">
    </section>
    <section class="margin-bottom-2x">
        <h3>Screens</h3>

        <p>For the more detailed flows of the app we partnered with our internal UX Research team and tested flows extensively starting with wireframe paper prototypes.  Later we moved to increasingly higher fidelity methods including visually designed paper prototyping and then digital.</p>

        <p>The UI was net new and required many iterations to arrive at a final solution.  This ranged from rethinking nav structure entirely to small copy adjustments to improve understanding.</p>

        <div class="group gap-2x flex-wrap flex-justify-center flex-align-center margin-bottom-4x">
                <img :src="dailySplash" alt="Yahoo! Daily Fantasy Splash Page" class="img-responsive" loading="lazy" data-aos="fade-up" data-aos-delay="100">
                <img :src="dailyMyContests" alt="Yahoo! Daily Fantasy My Contests Page" class="img-responsive" loading="lazy" data-aos="fade-up" data-aos-delay="200">
                <img :src="dailyContests" alt="Yahoo! Daily Fantasy Contests Page" class="img-responsive" loading="lazy" data-aos="fade-up" data-aos-delay="300">
                <img :src="dailyLineup" alt="Yahoo! Daily Fantasy Lineup Page" class="img-responsive" loading="lazy" data-aos="fade-up" data-aos-delay="400">
                <img :src="dailyH2HContest" alt="Yahoo! Daily Fantasy Head to Head Contest Result Page" class="img-responsive" loading="lazy" data-aos="fade-up" data-aos-delay="500">
                <img :src="dailyPlayer" alt="Yahoo! Daily Fantasy Player Page" class="img-responsive" loading="lazy" data-aos="fade-up" data-aos-delay="600">
        </div>
    </section>
   
  </main>
</template>

<style scoped lang="css">
  .project-summary {
      display: flex;
      flex-direction: unset;
      box-shadow: none;

      @media (max-width: 576px) {
          flex-direction: column;
      }
  }

  .project-summary__data {
        padding: var(--spacing-2x);
        border-right: 1px solid var(--color-card-border);
        
        @media (max-width: 576px) {
            border-right: none;
            border-bottom: 1px solid var(--color-card-border);
        }

        td {
            line-height: 1.2em;
            padding-right: var(--spacing-1x);
            padding-bottom: var(--spacing-half)
        }

        .label {
            color: var(--color-text-dim);
        }

        .value {
            font-weight: 500;
        }
    }

  .project-summary__achievements {
      padding: var(--spacing-2x);
      flex-grow: 1;

      ul {
          margin: 0;
      }

      li {
          line-height: 1.2em;
      }
  }

  .img-responsive {
      width: clamp(200px, 100%, 340px);
  }

  .img-full-width {
    width: 100%;
  }

  .content-with-image {
    overflow: hidden; /* Clearfix */
  }

  .content-with-image-bleed {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    margin-top: -80px;
    width: 200%;
  }

  .img-bleed {
    margin-left: -80px;
  }

  .content-wrapper {
    display: flex;
    align-items: flex-start;
  }

  .screenshots-container {
    display: flex;
    gap: var(--spacing-2x);
    margin-bottom: var(--spacing-2x);
  }

  .screenshot-figure {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .screenshot-images {
    display: flex;
    gap: var(--spacing-1x);
    margin-bottom: var(--spacing-1x);
    align-items: flex-start;
  }

  .screenshot-images img {
    width: calc(50% - var(--spacing-1x) / 2);
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .screenshots-container {
      flex-direction: column;
    }

    .screenshot-images img {
      width: calc(50% - var(--spacing-1x) / 2);
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    width: clamp(250px, 70%, 370px); /* Adjust as needed */
    margin-right: var(--spacing-2x);
    shape-outside: margin-box;
    margin-left: 0;
    max-width: 100%;
  }

  .image-container img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .image-container {
      display: flex;
      justify-content: center;
      max-width: 100%;
    }
  }

  /* For left alignment */
  .image-container.left {
    float: left;
    margin-right: var(--spacing-2x);
  }

  /* For right alignment */
  .image-container.right {
    float: right;
    margin-left: var(--spacing-2x);
  }
</style>
