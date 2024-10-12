<template>
  <section class="preview-container">
    <div class="preview-img1">
      <img
        src="../../assets/images/completion-8.jpg"
        alt="Australia Immigration Services"
      />
    </div>
    <section class="preview">
      <div class="preview-text">
        <h1>Australian Immigration Services</h1>
        <p>
          Explore your path to living and working in Australia. Our team of
          immigration experts is ready to guide you through every step of the
          visa process. Whether you're seeking temporary or permanent residency,
          we have the solutions to make it happen.
        </p>
        <br />
        <h4>Visa Options Available:</h4>
        <ul>
          <li>Business Visas</li>
          <li>Family Visas</li>
          <li>Employer Sponsorship</li>
          <li>Student Visas</li>
          <li>Residence Return Visa</li>
          <li>Visa Cancellation</li>
        </ul>
        <button
          class="apply_btn"
          @click.prevent="$router.push(`/book-an-appointment`)"
        >
          Book an appointment
        </button>
        <br />
      </div>
      <div class="preview-img">
        <img src="../../assets/images/images.jpeg" alt="Business Visas" />
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
      const jobSection = document.querySelector(".preview");
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
section.preview {
  @apply md:flex md:grid-cols-2 mt-20 justify-center items-center;
  .apply_btn {
    @apply bg-green-500 text-white py-4 px-4 mx-auto rounded-md shadow-xl text-xl hover:bg-green-800 my-5 font-bold ring-2;
  }
  div.preview-text,
  div.preview-img,
  div.preview-img1 {
    opacity: 0; // Hidden initially
    transform: translateY(100px); // Move down initially
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  // Add visibility when section is scrolled into view
  &.is-visible div.preview-text,
  &.is-visible div.preview-img,
  &.is-visible div.preview-img1 {
    opacity: 1;
    transform: translateX(0); // Float into position
  }

  div.preview-text {
    @apply md:px-5 md:pl-20 px-2;
    h1 {
      @apply text-black text-4xl font-semibold py-5;
    }
    p {
      @apply text-black text-[1.2rem] mt-5;
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

  div.preview-img {
    @apply md:mx-20 align-top w-full h-auto hidden md:block mt-5 hover:shadow-2xl cursor-pointer;
    img {
      @apply w-full h-full opacity-80;
    }
  }
}

div.preview-img1 {
  @apply md:mx-20 align-top w-full h-auto mt-5 md:hidden block hover:shadow-2xl cursor-pointer;
}
</style>
