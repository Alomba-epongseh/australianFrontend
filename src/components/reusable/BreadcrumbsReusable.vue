<template>
  <div class="py-6 flex items-center flex-wrap">
    <ul class="flex items-center">
      <li class="inline-flex items-center">
        <a
          @click.prevent="$router.push(`/`)"
          href="#"
          class="text-gray-400 font-light hover:text-green-500"
        >
          Home
        </a>

        <svg
          class="w-5 h-auto fill-current mx-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
      </li>

      <li class="inline-flex items-center">
        <a
          @click.prevent="$router.push(`/products`)"
          class="text-gray-400 font-light cursor-pointer hover:text-green-500"
        >
          Products
        </a>

        <svg
          class="w-5 h-auto fill-current mx-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
      </li>

      <li class="inline-flex items-center">
        <a href="#" class="text-gray-400 font-light hover:text-green-500">
          Details
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BreadcrumbsReusable",
  data() {
    return {
      home: {
        icon: "pi pi-home",
        to: "/",
      },
      items: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
        { label: "Backpacks" },
        { label: "Item" },
      ],
    };
  },
};
</script>
