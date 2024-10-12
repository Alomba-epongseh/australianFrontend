<template>
  <main class="shape">
    <Breadcrumb />
    <ProductDetails />
    <div class="grid grid-cols-1 mt-6 md:grid-cols-12 gap-4">
      <div class="col-span-9">
        <DescriptionDetails />
      </div>
      <div class="col-span-3">
        <YouMayLike />
      </div>
    </div>
    <RelatedProducts />
    <CallToAction />
    <br />
    <br />
    <br />
    <br />
  </main>
</template>

<script>
import {
  Breadcrumb,
  ProductDetails,
  DescriptionDetails,
  YouMayLike,
  RelatedProducts,
  CallToAction,
} from "../components";
export default {
  name: "DetailView",
  components: {
    Breadcrumb,
    ProductDetails,
    DescriptionDetails,
    YouMayLike,
    RelatedProducts,
    CallToAction,
  },
};
</script>

<style scoped></style>
