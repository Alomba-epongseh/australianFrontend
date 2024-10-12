<template>
  <section>
    <NavBar />
    <Hero />
    <div>
      <Preview v-model:search="searchTerm" />
      <List :search="searchTerm" />
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
    @apply space-y-10 relative md:mx-[4rem] mx-5;
  }
}
</style>

<script setup>
import NavBar from "@/views/Website/NavbarView.vue";
import Hero from "@/components/jobs/list/HeroView.vue";
import Preview from "@/components/jobs/list/PreviewView.vue";
import List from "@/components/jobs/list/listJobs.vue";
import Actions from "@/components/jobs/list/ActionsView.vue";
import Footer from "@/views/Website/FooterView.vue";
import { ref } from "vue";

const searchTerm = ref("");
</script>

<script>
export default {
  components: {
    NavBar,
    Hero,
    Preview,
    List,
    Actions,
    Footer,
  },
  name: "ListView",
  mounted() {
    this.$store.dispatch("getAllJobs");
  },
};
</script>
