<template>
  <div
    v-if="getToastToast?.life > 0"
    class="fixed top-4 right-4 shadow-2xl rounded-md"
    style="z-index: 10000"
  >
    <div
      :class="`p-4 relative rounded-md max-w-md text-${
        getToastToast?.severity === 'error'
          ? 'red'
          : getToastToast?.severity === 'success'
          ? 'green'
          : getToastToast?.severity === 'info'
          ? 'green'
          : getToastToast?.severity === 'warning'
          ? 'yellow'
          : 'gray'
      }-500 bg-${
        getToastToast?.severity === 'error'
          ? 'red'
          : getToastToast?.severity === 'success'
          ? 'green'
          : getToastToast?.severity === 'info'
          ? 'green'
          : getToastToast?.severity === 'warning'
          ? 'yellow'
          : 'gray'
      }-100`"
    >
      <div class="flex gap-4 items-start">
        <div
          :class="`w-10 h-10 flex items-center bg-${
            getToastToast?.severity === 'error'
              ? 'red'
              : getToastToast?.severity === 'success'
              ? 'green'
              : getToastToast?.severity === 'info'
              ? 'green'
              : getToastToast?.severity === 'warning'
              ? 'yellow'
              : 'gray'
          }-100 rounded-full justify-center`"
        >
          <i
            :class="`pi pi-${
              getToastToast?.severity === 'error'
                ? 'info'
                : getToastToast?.severity === 'success'
                ? 'check'
                : getToastToast?.severity === 'info'
                ? 'info'
                : getToastToast?.severity === 'warning'
                ? 'exclamation-triangle'
                : 'gray'
            } text-${
              getToastToast?.severity === 'error'
                ? 'red'
                : getToastToast?.severity === 'success'
                ? 'green'
                : getToastToast?.severity === 'info'
                ? 'green'
                : getToastToast?.severity === 'warning'
                ? 'yellow'
                : 'gray'
            }-500 ${getToastToast?.severity === 'error' ? 'rotate-180' : ''}`"
          ></i>
        </div>
        <div class="w-3/4">
          <strong
            :class="`text-${
              getToastToast?.severity === 'error'
                ? 'red'
                : getToastToast?.severity === 'success'
                ? 'green'
                : getToastToast?.severity === 'info'
                ? 'green'
                : getToastToast?.severity === 'warning'
                ? 'yellow'
                : 'gray'
            }-700 font-medium`"
            >{{ getToastToast?.title }}</strong
          >
          <p
            :class="`text-${
              getToastToast?.severity === 'error'
                ? 'red'
                : getToastToast?.severity === 'success'
                ? 'green'
                : getToastToast?.severity === 'info'
                ? 'green'
                : getToastToast?.severity === 'warning'
                ? 'yellow'
                : 'gray'
            }-600 font-light`"
          >
            {{ getToastToast?.message }}
          </p>
        </div>
        <button
          @click.prevent="this.$store.dispatch('hideToast')"
          class="w-6 absolute top-6 right-4 h-6 rounded-md flex items-center justify-center"
        >
          <i
            :class="`pi pi-times text-${
              getToastToast?.severity === 'error'
                ? 'red'
                : getToastToast?.severity === 'success'
                ? 'green'
                : getToastToast?.severity === 'info'
                ? 'green'
                : getToastToast?.severity === 'warning'
                ? 'yellow'
                : 'gray'
            }-500`"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastReusable",
  computed: {
    getToastToast() {
      return this.$store.getters.getToastState;
    },
  },
};
</script>

<style scoped></style>
