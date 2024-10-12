<template>
  <section class="section1">
    <div>
      <p>There are two main categories of the Resident Return Visa:</p>
      <ol>
        <li>
          <span>Subclass 155:</span> This visa is for individuals who are
          currently in Australia and are permanent residents or former
          Australian citizens. It allows them to maintain their permanent
          residency status when traveling abroad and returning to Australia.
        </li>
        <li>
          <span>Subclass 157:</span> This visa is for former Australian
          permanent residents who are outside Australia and want to return as
          permanent residents.
        </li>
      </ol>
      <br />
      <p>
        The validity period of the RRV can vary depending on your travel history
        and how long you have lived in Australia as a permanent resident. For
        example, if you have lived in Australia for at least two out of the past
        five years as a permanent resident, you may be eligible for a five-year
        RRV. Otherwise, you may be eligible for a one-year RRV.
      </p>
      <br />
      <p>
        It’s crucial to ensure that you meet all the eligibility criteria and
        provide the necessary documentation when applying for an RRV.
      </p>
      <br />
      <p>
        If you need to renew your visa before you travel overseas, please
        contact our office to book your appointment so we can help you to apply
        for an RRV visa.
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section.section1 {
  @apply flex;
  div {
    img {
      @apply md:mx-20;
    }
  }
  h1 {
    @apply text-4xl md:py-7 py-2 font-semibold;
  }
  h2 {
    @apply text-[1.2rem] font-semibold pb-5;
  }
  p {
    @apply text-[1.2rem] py-1;
  }
  ol {
    @apply text-[1.2rem] list-decimal space-y-5 py-3;
    li {
      span {
        @apply font-semibold;
      }
    }
  }
  a {
    @apply text-green-600 font-semibold;
  }
}
</style>
