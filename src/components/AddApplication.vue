<script setup>
import { ref } from "vue";
const selected = ref("");
const company = ref("");
const pay = ref("");
const title = ref("");
const url = ref("");
const notes = ref("");
const location = ref("");
const date = ref("");

function resetValues() {
	selected.value = "";
	company.value = "";
	pay.value = "";
	title.value = "";
	url.value = "";
	notes.value = "";
	location.value = "";
	date.value = "";
}
</script>

<template>
	<div className="modal-overlay">
		<div class="modal">
			<h3>Add Application</h3>
			<div>
				<input v-model="company" placeholder="Company" class="border" />
				<input v-model="title" placeholder="Job Title" class="border" />
				<input v-model="url" placeholder="URL" class="border" />
				<input v-model="pay" placeholder="Pay Range" class="border" />
				<input v-model="location" placeholder="Location" class="border" />
				Applied on: <input v-model="date" type="date" />
				<select v-model="selected">
					<option disabled value="">Please select one</option>
					<option>Remote</option>
					<option>On-site</option>
					<option>Hybrid</option>
				</select>
				<textarea v-model="notes" placeholder="Notes here" class="border" />
			</div>
			<button>Add Application</button>
			<button @click="$emit('close-modal') + resetValues()">Close</button>
			<div>
				Controlled variables: {{ company }}, {{ selected }}, {{ title }},
				{{ pay }}, {{ url }}, {{ location }}, {{ date }}
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
