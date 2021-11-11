<template>
  <div
    class="entry"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="daybook__entrytile">
      <span>{{day}}</span>
      <span>{{ month }}</span>
      <p>{{year}}</p>
    </div>
    <div class="daybook__entry__body">
      {{ shorText }}
    </div>
  </div>
</template>


<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shorText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getDate()];
    },
    year() {
      const date = new Date(this.entry.date);
      return `${date.getFullYear()},${days[date.getDay()]}`
    },
  },
};
</script>