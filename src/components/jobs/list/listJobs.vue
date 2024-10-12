<template>
  <PulseLoader
    v-if="getLoaderState.type === 'skeleton' && getLoaderState.isActive"
    column-length="1"
    row-length="3"
  />
  <div class="jobs-list">
    <div class="container">
      <div class="grid grid-flow-row gap-2">
        <div
          v-if="!filteredJobs.length && !getLoaderState.isActive"
          class="bg-gray-50 border-b"
        >
          <div class="flex justify-center items-center gap-2">
            <i class="pi pi-exclamation-circle text-2xl"></i>
            <span class="text-lg">No Jobs found</span>
          </div>
        </div>
        <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
      </div>
      <!-- Pagination and metadata code remains unchanged -->
    </div>
  </div>
</template>

<script>
import JobCard from "./JobCardView.vue";
import { storageService } from "@/services";
import PulseLoader from "@/components/reusable/Loaders/pulse.loader.vue";
export default {
  components: { JobCard, PulseLoader },
  props: {
    search: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$store.dispatch("getAllJobs");
  },
  beforeMount() {
    const user = this.$store.getters.getUserState;
    if (!user) {
      this.$store.dispatch(
        "getCurrentUser",
        storageService.get("MIGRATEAUSTRIALIA_USER_INFO", true)
      );
    }
  },
  computed: {
    listOfJobs() {
      return this.$store.getters?.getJobsState;
    },
    filteredJobs() {
      if (this.search) {
        return this.listOfJobs.filter((job) =>
          job.title.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      return this.listOfJobs;
    },
    getJobsMetadata() {
      return this.$store.getters.getJobsMetadata;
    },
    getLoaderState() {
      return this.$store.getters.getLoaderState;
    },
    userData() {
      return this.$store.getters.getUserState;
    },
  },
};
</script>
