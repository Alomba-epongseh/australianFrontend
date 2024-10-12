<template>
  <div class="preview">
    <div class="container">
      <div class="title">
        <br />
        <br />
        <br />
        <br />
        <h2 class="text-3xl font-bold text-center">
          Find Your Dream Job in Australia
        </h2>
        <p class="text-center text-lg mt-4">
          Browse our latest job listings and find the perfect opportunity for
          you.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="search-bar focus:text-green-500">
        <i class="pi pi-search text-green-600 absolute mt-3"></i>
        <input
          type="text"
          placeholder="Search for jobs..."
          v-model="searchTerm"
          @input="searchJobs"
          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-green-500 focus:border-green-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineEmits } from "vue";
const searchTerm = ref("");

const emit = defineEmits(["search"]); // Define emit here
const emitSearch = (search) => {
  emit("update:search", search);
};

// Watch for changes in the search term and emit the event
watch(searchTerm, emitSearch);
</script>
