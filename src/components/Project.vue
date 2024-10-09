<script setup>

defineProps({
  imgUrl: String,
  imgAltText: String,
  title: String,
  company: String,
  year: String,
  role: String,
  platform: String
});
</script>

<template>
<section class="project padding-4x-tablet" :style="{ backgroundImage: `url('${imgUrl}')` }">
  <div class="project__metadata">
    <h2>{{ title }}</h2>
    <table>
      <tbody>
        <tr>
          <td class="label">Company</td>
          <td class="value">{{ company }}</td>
        </tr>
        <tr>
          <td class="label">Year</td>
          <td class="value">{{ year }}</td>
        </tr>
        <tr>
          <td class="label">Role</td>
          <td class="value">{{ role }}</td>
        </tr>
        <tr>
          <td class="label">Platform</td>
          <td class="value">{{ platform }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="overlay"></div>
</section>

</template>

<style scoped>
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: var(--spacing-2x);
  width: 100%;
  height: 465px;
  background-position: center;
  background-size: 100%;
  transition: all var(--transition-slow);

  @media (max-width: 576px) {
    height: 300px;
  }

  &:hover {
    cursor: pointer;
    background-size: 102%;
    .overlay {
      opacity: 0.75;
    }
    .project__metadata {
      color: var(--color-text-inverse);
      transform: translateY(-8px);
    }
}

.project__metadata {
  display: flex;
  flex-direction: column;
  font-size: var(--size-s);
  z-index: 2;
  transition: all var(--transition-slow);
  }

  h2 {
    color: var(--color-text-inverse);
    margin-bottom: var(--spacing-half);
  }
}

td {
  padding: var(--spacing-quarter);
}

.label {
  color: var(--color-text-inverse-dim);
  padding-right: var(--spacing-3x);
  width: 100px;
}

.value {
  color: var(--color-text-inverse);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.9) 70%, rgba(0, 0, 0, 1) 100%);
  opacity: 0.9;
  z-index:1;
  transition: opacity var(--transition-medium);
}
</style>
