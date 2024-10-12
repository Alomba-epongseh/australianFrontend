<template>
  <section class="section">
    <div>
      <button @click.prevent="$router.push(`/employer-sponsorship`)">
        employer sponsorship program <i class="pi pi-chevron-right"></i>
      </button>
    </div>
    <div>
      <button @click.prevent="$router.push(`/business-visas`)">
        Find the right Business Visa <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section.section {
  @apply md:grid md:grid-cols-2 md:mx-28 md:space-y-0 space-y-6 mx-5;
  button {
    @apply border bg-green-600 text-white py-2 hover:bg-green-900 font-semibold text-2xl px-4 uppercase rounded-sm;
  }
}
</style>
