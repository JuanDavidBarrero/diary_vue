<template>
  <div class="daybook__noEntry">
    <h1>No hay nada selecionado</h1>
  </div>
  <Fab/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/FAB.vue")),
  },
};
</script>

<style>
</style>