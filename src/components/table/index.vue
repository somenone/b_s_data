<template>
  <div>
    <el-table :data="data" @row-dblclick="inrowDbclick" :max-height="maxHeight">
      <!-- <el-table-column prop="name" label="更新时间" width="80"> </el-table-column> -->
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :label="item.label"
        :prop="item.prop || 'name'"
        :width="item.width"
        :min-width="item.minWidth"
        :fixed="item.fixed"
      >
        <template v-if="item.slot" v-slot="elslot">
          <slot
            :name="item.slot"
            :scope="{
              row: elslot.row,
              store: elslot.store,
              $index: elslot.$index,
              column: elslot.column,
            }"
          ></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["data", "tableHeader","fixed","rowDbclick","maxHeight"],
  methods: {
    inrowDbclick(row,column,event){
      this.$emit("rowDbclick",row,column,event)
    }
  },
};
</script>