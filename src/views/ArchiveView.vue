<script setup>
const props = defineProps(["localStorageArr"]);
</script>
<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <h2>Archive</h2>
    <div class="border">
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li
            v-if="job.status === `Closed`"
            @click="setSelectedJob(job) + setDetailsModalBool()"
            class="cursor-pointer hover:text-blue-500"
          >
            {{ job.company }} {{ job.status }}
          </li>
        </template>
      </ul>
      <div v-if="showDetailsModal === true">
        <ApplicationDetails
          v-show="showDetailsModal"
          @close-modal="closeModal"
          v-bind:job="selectedJob"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ApplicationDetails from "../components/ApplicationDetails.vue";

export default {
  components: { ApplicationDetails },
  data() {
    return {
      showDetailsModal: false,
      selectedJob: {},
    };
  },
  methods: {
    setSelectedJob(job) {
      this.selectedJob = job;
    },
    setDetailsModalBool() {
      this.showDetailsModal = true;
    },
    closeModal() {
      this.showDetailsModal = false;
    },
  },
};
</script>
