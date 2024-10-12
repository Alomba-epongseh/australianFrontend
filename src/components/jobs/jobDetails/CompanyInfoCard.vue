/* eslint-disable */
<template>
  <section>
    <div class="job_avatar">
      {{ job.company[0] }}
    </div>
    <h1 class="job_company">{{ job.company }}</h1>
    <div class="job_section">
      <div class="job_div">
        <i class="pi pi-briefcase"></i>
        <p>{{ job.title }} | {{ job.type }}</p>
      </div>
      <div class="job_div">
        <i class="pi pi-map-marker"></i>
        <p>{{ job.location }}</p>
      </div>
      <div class="job_div">
        <i class="pi pi-money-bill"></i>
        <p>{{ job.salary }}</p>
      </div>
    </div>
    <div class="action">
      <button class="job_apply" @click.prevent="toggleForm = !toggleForm">
        <i class="pi pi-file-pdf"></i> Apply now
      </button>
      <br />
      <button class="job_visit">Visit Website</button>
    </div>
    <ApplyView @toggleForm="toggleForm = !toggleForm" :hidden="!toggleForm" />
  </section>
</template>

<script>
import ApplyView from "../apply/applyView.vue";
export default {
  name: "companyInfo",
  data() {
    return {
      toggleForm: false,
    };
  },
  components: { ApplyView },
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  @apply border text-center border-green-400 w-3/4 py-10 shadow-md bg-slate-100 items-center justify-center space-y-6 my-[4rem] mx-auto;
  .job_avatar {
    @apply rounded-full bg-green-500 p-5 text-5xl font-serif w-20  h-20 text-center text-white font-bold mx-auto;
  }
  .job_company {
    @apply text-4xl font-semibold;
  }
  .job_section {
    @apply block text-center mx-[2rem];
    .job_div {
      @apply flex grid-flow-col mx-auto  space-x-5;
    }
  }
  .action {
    @apply space-y-5;
    .job_apply {
      @apply bg-white border-green-500 hover:bg-green-500 text-gray-700 hover:text-white border py-2 px-7 text-lg font-semibold rounded-full;
    }
    .job_visit {
      @apply border-green-500 text-white hover:text-gray-100 hover:bg-red-900 bg-red-500 border-b py-1 px-5 text-lg font-semibold rounded-full;
    }
  }
}
</style>
