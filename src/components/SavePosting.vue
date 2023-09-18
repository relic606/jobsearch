<script setup>
import { ref } from "vue";
const company = ref("");
const title = ref("");
const url = ref("");
const notes = ref("");

function resetValues() {
  company.value = "";
  title.value = "";
  url.value = "";
  notes.value = "";
}

const setLocalStorageContent = () => {
  const applicationForm = {
    company: company.value,
    title: title.value,
    url: url.value,
    pay: null,
    location: null,
    date: null,
    selected: null,
    notes: notes.value,
    status: "Saved",
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

  const serializedJobList = JSON.stringify(parsedJobs);

  localStorage.setItem("jobs", serializedJobList);
};
</script>

<template>
  <div className="modal-overlay">
    <div class="modal">
      <h3>Save Job Posting</h3>
      <div>
        <input v-model="company" placeholder="Company" class="border" />
        <input v-model="title" placeholder="Job Title" class="border" />
        <input v-model="url" placeholder="URL" class="border" />
        <textarea v-model="notes" placeholder="Notes here" class="border" />
      </div>
      <button
        @click="
          {
            setLocalStorageContent() + $emit('close-modal') + resetValues();
          }
        "
      >
        Save Posting
      </button>
      <button @click="$emit('close-modal') + resetValues()">Close</button>
      <div>
        Controlled variables: {{ company }}, {{ title }}, {{ url }}, {{ notes }}
      </div>
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
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

h3 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
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
  border-radius: 16px;
  margin-top: 50px;
}
</style>
