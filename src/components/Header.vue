<script setup>
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandDribbble } from '@tabler/icons-vue';
import superindustrialLogo from '/src/assets/img/superindustrial-logo.svg'
import superindustrialLogoInv from '/src/assets/img/superindustrial-logo-inv.svg'
</script>

<template>
  <header class="position-sticky--top z-index-global padding-y-half padding-x-2x-tablet-portrait">
    <nav class="padding-x-1x">
      <router-link to="/">
        <picture>
          <source :srcset="superindustrialLogoInv" media="(prefers-color-scheme: dark)" />
          <img :src="superindustrialLogo" alt="Superindustrial Logo" height="20"/>
        </picture>
      </router-link>
      <div class="group gap-eighth size-s">
        <a href="https://dribbble.com/superindustrial" target="_blank" class="button button--borderless"><IconBrandDribbble :size="24" stroke-width="1" /></a>
        <a href="https://www.linkedin.com/in/goedlu" target="_blank" class="button button--borderless"><IconBrandLinkedin :size="24" stroke-width="1" /></a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  place-content: center;
  background-color: var(--white-a9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background-color: var(--black-a9);
  }
}

nav {
  width: 100%;
  max-width: 1440px;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
}

.links {
  display: flex;
  gap: var(--spacing-1x);
}
</style>
