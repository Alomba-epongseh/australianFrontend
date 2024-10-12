<template>
  <div
    class="relative"
    :hidden="!getModalState?.severity"
    style="z-index: 1000"
  >
    <div
      class="fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full justify-center p-4 text-center items-center">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-md"
        >
          <div class="bg-white px-4 pb-4 pt-5">
            <div class="flex items-center flex-col">
              <div
                :class="`mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full ${
                  getModalState?.severity === 'error'
                    ? 'bg-red-100'
                    : getModalState?.severity === 'success'
                    ? 'bg-green-100'
                    : getModalState?.severity === 'info'
                    ? 'bg-green-100'
                    : getModalState?.severity === 'warning'
                    ? 'bg-yellow-100'
                    : 'bg-gray-100'
                }`"
              >
                <i
                  :class="`pi pi-${
                    getModalState?.severity === 'error'
                      ? 'info'
                      : getModalState?.severity === 'success'
                      ? 'check'
                      : getModalState?.severity === 'info'
                      ? 'info'
                      : getModalState?.severity === 'warning'
                      ? 'exclamation-triangle'
                      : 'gray'
                  } font-light text-${
                    getModalState?.severity === 'error'
                      ? 'red'
                      : getModalState?.severity === 'success'
                      ? 'green'
                      : getModalState?.severity === 'info'
                      ? 'green'
                      : getModalState?.severity === 'warning'
                      ? 'yellow'
                      : 'gray'
                  }-500 ${
                    getModalState?.severity === 'error' ? 'rotate-180' : ''
                  }`"
                  style="font-size: 1.85rem"
                ></i>
              </div>
              <div class="mt-3 text-center">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {{ getModalState?.title }}
                </h3>
                <div class="my-2 px-4">
                  <p class="text-sm text-gray-500">
                    {{ getModalState?.message }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 justify-center flex">
            <button
              type="button"
              @click.prevent="
                () => {
                  $router.push($route.path);
                  this.$store.dispatch('hideModal');
                }
              "
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
            <button
              type="button"
              @click.prevent="getModalState?.action?.method"
              :class="`flex justify-center rounded-md ${
                getModalState?.severity === 'error'
                  ? 'bg-red-500'
                  : getModalState?.severity === 'warning'
                  ? 'bg-yellow-500'
                  : ''
              } ${
                getModalState?.severity === 'info' ||
                getModalState?.severity === 'success'
                  ? 'primary'
                  : ''
              } px-3 py-2 text-sm font-medium text-white shadow-sm ml-3 w-auto`"
            >
              {{ getModalState?.action?.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalReusable",
  computed: {
    getModalState() {
      return this.$store.getters.getModalState;
    },
  },
};
</script>

<style scoped></style>
