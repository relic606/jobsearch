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
	interviewDate: interviewDate
};
</script>

<template>
	<div className="modal-overlay">
		<div class="modal p-12 h-fit my-auto rounded">
			<h3 class="mb-4">Job Details</h3>
			<div>
				<div class="flex">
					<div class="relative mb-4 mr-4">
						<label
							for="company"
							class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
							>Company</label
						>
						<input
							v-model="updatedCompany"
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
							v-model="updatedTitle"
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
						v-model="updatedurl"
						type="text"
						name="url"
						id="url"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>

				<div class="flex" v-if="updatedStatus !== `Saved`">
					<div class="relative mr-4 mb-4">
						<label
							for="pay"
							class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
							>Pay Range</label
						>
						<input
							v-model="updatedPay"
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
							v-model="updatedLocation"
							type="text"
							name="location"
							id="location"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder=""
						/>
					</div>
				</div>
				<div class="relative" v-if="updatedStatus !== `Saved`">
					<label
						for="date"
						class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
						>Application Date</label
					>
					<input
						v-model="updatedDate"
						type="date"
						name="date"
						id="date"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder=""
					/>
				</div>
				<div v-if="updatedStatus !== `Saved`">
					<select
						v-model="updatedSelected"
						id="selected"
						name="selected"
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
							v-model="updatedNotes"
							rows="4"
							name="notes"
							id="notes"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Notes here"
						>
						</textarea>
					</div>
				</div>
				<div>
					<select
						v-model="updatedStatus"
						id="status"
						name="status
            "
						class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
					>
						<option value="Pending response">Pending Response</option>
						<option value="Interviewing">Interviewing</option>
						<option value="Applied">Applied</option>
						<option value="Saved" v-if="props.job.status === `Saved`">
							Saved
						</option>
						<option value="Closed">Closed</option>
					</select>
				</div>

				<div
					class="relative mt-4"
					v-if="
						updatedStatus === `Interviewing` ||
						updatedStatus === `Pending response`
					"
				>
					<label
						for="interviewDate"
						class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
						>Interview Date</label
					>
					<input
						v-model="interviewDate"
						type="date"
						name="interviewDate"
						id="interviewDate"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder=""
					/>
				</div>
			</div>
			<button @click="$emit('close-modal', updates)" class="mt-4">
				Save & Close
			</button>
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
