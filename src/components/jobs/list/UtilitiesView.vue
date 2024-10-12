<template>
  <section>
    <div class="img">
      <img class="img1" src="@/assets/images/business-about-2.jpg" alt="" />
      <img class="img2" src="@/assets/images/Skilled-Visas-2.jpg" alt="" />
    </div>
    <div class="content">
      <h1>Keeping your business compliant</h1>
      <p>
        If you are a business wishing to sponsor skilled staff and would <br />
        like assistance in understanding your obligations as an Approved <br />
        Sponsor we can assist, we can offer short or long-term advisory. <br />
        See our Sponsorship and Mentoring program for further details.
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  @apply flex flex-col md:grid-cols-2 md:grid md:mx-24 mx-5;
  div.img {
    .img2 {
      @apply h-auto w-3/4 hidden md:block;
    }
    .img1 {
      @apply h-auto w-full md:hidden block;
    }
  }
  div.content {
    @apply w-full md:ml-10;
    h1 {
      @apply text-5xl font-semibold my-10;
    }
    p {
      @apply text-xl;
    }
  }
}
</style>
