<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-text">
        <h1>The ‘last word’ from our clients</h1>
        <br />
        <p>
          We’ve been helping enterprising individuals and entire families
          fulfill their migrations dreams for over ten years. So we feel it’s
          only fair to give selection of our gracious, global clients the last
          word on our services.
        </p>
        <br />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
section.preview {
  @apply block mt-20 justify-center;
  div.preview-text {
    @apply md:px-5 md:pl-20 px-2 w-full md:mt-24 mt-0;
    h1 {
      @apply text-black text-4xl font-semibold py-5 text-center;
    }
    p {
      @apply text-black text-[1.2rem] mt-5 text-center;
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
}
a {
  @apply text-green-500 font-semibold;
}
h1 {
  @apply font-semibold text-black text-4xl md:mx-0 mx-5;
}
</style>
