<template>
  <section class="pt-12 pb-24 bg-greenGray-100 rounded-b-10xl overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4 space-y-10">
        <div class="md:hidden border mb-10 p-2 primary text-white rounded-md">
          <i class="pi pi-arrow-left px-2"></i>
          <button href="javascript:void(0)" onclick="history.back()">
            Back to job list
          </button>
        </div>
        <div class="grid md:space-x-0 gap-5 space-y-5 md:space-y-0">
          <div class="w-full px-4 shadow-xl border-2 py-5">
            <div class="max-w-full mb-6">
              <span class="text-xs text-gray-400 tracking-wider">{{
                getSingleApplication?.id
              }}</span>
              <h2 class="mt-6 mb-4 text-3xl font-heading font-medium">
                {{ getSingleApplication?.title }}
              </h2>
              <p class="flex items-center mb-6">
                <span class="mr-2 text-sm text-green-500 font-medium"
                  ><i class="pi pi-money-bill"></i> Salary:</span
                >
                <span class="text-md text-green-500 font-medium">{{
                  getSingleApplication?.salary
                }}</span>
              </p>
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium text-green-500">
                <span>Company:</span>
                <span class="text-gray-400">{{
                  getSingleApplication?.company
                }}</span>
              </h4>
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium text-green-500">
                <span>Date of creation:</span>
                <span class="text-gray-400">{{
                  getSingleApplication?.createdAt
                }}</span>
              </h4>
            </div>
            <div class="mb-6">
              <h4 class="mb-3 font-heading font-medium text-green-500">
                <span>Job type:</span>
                <span class="text-gray-400">{{
                  getSingleApplication?.job_type
                }}</span>
              </h4>
            </div>
            <div class="mb-10">
              <h4 class="mb-3 font-heading font-medium">Location:</h4>
              <input
                class="w-24 px-3 py-2 text-center bg-white border font-semibold text-gray-900 outline-none rounded-md"
                type="text"
                disabled
                :placeholder="getSingleApplication?.location"
              />
            </div>
            <h2 class="font-bold text-xl">Description</h2>
            <div
              class="text-md flex items-center ml-10 font-normal text-gray-700"
            >
              <p v-html="getSingleApplication?.description"></p>
            </div>
            <br />
            <br />
            <h2 class="font-bold text-xl">Requirements</h2>
            <div
              class="text-md flex items-center ml-10 font-normal text-gray-700"
            >
              <p v-html="getSingleApplication?.requirements"></p>
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
      return this.$store.getters.getSingleJob(this.$route?.params?.id);
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
