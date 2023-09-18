<script setup>
const props = defineProps(["localStorageArr"]);
</script>
<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <h2>Archive</h2>
    <div class="border">
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li v-if="job.status === `Closed`">
            {{ job.company }} {{ job.status }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
