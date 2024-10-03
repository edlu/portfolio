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
<section class="project padding-4x-tablet" :style="{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.9) 100%), url('${imgUrl}') no-repeat center/cover` }">
  <div class="project__metadata">
    <h2>{{ title }}</h2>
    <table>
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
    </table>
  </div>
</section>

</template>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: var(--spacing-2x);
  width: 100%;
  height: 465px;

  @media (max-width: 576px) {
    height: 300px;
  }

  &:hover {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 20%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.9) 100%);
    cursor: pointer;
  }
}

.project__metadata {
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-sm);
  color: var(--color-text-inverse);

  h2 {
    color: inherit;
  }
}

td {
  padding: var(--spacing-eighth);
}

.label {
  color: var(--color-text-inverse-dim);
}
</style>
