<template>
  <div class="ks-hero-view">
    <div
      class="ks-hero-carousel"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div class="ks-hero-slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" class="ks-hero-image" />
        <div class="ks-hero-content">
          <h1 class="ks-hero-title">{{ slide.title }}</h1>
          <br />
          <p class="ks-hero-summary">{{ slide.summary }}</p>
          <br />
          <button class="ks-hero-button">{{ slide.buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: require("../../assets/images/iStock-1366013285-800x532.jpg"),
          alt: "Hero Image 1",
          title: "Find Your Dream Job in Australia",
          summary:
            "We help you find the perfect job in Australia with our extensive network of employers and expert career advice.",
          buttonText: "Get Started",
        },
        {
          image: require("../../assets/images/corporate-image-scaled.jpg"),
          alt: "Hero Image 2",
          title: "Start Your New Life in Australia",
          summary:
            "We provide comprehensive support for your immigration journey, from visa application to settling in Australia.",
          buttonText: "Learn More",
        },
        {
          image: require("../../assets/images/completion-8.jpg"),
          alt: "Hero Image 3",
          title: "Skilled Visa Assistance",
          summary:
            "Get personalized advice on skilled visas, work permits, and job placement to make your move to Australia smooth and successful.",
          buttonText: "Apply Now",
        },
        {
          image: require("../../assets/images/images.jpeg"),
          alt: "Hero Image 4",
          title: "Explore Visa Opportunities",
          summary:
            "Explore a variety of visa options that suit your needs, whether you're a student, a skilled worker, or looking to start a business.",
          buttonText: "View Visa Options",
        },
        {
          image: require("../../assets/images/13162220_238526346537868_619309736_n.jpg"),
          alt: "Hero Image 5",
          title: "Permanent Residency Pathway",
          summary:
            "Start your journey to becoming a permanent resident of Australia with our expert guidance and support.",
          buttonText: "Get Help",
        },
      ],
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000); // Change every 5 seconds
    },
  },
};
</script>

<style scoped>
.ks-hero-view {
  @apply relative overflow-hidden w-full h-[32rem];
}

.ks-hero-carousel {
  @apply flex h-full ease-in-out transform;
  transition: transform 2s ease-in-out;
}

.ks-hero-slide {
  flex: 0 0 100%; /* Each slide takes 100% of the container width */
  height: 100%;
  position: relative;
}

.ks-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.ks-hero-content {
  @apply absolute md:top-[50%] md:left-[50%] top-[50%] left-[50%] text-center text-white justify-center;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.ks-hero-title {
  @apply text-3xl font-bold mb-5 md:text-5xl;
}

.ks-hero-summary {
  @apply text-lg md:text-xl;
}

.ks-hero-button {
  @apply bg-green-500 text-white p-2 shadow-2xl border rounded-lg cursor-pointer hover:bg-green-900;
}
</style>
