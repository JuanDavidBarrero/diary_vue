<template>
  <div v-if="entry">
    <header class="daybook__header_entry">
      <div class="daybook__date">
        <span>{{ day }}</span>
        <span>{{ month }}</span>
        <p>{{ year }}</p>
      </div>
      <div>
        <button class="btn-second danger">
          Borrar
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn-second primary">
          Subir foto
          <i class="fas fa-upload"></i>
        </button>
      </div>
    </header>
    <hr />
    <textarea placeholder="¿Que sucedio hoy?" v-model="entry.text"></textarea>
    <img
      src="https://image.freepik.com/vector-gratis/lobo-cabeza-mascota-vector-logo_41786-33.jpg"
      alt="No hay imagen"
    />
    <Fab icon="fa-save" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      entry: null,
    };
  },

  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    year() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },

  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) this.$router.push({ name: "no-entry" });
      this.entry = entry;
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
  },

  components: {
    Fab: defineAsyncComponent(() => import("../components/FAB.vue")),
  },
};
</script>

<style scoped>
textarea {
  padding: 10px;
  width: 100%;
  height: 800px;
  border: none;
  resize: none;
  font-size: 20px;
}

textarea:focus {
  outline: none;
}

img {
  border: 1px solid black;
  box-shadow: 1px 5px 6px 2px rgba(0, 0, 0, 0.6);
  height: 150px;
  width: 150px;
  bottom: 120px;
  right: 30px;
  position: fixed;
}
</style>

