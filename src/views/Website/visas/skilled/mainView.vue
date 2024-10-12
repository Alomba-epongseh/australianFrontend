<template>
  <section class="preview-container">
    <section class="preview">
      <div class="preview-text">
        <h1>Applying for a permanent skilled migration visa</h1>
        <br />
        <h4>There are two options in this visa category</h4>
        <ul>
          <li><span>Skilled Independent Visa Subclass189</span></li>
          <li><span>Skilled Nominated Visa Subclass 190</span></li>
        </ul>
        <br />
        <h4>The Process for applying for a 189 or 190 visa is:</h4>
        <ul>
          <li>
            achieve the pass mark set for the skilled migration points test –
            currently set at 65 for these visas
          </li>
          <li>
            lodge an Expression of Interest (EOI) through
            <a href="">SkillSelect</a>
          </li>
          <li>upon invitation lodge your application within 60 days</li>
          <li>be between 18 and 45 years of age</li>
          <li>
            pass a skills assessment for an occupation listed on the relevant
            <a href="">skilled occupation list</a>
          </li>
          <li>meet English language and health and character requirements</li>
        </ul>
      </div>
      <div class="preview-img">
        <img src="../../../../assets/images/Skilled-Visas-4.jpg" alt="" />
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
a {
  @apply text-green-500;
}
</style>
