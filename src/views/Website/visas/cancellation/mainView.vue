<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-img">
        <img
          src="../../../../assets/images/Visa-Cancellation-and-Review-800x532.jpg"
          alt=""
        />
      </div>
      <div class="preview-text">
        <h1>Visa refusal</h1>
        <br />
        <p>
          If your visa has been refused, you can appeal it to AAT within 21
          days. Please contact us immediately to discuss your options and to
          appeal your visa refusal to Administrative Appeals Tribunal (AAT).
        </p>
        <br />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
section.preview {
  @apply md:flex md:grid-cols-2 mt-20 justify-center;
  div.preview-text {
    @apply md:px-5 md:pl-20 px-2;
    h1 {
      @apply text-black text-4xl font-semibold py-5;
    }
    p {
      @apply text-black text-[1.2rem]  mt-5;
    }
    h4 {
      @apply font-normal text-xl;
    }
    ul {
      @apply list-disc px-10;
      li {
        @apply text-[1.2rem] py-1.5;
        span {
          @apply font-normal;
        }
      }
    }
    h2 {
      @apply text-xl font-semibold;
    }
  }
  div.preview-img {
    @apply md:mx-10 align-top w-[150rem] h-auto hidden md:block mt-5;
  }
}
div.preview-img1 {
  @apply md:mx-20 align-top w-full h-auto mt-5 md:hidden block;
}
a {
  @apply text-green-500 font-semibold;
}
</style>
