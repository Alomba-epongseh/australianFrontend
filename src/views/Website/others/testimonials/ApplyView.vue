<template>
  <section class="section">
    <div class="testimonial-section">
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Fantastic!”</h1>
        <p class="description">
          Thank you, you have been the best to deal with in my experience for
          immigration to date.
        </p>
        <br />
        <p><span>Mathew Peters</span></p>
        <br />
        <p>Operations Manager, McDonalds Sidaros Canberra</p>
      </div>
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Helpful!”</h1>
        <p class="description">
          Big Thanks to you, Adam and the whole team of Home Migration. I don’t
          have words to express my happiness and excitement.
        </p>
        <br />
        <p><span>Rahul Singhal</span></p>
        <br />
        <p>Divine Developers Ltd.</p>
      </div>
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Experts!”</h1>
        <p class="description">
          I would like to thank you for all the support and would love to meet
          you and your team in person on my visit.
        </p>
        <br />
        <p><span>Ashish Bahl</span></p>
        <br />
      </div>
    </div>
    <br />
    <div class="testimonial-section">
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Helpful!”</h1>
        <p class="description">
          I am beyond grateful as I know it was a complicated and last minute
          case and I deeply appreciate all the work and long hours you have
          invested into making this dream become true for me.
        </p>
        <br />
        <p><span>Sina</span></p>
      </div>
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Experts!”</h1>
        <p class="description">
          I would like to extend my deepest thank you for all the help,
          especially to Ms. Cecilia Costa, she’s done a very good job in
          everything… I hope to contact you again in next 2 years… Thank you and
          well done.
        </p>
        <br />
        <p><span>Ruth Dominico</span></p>
      </div>
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Fantastic!”</h1>
        <p class="description">
          THANK YOU SO MUCH for all your hard work and to HMS for the job well
          done.
        </p>
        <br />
        <p><span>Mr. & Mrs. Samaniego</span></p>
        <br />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="testimonial-section1">
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Fantastic!”</h1>
        <p class="description">
          I would like to thank all the Home Migration team for working
          <br /><br />
          hard on my case and doing things promptly and professionally. I
          <br /><br />
          also have to thank your staff for coping with my anxiety and
          <br /><br />
          desperation, you have been very professional by not promising
          <br /><br />
          anything unreal but also giving all the support for the success of the
          process.
        </p>
        <br />
        <p><span>Leonardo</span></p>
      </div>
      <div class="cards">
        <p class="stars">
          <i class="pi pi-star-fill"></i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"> </i> <i class="pi pi-star-fill"></i>
          <i class="pi pi-star-fill"></i>
        </p>
        <h1>“Helpful!”</h1>
        <p class="description">
          I am very satisfied with the work that was conducted with your <br />
          support.
          <br />
          <br />
          The whole process was done with great professionalism and a very
          personal dedication, I felt secure that my process was in the hands of
          the right person! <br />
          <br />
          I have now recommended Home Migration Services to all who ask me about
          immigration matters and I intend to re-contract your services in the
          near future.
        </p>
        <br />
        <p><span>Marcio Cicala</span></p>
        <br />
        <p>
          Operations Manager, <br />
          Australia-Brazil Business Council
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section.section {
  @apply md:mx-28 md:space-y-0 space-y-6 mx-5 mt-28;
  div.testimonial-section {
    @apply md:grid md:grid-cols-3 space-x-32 my-20;
    div.cards {
      @apply w-[15rem];
      p.stars {
        @apply space-x-2 text-green-600 text-3xl w-full text-center;
      }
      h1 {
        @apply text-green-600 text-center text-3xl font-semibold;
      }
      p.description {
        @apply text-center;
      }
      p {
        @apply text-center;
        span {
          @apply text-green-600 font-semibold text-center;
        }
      }
    }
  }
  div.testimonial-section1 {
    @apply md:grid md:grid-cols-2 space-x-32 mt-20;
    div.cards {
      @apply w-full;
      p.stars {
        @apply space-x-2 text-green-600 text-3xl w-full text-center;
      }
      h1 {
        @apply text-green-600 text-center text-3xl font-semibold;
      }
      p.description {
        @apply text-center;
      }
      p {
        @apply text-center;
        span {
          @apply text-green-600 font-semibold text-center;
        }
      }
    }
  }
}
</style>
