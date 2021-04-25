<template>
  <div class="self-section flex flex-d-c">
    <div class="section-title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:["title"]
}
</script>

<style scoped>
.self-section{
  margin: 10px;
}
.section-title{
  text-align: center;
  font-size: 20px;
  background-color: #44444455;
}
</style>