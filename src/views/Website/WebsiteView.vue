<template>
  <section>
    <NavBar />
    <Hero />
    <div>
      <ProductsView />
      <Preview />
      <Features />
      <jobPreview />
      <jobFeatures />
      <Utility />
    </div>
    <Actions />
    <br />
    <br />
    <div>
      <Footer />
    </div>
  </section>
</template>
<style scoped lang="scss">
section {
  @apply overflow-x-hidden lg:overflow-x-visible;
  div {
    @apply space-y-24 relative sm:space-y-[128px];
  }
}
</style>

<script setup>
import NavBar from "./NavbarView.vue";
import Hero from "./HeroView.vue";
import Preview from "./PreviewView.vue";
import Features from "./FeaturesView.vue";
import Utility from "./UtilitiesView.vue";
import Actions from "./ActionsView.vue";
import Footer from "./FooterView.vue";
import ProductsView from "./ProductsView.vue";
import jobPreview from "./jobPreview.vue";
import jobFeatures from "./jobFeatures.vue";
</script>
