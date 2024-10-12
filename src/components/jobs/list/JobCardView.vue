/* eslint-disable */
<template>
  <PulseLoader
    v-if="getLoaderState.type === 'skeleton' && getLoaderState.isActive"
    column-length="8"
    row-length="3"
  />
  <div class="job-card">
    <div
      class="job-card__content"
      @click.prevent="$router.push(`details/${job?.id}`)"
    >
      <div class="job-card_head">
        <div class="job-card_avatar">{{ job.company[0] }}</div>
        <h3 class="job-card__title">
          {{ job.title }}
        </h3>
      </div>
      <p
        class="job-card__description"
        v-html="job.description.slice(0, 200)"
      ></p>
      <p class="job-card__location">
        <i class="pi pi-map-marker"></i>
        {{ job.location }}
      </p>
      <p class="job-card__salary">
        <i class="pi pi-money-bill"></i>
        {{ job.salary }}
      </p>
      <p class="job-card__company">{{ job.company }}</p>
      <p class="job-card__posted-date">{{ job.postedDate }}</p>
    </div>
  </div>
</template>

<script>
import PulseLoader from "@/components/reusable/Loaders/pulse.loader.vue";
import { storageService } from "@/services";

export default {
  components: { PulseLoader },
  name: "JobCardView",
  props: {
    job: {
      type: Object,
      required: true,
    },
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
    getLoaderState() {
      return this.$store.getters.getLoaderState;
    },
  },
};
</script>

<style lang="scss" scoped>
.job-card {
  @apply p-2 border-gray-300 border-b shadow-md hover:shadow-lg w-full bg-gray-100 h-auto mx-auto cursor-pointer hover:bg-slate-200;
  .job-card__content {
    @apply flex flex-col;
    .job-card__title {
      @apply text-xl font-semibold mb-3 text-green-600 hover:underline hover:text-green-900 cursor-pointer;
    }
    .job-card_head {
      @apply flex grid-flow-col gap-3;
    }
    .job-card__description {
      @apply mb-1;
    }
    .job-card_avatar {
      @apply bg-green-400 text-white font-bold text-2xl rounded-full w-8 text-center h-8 font-serif;
    }
    .job-card__location,
    .job-card__salary,
    .job-card__company,
    .job-card__posted-date {
      @apply mb-1;
    }
    .job-card__company {
      @apply text-green-400;
    }
  }
}
</style>
