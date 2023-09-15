<script setup>
const props = defineProps(["localStorageArr"]);

const filteredArr = props.localStorageArr.filter((job) => {
  return job.status === "Closed";
});

console.log(filteredArr);
</script>
<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <h2>Archive</h2>
    <div class="border">
      <ul>
        <li v-for="job in filteredArr" :key="job.url">
          {{ job.company }} {{ job.status }}
        </li>
      </ul>
    </div>
  </main>
</template>
