<template>
  <div class="flex flex-wrap">
    <simple-item v-for="(item,index) in list" :key="index" :label="item.label" :value="item.value"></simple-item>
  </div>
</template>

<script>
import simpleItem from "./components/item";

export default {
  components: { simpleItem },
  props:["list"]
};
</script>