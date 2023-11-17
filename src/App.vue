<script setup>
import { Disclosure } from "@headlessui/vue";
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const localStorageArr = ref([]);

if (localStorage.jobs) {
	const unserializedLocalStorage = JSON.parse(localStorage.jobs);
	console.log(unserializedLocalStorage);
	localStorageArr.value = unserializedLocalStorage;
} else {
	localStorageArr.value = [
		{
			company: "Utah Jazz",
			title: "Point Guard",
			url: "www.utahjazz.com",
			pay: "TBD",
			location: "Salt Lake City, UT",
			date: "2023-11-03",
			selected: "On-site",
			notes:
				"Maybe this year?  If application moves forward, emphasize how inexpensive I will be, and promise to lose all of their games for optimal rebuilding.",
			status: "Applied",
			id: 1,
			interviewDate: ""
		},
		{
			company: "Google Inc",
			title: "CEO",
			url: "www.google.com",
			pay: "$10k / hour",
			location: "Google Town, CA",
			date: "2023-11-10",
			selected: "Hybrid",
			notes: "Requires relocation to Google Town",
			status: "Interviewing",
			id: 2,
			interviewDate: "2023-11-24"
		},
		{
			company: "Blizzard Entertainment",
			title: "Overwatch Lead Game Designer",
			url: "www.blizzard.com",
			pay: "250k - 500k annually",
			location: "Irvine, CA",
			date: "2023-11-08",
			selected: "Remote",
			notes:
				"Interview went great!  They responded very well to proposed balance changes to each hero.  Should hear back by end of 2023, otherwise follow up.",
			status: "Pending response",
			id: 3,
			interviewDate: "2023-11-17"
		},
		{
			company: "Apple Inc",
			title: "CEO",
			url: "www.apple.com",
			pay: null,
			location: null,
			date: null,
			selected: "",
			notes: "Apply if Google CEO interview goes poorly.",
			status: "Saved",
			id: 4,
			interviewDate: ""
		},
		{
			company: "Walmart",
			title: "Greeter",
			url: "www.walmart.com",
			pay: "$15.00 / hour",
			location: "Salt Lake City, UT",
			date: "2023-11-01",
			selected: "On-site",
			notes:
				"Received declination indicating they decided to go with a more qualified candidate.  Next time for an interview, I'll try less Hannibal Lecter and more Spongebob.",
			status: "Closed",
			id: 5,
			interviewDate: "2023-11-06"
		}
	];
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
