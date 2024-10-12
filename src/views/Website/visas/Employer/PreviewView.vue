<template>
  <section class="preview-container">
    <div class="preview-img1">
      <img src="../../../../assets/images/business-about-2.jpg" alt="" />
    </div>
    <section class="preview">
      <div class="preview-text">
        <h1>Connect to a world of expertise</h1>
        <p>
          Home Migration Services expertise in Employer Sponsored Visas is
          unparalleled. Our experienced case managers are solution focused,
          combining legislative knowledge and business acumen enabling Home
          Migration Services to gain approvals in often difficult and complex
          cases.
        </p>
        <br />
        <h4>The following are the available subclasses:</h4>
        <ul>
          <li>Temporary Skill Shortage(TSS) Visa (subclass 482)</li>
          <li>
            Employer Nomination Scheme (subclass 186) <br />
            (part of the
            <span>Permanent Employer Sponsored Visa programme) </span>
          </li>
          <li>
            Skilled Employer Sponsored Regional (Provisional) visa ( subclass
            494)
          </li>
        </ul>
        <br />
        <h2>Temporary Skill Shortage(TSS) Visa (subclass 482)</h2>
        <p>
          This visa lets a skilled worker travel to Australia to work in their
          nominated occupation for their approved sponsor for up to four years.
          (Variations on the visa term is subject to the Standard Business
          Approval Term).
        </p>
        <br />
        <p>
          After completing 3 years of paid employment you can apply for Employer
          Nomination Scheme (subclass 186) (Transitional). Permanent Residency.
        </p>
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
        @apply text-xl font-semibold py-1.5;
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
</style>
