<template>
  <aside class="daybook__sidebar">
    <input type="text" placeholder="Buscar entry" v-model="term" />

    <div class="daybook__entry" v-for="entry in entriesByTerm" :key="entry.id">
      <Entry :entry="entry" />
    </div>
  </aside>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntryByTerm"]),
    entriesByTerm() {
      return this.getEntryByTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
  },
};
</script>

