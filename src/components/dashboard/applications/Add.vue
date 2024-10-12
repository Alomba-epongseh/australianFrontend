<template>
  <div class="relative" style="z-index: 1000">
    <div
      class="fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full justify-center p-4 text-center items-center">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-lg"
        >
          <div class="bg-white px-6 pb-4 pt-5">
            <div class="flex items-start flex-col">
              <div class="py-3 w-full mb-4 border-b text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  Create a new user
                </h3>
              </div>
              <div class="w-full">
                <label for="username" class="text-gray-500 font-light"
                  >Username</label
                >
                <span class="p-input-icon-left font-light text-gray-200 w-full">
                  <i class="pi pi-pencil"></i>
                  <InputText
                    id="username"
                    class="font-light text-gray-500 w-full"
                    placeholder="Enter username"
                    v-model="formValues.username"
                  />
                </span>
              </div>
              <br />
              <div class="w-full">
                <label for="email" class="text-gray-500 font-light"
                  >Email address</label
                >
                <span class="p-input-icon-left font-light text-gray-200 w-full">
                  <i class="pi pi-envelope"></i>
                  <InputText
                    id="email"
                    class="font-light text-gray-500 w-full"
                    placeholder="Enter email address"
                    v-model="formValues.email"
                  />
                </span>
              </div>
              <!-- <br />
              <div class="w-full">
                <label for="password" class="text-gray-500 font-light"
                  >Password</label
                >
                <span class="p-input-icon-left font-light text-gray-200 w-full">
                  <i class="pi pi-key"></i>
                  <InputText
                    type="password"
                    id="password"
                    class="font-light text-gray-500 w-full"
                    placeholder="Enter password"
                    v-model="formValues.password"
                  />
                </span>
              </div> -->
            </div>
          </div>
          <br />
          <div class="bg-gray-50 px-4 py-3 justify-center flex">
            <button
              type="button"
              @click.prevent="this.$emit('toggleForm')"
              class="mt-3 inline-flex w-full justify-center rounded-md md:w-32 bg-white px-6 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
            <button
              type="button"
              @click.prevent="createNewUser"
              class="flex justify-center items-center gap-2 primary text-white md:w-32 rounded-md px-3 py-2 text-sm font-medium shadow-sm ml-3 w-auto"
            >
              <i class="pi pi-plus"></i>
              Create user
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  name: "AddUser",
  components: { InputText },
  methods: {
    createNewUser() {},
  },
  data() {
    return {
      formValues: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped></style>
