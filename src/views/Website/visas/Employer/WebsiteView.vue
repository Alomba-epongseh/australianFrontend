<template>
  <section>
    <Banner />
    <NavBar />
    <Hero />
    <div>
      <Preview />
      <Features />
      <Utility />
      <br />
      <br />
    </div>
    <Actions />
    <div>
      <Footer />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  @apply overflow-x-hidden lg:overflow-x-visible;
  div {
    @apply mt-10 space-y-24 relative sm:mt-32 sm:space-y-[128px] md:mx-[4rem] mx-5;
  }
}
</style>

<script setup>
import NavBar from "../../NavbarView.vue";
import Hero from "./HeroView.vue";
import Preview from "./PreviewView.vue";
import Features from "./FeaturesView.vue";
import Utility from "./UtilitiesView.vue";
import Actions from "./ActionsView.vue";
import Footer from "../../FooterView.vue";
</script>
