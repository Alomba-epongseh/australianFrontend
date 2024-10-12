<template>
  <section class="bg-white">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[calc(100vh-200px)] lg:py-0"
    >
      <img src="../../assets/logo.png" alt="" class="w-20 h-20 md:mt-20" />
      <br /><br />
      <div class="w-full border rounded-md bg-white md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Log in to your account
          </h1>
          <form class="space-y-5">
            <div>
              <label
                for="login_email"
                class="block text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                v-model="formValues.email"
                type="email"
                name="login_email"
                id="login_email"
                class="border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="login_password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                v-model="formValues.password"
                type="password"
                name="login_password"
                id="login_password"
                placeholder="••••••••"
                class="border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                required=""
              />
            </div>
            <button
              type="submit"
              @click.prevent="login"
              class="w-full mt-6 mb-4 text-white primary hover:bg-green-500 font-medium rounded-md text-sm px-5 py-3 text-center"
            >
              Log in
            </button>
            <p class="text-sm font-light text-gray-500">
              Don't have an account yet?
              <router-link
                to="/auth/register"
                class="font-light text-orange-400 underline"
                >Sign up</router-link
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
export default {
  name: "LoginComponent",
  methods: {
    login() {
      this.$store.dispatch("loginUser", this.formValues);
      this.formValues = {
        email: "",
        password: "",
      };
    },
  },
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
