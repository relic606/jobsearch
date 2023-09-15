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

onMounted(() => {
  //   setLocalStorageContent();
  // showLocalStorageContent()
  console.log(localStorageArr);
});

const showLocalStorageContent = () => {
  localStorageValue.value = localStorage.getItem("jobs");
};

const removeLocalStorageContent = () => {
  localStorageValue.value = localStorage.removeItem("jobs");
};
</script>

<template>
  <header>
    <nav class="bg-blue-400 flex justify-center p-4">
      <RouterLink to="/" class="px-2">Interviews</RouterLink>
      <RouterLink to="/applications" class="px-2">Applications</RouterLink>
      <RouterLink to="/saved" class="px-2">Saved</RouterLink>
      <RouterLink to="/archive" class="px-2">Archive</RouterLink>
    </nav>
  </header>
  <RouterView :localStorageArr="localStorageArr" />
</template>
