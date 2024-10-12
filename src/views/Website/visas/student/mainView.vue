<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-img">
        <img src="../../../../assets/images/Student-Visas-1.jpg" alt="" />
      </div>
      <div class="preview-text">
        <h1>Studying and staying on in Australia</h1>
        <br />
        <p>
          Currently around 300,000 international students are studying in
          Australian universities and TAFE colleges.
        </p>
        <br />
        <p>
          We support hundreds of these students to choose the best visa options
          to meet their academic goals and secure fulfilling careers and
          permanent residency upon graduation.
        </p>
        <br />
        <p>
          Applying for the visa that matches your proposed study plan can be
          complex. Especially as the government offers visa packaging options
          for study that combines under and post graduate qualification with
          specialist English language courses.
        </p>
        <br />
        <p>
          If you’re a graduate seeking a visa to live and work in Australia or a
          prospective student seeking entry into the university best suited to
          your goals – we’re here to help.
        </p>
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
