<template>
  <button class="btn-float">
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