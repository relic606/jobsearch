<!-- <template>
  <main class="max-w-7xl flex flex-col mx-auto">
    <button class="border w-fit mx-auto" @click="showAddModal = true">
      Add Application
    </button>
    <div v-if="showAddModal === true">
      <AddApplication
        v-show="showAddModal"
        @close-modal="showAddModal = false"
        @addJob="addJob"
      />
    </div>

    <section>
      <h2 class="text-lg">Pending Response</h2>
      <div class="border">
        <ul>
          <template v-for="job in localStorageArr" :key="job.id">
            <li
              v-if="job.status === `Pending response`"
              @click="setSelectedJob(job) + setDetailsModalBool()"
              class="cursor-pointer hover:text-blue-500"
            >
              {{ job.company }}, {{ job.status }}
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section>
      <h2 class="text-lg">Upcoming Interviews</h2>
      <div class="border">
        <ul>
          <template v-for="job in localStorageArr" :key="job.id">
            <li
              v-if="job.status === `Interviewing`"
              @click="setSelectedJob(job) + setDetailsModalBool()"
              class="cursor-pointer hover:text-blue-500"
            >
              {{ job.company }}, {{ job.status }}
            </li>
          </template>
        </ul>
      </div>
    </section>
    <h2>Pending Applications</h2>
    <div class="border">
      <ul>
        <template v-for="job in localStorageArr" :key="job.id">
          <li
            v-if="job.status === `Applied`"
            @click="setSelectedJob(job) + setDetailsModalBool()"
            class="cursor-pointer hover:text-blue-500"
          >
            {{ job.company }} {{ job.status }}
          </li>
        </template>
        <div v-if="showDetailsModal === true">
          <ApplicationDetails
            v-show="showDetailsModal"
            @close-modal="closeModal"
            v-bind:job="selectedJob"
          />
        </div>
      </ul>
    </div>
  </main>
</template> -->

<template>
	<div class="px-4 sm:px-6 lg:px-8 mt-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="font-semibold text-lg leading-6 text-gray-900">
					Applications
				</h1>
			</div>
			<div class="sm:ml-16 sm:mt-0 sm:flex-none">
				<button
					type="button"
					@click="showAddModal = true"
					class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Add Application
				</button>
				<div v-if="showAddModal === true">
					<AddApplication
						v-show="showAddModal"
						@close-modal="showAddModal = false"
						@addJob="addJob"
					/>
				</div>
			</div>
		</div>
		<div class="mt-4 flow-root">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div
					class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-72 overflow-y-auto"
				>
					<div
						v-if="
							localStorageArr.filter((job) => job.status === `Applied`)
								.length === 0
						"
					>
						No applications at this time
					</div>
					<table
						class="min-w-full divide-y divide-gray-300"
						v-if="
							localStorageArr.filter((job) => job.status === `Applied`)
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
									On-site/Remote
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
								<tr v-if="job.status === `Applied`">
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
									>
										{{ job.company }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.title }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.selected }}
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
		<div class="sm:flex sm:items-center mt-12">
			<div class="sm:flex-auto">
				<h1 class="font-semibold text-lg leading-6 text-gray-900">
					Interviews
				</h1>
			</div>
		</div>
		<div class="flow-root mt-4">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div
					class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 h-64 overflow-y-auto"
				>
					<div
						v-if="
							localStorageArr.filter(
								(job) =>
									job.status === `Interviewing` ||
									job.status === `Pending response`
							).length === 0
						"
					>
						No interviews scheduled at this time
					</div>
					<table
						class="min-w-full divide-y divide-gray-300"
						v-if="
							localStorageArr.filter(
								(job) =>
									job.status === `Interviewing` ||
									job.status === `Pending response`
							).length !== 0
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
									On-site/Remote
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Status
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Interview Date
								</th>
								<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<template v-for="job in localStorageArr" :key="job.id">
								<tr
									v-if="
										job.status === `Interviewing` ||
										job.status === `Pending response`
									"
								>
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
									>
										{{ job.company }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.title }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.selected }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.status }}
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{{ job.interviewDate }}
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AddApplication from "../components/AddApplication.vue";
import ApplicationDetails from "../components/ApplicationDetails.vue";

export default {
	props: ["localStorageArr"],
	components: { AddApplication, ApplicationDetails },
	data() {
		return {
			showAddModal: false,
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
