<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-text">
        <h1>Career Opportunities For Talented Team Players</h1>
        <br />
        <p>
          We are always looking for dedicated and talented individuals to join
          our team. Whether you’re an established immigration industry
          professional, a graduate looking to commence your career or an
          individual that is looking for an entry position in a supportive
          working environment, we’d love to talk to you.
        </p>
        <br />
        <p>
          We value diversity, team spirit and commitment to achieving
          outstanding immigration results. We believe training and empowering
          staff members to have the confidence in their abilities will assist
          independent decision making and further growth. Providing mentoring
          and coaching to allow staff to navigate the learning curve and deal
          with a wide variety of situations.
        </p>
        <br />
        <p>
          We can offer a chance to grow your professional skills in one of
          Australia’s leading immigration firms.
        </p>
        <br />
        <h4>Connect with us</h4>
        <p>
          Email your resume and a brief cover letter to
          <a href="mailto:careers@homemigration.com"
            >careers@homemigration.com</a
          >, we’ll contact you to arrange a confidential conversation.
        </p>
        <br />
      </div>
      <div class="preview-img">
        <img src="../../../../assets/images/Careers-1.jpg" alt="" />
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
