<template>
  <section class="faq-section">
    <!-- Accordion grid -->
    <div class="faq-grid">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="accordion"
        :class="{ 'is-active': activeIndex === index }"
        @click="toggleAccordion(index)"
      >
        <div class="accordion-header" @mouseover="hoverAccordion">
          <h3>{{ faq.question }}</h3>
        </div>
        <div class="accordion-content">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Accordion state management
const faqs = ref([
  {
    question:
      "How do I meet the English Requirements for a Skilled Migration Visa?",
    answer: `You will need to prove that your English meets the level set for the type of visa you are seeking.

The first step is to work out which of the following 5 levels applies to you:

Superior English: 20 points in the General Skilled Migration (GSM) points test
Proficient English: 10 points in the General Skilled Migration (GSM) points test
Competent English: Threshold requirement for General Skilled Migration and ENS/RSMS Direct Entry
Vocational English: Threshold requirement for ENS/RSMS Temporary Residence Transition Stream
Functional English: For secondary applicants (family members) who do not wish to pay an English Language Charge

When do I need to take a test?

While this varies based on the type of visa, most skilled and business migration applications ask you to take an English test when they issue your invitation.

How long are my test results valid?

The Department of Immigration accepts test results from up to 3 years prior to your application, except for Functional English, where results must be no older than 12 months.

Which tests are acceptable?

The IELTS test is the most common, accepted in both Academic and General Training versions. The Pearson PTE, TOEFL iBT, Cambridge Test of English, and the OET are also accepted.`,
  },
  {
    question: "What makes Home Migration Services unique?",
    answer: `We operate locally and internationally in multiple languages and cultures with one aim: finding your ultimate immigration solution.

Our teams of skilled migration agents are industry experts who know your business and provide guidance as you build a successful career or enterprise in Australia.

We are experts in immigration law and systems. With almost 20 years of experience across three continents, we have successfully handled thousands of complex immigration cases.

Our key focus is putting people first, supporting you through the stress and excitement of starting your immigration journey.`,
  },
  // Additional FAQ items...
]);

const activeIndex = ref(null);

// Toggle accordion function
const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Placeholder hover animation function
const hoverAccordion = () => {};
</script>
<style lang="scss" scoped>
.faq-section {
  @apply w-full relative p-8 bg-gray-100;

  .plus-button {
    @apply absolute top-0 left-0 text-3xl cursor-pointer p-2 bg-green-600 text-white rounded-full shadow-lg;
    &:hover {
      @apply bg-green-700;
    }
  }

  /* Accordion Grid */
  .faq-grid {
    @apply grid grid-cols-1 md:grid-cols-3 gap-4 mt-8;

    .accordion {
      @apply bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 ease-in-out cursor-pointer;

      &.is-active {
        @apply bg-green-100;
      }

      .accordion-header {
        @apply p-4 text-lg font-semibold bg-green-100 hover:bg-green-300 transition-all duration-200;
      }

      .accordion-content {
        @apply p-4 max-h-0 overflow-hidden transition-all duration-300 ease-in-out;
        max-height: 0;
        opacity: 0;
        pointer-events: none;
      }

      &.is-active .accordion-content {
        @apply max-h-full opacity-100 pointer-events-auto;
      }

      &:hover {
        @apply shadow-lg transform translate-y-1;
      }
    }
  }
}
</style>
