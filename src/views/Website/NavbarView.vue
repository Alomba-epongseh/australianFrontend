<template>
  <header class="sticky-navbar">
    <div class="Banner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <a class="email">
        <i class="pi pi-envelope"></i> Email: support@australiaplacement.com
      </a>
    </div>
    <div class="desktop-container">
      <nav>
        <img src="./../../assets/logo.png" alt="Logo" />
        <ul>
          <p><router-link to="/">Home</router-link></p>
          <li class="dropdown">
            <p>Corporate Service</p>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/business-visas">Business Visas</router-link>
              </li>
              <li>
                <router-link to="/employer-sponsorship"
                  >Employer Sponsorship</router-link
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <p>Individuals & Family</p>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/skilled-visa">Skilled Visas</router-link>
              </li>
              <li>
                <router-link to="/family-visas">Family Visas</router-link>
              </li>
              <li>
                <router-link to="/student-visas">Student Visas</router-link>
              </li>
              <li>
                <router-link to="/cancellation-and-review"
                  >Visa Cancellation</router-link
                >
              </li>
              <li>
                <router-link to="/resident-return-visa-rrv"
                  >Resident Return Visa</router-link
                >
              </li>
            </ul>
          </li>
          <p><router-link to="/faqs">FAQ's</router-link></p>
          <li class="dropdown">
            <p>About Us</p>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/meet-the-team">Meet The Team</router-link>
              </li>
              <li>
                <router-link to="/testimonials">Testimonials</router-link>
              </li>
              <li><router-link to="/careers">Careers</router-link></li>
              <li><router-link to="/newsletter">Newsletter</router-link></li>
            </ul>
          </li>
          <li class="dropdown">
            <p>Contact Us</p>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/contact-us">Submit Enquiry</router-link>
              </li>
              <li>
                <router-link to="/book-an-appointment"
                  >Book An Appointment</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <button
          class="apply-button"
          @click.prevent="$router.push(`/auth/register`)"
        >
          Apply for a Job
        </button>
      </nav>
    </div>
    <div class="mobile-container">
      <nav class="mobile-nav">
        <img src="./../../assets/logo.png" alt="Logo" />
        <!-- Hamburger Icon -->
        <button class="hamburger" @click="isMenuOpen = !isMenuOpen">
          <i class="pi" :class="isMenuOpen ? 'pi-times' : 'pi-bars'"></i>
        </button>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" v-if="isMenuOpen">
        <ul>
          <li>
            <router-link to="/" @click="isMenuOpen = false">Home</router-link>
          </li>
          <li>
            <span @click="toggleDropdown('corporate')">Corporate Service</span>
            <ul v-if="activeDropdown === 'corporate'">
              <li>
                <router-link to="/business-visas" @click="isMenuOpen = false"
                  >Business Visas</router-link
                >
              </li>
              <li>
                <router-link
                  to="/employer-sponsorship"
                  @click="isMenuOpen = false"
                  >Employer Sponsorship</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <span @click="toggleDropdown('family')">Individuals & Family</span>
            <ul v-if="activeDropdown === 'family'">
              <li>
                <router-link to="/skilled-visa" @click="isMenuOpen = false"
                  >Skilled Visas</router-link
                >
              </li>
              <li>
                <router-link to="/family-visas" @click="isMenuOpen = false"
                  >Family Visas</router-link
                >
              </li>
              <li>
                <router-link to="/student-visas" @click="isMenuOpen = false"
                  >Student Visas</router-link
                >
              </li>
              <li>
                <router-link
                  to="/cancellation-and-review"
                  @click="isMenuOpen = false"
                  >Visa Cancellation</router-link
                >
              </li>
              <li>
                <router-link
                  to="/resident-return-visa-rrv"
                  @click="isMenuOpen = false"
                  >Resident Return Visa</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/faqs" @click="isMenuOpen = false"
              >FAQ's</router-link
            >
          </li>
          <li>
            <span @click="toggleDropdown('about')">About Us</span>
            <ul v-if="activeDropdown === 'about'">
              <li>
                <router-link to="/meet-the-team" @click="isMenuOpen = false"
                  >Meet The Team</router-link
                >
              </li>
              <li>
                <router-link to="/testimonials" @click="isMenuOpen = false"
                  >Testimonials</router-link
                >
              </li>
              <li>
                <router-link to="/careers" @click="isMenuOpen = false"
                  >Careers</router-link
                >
              </li>
              <li>
                <router-link to="/newsletter" @click="isMenuOpen = false"
                  >Newsletter</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <span @click="toggleDropdown('contact')">Contact Us</span>
            <ul v-if="activeDropdown === 'contact'">
              <li>
                <router-link to="/contact-us" @click="isMenuOpen = false"
                  >Contact Us</router-link
                >
              </li>
              <li>
                <router-link
                  to="/book-an-appointment"
                  @click="isMenuOpen = false"
                  >Book An Appointment</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <router-link to="/auth/login"
          ><button class="apply-button-mobile">
            Apply for a Job
          </button></router-link
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// State to manage the mobile menu and dropdowns
const isMenuOpen = ref(false);
const activeDropdown = ref(null);

// Function to toggle dropdowns in mobile view
const toggleDropdown = (menu) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu;
};
</script>

<style lang="scss" scoped>
header {
  @apply relative z-50 w-full border-b-2 shadow-lg;
  div.Banner {
    @apply bg-green-600 h-10 grid md:grid-cols-7 w-full;
    a {
      @apply text-white text-right py-2 cursor-pointer hover:text-gray-200;
    }
    a.email {
      @apply text-white text-center col-span-2 py-2 cursor-pointer hover:text-gray-200;
    }
  }
}

.desktop-container {
  @apply w-full bg-white py-8 hidden md:block;
  nav {
    @apply flex bg-white justify-between items-center px-8;
    img {
      @apply h-auto w-24;
    }
    ul {
      @apply flex gap-5;
      li {
        @apply relative text-center space-x-0;
        a,
        span {
          @apply text-white text-sm text-center cursor-pointer hover:text-orange-600;
        }
      }
      .dropdown:hover .dropdown-menu {
        @apply block;
      }
      .dropdown:hover > span {
        @apply text-green-600;
      }
      .dropdown-menu {
        @apply hidden absolute bg-black text-white border-green-600 border-t mt-2 text-center w-48;
        li {
          @apply py-2 hover:bg-green-600 text-white hover:border-b;
        }
      }
    }
  }

  .apply-button {
    @apply bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700;
  }
}
.mobile-container {
  @apply block md:hidden bg-white w-full;
  nav {
    @apply flex justify-between items-center px-4 py-3;
    img {
      @apply h-auto w-16;
    }
  }

  .hamburger {
    @apply text-3xl;
  }

  .mobile-menu {
    @apply bg-white shadow-md p-4;
    ul {
      @apply list-none p-0 space-y-4;
      li {
        @apply text-black cursor-pointer;
        ul {
          @apply list-none pl-4 mt-2 space-y-2;
          li {
            @apply text-gray-700;
          }
        }
      }
    }
    .apply-button-mobile {
      @apply bg-green-600 text-white w-full mt-4 py-2 rounded-lg;
    }
  }
}
</style>
