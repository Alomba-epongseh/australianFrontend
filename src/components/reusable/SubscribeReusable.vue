<template>
  <section class="flex items-center w-full flex-col justify-center py-16">
    <h3 class="text-gray-700 text-2xl font-semibold">
      Subscribe on our newsletter
    </h3>
    <p class="text-gray-400 font-light mb-4">
      Get daily news on upcoming offers from many suppliers all over the world
    </p>
    <div>
      <div class="relative mt-2 flex gap-4 rounded-md mb-2">
        <div
          class="pointer-events-none absolute inset-y-0 top-1 left-0 flex items-center pl-3"
        >
          <span class="text-gray-500 sm:text-sm"
            ><i class="pi pi-envelope"></i
          ></span>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          class="block w-full rounded-md border-0 py-2 pl-8 pr-2 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
          placeholder="Email"
        />
        <button
          type="submit"
          class="flex justify-center rounded-md primary px-3 py-2 text-sm font-semibold text-white shadow-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubscribeReusable",
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/palette";
section {
  background: $backShade;
}
</style>
