/* eslint-disable */
<template>
  <!-- Main Section -->
  <div
    class="grid grid-cols-1 md:grid-cols-3 mt-8 md:gap-8 lg:gap-10 xl:gap-28"
  >
    <!-- LEFT: Description -->
    <div class="col-span-2">
      <JobDescription :job="jobs" />
    </div>
    <!-- RIGHT -->
    <div>
      <CompanyInfoCard :job="jobs" />
    </div>
    <ApplyView @toggleForm="toggleForm = !toggleForm" :hidden="!toggleForm" />
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
// import { ref } from "vue";
import JobDescription from "@/components/jobs/jobDetails/JobDescription.vue";
import CompanyInfoCard from "@/components/jobs/jobDetails/CompanyInfoCard.vue";
import ApplyView from "@/components/jobs/apply/applyView.vue";
// const jobs = ref([
//   {
//     id: 1,
//     title: "Software Engineer",
//     company: "Google Int",
//     type: "Full-time",
//     location: "Sydney",
//     description:
//       "We are looking for a talented Software Engineer to join our team. You will be responsible for developing and maintaining our web applications.",
//     salary: "$100,000 - $150,000",
//     requirements: [
//       "Bachelor's degree in Computer Science or related field",
//       "3+ years of experience in software development",
//       "Strong knowledge of JavaScript, HTML, and CSS",
//     ],
//   },
// ]);
</script>
<script>
export default {
  data() {
    return {
      toggleForm: false,
    };
  },
  components: {
    JobDescription,
    CompanyInfoCard,
    ApplyView,
  },
  computed: {
    getLoaderState() {
      return this.$store.getters.getLoaderState;
    },
    jobs() {
      const jobs = this.$store.getters.getSingleJob(this.$route?.params?.jobId);
      return jobs;
    },
  },
};
</script>
