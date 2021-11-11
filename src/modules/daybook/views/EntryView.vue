<template>
  <header class="daybook__header_entry">
    <div class="daybook__date">
      <span>15</span>
      <span>Julio</span>
      <p>2021 jueves</p>
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

  <textarea placeholder="¿Que sucedio hoy?"></textarea>
  <img
    src="https://image.freepik.com/vector-gratis/lobo-cabeza-mascota-vector-logo_41786-33.jpg"
    alt="No hay imagen"
  />
  <Fab icon="fa-save"/>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
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
}

textarea:focus {
  outline: none;
}


img{
  border: 1px solid black;
  box-shadow: 1px 5px 6px 2px rgba(0, 0, 0, 0.6);
  height: 150px;
  width: 150px;
  bottom: 120px;
  right: 30px;
  position: fixed;
}
</style>

