<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["close-modal", "addJob"]);

let currentDate = new Date().toJSON().slice(0, 10);

const company = ref("");
const title = ref("");
const url = ref("");
const pay = ref("");
const location = ref("");
const date = ref(currentDate);
const selected = ref("");
const notes = ref("");

const setLocalStorageContent = () => {
  const applicationForm = {
    company: company.value,
    title: title.value,
    url: url.value,
    pay: pay.value,
    location: location.value,
    date: date.value,
    selected: selected.value,
    notes: notes.value,
    status: "Applied",
    id: null,
  };

  let parsedJobs = [];
  if (localStorage.jobs) {
    parsedJobs = JSON.parse(localStorage.jobs);
    applicationForm.id = parsedJobs.length + 1;
  } else {
    applicationForm.id = 1;
  }
  parsedJobs.push(applicationForm);

  console.log(parsedJobs);

  const serializedJobList = JSON.stringify(parsedJobs);

  localStorage.setItem("jobs", serializedJobList);
  emit("addJob", applicationForm);
};

const removeLocalStorageContent = () => {
  localStorage.removeItem("jobs");
  console.log(localStorage);
};
</script>

<template>
  <div className="modal-overlay">
    <div class="modal p-12 h-fit my-auto rounded">
      <h3 class="mb-4">Add Application</h3>
      <div>
        <div class="flex">
          <div class="relative mb-4 mr-4">
            <label
              for="company"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >Company</label
            >
            <input
              v-model="company"
              type="text"
              name="company"
              id="company"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div class="relative">
            <label
              for="title"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >Job Title</label
            >
            <input
              v-model="title"
              type="text"
              name="title"
              id="title"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="relative pb-4">
          <label
            for="url"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >Posting URL</label
          >
          <input
            v-model="url"
            type="text"
            name="url"
            id="url"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="flex">
          <div class="relative mr-4 mb-4">
            <label
              for="pay"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >Pay Range</label
            >
            <input
              v-model="pay"
              type="text"
              name="pay"
              id="pay"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder=""
            />
          </div>
          <div class="relative">
            <label
              for="location"
              class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >Location</label
            >
            <input
              v-model="location"
              type="text"
              name="location"
              id="location"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder=""
            />
          </div>
        </div>
        <div class="relative">
          <label
            for="date"
            class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >Application Date</label
          >
          <input
            v-model="date"
            type="date"
            name="date"
            id="date"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder=""
          />
        </div>

        <div>
          <select
            v-model="selected"
            id="location"
            name="location"
            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option disabled value="">Please select one</option>
            <option>Remote</option>
            <option>On-site</option>
            <option>Hybrid</option>
          </select>
        </div>
        <div>
          <div class="mt-2">
            <textarea
              v-model="notes"
              rows="4"
              name="notes"
              id="notes"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Notes here"
            />
          </div>
        </div>
      </div>
      <button
        class="rounded mt-4 mr-4"
        @click="
          {
            setLocalStorageContent() + $emit('close-modal');
            // removeLocalStorageContent();
          }
        "
      >
        Add Application
      </button>
      <button @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000a9;
}

.modal {
  text-align: center;
  background-color: white;
}

h3 {
  font-weight: 500;
  font-size: 24px;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
}
</style>
