<template>
  <div class="md:hidden w-3/5 border mb-10 p-2 primary text-white rounded-md">
    <i class="pi pi-arrow-left px-2"></i>
    <button href="javascript:void(0)" onclick="history.back()">
      Back to job list
    </button>
  </div>
  <section class="p-6 border w-full md:w-8/12 md:mx-auto bg-white rounded-md">
    <h1 class="font-medium text-2xl text-gray-700">Add a Job offer</h1>
    <Divider />
    <div class="my-6 px-4">
      <form>
        <div class="grid my-4 grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex flex-col gap-2 md:col-span-3">
            <label for="title" class="text-gray-500 font-light"
              >Job title</label
            >
            <span class="p-input-icon-left font-light text-gray-200 w-full">
              <i class="pi pi-pencil"></i>
              <InputText
                id="title"
                class="font-light text-gray-500 w-full"
                placeholder="Enter Job title"
                v-model="formValues.title"
                aria-required="true"
              />
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="title" class="text-gray-500 font-light">Company</label>
          <span class="p-input-icon-left font-light text-gray-200 w-full">
            <i class="pi pi-building"></i>
            <InputText
              id="company"
              class="font-light text-gray-500 w-full"
              placeholder="Enter Company name"
              v-model="formValues.company"
              aria-required="true"
            />
          </span>
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="title" class="text-gray-500 font-light">Location</label>
          <span class="p-input-icon-left font-light text-gray-200 w-full">
            <i class="pi pi-map-marker"></i>
            <InputText
              id="company"
              class="font-light text-gray-500 w-full"
              placeholder="Enter Location"
              v-model="formValues.location"
              aria-required="true"
            />
          </span>
        </div>
        <div class="flex flex-col col-span-2 gap-2">
          <label for="requirements" class="text-gray-500 font-light"
            >Enter job requirements</label
          >
          <Editor
            v-model="formValues.requirements"
            editorStyle="height: 200px"
            aria-required="true"
          />
        </div>
        <div class="grid my-4 grid-cols-2 gap-4">
          <div class="flex flex-col col-span-2 gap-2">
            <label for="quantity" class="text-gray-500 font-light"
              >Enter Salary</label
            >
            <span class="p-input-icon-left font-light text-gray-200 w-full">
              <i class="pi pi-money-bill"></i>
              <InputText
                id="salary"
                class="font-light text-gray-500 w-full"
                v-model="formValues.salary"
                aria-required="true"
              />
            </span>
          </div>
          <div class="flex flex-col gap-2 col-span-2">
            <label for="quantity" class="text-gray-500 font-light"
              >Choose Job type</label
            >
            <Dropdown
              inputClass="w-full"
              :options="categories"
              v-model="formValues.job_type"
              data-dropdown-toggle="dropdown"
              aria-required="true"
            />
          </div>
          <div class="flex flex-col col-span-2 gap-2">
            <label for="description" class="text-gray-500 font-light"
              >Enter Job description</label
            >
            <Editor
              v-model="formValues.description"
              editorStyle="height: 200px"
              aria-required="true"
            />
          </div>
        </div>
        <br />
        <Divider />
        <br />
        <div class="flex flex-col gap-2">
          <label for="productImages" class="text-gray-500 font-light"
            >Upload product images</label
          >
        </div>
        <br />
        <Divider />
        <div class="flex items-center justify-end">
          <button
            @click.prevent="addJob"
            class="flex gap-2 rounded-md font-light items-center primary shadow-sm text-white px-6 py-2.5"
          >
            <i class="pi pi-plus"></i>
            <span>Add Job</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import InputText from "primevue/inputtext";
import Editor from "primevue/editor";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
// import { AppEventsConstant } from "@/constants";
export default {
  name: "AddJob",
  data() {
    return {
      categories: [
        "Contract",
        "Full-time",
        "Internship",
        "Part-time",
        "Remote",
        "Volunteer",
      ],
      formValues: {
        title: "",
        job_type: "",
        requirements: "",
        company: "",
        salary: "",
        description: "",
        location: "",
        userId: this.$route.params.userId,
      },
      // uploadUrl: `${AppEventsConstant.BASE_URL}${AppEventsConstant.FILE_UPLOAD.MULTIPLE}`,
    };
  },
  components: {
    InputText,
    Editor,
    Divider,
    Dropdown,
  },
  computed: {
    // validateForm() {
    //   let error;
    //   Object.entries(this.formValues).forEach(([, value]) => {
    //     switch (true) {
    //       case typeof value !== "object" && typeof value === "string":
    //         error = !!value.trim();
    //         break;
    //       case typeof value !== "object" && typeof value === "number":
    //         error = !value;
    //         break;
    //       case typeof value === "object" && Array.isArray(value):
    //         error = !value.length;
    //         break;
    //     }
    //   });
    //   return error;
    // },
  },
  methods: {
    // toggleCategories(event) {
    //   this.$refs.categories.toggle(event);
    // },
    // onUpload(event) {
    //   const response = JSON.parse(event.xhr.response);
    //   this.formValues.imageUrls = [
    //     ...this.formValues.imageUrls,
    //     ...response.data.data,
    //   ];
    //   console.log;
    // },
    // uploadEvent(cb) {
    //   cb();
    // },
    addJob() {
      // let data = {};
      // Object.entries(this.formValues).forEach(([key, value]) => {
      //   if (key.toLowerCase() === "quantity") {
      //     data[key] = {
      //       total: `${value}`,
      //       leftOver: `${value}`,
      //       purchased: "0",
      //     };
      //   } else if (typeof value !== "object") {
      //     data[key] = `${value}`;
      //   } else {
      //     data[key] = value;
      //   }
      // });
      this.$store.dispatch("addJob", this.formValues);
      this.formValues = {
        title: "",
        job_type: "",
        requirements: "",
        company: "",
        salary: "",
        description: "",
        userId: this.$route.params.userId,
        location: "",
      };
    },
  },
};
</script>
<style scoped lang="scss">
div.p-dropdown {
  border: 1px solid rgba(214, 215, 220, 0.923) !important;
}
</style>
