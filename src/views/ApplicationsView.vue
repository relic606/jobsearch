<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showModal = true">
      Add Application
    </button>
    <AddApplication v-show="showModal" @close-modal="showModal = false" />
    <h2>Pending Applications</h2>
    <div class="border">
      <ul>
        <li v-for="job in localStorageArr" :key="job.url">
          {{ job.company }}
          {{ job.selected }}
          Date
          {{ job.status }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import AddApplication from "../components/AddApplication.vue";

export default {
  props: ["localStorageArr"],
  components: { AddApplication },
  data() {
    return {
      showModal: false,
    };
  },
  setup(props) {
    console.log(props.localStorageArr);
  },
};
</script>
