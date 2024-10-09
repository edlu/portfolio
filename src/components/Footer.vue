<script setup>

</script>

<template>
  <div class="footer padding-x-2x-tablet-portrait size-s">
    <span>&copy;2024 Superindustrial</span>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
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
