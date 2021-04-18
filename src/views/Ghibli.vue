<template>
  <div>
    <ghibli-search-form />
    <ghibli-list> </ghibli-list>
  </div>
</template>

<script>
import GhibliSearchForm from "@/components/ghibli/GhibliSearchForm.vue";
import GhibliList from "@/components/ghibli/GhibliList.vue";

export default {
  components: { GhibliSearchForm, GhibliList }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>