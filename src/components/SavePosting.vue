<script setup>
import { ref } from "vue";
const company = ref("");
const title = ref("");
const url = ref("");
const notes = ref("");

const emit = defineEmits(["close-modal", "addJob"]);

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
		id: null
	};

	let parsedJobs = [];
	if (localStorage.jobs) {
		parsedJobs = JSON.parse(localStorage.jobs);
		applicationForm.id = parsedJobs.length + 1;
	} else {
		applicationForm.id = 1;
	}
	parsedJobs.push(applicationForm);
	emit("addJob", applicationForm);

	const serializedJobList = JSON.stringify(parsedJobs);

	localStorage.setItem("jobs", serializedJobList);
};
</script>

<template>
	<div className="modal-overlay">
		<div class="modal p-12 h-fit my-auto rounded">
			<h3 class="mb-4">Save Job Posting</h3>
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

			<button
				class="rounded mt-4 mr-4"
				@click="
					{
						setLocalStorageContent() + $emit('close-modal') + resetValues();
					}
				"
			>
				Save Posting
			</button>
			<button @click="$emit('close-modal') + resetValues()">Close</button>
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
	background-color: #0000006b;
}

.modal {
	text-align: center;
	background-color: white;
}

h3 {
	font-weight: 500;
	font-size: 28px;
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
