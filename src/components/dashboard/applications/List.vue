<template>
  <section class="bg-white border py-8 rounded-md">
    <div>
      <div class="pt-8 px-8 pb-2">
        <div class="pb-6">
          <div class="flex justify-between md:flex-row gap-5 flex-col">
            <div>
              <h4 class="text-3xl font-medium tracking-wide leading-6 mb-4">
                List of Applications
              </h4>
              <p class="font-light text-gray-400">
                This section displays the list of all the applications in the
                system.
              </p>
            </div>
            <div class="flex items-center"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="border-b primary text-white">
          <tr>
            <th scope="col" class="p-4 border-r border-white font-medium">
              Name
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Country
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Applied for
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Email
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Phone Number
            </th>
            <th
              scope="col"
              class="px-2 border-r text-center border-white py-4 font-medium"
            >
              Years of Experience
            </th>
            <th scope="col" class="p-4 font-medium text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          <PulseLoader
            v-if="getLoaderState.type === 'skeleton' && getLoaderState.isActive"
            column-length="7"
            row-length="3"
          />
          <tr
            v-if="!listOfApplications?.length && !getLoaderState.isActive"
            class="bg-gray-50 border-b"
          >
            <td colspan="8" class="font-light py-4 text-center">
              <div class="flex justify-center items-center gap-2">
                <i class="pi pi-exclamation-circle text-2xl"></i>
                <span class="text-lg">No Applications found</span>
              </div>
            </td>
          </tr>
          <tr
            v-else
            class="bg-white border-b"
            v-for="application in listOfApplications"
            v-bind:key="application"
          >
            <td class="p-4 font-light text-gray-900 whitespace-nowrap">
              {{ application?.fullname }}
            </td>
            <td class="px-2 py-4">
              {{ application?.country }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ application?.job?.title }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ application?.email }}
            </td>
            <td class="px-2 py-4 text-gray-500 font-light text-center">
              {{ application?.tel }}
            </td>
            <td
              class="px-2 py-4 text-gray-500 font-light flex items-center justify-center"
            >
              {{ application?.years_of_experience }}
            </td>
            <td class="px-2 py-4 font-semibold items-center justify-center">
              <button
                @click.prevent="
                  $router.push(`/dashboard/applications/${application?.id}`)
                "
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
                  getApplicationsMetadata?.totalItems
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
                  <button
                    v-for="number in getApplicationsMetadata.pages"
                    v-bind:key="number"
                    href="#"
                    :class="`relative z-10 inline-flex ring-1 ring-inset ring-gray-300 items-center px-4 py-3 text-sm font-normal focus:z-20 ${
                      getApplicationsMetadata?.currentPage === number
                        ? 'active'
                        : ''
                    }`"
                    @click.prevent="
                      this.$store.dispatch('getAllApplications', {
                        skip:
                          (parseInt(number) - 1) *
                            getApplicationsMetadata?.pageSize || 0,
                        take: getApplicationsMetadata?.pageSize,
                      })
                    "
                  >
                    {{ number }}
                  </button>
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
  </section>
</template>

<script>
import { PulseLoader } from "@/components";
export default {
  name: "ListProduct",
  components: {
    PulseLoader,
  },
  computed: {
    listOfApplications() {
      return this.$store.getters?.getApplicationsState;
    },
    getLoaderState() {
      return this.$store.getters.getLoaderState;
    },
    getApplicationsMetadata() {
      return this.$store.getters.getApplicationsMetadata;
    },
  },
  mounted() {
    this.$store.dispatch("getAllApplications");
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/palette.scss";
.pagination {
  button {
    &.active {
      background: $primary;
      color: $white;
      font-weight: 500;
    }
  }
}
</style>
