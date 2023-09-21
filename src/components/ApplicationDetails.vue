<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["close-modal"]);

const props = defineProps(["job"]);
const updatedCompany = ref(props.job.company);
const updatedTitle = ref(props.job.title);
const updatedurl = ref(props.job.url);
const updatedPay = ref(props.job.pay);
const updatedLocation = ref(props.job.location);
const updatedDate = ref(props.job.date);
const updatedNotes = ref(props.job.notes);
const updatedStatus = ref(props.job.status);
const updatedSelected = ref("");

props.job.selected ? (updatedSelected.value = props.job.selected) : null;

const interviewDate = ref("");
if (props.job.interviewDate) {
  interviewDate.value = props.job.interviewDate;
}

const updates = {
  id: props.job.id,
  updatedCompany: updatedCompany,
  updatedTitle: updatedTitle,
  updatedurl: updatedurl,
  updatedPay: updatedPay,
  updatedLocation: updatedLocation,
  updatedDate: updatedDate,
  updatedSelected: updatedSelected,
  updatedNotes: updatedNotes,
  updatedStatus: updatedStatus,
  interviewDate: interviewDate,
};
</script>

<template>
  <div
    className="modal-overlay"
    v-if="props.job.status !== `Closed` && updatedStatus !== `Saved`"
  >
    <div class="modal">
      <h3>Job Details</h3>
      <div>
        <input v-model="updatedCompany" placeholder="Company" class="border" />
        <input v-model="updatedTitle" placeholder="Job Title" class="border" />
        <input v-model="updatedurl" placeholder="URL" class="border" />
        <input v-model="updatedPay" placeholder="Pay Range" class="border" />
        <input
          v-model="updatedLocation"
          placeholder="Location"
          class="border"
        />
        Applied on: <input v-model="updatedDate" type="date" />
        <select v-model="updatedSelected">
          <option disabled value="">Please select one</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <textarea v-model="updatedNotes">{{ updatedNotes }}</textarea>
        <select v-model="updatedStatus">
          <option value="Pending response">Pending Response</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Applied">Applied</option>
          <option value="Saved">Saved</option>
          <option value="Closed">Closed</option>
        </select>
        <div v-if="updatedStatus === `Interviewing`">
          <input v-model="interviewDate" type="date" />
        </div>
        <div v-if="updatedStatus === `Pending response`">
          <p>{{ interviewDate }}</p>
        </div>
      </div>
      <button @click="$emit('close-modal', updates)">Save & Close</button>
    </div>
  </div>

  <!-- Saved status display -->

  <div className="modal-overlay" v-if="updatedStatus === `Saved`">
    <div class="modal">
      <h3>Job Details</h3>
      <div>
        <input v-model="updatedCompany" placeholder="Company" class="border" />
        <input v-model="updatedTitle" placeholder="Job Title" class="border" />
        <input v-model="updatedurl" placeholder="URL" class="border" />
        <textarea v-model="updatedNotes">{{ updatedNotes }}</textarea>
        <select v-model="updatedStatus">
          <option value="Pending response">Pending Response</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Applied">Applied</option>
          <option value="Saved">Saved</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <button @click="$emit('close-modal', updates)">Save & Close</button>
    </div>
  </div>

  <!-- Closed status display -->

  <div>
    <div className="modal-overlay" v-if="props.job.status === `Closed`">
      <div class="modal">
        <h3>Job Details</h3>
        <div>
          <p>{{ props.job.company }}</p>
          <p>{{ props.job.title }}</p>
          <p>{{ props.job.url }}</p>
          <p>{{ props.job.pay }}</p>
          <p>{{ props.job.location }}</p>
          <p>{{ props.job.date }}</p>
          <p>{{ props.job.selected }}</p>
          <p>{{ props.job.notes }}</p>
          <p>{{ props.job.status }}</p>
          <p>
            {{ props.job.interviewDate ? props.job.interviewDate : null }}
          </p>
        </div>
        <button @click="$emit('close-modal')">Close</button>
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
  height: fit-content;
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
