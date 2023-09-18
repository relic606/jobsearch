<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showAddModal = true">
      Add Application
    </button>
    <AddApplication
      v-show="showAddModal"
      @close-modal="showAddModal = false"
      @addJob="addJob"
    />
    <h2>Pending Applications</h2>
    <div class="border">
      Applied
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li
            v-if="job.status === `Applied`"
            @click="setSelectedJob(job) + setDetailsModalBool()"
            class="cursor-pointer hover:text-blue-500"
          >
            {{ job.company }} {{ job.status }}
          </li>
        </template>
        <ApplicationDetails
          v-show="showDetailsModal"
          @close-modal="showDetailsModal = false"
          v-bind:job="selectedJob"
        />
      </ul>

      <!-- All Jobs
      <ul>
        <li
          v-for="job in localStorageArr"
          :key="job.id"
          @click="setSelectedJob(job) + setDetailsModalBool()"
          class="cursor-pointer hover:text-blue-500"
        >
          {{ job.company }}
          {{ job.selected }}
          {{ job.date }}
          {{ job.status }}
        </li>
        <ApplicationDetails
          v-show="showDetailsModal"
          @close-modal="showDetailsModal = false"
          v-bind:job="selectedJob"
        />
      </ul> -->
    </div>
  </main>
</template>

<script>
import AddApplication from "../components/AddApplication.vue";
import ApplicationDetails from "../components/ApplicationDetails.vue";

export default {
  props: ["localStorageArr"],
  components: { AddApplication, ApplicationDetails },
  data() {
    return {
      showAddModal: false,
      showDetailsModal: false,
      selectedJob: {},
    };
  },
  setup(props) {
    console.log(props.localStorageArr);
  },
  methods: {
    setSelectedJob(job) {
      this.selectedJob = job;
    },
    setDetailsModalBool() {
      this.showDetailsModal = true;
    },
    addJob(job) {
      this.$emit("addJob", job);
    },
  },
};
</script>
