<script setup>
const props = defineProps(["localStorageArr"]);

const filteredArr = props.localStorageArr.filter((job) => {
  return job.status === "Saved";
});

console.log(props.localStorageArr);
</script>

<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto">Save Job Posting</button>
    <h2>Saved Postings</h2>
    <div class="border">
      <ul>
        <li v-for="job in filteredArr" :key="job.url">
          {{ job.company }} {{ job.status }}
        </li>
      </ul>
    </div>
  </main>
</template>
