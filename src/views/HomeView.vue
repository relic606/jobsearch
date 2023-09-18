<script setup>
const props = defineProps(["localStorageArr"]);
</script>

<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <section>
      <h2 class="text-lg">Upcoming Interviews</h2>
      <div class="border">
        <ul>
          <template v-for="job in localStorageArr" :key="job.id">
            <li v-if="job.status === `Interviewing`">
              {{ job.company }}, {{ job.status }}
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section>
      <h2 class="text-lg">Pending Response</h2>
      <div class="border">
        <ul>
          <template v-for="job in localStorageArr" :key="job.id">
            <li v-if="job.status === `Pending response`">
              {{ job.company }}, {{ job.status }}
            </li>
          </template>
        </ul>
      </div>
    </section>
  </main>
</template>
