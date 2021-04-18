<template>
  <div class="contact">
    <tunes-search-form />
    <tunes-list> </tunes-list>
  </div>
</template>

<script>
import TunesSearchForm from "@/components/tunes/TunesSearchForm.vue";
import TunesList from "@/components/tunes/TunesList.vue";
export default {
  components: {
    TunesSearchForm,
    TunesList
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>