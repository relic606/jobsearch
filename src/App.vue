<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";

// const setLocalStorageContent = () => {
//   localStorage.setItem("jobs", "testing local local storage content");
// };

const localStorageArr = ref([]);

if (localStorage.jobs) {
  const unserializedLocalStorage = JSON.parse(localStorage.jobs);
  console.log(localStorage.jobs);
  localStorageArr.value = unserializedLocalStorage;
}

const addToLocalStorageArr = (job) => {
  localStorageArr.value.push(job);
};

// id: props.job.id,
// updatedCompany: updatedCompany,
// updatedTitle: updatedTitle,
// updatedurl: updatedurl,
// updatedPay: updatedPay,
// updatedLocation: updatedLocation,
// updatedDate: updatedDate,
// updatedSelected: updatedSelected,
// updatedNotes: updatedNotes,
// updatedStatus: updatedStatus,
// interviewDate: interviewDate,

const modifyLocalStorageArr = (updates) => {
  const arrayIndex = localStorageArr.value.findIndex(
    (job) => job.id === updates.id
  );

  localStorageArr.value[arrayIndex].company = updates.updatedCompany;
  localStorageArr.value[arrayIndex].title = updates.updatedTitle;
  localStorageArr.value[arrayIndex].url = updates.updatedurl;
  localStorageArr.value[arrayIndex].pay = updates.updatedPay;
  localStorageArr.value[arrayIndex].location = updates.updatedLocation;
  localStorageArr.value[arrayIndex].date = updates.updatedDate;
  localStorageArr.value[arrayIndex].selected = updates.updatedSelected;
  localStorageArr.value[arrayIndex].notes = updates.updatedNotes;
  localStorageArr.value[arrayIndex].status = updates.updatedStatus;
  localStorageArr.value[arrayIndex].interviewDate = updates.interviewDate;

  const serializedJobList = JSON.stringify(localStorageArr.value);
  localStorage.setItem("jobs", serializedJobList);
};

onMounted(() => {
  console.log(localStorageArr);
});
</script>

<template>
  <header>
    <nav class="bg-blue-400 flex justify-center p-4">
      <RouterLink to="/" class="px-2">Applications</RouterLink>
      <RouterLink to="/saved" class="px-2">Saved</RouterLink>
      <RouterLink to="/archive" class="px-2">Archive</RouterLink>
    </nav>
  </header>
  <RouterView
    :localStorageArr="localStorageArr"
    @addJob="addToLocalStorageArr"
    @updateJob="modifyLocalStorageArr"
  />
</template>
