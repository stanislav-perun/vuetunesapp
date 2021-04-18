<template>
  <div>
    <ul>
      <tunes-list-song v-for="song in songs" :key="song.id" :song="song" />
    </ul>
  </div>
</template>

<script>
import TunesListSong from "@/components/tunes/TunesListSong.vue";
export default {
  components: {
    TunesListSong
  },

  data() {
    return {
      songs: []
    };
  },
  mounted() {
    this.$root.$on("new-song-bro", data => {
      console.log(data);
      this.songs = data;
    });
  }
};
</script>

<style scoped>
</style>