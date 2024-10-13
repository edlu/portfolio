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
        <h1>TixTrack Ticketing</h1>

        <p class="size-l">I played a key role at TixTrack in developing Nliven—a platform featuring a high-conversion purchasing front-end and comprehensive event management tools for ticket sales, inventory, order management, and analytics. Starting with a small team in a shared Santa Monica office, we grew TixTrack into a global company with hundreds of employees. I led the transformation of ticketing experiences, from mobile purchasing to full box office management, and created Chrysalis, a unified design system that ensured speed, consistency, and a cohesive brand across our product and marketing.</p>

        <div class="project-summary card">
            <div class="project-summary__data padding-1x padding-2x-tablet-portrait">
                <table>
                    <tbody>
                        <tr>
                            <td class="label">Company</td>
                            <td class="value">TixTrack</td>
                        </tr>
                        <tr>
                            <td class="label">Year</td>
                            <td class="value">2015-2022</td>
                        </tr>
                        <tr>
                            <td class="label">Role</td>
                            <td class="value">Lead UX, UI, UXR, Design Management</td>
                        </tr>
                        <tr>
                            <td class="label">Platform</td>
                            <td class="value">Responsive Web, iOS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="project-summary__achievements padding-1x padding-2x-tablet-portrait">
                <ul>
                    <li>12% increase in mobile ticket conversion rate</li>
                    <li>Deloitte Fast 500 Technology Companies 2017, 2018</li>
                    <li>Over $1B in tickets sold - 80% of Broadway tickets and half of West End tickets sold through Nliven</li>
                </ul>
            </div>
        </div>
    </section>

    <section>
      <img :src="nlivenConsumerMobile" alt="Nliven consumer mobile app" class="img-full-width">
    </section>

    <section class="margin-bottom-2x">
        <h3>Consumer Ticket Purchasing</h3>
        
        <div class="content-with-image">
          <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
            <img :src="consumerUserTest" alt="Consumer user testing" class="img-responsive">
                <figcaption class="size-xs">Consumer user testing</figcaption>
          </figure>

          <p>We started by designing a ticket purchasing experience when an opportunity arose to build a solution for Cirque du Soleil. They were having trouble with mobile sales, and were looking for help.</p>

            <p>My initial hypothesis was that users were hesitant to buy reserved seating tickets because, for high-cost items, they need a clear picture of what they're getting. But what does “value” mean for event tickets?</p>

            <p>Our starting point was to run user tests on competing platforms and listening to users go through purchasing flows. One of the first things we learned that there were two types of shoppers and they were roughly split 50/50:</p>

            <ul>
                <li>Find me <strong>best seats shoppers</strong> trusted the platform to recommend the best seats at a specified price point.</li>
                <li><strong>Savvy shoppers</strong> were more comfortable picking their own seats.</li>
            </ul>

            <p>Savvy users were willing to be flexible on date if they could secure seats that were high value.  High value meant closest to the stage and in the center of the venue.  Users would select an event date, see where seats were vs pricing, then back out and select another date over and over again.  Most existing flows made it difficult to understand value.</p>

            <p>Watching user behavior suggested that confidence in a purchase hinges on three key factors—<strong>the 3 P's</strong>: <strong>Performance</strong> (date), <strong>Price</strong>, and <strong>Position</strong> (seat location). Savvy shoppers were flexible with one or more of these but needed the ability to weigh them all at once.</p>

            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="whiteboarding3ps" alt="Whiteboarding the 3Ps" class="img-responsive">
                <figcaption class="size-xs">Whiteboarding the 3Ps</figcaption>
            </figure>
            <p>Through more user testing and iterative designs, we refined our approach, ultimately landing on a solution that would lead the industry.  Iterations started at a high level, then entered a refinement stage, uncovered things like adding seat detail tooltips that would help users with visual impairments.</p>

            <p>Our MVP achieved a 12% conversion rate, validating our strategy and generating a steady revenue stream. We began pitching our purchasing flow to other companies, showcasing usability tests where users struggled with their existing ticketing platforms. Presenting these insights to decision-makers helped drive adoption.</p>

            <p>After launch we continued refining through the same user testing process.  We learned that more users actually preferred picking their own seats when given a more intuitive interface.  Additionally, there was an increase in average spend because now users would move up in price level if the seat value was sufficient.</p>

            <p>As our approach gained traction, Cirque and heavyweights like Ticketmaster followed our lead, replicating our UI and affirming our role in setting the new industry standard.</p>
        </div>
    </section>

    <section class="margin-bottom-2x">
        <h3>Nliven Ticketing Platform</h3>
        
        <div class="content-with-image">
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="nlivenUI" alt="Nliven ticketing platform UI" class="img-responsive">
                <figcaption class="size-xs">Nliven ticketing platform UI</figcaption>
            </figure>

            <p>Meanwhile, we began work on an end-to-end ticketing platform designed to revolutionize box office operations. The big players in the space were stuck on outdated mainframe technology, making box office management slow, frustrating, and inefficient. Box office teams were forced to navigate a clunky, VAX prompt-based interface on old PCs running specific versions of Windows, severely limiting their productivity.</p>

            <p>Recognizing a massive market opportunity, we developed a modern, intuitive UI that redefined what box offices could accomplish. With our platform, box office staff could easily set up performance dates, manage pricing levels, process orders, and access reports. Tasks that had once taken days or even weeks were now completed in minutes, with instant updates that legacy systems couldn't dream of achieving. Our solution wasn't just an improvement—it was a game-changer for the industry.</p>

            <p>Modernizing legacy systems and operations was a big challenge.  Once again, user research led the way.</p>
        </div>
    </section>
  
    <section>
        <h3>Understanding Box Office Users</h3>
        <p>When it comes to empathizing with users, there is no substitute for being in the physical space where their work is being done.  Behind the glamour of the Broadway billboards were teams of workers making sure tickets were sold and guests were cared for,  We got to meet these people who made it all run smoothly.</p>

        <p>Seeing what life was like for these workers first-hand was eye opening.  Their operations included lots of printed materials, photocopying, phone calls, and storing vast quantities of documents year after year.</p>

        <p>It's easy to cast judgment on how antiquated legacy operations can appear, but after spending time with the users it became apparent that there were nuanced details in how the work was done that had been honed over decades.</p>
        
        <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeBroadway" alt="Broadway Billboards">
              <figcaption class="size-xs">Broadway Billboards</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeInterior" alt="Inside a broadway box office window">
              <figcaption class="size-xs">Inside a broadway box office window</figcaption>
            </figure>
        </div>
        <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeWillCall" alt="Tickets organized for will call by last name">
              <figcaption class="size-xs">Tickets organized for will call by last name</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="boxOfficeDocuments" alt="Documents on a broadway box office desk">
              <figcaption class="size-xs">Documents on a broadway box office desk</figcaption>
            </figure>
        </div>
    </section>

    <section class="margin-bottom-2x">
        <h3>Solving Legacy Problems</h3>
        
        <div class="content-with-image">
            <figure class="image-container right padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="boxOfficeInterview" alt="Box office interviews" class="img-responsive">
                <figcaption class="size-xs">Interviewing box office staff</figcaption>
            </figure> 
            
            <p>Box office workers had been doing things the same way for decades, and we knew we had to create solutions for them that resonated.  My goal was to understand them deeply and show them that we could provide a better way of doing things that reduced tedium and allowed them to focus efforts on other areas in their operations.</p>

            <p>To understand our user, we visited box offices at venues to see first-hand what their operations looked like.  We got to see and understand what life was like for these workers&mdash;lots of printed information, photocopies, phone calls, and vast quantities of documents filed by year in steel cabinets.</p>

            <p>Through interviews, we identified common points of friction and used those insights to kick off our ideation process.</p>

            <p>Because we didn't want to build a “faster horse” based solely on legacy practices, it was important to include the team in the process.  We led Design Studios that included engineers and stakeholders to generate ideas and build a shared understanding of our users so that each individual could have the agency to make decisions with the customer in mind.</p>

            <figure class="image-container left padding-1x padding-2x-tablet-portrait margin-bottom-1x margin-bottom-2x-tablet-portrait">
                <img :src="smeCollaboration" alt="Collaborating with internal Subject Matter Experts">
                <figcaption class="size-xs">Collaborating with internal Subject Matter Experts</figcaption>
            </figure> 

            <p>Our design team would then collate what we knew about our users, their current processes, and our own ideas to inform our design process.  Starting with sketches and wireframes and validating solutions internally with former box office staff (our Subject Matter Experts), engineers, and key stakeholders.  We iterated until everyone felt like we had a comprehensive and compelling feature.</p>

            <p>Once we had a prototype, we'd meet with our client partners, ensuring the right people were on the call. Instead of simply presenting our solution, I'd give them the prototype and let them perform their tasks, allowing us to observe and gather qualitative data. This approach enabled us to refine our design through each iteration, ultimately creating solutions that met—and often exceeded—their operational needs.</p>
            
            <div class="screenshots-container">
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="designStudio" alt="Design Studio session with the team">
              <figcaption class="size-xs">Design Studio session with the team</figcaption>
            </figure>
            <figure class="screenshot-figure padding-1x padding-2x-tablet-portrait">
              <img :src="empathyMapping" alt="Empathy mapping for box office users">
              <figcaption class="size-xs">Empathy mapping for box office users</figcaption>
                </figure>
            </div>
              
        </div>
    </section>
    <section>
      <h3>Branding</h3>
      <p>Being such a small company, part of my work there was to establish branding.  Our initial seat map design represented seating as small dots, a simple and intuitive choice that resonated with users. This design element quickly became a foundational motif for our brand, inspiring our logo and influencing our entire visual design language. By building our identity around this motif, we established a consistent look and feel that extended from the product interface to all marketing materials, reinforcing our brand's commitment to simplicity and clarity. This unified design approach helped strengthen brand recognition and provided a seamless experience across all touchpoints.</p>
      <img :src="tixtrackBrand" alt="TixTrack branding style board" class="img-full-width">
      <img :src="tixtrackBusinessCards" alt="TixTrack business cards" class="img-full-width">
    </section>
    <section>
      <h3>Marketing</h3>
      <p>Establishing branding helped to guide the visual style of our marketing.  I designed and managed the build of the corporate website that helped to generate sales leads and talent.  The brand was also expressed in physical spaces like our Santa Monica office and at trade shows, which we attended several times a year.</p>
      <img :src="tixtrackCorporateSite" alt="TixTrack corporate website" class="img-full-width">
      <div class="columns width-100 margin-bottom-2x">
        <img :src="tixtrackOfficeSign" alt="TixTrack office sign" class="column--12-mobile column--1-6" width="100%">
        <img :src="tixtrackOfficeSignDetail" alt="TixTrack office sign detail" class="column--12-mobile column--7-end" width="100%">
       </div>
       <div class="columns width-100">
        <img :src="tixtrackTradeShowBooth1" alt="TixTrack trade show booth" class="column--12-mobile column--1-6" width="100%">
        <img :src="tixtrackTradeShowBooth2" alt="TixTrack trade show booth detail" class="column--12-mobile column--7-end" width="100%">
       </div>
    </section>
    <section>
      <h3>Chrysalis Design System</h3>
      <p>To drive speed, consistency, and scalability, I designed and coded a complete design system and CSS framework called Chrysalis. This system included a robust Figma design library with pixel-perfect CSS component counterparts, allowing our design and development teams to collaborate seamlessly. Every component in Figma was precisely matched in code, ensuring a smooth transition when designs were built.</p>

      <p>The CSS framework was both theme-able and extensible, featuring a comprehensive set of utility classes. This empowered developers to quickly assemble layouts and elements using semantic HTML, with minimal need for custom CSS. Chrysalis enabled our team to create polished, consistent user interfaces across our product, achieving new levels of efficiency and adaptability.</p>
      <img :src="chrysalisDesignSystem" alt="Chrysalis design system" class="img-full-width margin-bottom-2x">
      <p>I built this reference site to provide developers with documentation on usage and best practices.</p>
      <img :src="chrysalisDocumentationWebsite" alt="Chrysalis documentation website" class="img-full-width">
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