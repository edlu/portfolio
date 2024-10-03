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

<div class="project">
<table>
  <tr>
    <th>Title</th>
    <td>{{ title }}</td>
  </tr>
  <tr>
    <th>Company</th>
    <td>{{ company }}</td>
  </tr>
  <tr>
    <th>Year</th>
    <td>{{ year }}</td>
  </tr>
  <tr>
    <th>Role</th>
    <td>{{ role }}</td>
  </tr>
  <tr>
    <th>Platform</th>
    <td>{{ platform }}</td>
  </tr>
  <tr>
    <th>Image</th>
    <td><img :src="imgUrl" alt="Project Image" /></td>
  </tr>
</table>
</div>

<style scoped>
.project {
  width: 100%;
  background: black;
  padding: 8rem;
}
</style>
