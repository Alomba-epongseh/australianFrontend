/* eslint-disable */
<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="hero-content">
        <h1 class="hero-title">Contact Us</h1>
        <router-link to="/book-an-appointment"
          ><button class="hero-button">
            Book Your consultation
          </button></router-link
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero-section {
  @apply relative w-full flex items-center h-[25rem];

  .hero-bg {
    @apply absolute inset-0 bg-center bg-cover h-[25rem];
    background-image: url("../../../../assets/images/corporate-image-scaled.jpg");
  }

  .hero-content {
    @apply relative z-10 bg-opacity-75 md:px-10 px-3 ml-3 py-8 md:ml-32 md:mt-16 text-white text-left;
    @apply border-l-4 border-white;
  }

  .hero-title {
    @apply md:text-6xl text-4xl font-bold mb-4;
  }

  .hero-description {
    @apply mb-6 text-2xl;
  }

  .hero-button {
    @apply px-6 py-3 bg-green-600 text-xl font-semibold hover:bg-green-800 transition-colors duration-300  md:mt-0 mt-10 text-white rounded-md;
  }
}
</style>
