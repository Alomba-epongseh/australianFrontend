<template>
  <section class="p-6 border w-full md:w-8/12 md:mx-auto bg-white rounded-md">
    <h1 class="font-medium text-2xl text-gray-700">Edit a product</h1>
    <Divider />
    <div class="my-6 px-4">
      <form>
        <div class="grid my-4 grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex flex-col gap-2 col-span-2">
            <label for="name" class="text-gray-500 font-light"
              >Product name</label
            >
            <span class="p-input-icon-left font-light text-gray-200 w-full">
              <i class="pi pi-pencil"></i>
              <InputText
                id="name"
                class="font-light text-gray-500 w-full"
                placeholder="Enter product name"
                v-model="formValues.name"
              />
            </span>
          </div>
          <div class="flex flex-col gap-2">
            <label for="quantity" class="text-gray-500 font-light"
              >Quantity</label
            >
            <InputNumber
              v-model="formValues.quantity"
              inputId="quantity"
              class="w-full"
              prefix="Qty: "
            />
          </div>
        </div>

        <!--        <div class="grid my-4 grid-cols-1 md:grid-cols-3 gap-4">-->
        <!--          <div class="flex flex-col gap-2">-->
        <!--            <label for="tax" class="text-gray-500 font-light">Tax amount</label>-->
        <!--            <InputNumber-->
        <!--              v-model="formValues.tax"-->
        <!--              inputId="tax"-->
        <!--              mode="currency"-->
        <!--              class="w-full"-->
        <!--              currency="XAF"-->
        <!--              locale="en-US"-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div class="flex flex-col gap-2">-->
        <!--            <label for="shipping" class="text-gray-500 font-light"-->
        <!--              >Shipping amount</label-->
        <!--            >-->
        <!--            <InputNumber-->
        <!--              v-model="formValues.shipping"-->
        <!--              inputId="shipping"-->
        <!--              mode="currency"-->
        <!--              class="w-full"-->
        <!--              currency="XAF"-->
        <!--              locale="en-US"-->
        <!--            />-->
        <!--          </div>-->
        <!--          <div class="flex flex-col gap-2">-->
        <!--            <label for="price" class="text-gray-500 font-light"-->
        <!--              >Product's price</label-->
        <!--            >-->
        <!--            <InputNumber-->
        <!--              v-model="formValues.price"-->
        <!--              inputId="price"-->
        <!--              mode="currency"-->
        <!--              class="w-full"-->
        <!--              currency="XAF"-->
        <!--              locale="en-US"-->
        <!--            />-->
        <!--          </div>-->
        <!--        </div>-->

        <div class="grid my-4 grid-cols-1 gap-4">
          <div class="flex flex-col gap-2">
            <label for="quantity" class="text-gray-500 font-light"
              >Enter product colors</label
            >
            <Chips inputClass="w-full" v-model="formValues.colors">
              <template #chip="slotProps">
                <div>
                  <div
                    :style="{ background: slotProps.value }"
                    class="w-full h-2 rounded-md"
                  ></div>
                  <span>{{ slotProps.value }} </span>
                </div>
              </template>
            </Chips>
          </div>
          <div class="flex flex-col gap-2">
            <label for="description" class="text-gray-500 font-light"
              >Enter product description</label
            >
            <Editor
              v-model="formValues.description"
              editorStyle="height: 320px"
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
          <FileUpload
            name="file"
            :url="uploadUrl"
            @upload="onUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
          >
            <template
              #header="{ chooseCallback, uploadCallback, clearCallback, files }"
            >
              <div
                class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2"
              >
                <div class="flex gap-2">
                  <Button
                    @click="chooseCallback()"
                    icon="pi pi-images"
                    outlined
                    size="small"
                  ></Button>
                  <Button
                    @click="uploadEvent(uploadCallback)"
                    icon="pi pi-cloud-upload"
                    outlined
                    size="small"
                    severity="success"
                    :disabled="!files || files.length === 0"
                  ></Button>
                  <Button
                    @click="clearCallback()"
                    icon="pi pi-times"
                    outlined
                    size="small"
                    severity="danger"
                    :disabled="!files || files.length === 0"
                  ></Button>
                </div>
              </div>
            </template>
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>

          <p class="text-gray-500 font-light mt-6">Current images</p>
          <div class="flex gap-4 flex-wrap">
            <div
              v-for="image in currentImages"
              :key="image"
              class="h-16 w-16 relative border mt-4 rounded-md"
            >
              <button
                @click.prevent="removeImage(image)"
                class="absolute px-1 rounded-full border -top-3 -right-3 text-red-500"
              >
                <i class="pi pi-times"></i>
              </button>
              <img :alt="image" :src="image" class="w-full h-full" />
            </div>
          </div>
        </div>

        <br />
        <Divider />
        <div class="flex items-center justify-end">
          <button
            @click.prevent="updateProduct"
            class="flex gap-2 rounded-md font-light items-center primary shadow-sm text-white px-6 py-2.5"
          >
            <i class="pi pi-pencil"></i>
            <span>Edit product</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Chips from "primevue/chips";
