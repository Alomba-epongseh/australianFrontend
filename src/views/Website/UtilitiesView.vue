<template>
  <section>
    <div class="background">
      <img alt="line-4.svg" src="../../assets/images/line-4.svg" />
    </div>
    <div class="header">
      <header>
        <div class="header-container">
          <div class="breadcrumb-text">
            <span>Testimonials</span>
          </div>
          <div class="content">
            <h2>
              <span>Loved by ambitious people at every stage of life</span>
            </h2>
            <p>
              <span>
                From optimizing travel strategies to streamlining stay
                management, Austrialian Placement empowers you with a secured
                travel experience. Simplify your process, unlock new growth.
                Austrialian Placement is your all-in-one solution for travels
                and job opportunities.
              </span>
            </p>
          </div>
        </div>
      </header>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <div class="card-container">
          <div class="card-content">
            <p>
              “I would like to extend my deepest thank you for all the help,
              especially to Ms. Cecilia Costa, she’s done a very good job in
              everything… I hope to contact you again in next 2 years… Thank you
              and well done. I am beyond grateful as I know it was a complicated
              and last minute case and I deeply appreciate all the work and long
              hours you have invested into making this dream become true for me”
            </p>
            <div class="author-container">
              <div class="author">
                <div>Ruth Dominico</div>
                <div>Brazilian Client</div>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p>
              I am very satisfied with the work that was conducted with your
              support.The whole process was done with great professionalism and
              a very personal dedication, I felt secure that my process was in
              the hands of the right person! I have now recommended Australian
              Placement Services to all who ask me about immigration matters and
              I intend to re-contract your services in the near future.
            </p>
            <div class="author-container">
              <div class="author">
                <div>Marcio Cicala</div>
                <div>Operations Manager, Australia-Brazil Business Council</div>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p>
              “I would like to thank all the Australian Placement team for
              working hard on my case and doing things promptly and
              professionally. I also have to thank your staff for coping with my
              anxiety and desperation, you have been very professional by not
              promising anything unreal but also giving all the support for the
              success of the process. THANK YOU SO MUCH for all your hard work
              and to HMS for the job well done. Thank you, you have been the
              best to deal with in my experience for immigration to date. ”
            </p>
            <div class="author-container">
              <div class="author">
                <div>Mathew Peters</div>
                <div>Operations Manager, McDonalds Sidaros Canberra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  @apply relative isolate;
  background: rgb(115, 19, 6);
  div.background {
    @apply pointer-events-none absolute inset-0;
  }
  div.header {
    @apply leading-loose tracking-tight max-w-7xl mx-auto;
    header {
      @apply flex px-[24px] sm:py-16 sm:px-0
      mx-auto max-w-7xl py-16;
      div.header-container {
        @apply max-w-xl space-y-6 text-left sm:pl-11;
        div.breadcrumb-text {
          @apply inline-flex items-center justify-center
          gap-1.5 whitespace-nowrap px-[12px] py-[4px]
          text-sm bg-green-500 text-white
          shadow shadow-black ring-1
          ring-gray-900 rounded-full border;
          span {
            @apply inline-flex shrink-0;
          }
        }
      }
      div.content {
        @apply flex flex-col space-y-3;
        span {
          display: inline-block;
          vertical-align: top;
          text-decoration: inherit;
          text-wrap: avoid;
        }
        h2 {
          @apply text-2xl font-medium tracking-tight
          text-gray-500 sm:text-4xl;
        }
        p {
          @apply text-[16px] sm:text-base text-gray-300;
        }
      }
    }
  }
  div.content {
    @apply relative z-10;
    div.content-wrapper {
      @apply relative h-full space-y-16 pb-16;
      div.card-container {
        @apply grid h-full auto-cols-max
        grid-flow-col gap-8 overflow-x-auto py-1.5
        xl:justify-center px-6 sm:pl-10;
        &::-webkit-scrollbar {
          width: 0;
        }
        div.card-content {
          background: rgb(58, 58, 64);
          @apply relative col-span-3 sm:col-span-4 h-fit
          max-w-[327px] sm:max-w-[384px] transform-gpu space-y-6
          overflow-hidden rounded-lg p-6 text-sm
          before:absolute before:inset-y-0 before:left-0
          before:w-[5px] before:bg-gray-400/50
          after:absolute after:inset-y-0 after:left-0
          after:w-[5px] after:origin-bottom after:scale-y-0
          after:bg-gradient-to-b after:from-[#1df152cd]
          after:to-[#05fa3ee2] after:transition-transform
          after:duration-500 after:ease-[cubic-bezier(.4,.36,0,1)]
          after:will-change-transform after:hover:scale-y-100;
          p {
            @apply text-sm text-gray-200;
          }
          div.author-container {
            @apply flex items-center gap-3;
            div.author {
              @apply text-xs;
              div {
                &:first-child {
                  @apply font-medium text-white;
                }
                &:last-child {
                  @apply text-gray-200;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
