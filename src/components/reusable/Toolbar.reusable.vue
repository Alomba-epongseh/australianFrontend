/* eslint-disable */
<template>
  <section class="py-5 px-6 sticky top-0 z-50 bg-white shadow-sm border-b">
    <nav class="relative">
      <div class="flex items-center">
        <div class="flex items-center mr-auto">
          <a href="#" class="md:hidden h-auto w-1/3 -mt-3 scale-75">
            <img src="../../assets/logo.png" class="w-full h-full" alt="" />
          </a>
        </div>

        <div class="lg:hidden">
          <button class="flex items-center" @click="toggleMobileNav">
            <i class="pi pi-bars"></i>
          </button>
        </div>
        <ul class="hidden lg:flex items-center space-x-6 mr-6">
          <li class="border rounded px-2 py-1 border-gray-700">
            <a class="text-gray-500 hover:text-gray-700">
              <i class="pi pi-bell"></i>
            </a>
          </li>
        </ul>
        <div class="hidden border-l pl-3 lg:block">
          <button class="flex items-start">
            <div class="mr-2">
              <img
                class="w-10 h-10 rounded-full bg-gray-400 object-contain object-center"
                src="@/assets/images/misc/photo.png"
                alt=""
              />
            </div>
            <div class="mr-3 flex items-start flex-col">
              <span class="text-sm">{{ userData?.data?.username }}</span>
              <span class="text-sm text-gray-400">{{
                userData?.dat?.role
              }}</span>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation Menu -->
    <transition name="slide">
      <div v-if="isMobileNavOpen" class="fixed inset-0 z-40 flex">
        <!-- Dark overlay -->
        <div
          class="fixed inset-0 bg-black opacity-50"
          @click="toggleMobileNav"
        ></div>

        <!-- Sidebar for the mobile nav with transition -->
        <div class="relative z-50 w-64 bg-white p-4">
          <button
            class="absolute top-4 right-4 text-gray-500"
            @click="toggleMobileNav"
          >
            <i class="pi pi-times"></i>
          </button>
          <div class="flex w-full items-center px-6 pb-2.5 mb-6 lg:border-b">
            <a href="#">
              <img src="../../assets/logo.png" alt="" />
            </a>
          </div>
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
          <div class="absolute bottom-0 w-full border-t px-4">
            <a
              class="flex items-center text-sm pl-3 py-3 pr-2 text-red-500"
              href="#"
            >
              <i class="pi pi-sign-out mr-2"></i>
              <span class="font-normal" @click.prevent="logout">Log Out</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { storageService } from "@/services";
export default {
  name: "ToolbarReusable",
  data() {
    return {
      isMobileNavOpen: false,
      navItems: [
        {
          path: "/dashboard",
          name: "Home",
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
  computed: {
    userData() {
      return this.$store.getters.getUserState;
    },
  },
  beforeMount() {
    const user = this.$store.getters.getUserState;
    if (!user) {
      this.$store.dispatch(
        "getCurrentUser",
        storageService.get("BRAND_USER_INFO", true)
      );
    }
  },
  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    logout() {
      this.$store.dispatch("logUserOut");
    },
  },
};
</script>

<style scoped>
/* Transition effect */
.sidebar-transition {
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

/* Transition when sidebar is active (open) */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in versions <2.1.8 */ {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0%);
}
</style>