import Editor from "primevue/editor";
import FileUpload from "primevue/fileupload";
import Divider from "primevue/divider";
import Button from "primevue/button";
import { AppEventsConstant } from "@/constants";
export default {
  name: "EditProduct",
  components: {
    InputText,
    InputNumber,
    Chips,
    Editor,
    FileUpload,
    Divider,
    Button,
  },
  methods: {
    onUpload(event) {
      const response = JSON.parse(event.xhr.response);
      this.formValues.imageUrls = [
        ...this.formValues.imageUrls,
        ...response.data.data,
      ];
    },
    uploadEvent(cb) {
      cb();
    },
    removeImage(image) {
      this.currentImages = this.currentImages.filter(
        (images) => images !== image
      );
    },
    updateProduct() {
      let data = {};
      Object.entries(this.formValues).forEach(([key, value]) => {
        if (key.toLowerCase() === "quantity") {
          data[key] = {
            total: `${value}`,
            leftOver: `${value}`,
            purchased: "0",
          };
        } else if (typeof value !== "object") {
          data[key] = `${value}`;
        } else {
          data[key] = value;
        }
      });
      data.imageUrls = [
        ...data.imageUrls.map(({ imageUrl }) => imageUrl),
        ...this.currentImages,
      ];
      data["productIds"] = [this.$route?.params?.id];
      this.$store.dispatch("updateProduct", data);
      this.formValues = {
        name: "",
        // tax: 0,
        // shipping: 0,
        // price: 0,
        quantity: 0,
        colors: [],
        description: "",
        imageUrls: [],
      };
    },
  },
  data() {
    return {
      formValues: {
        name:
          this.$store.getters.getSingleProduct(this.$route?.params?.id)?.name ??
          "",
        // tax: 0,
        // shipping: 0,
        // price: 0,
        quantity:
          parseInt(
            this.$store.getters.getSingleProduct(this.$route?.params?.id)
              ?.quantity?.total
          ) ?? 0,
        colors:
          this.$store.getters.getSingleProduct(this.$route?.params?.id)
            ?.colors ?? [],
        description:
          this.$store.getters.getSingleProduct(this.$route?.params?.id)
            ?.description ?? "",
        imageUrls: [],
      },
      currentImages:
        this.$store.getters.getSingleProduct(this.$route?.params?.id)
          ?.imageUrls ?? [],
      uploadUrl: `${AppEventsConstant.BASE_URL}${AppEventsConstant.FILE_UPLOAD.MULTIPLE}`,
    };
  },
  // mounted() {
  //   window.addEventListener("load", () =>
  //     this.$router.push("/dashboard/products")
  //   );
  // },
};
</script>
