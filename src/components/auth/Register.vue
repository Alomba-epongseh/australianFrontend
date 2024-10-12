<template>
  <section class="bg-white">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[calc(100vh-200px)] lg:py-0"
    >
      <img src="../../assets/logo.png" alt="" class="w-20 h-20 md:mt-32" />
      <br /><br />
      <div class="w-full border rounded-md bg-white md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Create an account
          </h1>
          <form class="space-y-5" @submit="(e) => e.preventDefault()">
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-gray-900"
                >Your username</label
              >
              <input
                v-model="formValues.username"
                type="text"
                name="username"
                id="username"
                class="border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div>
              <label for="role" class="block text-sm font-medium text-gray-900"
                >Your role</label
              >
              <Dropdown
                v-model="formValues.role"
                name="role"
                id="role"
                :options="roles"
                placeholder="Select role"
                class="w-full"
                required=""
              />
            </div>
            <div>
              <label
                for="register_email"
                class="block text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                v-model="formValues.email"
                type="email"
                name="register_email"
                id="register_email"
                class="border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                placeholder="name@company.com"
                required=""
              />
            </div>

            <div>
              <label
                for="register_password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                v-model="formValues.password"
                type="password"
                name="register_password"
                id="register_password"
                placeholder="••••••••"
                class="border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                required=""
              />
            </div>
            <button
              @click.prevent="addUser"
              type="submit"
              class="w-full mt-6 mb-4 text-white primary hover:bg-green-900 font-medium rounded-md text-sm px-5 py-3 text-center"
            >
              Register
            </button>
            <p class="text-sm font-light text-gray-500">
              Already have an account yet?
              <router-link
                to="/auth/login"
                class="font-light text-orange-400 underline"
                >Login in</router-link
              >
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Dropdown from "primevue/dropdown";
export default {
  components: { Dropdown },
  name: "RegisterComponent",
  methods: {
    addUser() {
      this.$store.dispatch("addUser", this.formValues);
      this.formValues = {
        username: "",
        email: "",
        password: "",
      };
    },
  },
  data() {
    return {
      formValues: {
        username: "",
        email: "",
        password: "",
        role: "",
      },
      roles: ["Employer", "Employee"],
    };
  },
};
</script>
