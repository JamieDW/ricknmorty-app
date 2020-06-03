<template>
  <router-link
    class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs bg-teal-900 shadow-lg transition-colors duration-500 ease-in-out"
    :to="{ name: 'character.show', params: { id: character.id } }"
    :style="{ backgroundColor: this.backgroundColor }"
    :title="$t('view', { name: character.name })"
  >
    <div class="relative pt-10 px-10 flex items-center justify-center">
      <div
        class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
      ></div>
      <img class="relative w-40 rounded-full" v-bind:src="character.image" />
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
      <span class="opacity-75 -mb-1">{{ character.species }}</span> -
      <span class="opacity-75">{{ character.status }}</span>
      <p class="block font-bold text-xl w-48 truncate">
        {{ character.name }}
      </p>
    </div>
  </router-link>
</template>

<script>
import * as Vibrant from "node-vibrant";

export default {
  name: "Character",
  data() {
    return {
      character: this.initCharacter,
      backgroundColor: String,
    };
  },
  props: {
    initCharacter: Object,
  },
  mounted() {
    Vibrant.from(this.character.image).getSwatches(
      (err, palette) => (this.backgroundColor = palette.DarkVibrant.hex ?? "")
    );
  },
};
</script>
