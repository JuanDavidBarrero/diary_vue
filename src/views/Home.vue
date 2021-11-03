<template>
  <h2>Home</h2>

  <button @click="gotoDaybook">Hola</button>
  <button @click="gotoDaybook">como</button>
  <button @click="gotoDaybook">estas</button>
</template>

<script>
export default {
  methods: {
    gotoDaybook() {
      this.$router.push({ name: "daybook" });
    },
  },
};
</script>
