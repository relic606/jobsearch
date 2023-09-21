<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showAddModal = true">
      Add Application
    </button>
    <div v-if="showAddModal === true">
      <AddApplication
        v-show="showAddModal"
        @close-modal="showAddModal = false"
        @addJob="addJob"
      />
    </div>

    <section>
      <h2 class="text-lg">Pending Response</h2>
      <div class="border">
        <ul>
          <template v-for="job in localStorageArr" :key="job.id">
            <li
              v-if="job.status === `Pending response`"
              @click="setSelectedJob(job) + setDetailsModalBool()"
              class="cursor-pointer hover:text-blue-500"
            >
              {{ job.company }}, {{ job.status }}
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section>
      <h2 class="text-lg">Upcoming Interviews</h2>
      <div class="border">
        <ul>
          <template v-for="job in localStorageArr" :key="job.id">
            <li
              v-if="job.status === `Interviewing`"
              @click="setSelectedJob(job) + setDetailsModalBool()"
              class="cursor-pointer hover:text-blue-500"
            >
              {{ job.company }}, {{ job.status }}
            </li>
          </template>
        </ul>
      </div>
    </section>
    <h2>Pending Applications</h2>
    <div class="border">
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
        <div v-if="showDetailsModal === true">
          <ApplicationDetails
            v-show="showDetailsModal"
            @close-modal="closeModal"
            v-bind:job="selectedJob"
          />
        </div>
      </ul>
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
    closeModal(updates) {
      this.showDetailsModal = false;
      this.$emit("updateJob", updates);
    },
  },
};
</script>
