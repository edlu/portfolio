<script setup>

</script>

<template>
  <div class="footer padding-x-2x-tablet-portrait size-xs">
    <img src="/src/assets/superindustrial-mark.svg" alt="Superindustrial Mark" height="32"/>
    <span>&copy;2024 Superindustrial</span>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  gap: var(--spacing-1x);
  flex-direction: column;
  align-items: center;
  place-content: center;
  color: var(--color-text-hint);
  background-color: var(--white-a9);
  padding: var(--spacing-2x) var(--spacing-1x);
  width: 100%;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--black-a9);
  }
}

</style>
