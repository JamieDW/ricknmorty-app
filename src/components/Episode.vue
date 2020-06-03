<template>
  <div>
    {{ episode.episode }} - {{ episode.name }}
    <span class="opacity-50"> {{ episode.air_date }}</span>
  </div>
</template>

<script>
export default {
  name: "Episode",
  data() {
    return {
      episode: this.pEpisode,
    };
  },
  props: {
    pEpisode: Object,
  },
};
</script>
