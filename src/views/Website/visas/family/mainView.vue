<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-img">
        <img src="../../../../assets/images/Family-Visas-1.jpg" alt="" />
      </div>
      <div class="preview-text">
        <h1>Consult our family of visa experts</h1>
        <br />
        <p>
          We’re highly skilled at helping you reunite with your partner, parents
          or other family members. As a ‘global family’ of expert migration
          agents, many of us have been through this experience. We know first
          hand how it feels.
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
    @apply md:mx-20 align-top w-full h-auto hidden md:block mt-5;
  }
}
div.preview-img1 {
  @apply md:mx-20 align-top w-full h-auto mt-5 md:hidden block;
}
a {
  @apply text-green-500 font-semibold;
}
</style>
