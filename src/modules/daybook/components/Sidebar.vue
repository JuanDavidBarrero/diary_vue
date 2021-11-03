<template>
  <aside class="daybook__sidebar">
    <input type="text" placeholder="Buscar entry" />

    <div class="daybook__entry" v-for="item in 10" :key="item">
      <div class="entry">
          <div class="daybook__entrytile">
            <span>15</span>
            <span>Julio</span>
            <p>2021,jueves</p>
          </div>
          <div class="daybook__entry__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            provident ullam voluptas accusantium aspernatur beatae, ab quas itaque
            tenetur corporis, repudiandae id sint culpa quae aliquam ipsam
            exercitationem, fugiat illo.
          </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

