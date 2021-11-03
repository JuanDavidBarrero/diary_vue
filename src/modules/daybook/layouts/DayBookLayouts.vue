<template>
  <Navbar />

  <Sidebar />

  <main class="daybook__main">
    Contenido principal
  </main>
</template>


<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    Sidebar: defineAsyncComponent(() => import("../components/Sidebar.vue")),
  },
};
</script>