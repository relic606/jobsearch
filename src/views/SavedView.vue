<script setup>
import SavePosting from "../components/SavePosting.vue";
import ApplicationDetails from "../components/ApplicationDetails.vue";
const props = defineProps(["localStorageArr"]);
</script>

<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showModal = true">
      Save Job Posting
    </button>
    <SavePosting
      v-show="showModal"
      @close-modal="showModal = false"
      @addJob="addJob"
    />
    <h2>Saved Postings</h2>
    <div class="border">
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li
            v-if="job.status === `Saved`"
            @click="setSelectedJob(job) + setDetailsModalBool()"
            class="cursor-pointer hover:text-blue-500"
          >
            {{ job.company }} {{ job.status }}
          </li>
        </template>
      </ul>
    </div>
    <div v-if="showDetailsModal === true">
      <ApplicationDetails
        v-show="showDetailsModal"
        @close-modal="closeModal"
        v-bind:job="selectedJob"
      />
    </div>
  </main>
</template>

<script>
export default {
  components: { SavePosting, ApplicationDetails },
  data() {
    return {
      showModal: false,
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
    closeModal(updates) {
      this.showDetailsModal = false;
      this.$emit("updateJob", updates);
    },
    addJob(job) {
      this.$emit("addJob", job);
    },
  },
};
</script>
