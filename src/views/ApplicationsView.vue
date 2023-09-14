<template>
	<main class="max-w-7xl flex flex-col mx-auto">
		<button class="border w-fit mx-auto" @click="showModal = true">
			Add Application
		</button>
		<h2>Pending Applications</h2>
		<div class="border">List of pending applications</div>

		<AddApplication v-show="showModal" @close-modal="showModal = false" />
	</main>
</template>

<script>
import AddApplication from "../components/AddApplication.vue";

export default {
	components: { AddApplication },
	data() {
		return {
			showModal: false
		};
	}
};
</script>
