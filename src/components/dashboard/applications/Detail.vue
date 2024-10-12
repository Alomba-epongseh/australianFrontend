<template>
  <section class="pt-12 pb-24 bg-greenGray-100 rounded-b-10xl overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4 space-y-10">
        <div class="md:hidden border mb-10 p-2 primary text-white rounded-md">
          <i class="pi pi-arrow-left px-2"></i>
          <button href="javascript:void(0)" onclick="history.back()">
            Back to application list
          </button>
        </div>
        <div
          class="grid md:grid-cols-3 md:space-x-0 gap-5 space-y-5 md:space-y-0"
        >
          <div class="w-full px-4 shadow-xl border-2">
            <div class="max-w-md mb-6">
              <span class="text-xs text-gray-400 tracking-wider">{{
                getSingleApplication?.id
              }}</span>
              <h2 class="mt-6 mb-4 text-3xl font-heading font-medium">
                {{ getSingleApplication?.fullname }}
              </h2>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Applied for:</span
                >
                <span class="text-md text-green-500 font-medium"
                  >{{ getSingleApplication?.job?.title }} at
                  {{ getSingleApplication?.job?.company }}</span
                >
              </p>
              <div class="text-lg flex items-center font-bold text-gray-700">
                <h2>Country:</h2>
                <p v-html="getSingleApplication?.country"></p>
              </div>
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium text-green-500">
                <span>Email:</span>
                <span class="text-gray-400">{{
                  getSingleApplication?.email
                }}</span>
              </h4>
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium text-green-500">
                <span>Phone number:</span>
                <span class="text-gray-400">{{
                  getSingleApplication?.tel
                }}</span>
              </h4>
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium text-green-500">
                <span>Last Job Title:</span>
                <span class="text-gray-400">{{
                  getSingleApplication?.last_job_title
                }}</span>
              </h4>
            </div>
            <div class="mb-10">
              <h4 class="mb-3 font-heading font-medium">
                Years of Experience:
              </h4>
              <input
                class="w-24 px-3 py-2 text-center bg-white border font-semibold text-gray-900 outline-none rounded-md"
                type="text"
                disabled
                :placeholder="getSingleApplication?.years_of_experience"
              />
            </div>
          </div>
          <div
            class="w-full px-4 border-2 justify-center shadow-2xl text-center"
          >
            <div class="max-w-md mb-6">
              <h1 class="text-4xl font-bold text-gray-900 py-5">
                Application Letter
              </h1>
              <span
                class="text-xs text-gray-400 wrapper flex-wrap tracking-wider"
                >{{ getSingleApplication?.id }}</span
              >
              <div
                class="mt-6 mb-4 text-md font-heading font-medium"
                v-html="getSingleApplication?.reason"
              ></div>
            </div>
          </div>
          <div
            class="border-2 px-4 py-6 items-center justify-center shadow-2xl text-center"
          >
            <h1 class="text-4xl font-bold text-gray-900 py-5">
              Wall Of Achievement
            </h1>
            <br />
            <div v-for="ach in getSingleApplication?.achievement" :key="ach.id">
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Achievement:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.achievemnet }}
                </span>
              </p>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Achievement Description:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.description }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:space-x-5 space-y-5 md:space-y-0">
          <div
            class="border-2 px-4 py-6 items-center justify-center shadow-2xl text-center"
          >
            <h1 class="text-4xl font-bold text-gray-900 py-5">
              Hall Of Education
            </h1>
            <br />
            <div v-for="ach in getSingleApplication?.education" :key="ach.id">
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Degree:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.degree }}
                </span>
              </p>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Institution:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.institution }}
                </span>
              </p>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Years of Study:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.years_of_study }}
                </span>
              </p>
            </div>
          </div>
          <div
            class="border-2 px-4 py-6 items-center justify-center shadow-2xl text-center"
          >
            <h1 class="text-4xl font-bold text-gray-900 py-5">
              Hall Of Experiences
            </h1>
            <br />
            <div v-for="ach in getSingleApplication?.experience" :key="ach.id">
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Company:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.company }}
                </span>
              </p>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Job role:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.job_title }}
                </span>
              </p>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  >Contract Length:</span
                >
                <span class="text-md text-gray-500 font-medium"
                  >{{ ach?.years_of_experience }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailApplication",
  computed: {
    getSingleApplication() {
      return this.$store.getters.getSingleApplication(this.$route?.params?.id);
    },
  },
  data() {
    return {
      product: {},
      // responsiveOptions: [
      //   {
      //     breakpoint: "991px",
      //     numVisible: 4,
      //   },
      //   {
      //     breakpoint: "767px",
      //     numVisible: 3,
      //   },
      //   {
      //     breakpoint: "575px",
      //     numVisible: 1,
      //   },
      // ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "./../../../assets/styles/palette";
.p-galleria {
  .p-galleria-content {
    .p-galleria-thumbnail-container {
      background: $white !important;
    }
  }
}
</style>
