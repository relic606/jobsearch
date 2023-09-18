<script setup>
import SavePosting from "../components/SavePosting.vue";
const props = defineProps(["localStorageArr"]);
</script>

<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showModal = true">
      Save Job Posting
    </button>
    <SavePosting v-show="showModal" @close-modal="showModal = false" />
    <h2>Saved Postings</h2>
    <div class="border">
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li v-if="job.status === `Saved`">
            {{ job.company }} {{ job.status }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  components: { SavePosting },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
