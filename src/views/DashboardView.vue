<template>
  <main id="content">
    <Sidebar />
    <section class="mx-auto lg:ml-80">
      <ToolBar />
      <section class="py-8 px-8">
        <router-view />
      </section>
    </section>
  </main>
</template>

<script>
import { Sidebar, ToolBar } from "@/components/reusable";
export default {
  name: "DashboardView",
  components: { Sidebar, ToolBar },
};
</script>

<style scoped></style>
