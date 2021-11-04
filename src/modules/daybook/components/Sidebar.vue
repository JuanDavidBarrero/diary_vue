<template>
  <aside class="daybook__sidebar">
    <input type="text" placeholder="Buscar entry" />

    <div class="daybook__entry" v-for="item in 10" :key="item">
      <Entry />
    </div>
  </aside>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

