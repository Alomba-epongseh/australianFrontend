<template>
  <section>
    <div class="main-container">
      <div class="header-content-container">
        <header>
          <div class="header-container">
            <div class="text-wrapper">
              <span>Start your journey with us</span>
            </div>
            <div class="main-header-content-container">
              <h2>
                <span
                  >Seamlessly manage your career journey with our
                  platform.</span
                >
              </h2>
              <p>
                <span>
                  From account creation to applying for jobs, we've got you
                  covered.</span
                >
              </p>
            </div>
          </div>
        </header>
      </div>
      <div class="content">
        <div class="content-wrapper">
          <div class="wrapper-1">
            <!-- Step 1: Create Account -->
            <div class="wrapper-content lg:col-start-1">
              <div>
                <button class="button-1">
                  <div class="button-box"></div>
                  <div class="button-counter-container active">
                    <span>1</span>
                  </div>
                  <div class="button-header-container">
                    <h3 class="active">
                      <span> Create an account. </span>
                    </h3>
                    <p>
                      <span>
                        Get started by creating a user account to access all our
                        job opportunities and services.
                      </span>
                    </p>
                  </div>
                </button>
              </div>
              <div class="image-container">
                <div class="relative">
                  <!-- Account creation image here -->
                </div>
              </div>
            </div>
            <!-- Step 2: Create a Job -->
            <div class="wrapper-content lg:col-start-4">
              <div>
                <button class="button-1">
                  <div class="button-box"></div>
                  <div class="button-counter-container">
                    <span>2</span>
                  </div>
                  <div class="button-header-container">
                    <h3>
                      <span> Create a Job Posting </span>
                    </h3>
                    <p>
                      <span>
                        Post a new job opportunity and provide detailed
                        descriptions to attract the right candidates.
                      </span>
                    </p>
                  </div>
                </button>
              </div>
              <div class="image-container">
                <div class="relative">
                  <!-- Job creation image here -->
                </div>
              </div>
            </div>
            <!-- Step 3: Search for a Job -->
            <div class="wrapper-content lg:col-start-7">
              <div>
                <button class="button-1">
                  <div class="button-box"></div>
                  <div class="button-counter-container">
                    <span>3</span>
                  </div>
                  <div class="button-header-container">
                    <h3>
                      <span> Search for a Job </span>
                    </h3>
                    <p>
                      <span>
                        Use our search tools to find the perfect job that aligns
                        with your qualifications and interests.
                      </span>
                    </p>
                  </div>
                </button>
              </div>
              <div class="image-container">
                <div class="relative">
                  <!-- Job search image here -->
                </div>
              </div>
            </div>
            <!-- Step 4: Apply for the Job -->
            <div class="wrapper-content lg:col-start-10">
              <div>
                <button class="button-1">
                  <div class="button-box"></div>
                  <div class="button-counter-container">
                    <span>4</span>
                  </div>
                  <div class="button-header-container">
                    <h3>
                      <span>Apply for the Job </span>
                    </h3>
                    <p>
                      <span>
                        Submit your application and resume to the jobs you're
                        interested in.
                      </span>
                    </p>
                  </div>
                </button>
              </div>
              <div class="image-container">
                <div class="relative">
                  <!-- Job application image here -->
                </div>
              </div>
            </div>
            <!-- Step 5: Review the Application -->
            <div class="wrapper-content lg:col-start-13">
              <div>
                <button class="button-1">
                  <div class="button-box"></div>
                  <div class="button-counter-container">
                    <span>5</span>
                  </div>
                  <div class="button-header-container">
                    <h3>
                      <span>Review Applications </span>
                    </h3>
                    <p>
                      <span>
                        After applying, the application will be reviewed by the
                        hiring manager, and you’ll be contacted for the next
                        steps.
                      </span>
                    </p>
                  </div>
                </button>
              </div>
              <div class="image-container">
                <div class="relative">
                  <!-- Review application image here -->
                </div>
              </div>
            </div>
          </div>
          <div class="current-image-container">
            <div class="relative">
              <!-- Placeholder for current image -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@keyframes floatIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.wrapper-content {
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.animate-float {
    animation: floatIn 0.8s forwards;
  }
}
section {
  @apply overflow-y-hidden;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 90%;
    top: 53%;
    transform: translateY(55.5%);
    margin-top: -2rem;
    left: 0;
    z-index: -10;
    background-image: linear-gradient(
        180deg,
        #fff 50%,
        rgba(62, 125, 255, 0.05)
      ),
      url("../../assets/images/hero-shape-2.svg");
    background-size: contain;
    background-position: top left;
  }
  div.main-container {
    @apply relative isolate mx-auto max-w-7xl sm:px-[48px] sm:space-y-0 space-y-16;
    div.header-content-container {
      @apply leading-loose tracking-tight;
      header {
        @apply flex px-[24px] sm:py-16 sm:px-0;
        div.header-container {
          @apply max-w-xl space-y-6 text-left;
          div.text-wrapper {
            @apply inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-[12px] py-[4px] text-sm font-medium bg-green-200 text-gray-500 rounded-full border;
            span {
              @apply inline-flex shrink-0;
            }
          }
          div.main-header-content-container {
            @apply flex flex-col space-y-3;
            h2 {
              @apply text-2xl font-medium tracking-tight text-gray-900 sm:text-4xl;
              span {
                display: inline-block;
                vertical-align: top;
                text-decoration: inherit;
                text-wrap: normal;
              }
            }
            p {
              @apply text-[16px] text-gray-400 sm:text-base;
              span {
                display: inline-block;
                vertical-align: top;
                text-decoration: inherit;
                text-wrap: normal;
              }
            }
          }
        }
      }
    }
    div.content {
      @apply relative z-10;
      div.content-wrapper {
        @apply relative overflow-hidden sm:-mx-12 lg:mx-0 lg:overflow-visible;
        div.wrapper-1 {
          @apply grid grid-cols-12 space-y-12 sm:space-y-16 lg:space-y-0 after:absolute after:inset-0 after:inset-y-[14px] after:-z-10 after:col-span-4 after:col-start-1 after:hidden after:h-px after:bg-gray-100 after:lg:block;
          div.wrapper-content {
            @apply col-span-full space-y-6 lg:col-span-3 lg:space-y-4 col-start-1 lg:pr-14;
            button.button-1 {
              @apply pointer-events-none relative flex flex-col space-y-6 px-6 text-left before:absolute before:-inset-x-4 before:-inset-y-3 before:rounded-lg before:bg-gray-50 before:opacity-0 sm:flex-row sm:gap-6 sm:space-y-0 md:px-12 lg:pointer-events-auto lg:flex-col lg:px-0 lg:hover:before:opacity-50;
              div.button-box {
                @apply absolute mt-0.5 hidden h-full w-px bg-gray-100 sm:left-[38px] sm:block md:left-[62px] lg:hidden;
              }
              div.button-counter-container {
                @apply isolate flex w-[28px] h-[28px] items-center justify-center rounded-full border border-gray-100 bg-white;
                &.active {
                  @apply lg:bg-green-500 lg:ring-4 lg:ring-green-200 lg:ring-offset-2 lg:ring-offset-transparent lg:border-transparent;
                }
                span {
                  @apply text-gray-500;
                }
              }
              div.button-header-container {
                @apply flex-1 space-y-3 lg:space-y-4;
                h3 {
                  @apply text-lg font-medium tracking-tight text-gray-900;
                  &.active {
                    @apply text-green-500;
                  }
                  span {
                    display: inline-block;
                    vertical-align: top;
                    text-decoration: inherit;
                    text-wrap: normal;
                  }
                }
                p {
                  @apply text-sm leading-normal text-gray-400;
                  span {
                    display: inline-block;
                    vertical-align: top;
                    text-decoration: inherit;
                    text-wrap: normal;
                  }
                }
              }
            }
            div.image-container {
              @apply relative hidden lg:block;
            }
          }
        }
        div.current-image-container {
          @apply col-span-7;
        }
      }
    }
  }
}
</style>
