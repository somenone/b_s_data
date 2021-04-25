<template>
  <div class="flex flex-d-c align-i-c width-33 margin-c-20">
    <div class="simple-data-label">{{label}}</div>
    <div class="simple-data-value c-db">{{value}}</div>
  </div>
</template>

<script>
export default {
  props:["label","value"]
}
</script>