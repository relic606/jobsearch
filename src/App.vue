<script setup>
import { Disclosure } from "@headlessui/vue";

import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const localStorageArr = ref([]);

if (localStorage.jobs) {
	const unserializedLocalStorage = JSON.parse(localStorage.jobs);
	console.log(localStorage.jobs);
	localStorageArr.value = unserializedLocalStorage;
}

const addToLocalStorageArr = (job) => {
	localStorageArr.value.push(job);
};

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
</script>

<template>
	<header>
		<Disclosure as="nav" class="shadow bg-blue-100 justify-center flex">
			<div class="max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16">
					<div class="flex">
						<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
							<RouterLink
								to="/projects/jobsearch"
								class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
								>Applications</RouterLink
							>
							<RouterLink
								to="/projects/jobsearch/saved"
								class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
								>Saved</RouterLink
							>
							<RouterLink
								to="/projects/jobsearch/archive"
								class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
								>Archive</RouterLink
							>
						</div>
					</div>
				</div>
			</div>
		</Disclosure>
	</header>
	<RouterView
		:localStorageArr="localStorageArr"
		@addJob="addToLocalStorageArr"
		@updateJob="modifyLocalStorageArr"
	/>
</template>
<style scoped>
.router-link-active {
	border-bottom: 2px solid blue;
	font-weight: bold;
}
</style>
