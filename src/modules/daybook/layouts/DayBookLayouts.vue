<template>
  <Navbar />

  <Sidebar />

  <main class="daybook__main">
    <router-view/>
  </main>
</template>


<script>
import { defineAsyncComponent } from "vue";
import {mapActions} from 'vuex'
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    Sidebar: defineAsyncComponent(() => import("../components/Sidebar.vue")),
  },
  methods:{
    ...mapActions('journal',['loadEntries'])
  },
  created(){
    this.loadEntries();
  }
};
</script>