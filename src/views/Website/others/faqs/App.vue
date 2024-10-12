<template>
  <section>
    <NavBar />
    <Hero />
    <div>
      <Main />
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
    @apply mt-10 space-y-24 relative sm:mt-32 sm:space-y-[128px] md:mx-[4rem] mx-5 mx-5;
  }
}
</style>

<script setup>
import NavBar from "../../NavbarView.vue";
import Hero from "./HeroView.vue";
import Main from "./mainView.vue";
import Actions from "../../ActionsView.vue";
import Footer from "../../FooterView.vue";
</script>
