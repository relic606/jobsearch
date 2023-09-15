<script setup>
const props = defineProps(["localStorageArr"]);

console.log(props.localStorageArr);

const filteredArrUpcoming = props.localStorageArr.filter((job) => {
  return job.status === "Interviewing";
});
const filteredArrCompleted = props.localStorageArr.filter((job) => {
  return job.status === "Pending response";
});
</script>

<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <section>
      <h2 class="text-lg">Upcoming Interviews</h2>
      <div class="border">
        <ul>
          <li v-for="job in filteredArrUpcoming" :key="job.url">
            {{ job.company }}, {{ job.status }}
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h2 class="text-lg">Pending Response</h2>
      <div class="border">
        <ul>
          <li v-for="job in filteredArrCompleted" :key="job.url">
            {{ job.company }}, {{ job.status }}
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
