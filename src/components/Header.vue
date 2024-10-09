<script setup>
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandDribbble } from '@tabler/icons-vue';
</script>

<template>
  <header class="position-sticky--top z-index-global padding-x-2x-tablet-portrait">
    <nav>
      <router-link to="/">
        <picture>
          <source srcset="/src/assets/superindustrial-logo-inv.svg" media="(prefers-color-scheme: dark)" />
          <img src="/src/assets/superindustrial-logo.svg" alt="Superindustrial Logo" height="20"/>
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
  padding: var(--spacing-half) var(--spacing-2x);
  backdrop-filter: blur(12px);
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
  padding: 0 var(--spacing-1x);
  align-items: center;
  justify-content: space-between;
}

.links {
  display: flex;
  gap: var(--spacing-1x);
}
</style>
