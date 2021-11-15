<template>
  <button class="btn-float" @click="$emit('on:click')">
      <i :class="`fa fa-2x ${icon}`"></i>
  </button>
</template>


<script>
export default {
  props: {
    icon:{
      type:String,
      default: 'fa-plus'
    }
  }
}
</script>