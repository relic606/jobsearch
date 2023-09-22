<template>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="px-4 sm:px-6 lg:px-8 mt-8">
			<div class="sm:flex sm:items-center">
				<div class="sm:ml-16 sm:mt-0 sm:flex-none"></div>
			</div>
		</div>
		<div class="mt-8 flow-root">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<div
						v-if="
							localStorageArr.filter((job) => job.status === `Closed`)
								.length === 0
						"
					>
						No closed applications
					</div>
					<table
						class="min-w-full divide-y divide-gray-300"
						v-if="
							localStorageArr.filter((job) => job.status === `Closed`)
								.length !== 0
						"
					>
						<thead>
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
								>
									Company
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Job title
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Application Date
								</th>

								<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<template v-for="job in localStorageArr" :key="job.id">
								<tr v-if="job.status === `Closed`">
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
									>
										{{ job.company }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.title }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.date }}
									</td>

									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
									>
										<button
											class="text-indigo-600 hover:text-indigo-900"
											@click="setSelectedJob(job) + setDetailsModalBool()"
										>
											Edit
										</button>
										<div v-if="showDetailsModal === true">
											<ApplicationDetails
												v-show="showDetailsModal"
												@close-modal="closeModal"
												v-bind:job="selectedJob"
											/>
										</div>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ApplicationDetails from "../components/ApplicationDetails.vue";

export default {
	props: ["localStorageArr"],
	components: { ApplicationDetails },
	data() {
		return {
			showDetailsModal: false,
			selectedJob: {}
		};
	},
	methods: {
		setSelectedJob(job) {
			this.selectedJob = job;
		},
		setDetailsModalBool() {
			this.showDetailsModal = true;
		},
		addJob(job) {
			this.$emit("addJob", job);
		},
		closeModal(updates) {
			this.showDetailsModal = false;
			this.$emit("updateJob", updates);
		}
	}
};
</script>
