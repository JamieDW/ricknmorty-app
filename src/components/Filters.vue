<template>
  <div class="flex items-center justify-center p-4">
    <input
      @input="onSearch"
      class="shadow appearance-none border rounded w-full md:w-1/4
      py-2 px-3 text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline"
      type="text"
      v-model="name"
      v-bind:placeholder="$t('search')"
    />

    <div class="inline-block relative w-64 pl-2">
      <select
        v-model="sort"
        class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled>{{ $t("sortby") }}</option>
        <option value="asc">{{ $t("sort_asc") }}</option>
        <option value="desc">{{ $t("sort_desc") }}</option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      name: "",
      sort: "asc",
    };
  },

  watch: {
    name: function() {
      this.$emit("filter", this.name, this.sort);
    },
    sort: function() {
      this.$emit("filter", this.name, this.sort);
    },
  },
  methods: {
    onSearch() {
      this.$emit("search");
    },
  },
};
</script>
