<script setup>
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandDribbble } from '@tabler/icons-vue';
</script>

<template>
  <header class="position-sticky--top z-index-global padding-x-2x-tablet-portrait">
    <nav>
      <a href="#/home">
        <img src="/src/assets/superindustrial_logo.svg" height="20" />
      </a>
      <div class="links">
        <IconBrandDribbble :size="24" stroke-width="1" />
        <IconBrandLinkedin :size="24" stroke-width="1" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  place-content: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: var(--spacing-1x) var(--spacing-1x);
  backdrop-filter: blur(12px);
  width: 100%;
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
