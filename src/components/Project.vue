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
<section class="project padding-4x-tablet" tabindex="1">
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
  <div class="project__scrim"></div>
  <div class="project__image" :style="{ backgroundImage: `url('${imgUrl}')` }"></div>
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
  height: 550px;
  overflow: hidden;
  transition: all var(--transition-slow);

  @media (max-width: 576px) {
    height: 300px;
    filter: saturate(1);
  }

  &:hover, &:focus {
    cursor: pointer;
    background-size: 102%;
    outline: none;
    
    .project__metadata {
      color: var(--color-text-inverse);
      transform: translateY(-8px);
    }

    .project__scrim {
      opacity: 0.35; 
    }

    .project__image {
      transform: scale(1.05);
      filter: saturate(1);
    }
  }
}

.project__image {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: saturate(0.5);
  transition: all var(--transition-slow);
}

.project__scrim {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(195deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.95) 100%);
  z-index:1;
  transition: opacity var(--transition-slow);
  opacity: 1;
}

.project__metadata {
  display: flex;
  flex-direction: column;
  font-size: var(--size-s);
  z-index: 2;
  transition: all var(--transition-slow);
  
  h2 {
    color: var(--color-text-inverse);
    margin-bottom: var(--spacing-half);
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
}

</style>
