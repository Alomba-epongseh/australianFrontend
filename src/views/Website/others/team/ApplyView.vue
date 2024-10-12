<template>
  <section class="section">
    <div class="testimonial-section">
      <div class="cards">
        <div class="img">
          <img
            src="../../../../assets/images/HMSEX231_0001_n-400x600.jpg"
            alt=""
          />
        </div>
        <h1>Sarah Asrani</h1>
        <br />
        <p>Senior Case Manager</p>
      </div>
      <div class="cards">
        <div class="img">
          <img
            src="../../../../assets/images/HMSEX231_0125_n-400x600.jpg"
            alt=""
          />
        </div>
        <h1>William Valdrez</h1>
        <br />
        <p>Senior Case Manager</p>
      </div>
      <div class="cards">
        <div class="img">
          <img
            src="../../../../assets/images/HMSEX231_0030_n-400x600.jpg"
            alt=""
          />
        </div>
        <h1>Shiva NP Toussi</h1>
        <br />
        <p>Marketing Manager</p>
      </div>
    </div>
    <br />
    <div class="testimonial-section">
      <div class="cards">
        <div class="img">
          <img
            src="../../../../assets/images/HMSEX231_0075_n-400x600.jpg"
            alt=""
          />
        </div>
        <h1>Iovana Bablee-Parapen</h1>
        <br />
        <p>Registered Migration Agent</p>
      </div>
      <div class="cards">
        <div class="img">
          <img
            src="../../../../assets/images/HMSEX231_9973_n-400x600.jpg"
            alt=""
          />
        </div>
        <h1>Angela Heng</h1>
        <br />
        <p>Senior Case Manager</p>
      </div>
      <div class="cards">
        <div class="img">
          <img
            src="../../../../assets/images/HMSEX231_0099_n-400x600.jpg"
            alt=""
          />
        </div>
        <h1>Regine Kong</h1>
        <br />
        <p>Support Officer</p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  </section>
</template>
<style lang="scss" scoped>
section.section {
  @apply md:space-y-0 space-y-6 mt-28 mx-24;
  div.testimonial-section {
    @apply md:grid md:grid-cols-3 md:space-x-10 my-20;
    div.cards {
      @apply md:w-[22rem] w-full items-center bg-gray-100 border-2 shadow-md;
      div.img {
        @apply text-3xl w-full justify-center items-center mb-5;
      }
      h1 {
        @apply text-black text-center text-3xl font-semibold;
      }
      p {
        @apply text-center;
      }
    }
  }
}
</style>
