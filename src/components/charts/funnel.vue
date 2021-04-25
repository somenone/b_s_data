<template>
  <div ref="chartMain" class="">
    
  </div>
</template>

<script>

export default {
  props:["data"],
  data(){
    return {
      chart:null,
      options:JSON.parse(JSON.stringify(this.$chartsOptions.funnelChart))
    }
  },
  created(){
    // let {lineChart:options} = this.$chartsOptions
    // this.options = options
  },
  mounted(){
    // optinos.series.data = this.options
    this.chart = this.$echarts.init(this.$refs.chartMain,null,{
      width:"auto",
      height:"auto"
    })
    // this.xAxis?this.options.xAxis.data = this.xAxis:null
    this.c_updateData()
  },
  watch:{
    data:{
      handler(n){
        this.c_updateData()
      },
      immediate:true
    }
  }
}
</script>