<template>
  <div>
    <div class="hidden relative lg:block navbar-menu z-50">
      <div
        class="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"
      ></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto"
      >
        <div class="flex w-full items-center px-6 pb-2.5 mb-6 lg:border-b">
          <a href="#">
            <img src="../../assets/logo.png" alt="" />
          </a>
        </div>
        <div class="px-4 pb-6">
          <ul class="mb-8 text-sm">
            <li class="my-2" v-for="link in navItems" v-bind:key="link">
              <router-link
                :to="link.path"
                :class="`flex items-center pl-3 py-3 pr-4 rounded ${
                  link.activeNames.includes($route.name)
                    ? 'text-white primary'
                    : ''
                }`"
              >
                <i :class="`${link.iconClass} mr-2`"></i>
                <span class="font-normal capitalize">
                  {{ link.name }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="absolute bottom-0 w-full border-t px-4">
          <a
            class="flex items-center text-sm pl-3 py-3 pr-2 text-red-500"
            href="#"
          >
            <i class="pi pi-sign-out mr-2"></i>
            <span class="font-normal" @click.prevent="logout">Log Out</span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarReusable",
  data() {
    return {
      navItems: [
        {
          path: "/dashboard",
          name: "home",
          activeNames: ["home"],
          iconClass: "pi pi-database",
        },
        {
          path: "/dashboard/applications",
          name: "Applications",
          activeNames: [
            "listApplication",
            "addApplication",
            "detailApplication",
            "editApplication",
          ],
          iconClass: "pi pi-file-pdf",
        },
        {
          path: "/dashboard/job",
          name: "My Jobs",
          activeNames: ["listOfJobs", "addJob", "jobDetails"],
          iconClass: "pi pi-user",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logUserOut");
    },
  },
};
</script>

<style scoped></style>
