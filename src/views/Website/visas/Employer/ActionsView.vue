<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="hero-content">
        <div>
          <h1 class="hero-title">We are here to help you</h1>
          <p class="hero-description">
            Contact us today and let’s begin your immigration journey.
          </p>
        </div>
        <div><button class="hero-button">Book Appointment</button></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero-section {
  @apply relative w-full flex items-center md:h-[12rem] h-[13rem] mt-32;

  .hero-bg {
    @apply absolute inset-0 bg-center bg-cover h-[15rem];
    background-image: url("../../../../assets/images/call-to-action-scaled.jpg");
  }

  .hero-content {
    @apply z-10 bg-opacity-75 px-10 py-8 md:ml-60 md:mt-16 text-white md:text-left md:grid md:grid-cols-2;
  }

  .hero-title {
    @apply md:text-4xl text-2xl font-bold mb-4 text-center;
  }

  .hero-description {
    @apply mb-6 text-sm justify-center text-center;
  }

  .hero-button {
    @apply px-6 py-3 bg-green-600 md:text-sm text-[0.6rem] font-semibold hover:bg-green-800 uppercase transition-colors duration-300 mt-5 ml-20 md:mt-0 text-white md:ml-52;
  }
}
</style>
