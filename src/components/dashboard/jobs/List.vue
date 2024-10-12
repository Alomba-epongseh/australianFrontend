<template>
  <section class="bg-white border py-8 rounded-md">
    <div>
      <div class="pt-8 px-8 pb-2">
        <div class="pb-6">
          <div class="flex justify-between md:flex-row gap-5 flex-col">
            <div>
              <h4 class="text-3xl font-medium tracking-wide leading-6 mb-4">
                List of Jobs
              </h4>
              <p class="font-light text-gray-400">
                This section displays the list of all the jobs in the system you
                created.
              </p>
            </div>
            <div class="flex items-center">
              <router-link to="/dashboard/job/add">
                <!-- @click.prevent="toggleForm = !toggleForm" -->
                <button
                  class="primary px-4 py-2.5 rounded flex text-white items-center gap-3"
                >
                  <i class="pi pi-plus"></i>
                  <span>Create new job</span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="border-b bg-green-500 text-white">
          <tr>
            <th scope="col" class="px-4 border-r border-white py-4 font-medium">
              Title
            </th>
            <th
              scope="col"
              class="p-4 border-r text-center border-white font-medium"
            >
              Salary
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Job type
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Created date
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Updated date
            </th>
            <th scope="col" class="p-4 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <PulseLoader
            v-if="getLoaderState.type === 'skeleton' && getLoaderState.isActive"
            column-length="6"
            row-length="3"
          />
          <tr
            v-if="!listOfJobs?.length && !getLoaderState.isActive"
            class="bg-gray-50 border-b"
          >
            <td colspan="8" class="font-light py-4 text-center">
              <div class="flex justify-center items-center gap-2">
                <i class="pi pi-exclamation-circle text-2xl"></i>
                <span class="text-lg">No jobs found</span>
              </div>
            </td>
          </tr>
          <tr
            v-else
            class="bg-white border-b"
            v-for="job in listOfJobs"
            v-bind:key="job"
          >
            <td class="p-4 text-gray-500 font-light whitespace-nowrap">
              {{ job?.title }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ job?.salary }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ job?.job_type }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ new Date(job?.createdAt).toLocaleString() }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ new Date(job?.updatedAt).toLocaleString("en-us") }}
            </td>
            <td class="p-4 flex gap-2 items-center justify-end">
              <button
                @click.prevent="$router.push(`/dashboard/job/${job?.id}`)"
                class="w-8 h-8 border flex items-center justify-center rounded-md"
              >
                <i class="pi pi-eye text-gray-400"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="p-4">
              <p class="text-sm text-gray-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">10</span>
                of
                <span class="font-medium">{{
                  getJobsMetadata?.totalItems
                }}</span>
                results
              </p>
            </td>
            <td colspan="3" class="p-4">
              <div class="flex pagination justify-end">
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-l-md p-3 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Previous</span>
                    <i class="pi pi-chevron-left"></i>
                  </a>
                  <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                  <a
                    v-for="number in getJobsMetadata.pages"
                    v-bind:key="number"
                    href="#"
                    :class="`relative z-10 inline-flex ring-1 ring-inset ring-gray-300 items-center px-4 py-3 text-sm font-normal focus:z-20 ${
                      getJobsMetadata?.currentPage === number ? 'active' : ''
                    }`"
                    @click.prevent="
                      this.$store.dispatch('getAllJobs', {
                        skip:
                          (parseInt(number) - 1) * getJobsMetadata?.pageSize ||
                          0,
                        take: getJobsMetadata?.pageSize,
                      })
                    "
                    >{{ number }}</a
                  >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Next</span>
                    <i class="pi pi-chevron-right"></i>
                  </a>
                </nav>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <Add @toggleForm="toggleForm = !toggleForm" :hidden="!toggleForm" /> -->
  </section>
</template>

<script>
import { PulseLoader } from "@/components";
// import Add from "./Add";
export default {
  name: "ListUser",
  components: {
    PulseLoader,
    // Add,
  },
  computed: {
    listOfJobs() {
      return this.$store.getters?.getJobsState;
    },
    getLoaderState() {
      return this.$store.getters.getLoaderState;
    },
    getJobsMetadata() {
      return this.$store.getters.getJobsMetadata;
    },
  },
  // data() {
  //   return {
  //     toggleForm: false,
  //   };
  // },
  mounted() {
    this.$store.dispatch("getAllJobs");
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/palette.scss";
.pagination {
  a {
    &.active {
      background: $primary;
      color: $white;
      font-weight: 500;
    }
  }
}
</style>
