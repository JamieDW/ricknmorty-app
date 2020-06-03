<template>
  <div>
    <filters v-on:search="onSearch" v-on:filter="onFilter"></filters>

    <div class="flex flex-wrap items-center justify-center">
      <character
        v-for="character in orderedCharacters"
        :initCharacter="character"
        :key="character.id"
      />
    </div>
    <div class="flex items-center justify-center p-4" v-show="this.noMoreResults">
      <button
        @click="loadMore"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >{{ $t("load") }}</button>
    </div>
  </div>
</template>

<script>
import character from "@/components/Character.vue";
import filters from "@/components/Filters.vue";
import { getCharacters } from "@/graphql/queries.gql";
import _ from "lodash";

export default {
  name: "Characters",

  data() {
    return {
      name: "",
      sort: "asc",
      characters: [],
      page: 1,
      info: {
        count: Number,
        pages: Number,
        next: Number,
        prev: Number
      }
    };
  },

  created() {
    this.getCharacters();
  },

  computed: {
    noMoreResults: function() {
      return this.characters.length || this.info.next != null;
    },

    orderedCharacters: function() {
      return _.orderBy(this.characters, "name", this.sort);
    }
  },

  methods: {
    onFilter: function(name, sort) {
      this.name = name;
      this.sort = sort;
    },

    onSearch() {
      this.characters = [];
      this.getCharacters();
    },

    loadMore() {
      this.page++;
      this.getCharacters();
    },
    getCharacters() {
      let vue = this;

      this.$apollo
        .query({
          query: getCharacters,
          variables: {
            page: vue.page,
            name: vue.name
          }
        })
        .then(response => {
          this.characters.push(...response.data.characters.results);
          vue.info = response.data.characters.info;
        });
    }
  },

  components: {
    character,
    filters
  }
};
</script>
