<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-text">
        <h1>Business Migration</h1>
        <br />
        <p>
          Australia offers a range of visa options for business owners or
          investors and their senior managerial employees. You may be eligible
          to apply under different business migration categories.
        </p>
        <br />
        <p>
          During your Business Migration consult, we will discuss visa
          categories available and select the most suitable option for you and
          the business.
        </p>
        <br />
        <h4>Your personal Business Migration Case Manager will:</h4>
        <ul>
          <li>
            arrange essential
            <a href=""
              >State or Territory Government sponsorship or nomination</a
            >
            to validate and expedite your application
          </li>
          <li>
            help to collect and collate all supporting documents including
            health and character information
          </li>
          <li>liaise with your accountants and financial advisors</li>
          <li>
            ensure your application is completed and lodged according to
            Australian professional and immigration standards
          </li>
          <li>
            liaise with the Department of Immigration and all other relevant
            Government agencies on your behalf
          </li>
        </ul>
        <br />
      </div>
      <div class="preview-img">
        <img src="../../../../assets/images/Business-Visas-1.jpg" alt="" />
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
