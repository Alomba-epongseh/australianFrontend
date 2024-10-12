<template>
  <tr
    v-for="row of [...Array(parseInt(rowLength)).keys()]"
    v-bind:key="row"
    class="p-4 border-b"
  >
    <td
      v-for="element of [...Array(parseInt(columnLength)).keys()]"
      v-bind:key="element"
      class="p-4 animate-pulse"
    >
      <div class="animate-pulse">
        <div class="w-full h-8 rounded bg-gray-300"></div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "PulseLoader",
  props: ["columnLength", "rowLength"],
};
</script>

<style scoped></style>
