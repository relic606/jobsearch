<!-- <script setup>
import SavePosting from "../components/SavePosting.vue";
import ApplicationDetails from "../components/ApplicationDetails.vue";
const props = defineProps(["localStorageArr"]);
</script>

<template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showModal = true">
      Save Job Posting
    </button>
    <SavePosting
      v-show="showModal"
      @close-modal="showModal = false"
      @addJob="addJob"
    />
    <h2>Saved Postings</h2>
    <div class="border">
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li
            v-if="job.status === `Saved`"
            @click="setSelectedJob(job) + setDetailsModalBool()"
            class="cursor-pointer hover:text-blue-500"
          >
            {{ job.company }} {{ job.status }}
          </li>
        </template>
      </ul>
    </div>
    <div v-if="showDetailsModal === true">
      <ApplicationDetails
        v-show="showDetailsModal"
        @close-modal="closeModal"
        v-bind:job="selectedJob"
      />
    </div>
  </main>
</template>

<script>
export default {
  components: { SavePosting, ApplicationDetails },
  data() {
    return {
      showModal: false,
      showDetailsModal: false,
      selectedJob: {},
    };
  },
  methods: {
    setSelectedJob(job) {
      this.selectedJob = job;
    },
    setDetailsModalBool() {
      this.showDetailsModal = true;
    },
    closeModal(updates) {
      this.showDetailsModal = false;
      this.$emit("updateJob", updates);
    },
    addJob(job) {
      this.$emit("addJob", job);
    },
  },
};
</script> -->

<template>
	<div class="px-4 sm:px-6 lg:px-8 mt-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="font-semibold text-lg leading-6 text-gray-900"></h1>
			</div>
			<div class="sm:ml-16 sm:mt-0 sm:flex-none">
				<button
					type="button"
					@click="showModal = true"
					class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save Job
				</button>
				<div v-if="showModal === true">
					<SavePosting
						v-show="showModal"
						@close-modal="showModal = false"
						@addJob="addJob"
					/>
				</div>
			</div>
		</div>
		<div class="mt-8 flow-root">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<div
						v-if="
							localStorageArr.filter((job) => job.status === `Saved`).length ===
							0
						"
					>
						No saved jobs at this time
					</div>
					<table
						class="min-w-full divide-y divide-gray-300"
						v-if="
							localStorageArr.filter((job) => job.status === `Saved`).length !==
							0
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
									URL
								</th>

								<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<template v-for="job in localStorageArr" :key="job.id">
								<tr v-if="job.status === `Saved`">
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
									>
										{{ job.company }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.title }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.url }}
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
									</td>
								</tr>
							</template>
						</tbody>
					</table>
					<div v-if="showDetailsModal === true">
						<ApplicationDetails
							v-show="showDetailsModal"
							@close-modal="closeModal"
							v-bind:job="selectedJob"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SavePosting from "../components/SavePosting.vue";
import ApplicationDetails from "../components/ApplicationDetails.vue";

export default {
	props: ["localStorageArr"],
	components: { SavePosting, ApplicationDetails },
	data() {
		return {
			showModal: false,
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
		closeModal(updates) {
			this.showDetailsModal = false;
			this.$emit("updateJob", updates);
		},
		addJob(job) {
			this.$emit("addJob", job);
		}
	}
};
</script>
