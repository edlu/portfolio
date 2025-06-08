<script setup>
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

</script>

<template>
  <main class="padding-1x padding-4x-tablet-portrait gap-2x gap-4x-tablet-portrait">

    <section>
        <h1>RippleMatch</h1>

        <p class="size-l">RippleMatch was a Human Resources SaaS platform that aimed to solve the hiring process for both the candidate and the recruiter through a platform that would lead to high-intent, high-quality matches.  It was a growth-stage product that needed usability and design refinement.  I joined to help coach them toward a more user-centered approach to product development.</p>

        <div class="project-summary card">
            <div class="project-summary__data padding-2x padding-1x-mobile">
                <table>
                    <tbody>
                        <tr>
                            <td class="label">Company</td>
                            <td class="value">RippleMatch</td>
                        </tr>
                        <tr>
                            <td class="label">Year</td>
                            <td class="value">2022-2024</td>
                        </tr>
                        <tr>
                            <td class="label">Role</td>
                            <td class="value">Principal Product Designer</td>
                        </tr>
                        <tr>
                            <td class="label">Platform</td>
                            <td class="value">Responsive Web</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="project-summary__achievements padding-2x padding-1x-mobile">
                <ul>
                    <li>Increase in ARR into the tens of millions</li>
                    <li>Designed and helped implement a scalable design system</li>
                </ul>
            </div>
        </div>
    </section>

    <section>
      <img :src="nlivenConsumerMobile" alt="Nliven consumer mobile app" class="img-full-width" data-aos="fade-up">
    </section>

    <section class="margin-bottom-2x">
        <h3>Job Seeker Experience</h3>
        
        <div class="content-with-image">
          <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
            <img :src="consumerUserTest" alt="Consumer user testing" class="img-responsive" data-aos="fade-up">
                <figcaption class="size-xs">Consumer user testing</figcaption>
          </figure>

          <p>The product was initially positioned as "tinder for jobs", with an interface that would allow users to swipe through jobs and candidates.  Although great as an investor pitch, my hypothesis was that unlike dating apps, job seekers were better served with a list of opportunities they could compare against each other rather than triaging jobs one at a time.  As long as users understood that under the hood was a powerful preference engine that would continue to refine matches over time.</p>
          <p>I led user research to validate my hypothesis and to understand the needs of job seekers.  I conducted interviews with job seekers to understand their pain points and to identify opportunities for improvement.</p>

            
        </div>
    </section>

    <section class="margin-bottom-2x">
        <h3>Recruiter Experience</h3>
        
        <!-- <div class="content-with-image">
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="nlivenUI" alt="Nliven ticketing platform UI" class="img-responsive" data-aos="fade-up">
                <figcaption class="size-xs">Nliven ticketing platform UI</figcaption>
            </figure>

            <p>Meanwhile, we began work on an end-to-end ticketing platform designed to revolutionize box office operations. The big players in the space were stuck on outdated mainframe technology, making box office management slow, frustrating, and inefficient. Box office teams were forced to navigate a clunky, VAX prompt-based interface on old PCs running specific versions of Windows, severely limiting their productivity.</p>

            <p>Recognizing a massive market opportunity, we developed a modern, intuitive UI that redefined what box offices could accomplish. With our platform, box office staff could easily set up performance dates, manage pricing levels, process orders, and access reports. Tasks that had once taken days or even weeks were now completed in minutes, with instant updates that legacy systems couldn't dream of achieving. Our solution wasn't just an improvement—it was a game-changer for the industry.</p>

            <p>Modernizing legacy systems and operations was a big challenge.  Once again, user research led the way.</p>
        </div> -->
    </section>
  
    <section>
        <h3>Design System</h3>
        <!-- <p>When it comes to empathizing with users, there is no substitute for being in the physical space where their work is being done.  Behind the glamour of the Broadway billboards were teams of workers making sure tickets were sold and guests were cared for,  We got to meet these people who made it all run smoothly.</p>

        <p>Seeing what life was like for these workers first-hand was eye opening.  Their operations included lots of printed materials, photocopying, phone calls, and storing vast quantities of documents year after year.</p>

        <p>It's easy to cast judgment on how antiquated legacy operations can appear, but after spending time with the users it became apparent that there were nuanced details in how the work was done that had been honed over decades.</p>
        
        <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeBroadway" alt="Broadway Billboards" data-aos="fade-up">
              <figcaption class="size-xs">Broadway Billboards</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeInterior" alt="Inside a broadway box office window" data-aos="fade-up">
              <figcaption class="size-xs">Inside a broadway box office window</figcaption>
            </figure>
        </div>
        <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeWillCall" alt="Tickets organized for will call by last name" data-aos="fade-up">
              <figcaption class="size-xs">Tickets organized for will call by last name</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeDocuments" alt="Documents on a broadway box office desk" data-aos="fade-up">
              <figcaption class="size-xs">Documents on a broadway box office desk</figcaption>
            </figure>
        </div> -->
    </section>

    <section class="margin-bottom-2x">
        <h3>Brand Exploration</h3>
        
        <!-- <div class="content-with-image">
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="boxOfficeInterview" alt="Box office interviews" class="img-responsive" data-aos="fade-up">
                <figcaption class="size-xs">Interviewing box office staff</figcaption>
            </figure> 
            
            <p>Box office workers had been doing things the same way for decades, and we knew we had to create solutions for them that resonated.  My goal was to understand them deeply and show them that we could provide a better way of doing things that reduced tedium and allowed them to focus efforts on other areas in their operations.</p>

            <p>To understand our user, we visited box offices at venues to see first-hand what their operations looked like.  We got to see and understand what life was like for these workers&mdash;lots of printed information, photocopies, phone calls, and vast quantities of documents filed by year in steel cabinets.</p>

            <p>Through interviews, we identified common points of friction and used those insights to kick off our ideation process.</p>

            <p>Because we didn't want to build a “faster horse” based solely on legacy practices, it was important to include the team in the process.  We led Design Studios that included engineers and stakeholders to generate ideas and build a shared understanding of our users so that each individual could have the agency to make decisions with the customer in mind.</p>

            <figure class="image-container left padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="smeCollaboration" alt="Collaborating with internal Subject Matter Experts" data-aos="fade-up">
                <figcaption class="size-xs">Collaborating with internal Subject Matter Experts</figcaption>
            </figure> 

            <p>Our design team would then collate what we knew about our users, their current processes, and our own ideas to inform our design process.  Starting with sketches and wireframes and validating solutions internally with former box office staff (our Subject Matter Experts), engineers, and key stakeholders.  We iterated until everyone felt like we had a comprehensive and compelling feature.</p>

            <p>Once we had a prototype, we'd meet with our client partners, ensuring the right people were on the call. Instead of simply presenting our solution, I'd give them the prototype and let them perform their tasks, allowing us to observe and gather qualitative data. This approach enabled us to refine our design through each iteration, ultimately creating solutions that met—and often exceeded—their operational needs.</p>
            
            <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="designStudio" alt="Design Studio session with the team" data-aos="fade-up">
              <figcaption class="size-xs">Design Studio session with the team</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="empathyMapping" alt="Empathy mapping for box office users" data-aos="fade-up">
              <figcaption class="size-xs">Empathy mapping for box office users</figcaption>
                </figure>
            </div>
              
        </div> -->
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
    /* padding: var(--spacing-2x); */
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
      /* padding: var(--spacing-2x); */
      flex-grow: 1;

      ul {
          margin: 0;
      }

      li {
          line-height: 1.2em;
      }
  }

  .img-responsive {
      width: 100%;
  }

  .img-full-width {
    width: 100%;
  }

  .content-with-image {
    overflow: hidden; /* Clearfix */
  }

  .content-wrapper {
    display: flex;
    align-items: flex-start;
  }

  .screenshots-container {
    clear: both;
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
    @media screen and (max-width: 576px) {
      float: none;
      margin-right: 0;
    }
  }

  /* For right alignment */
  .image-container.right {
    float: right;
    margin-left: var(--spacing-2x);
    @media screen and (max-width: 576px) {
      float: none;
      margin-left: 0;
    }
  }
</style>