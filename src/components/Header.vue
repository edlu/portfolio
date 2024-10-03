<script setup>
import { ref } from 'vue';
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandDribbble } from '@tabler/icons-vue';
</script>

<template>
  <header>
    <nav>
      <a href="#/home"
        ><img src="/src/assets/superindustrial_logo.svg" height="20" />
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
  background-color: var(--header-bg);
  padding: 1rem 4rem;
  backdrop-filter: blur(16px);
  width: 100%;
}

nav {
  width: 100%;
  max-width: 1440px;
  //background-color: blue;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
}

.links {
  display: flex;
  gap: 0.5em;
}
</style>
