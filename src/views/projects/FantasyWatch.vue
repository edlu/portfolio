<script setup>
import watchGlanceShort from '@/assets/img/watch/watch-glance-short.png'
import watchGlanceLong from '@/assets/img/watch/watch-glance-long.png'
import watchApp from '@/assets/img/watch/watch-app.png'
import appleWatchHig from '@/assets/img/watch/apple-watch-hig.png'
import matchupSketchBars from '@/assets/img/watch/matchup-sketch-bars.png'
import uiAppH2h from '@/assets/img/watch/ui-app-h2h.png'
import uiGlanceH2h from '@/assets/img/watch/ui-glance-h2h.png'
import uiAppRoto from '@/assets/img/watch/ui-app-roto.png'
import uiGlanceRoto from '@/assets/img/watch/ui-glance-roto.png'
import mockupPreviewer from '@/assets/img/watch/mockup-previewer.png'
import meetupSpeaking from '@/assets/img/watch/meetup-speaking.png'
</script>

<template>
  <main class="padding-1x padding-4x-tablet-portrait gap-2x gap-4x-tablet-portrait">

        <section>
            <h1>Yahoo! Fantasy Apple Watch</h1>

            <p class="size-l">In the months leading up to the debut of the first Apple Watch, we were given the opportunity to have Yahoo! Fantasy be a part of the inaugural suite of apps.  Much of the product was still under wraps and the device was not accessible to the general public.</p>

            <div class="project-summary card">
                <div class="project-summary__data padding-2x padding-1x-mobile">
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
                                <td class="value">watchOS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="project-summary__achievements padding-2x padding-1x-mobile">
                    <ul>
                        <li>First fantasy sports app on Apple Watch</li>
                        <li>Pretended to be a secret agent</li>
                        <li>Presented work at meetup in San Francisco</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="margin-bottom-2x">
            <div class="group gap-2x flex-wrap flex-justify-center flex-align-center margin-bottom-4x">
                <img :src="watchGlanceShort" alt="Yahoo! Fantasy Sports Apple Watch app short view" class="img-responsive" data-aos="fade-up" data-aos-delay="100">
                <img :src="watchGlanceLong" alt="Yahoo! Fantasy Sports Apple Watch app long view" class="img-responsive" data-aos="fade-up" data-aos-delay="200">
                <img :src="watchApp" alt="Yahoo! Fantasy Sports Apple Watch app app view" class="img-responsive" data-aos="fade-up" data-aos-delay="300">
            </div>
        </section>

    <section class="margin-bottom-2x">
        <h3>New Device, New Patterns</h3>
        
        <div class="content-with-image">
            <p>When we first set out to design the Fantasy Sports Apple Watch app, there were only preliminary Human Interface Guidelines available to guide us. While we were confident that the Apple Watch would stand out in the smart watch market, it wasn't entirely clear at the time <em>how</em> it would distinguish itself.</p>
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="appleWatchHig" alt="Apple Watch Human Interface Guidelines" class="img-responsive" data-aos="fade-up">
                <figcaption class="size-xs">Apple Watch Human Interface Guidelines</figcaption>
            </figure>
            <p>Apple emphasized that while mobile phone interactions distilled desktop tasks into minutes, the Watch would reduce interactions even further—into mere seconds. This challenge required us to rethink how users would engage with Fantasy Sports on an entirely new platform.</p>
            <p>We identified the Matchup interface as the best starting point, focusing on “quick-hit” use cases that aligned with the watch's glanceable, time-sensitive nature:</p>
            <ul>
                <li><strong>Watch Glance</strong> - <em>I'm on a date. Is my team winning?</em></li>
                <li><strong>Watch Notification</strong> - <em>I want to know when I've scored.</em></li>
                <li><strong>Long Look</strong> - <em>How did I score?</em></li>
                <li><strong>App View</strong> - <em>My date is in the bathroom.  I need a summary of my player scores.</em></li>
            </ul>
            <p>By thinking through these scenarios, we crystallized our understanding of how Apple envisioned users interacting with the device—quick, efficient, and highly contextual.</p>
            <p>My engineering partner and I were asked to sign a non-disclosure agreement and were given access to a war room where we worked in secret to design and build the app. Our MVP came together quickly, going through several iterations. Finally, we brought the app to a highly secured auditorium at Apple HQ in Cupertino, where we gathered critical feedback from their team and saw the app in action on an actual Apple Watch for the first time.</p>
        </div>
    </section>

    <section class="margin-bottom-2x">
        <h3>Data Visualization</h3>
        
        <div class="content-with-image">
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="matchupSketchBars" alt="Sketch of micro-matchup data visualization for Apple Watch" class="img-responsive margin-bottom-1x" data-aos="fade-up">
                <figcaption class="size-xs">Early sketches exploring data visualization options for the micro-matchup feature</figcaption>
            </figure>

            <p>Given the Apple Watch's limited screen size, it was clear that a traditional matchup UI wouldn't fit. We needed a way to convey meaningful data at a glance, so I turned to data visualization as the key to delivering a snapshot of complex information efficiently.</p>
            
            <p>I began by exploring various options through sketches and concepts, focusing on how to distill key Fantasy Sports data into digestible, visual elements that could be quickly understood in seconds. This exploration eventually led to the creation of the app's "micro-matchup" feature—a streamlined, visual representation of player performance that allowed users to get a clear, concise overview of their team's status without overwhelming them with details.</p>

            <p>Because of the secrecy surrounding the project, I wasn't able to tap the research team.  Instead, I relied on my own experience as a Fantasy Sports player to inform the design and validated internally with other members of the sports team without revealing any details.  I showed minimalist sketches without text labels or prompting to members of the team individually to see if they might understand what these bars represented.</p>

            <p>One after another, team members would say, "Those are matchup lineups."</p>

            <p>Under normal circumstances, this would have gone through more rigorous research and testing. This would have to be enough validation to move forward.</p>
        </div>
    </section>
  
    <section>
        <h3>Screenshots</h3>

        <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <div class="screenshot-images">
                    <img :src="uiAppH2h" alt="Apple Watch app head-to-head view" data-aos="fade-up" data-aos-delay="100">
                    <img :src="uiGlanceH2h" alt="Apple Watch glance head-to-head view" data-aos="fade-up" data-aos-delay="200">
                </div>
                <figcaption class="size-xs">Head-to-head watch app views</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <div class="screenshot-images">
                    <img :src="uiAppRoto" alt="Apple Watch app head-to-head view" data-aos="fade-up" data-aos-delay="300">
                    <img :src="uiGlanceRoto" alt="Apple Watch glance head-to-head view" data-aos="fade-up" data-aos-delay="400">
                </div>
                <figcaption class="size-xs">Roto watch app views</figcaption>
            </figure>
        </div>
    </section>
    <section class="margin-bottom-2x">
        <h3>Simulating Physical Screen Size</h3>
        
        <div class="content-with-image">
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="mockupPreviewer" alt="Apple Watch Human Interface Guidelines" class="img-responsive" data-aos="fade-up">
                <figcaption class="size-xs">Apple Watch screen size simulator app</figcaption>
            </figure> 
            <p>This was my first time designing anything on a screen so small.  The elements in my artboards felt ridiculously <em>large</em> as I designed them on my laptop screen.  I needed a way to get a sense of how these would look on the actual device at an average distance based on human physiology.</p>
            
            <p>We needed a creative solution to simulate the device in physical space to get a sense of how our designs would look on a wrist. Working with my engineering partner, we devised a simple utility app that allowed us to preview mockups at the exact size of the watch display—42mm and 38mm.</p>
               
            <p>The simulator was integrated with the phone's Photos app which allowed us to select my mockup exports.  The image would appear inside of a device mockup frame and we'd hold the phone over our wrist. It looked a bit silly, but it worked quite well, giving us a feel for the physical scale of the designs. With limited information and resources, we improvised and did what was necessary to ensure the app would provide a great user experience.</p>
            
               
        </div>
    </section>
    <section class="margin-bottom-2x">
        <figure class="padding-1x padding-2x-tablet-portrait">
            <img :src="meetupSpeaking" alt="Presenting at meetup" width="100%" class="border-radius-large" data-aos="fade-up">
            <figcaption class="size-xs">Presenting our Fantasy Apple Watch work at a meetup in San Francisco</figcaption>
        </figure>
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

  .content-with-image {
    overflow: hidden; /* Clearfix */
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

  .container {
    display: flow-root;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    width: clamp(250px, 70%, 40%); /* Adjust as needed */
    shape-outside: margin-box;
    max-width: 100%;

    @media screen and (max-width: 576px) {
      width: 100%;
    }
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