<template>
  <div>
    <li>{{ song | songify }}</li>
    <img v-if="song.cover" :src="song.cover" alt="" />
    <figure>
      <figcaption>Slyšte, slyšte</figcaption>
      <audio controls :src="song.audioFile">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  </div>
</template>

<script>
export default {
  props: ["song"],
  filters: {
    songify: function(song) {
      return song.artist + ": " + song.name;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>