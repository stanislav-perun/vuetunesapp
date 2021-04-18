<template>
  <div class="searchform">
    <form action="#" @submit.prevent="getMusic()">
      <input type="text" v-model="query" autofocus />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      query: "Daniel Landa"
    };
  },
  methods: {
    getMusic() {
      axios
        .get(
          `https://itunes.apple.com/search?term=${encodeURI(
            this.query
          )}&entity=musicTrack&limit=15`
        )
        .then(response => {
          let iTunesMusic = response.data.results
            .filter(song => song.kind === "song")
            .map(song => this.extractData(song));

          this.$root.$emit("new-song-bro", iTunesMusic);
        });
    },

    extractData({
      trackId: id,
      artistName: artist,
      previewUrl: audioFile,
      artworkUrl100: cover,
      trackName: name,
      collectionName: album
    }) {
      return { id, artist, audioFile, cover, name, album };
    }
  }
};
</script>

<style scoped>
</style>