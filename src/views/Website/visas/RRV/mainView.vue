<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-text">
        <p>
          A Resident Return Visa (RRV) is an Australian visa that allows former
          Australian permanent residents and certain former citizens to return
          to Australia as permanent residents.
        </p>
        <br />
        <p>
          The Resident Return Visa is designed for individuals who have
          previously held Australian permanent residency but have since traveled
          outside Australia and wish to return as permanent residents. If you
          are an Australian citizen, you do not need an RRV, as citizens have an
          automatic right to enter and remain in Australia.
        </p>
      </div>
      <div class="preview-img">
        <img
          src="../../../../assets/images/iStock-181071599-600x400.jpg"
          alt=""
        />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
section.preview {
  @apply md:flex md:grid-cols-2 mt-20 justify-center;
  div.preview-text {
    @apply md:px-5 md:pl-20 px-2 md:mt-32;
    h1 {
      @apply text-black text-5xl font-semibold py-5;
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
    @apply md:mx-20 align-top md:w-[200rem] w-full h-auto hidden md:block mt-5;
  }
}
div.preview-img1 {
  @apply md:mx-20 align-top w-full h-auto mt-5 md:hidden block;
}
a {
  @apply text-green-500 font-semibold;
}
</style>
