<template>
  <section class="jobs-container">
    <div class="jobs-img1">
      <img
        src="../../assets/images/iStock-1366013285-800x532.jpg"
        alt="Job Opportunities"
      />
    </div>
    <section class="jobs-preview">
      <div class="jobs-text">
        <h1>Job Opportunities on Our Platform</h1>
        <p>
          Discover the wide range of job opportunities available on our
          platform. Whether you're looking to post a job as an employer or apply
          for a job as a job seeker, we provide the tools to help you find the
          perfect match.
        </p>
        <br />
        <h4>Current Job Listings:</h4>
        <ul>
          <li>Software Developer</li>
          <li>Data Analyst</li>
          <li>Project Manager</li>
          <li>Marketing Coordinator</li>
          <li>HR Specialist</li>
          <li>Customer Support Representative</li>
          <li>And alot more</li>
        </ul>
        <button
          class="apply_btn"
          @click.prevent="$router.push(`/auth/register`)"
        >
          Apply now
        </button>
        <br />
      </div>
      <div class="jobs-img">
        <img
          src="../../assets/images/13162220_238526346537868_619309736_n.jpg"
          alt="Job Listings"
        />
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "JobOpportunities",

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const jobSection = document.querySelector(".jobs-preview");

      // Check if jobSection is not null
      if (!jobSection) return;

      const sectionPosition = jobSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        jobSection.classList.add("is-visible");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section.jobs-preview {
  @apply md:flex md:grid-cols-2 mt-20 justify-center;
  .apply_btn {
    @apply bg-green-500 text-white py-4 text-xl mx-auto px-4 rounded-md shadow-xl hover:bg-green-800 my-5 font-bold ring-2 ml-5;
  }
  div.jobs-text,
  div.jobs-img,
  div.jobs-img1 {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  // When the section is scrolled into view, trigger animations
  &.is-visible div.jobs-text {
    opacity: 1;
    transform: translateX(0);
  }

  &.is-visible div.jobs-img {
    opacity: 1;
    transform: translateX(0);
  }

  &.is-visible div.jobs-img1 {
    opacity: 1;
    transform: translateX(0);
  }

  div.jobs-text {
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
  }

  div.jobs-img {
    @apply md:mx-20 align-top w-full h-auto hidden md:block mt-5 hover:shadow-2xl cursor-pointer;
    img {
      @apply w-full h-full opacity-80;
    }
  }
}

div.jobs-img1 {
  @apply md:mx-20 align-top w-full h-auto mt-5 md:hidden block hover:shadow-2xl cursor-pointer;
}
</style>
