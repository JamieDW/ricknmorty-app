<template>
  <div v-if="character">
    <div class="flex flex-wrap p-0 sm:px-12">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">
        <img class="w-full" v-bind:src="character.image" />
      </div>
      <div class="flex-1 mb-4 bg-gray-400">
        <div class="px-6 pb-6 mt-6">
          <span class="opacity-75 -mb-1">{{ character.species }}</span> -
          <span class="opacity-75">{{ character.status }}</span>
          <p class="block font-bold text-xl w-48 truncate">
            {{ character.name }}
          </p>

          <div v-if="character.location">
            <div class="text-xl font-semibold pb-2 pt-10">
              {{ $t("location") }}
            </div>
            <div>{{ character.location.name }}</div>
            <div>{{ character.location.type }}</div>
            <div>{{ character.location.dimension }}</div>
          </div>
        </div>
      </div>
      <div class="w-full mb-4 bg-gray-500 px-6 pb-6 ">
        <p v-if="character.episode" class="text-xl font-semibold py-2">
          {{ $t("episodes") }}
        </p>
        <Episode
          v-for="episode of character.episode"
          :key="episode.id"
          v-bind:pEpisode="episode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacter } from "@/graphql/queries.gql";

import Episode from "@/components/Episode.vue";
export default {
  data() {
    return {
      character: { type: Object, default: null },
    };
  },

  mounted() {
    this.getCharacter();
  },

  methods: {
    getCharacter() {
      this.$apollo
        .query({
          query: getCharacter,
          variables: {
            id: this.$route.params.id,
          },
        })
        .then((response) => {
          this.character = response.data.character;
        });
    },
  },
  components: {
    Episode,
  },
};
</script>
