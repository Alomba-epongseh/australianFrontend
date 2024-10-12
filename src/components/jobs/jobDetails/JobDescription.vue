<template>
  <section
    class="col-span-1 md:col-span-1 lg:col-span-2 order-2 md:order-1 mt-10 md:mt-0"
  >
    <div
      class="font-semibold border mb-10 p-2 primary w-full text-white rounded-md"
    >
      <i class="pi pi-arrow-left px-2"></i>
      <button href="javascript:void(0)" onclick="history.back()">
        Back to job list
      </button>
    </div>
    <h2>Job Role: {{ job.title }}</h2>

    <h4 class="pb-2 mt-6">Job Description</h4>
    <p class="text-justify text-md" v-html="job.description"></p>

    <h4 class="pb-2 mt-6">Job requirements</h4>
    <div class="base-text text-justify text-md" v-html="job.requirements"></div>
  </section>
</template>

<script>
export default {
  name: "JobDescription",
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
  @apply mx-4;
  h2 {
    @apply text-5xl text-gray-600 font-bold;
  }
  h4 {
    @apply text-xl font-semibold;
  }
  p {
    @apply mx-5;
  }
}
</style>
