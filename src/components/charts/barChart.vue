<template>
  <div ref="chartMain" class="">
    
  </div>
</template>

<script>

export default {
  props:["data","xAxis","col"],
  data(){
    return {
      chart:null,
      options:JSON.parse(JSON.stringify(this.$chartsOptions.barChart))
    }
  },
  created(){
    // let {lineChart:options} = this.$chartsOptions
    // this.options = options
  },
  mounted(){
    if(this.col||this.col === ''){
      let [x,y] = [this.options.xAxis,this.options.yAxis]
      this.options.yAxis = x
      this.options.xAxis = y
    } 
    // optinos.series.data = this.options
    this.chart = this.$echarts.init(this.$refs.chartMain,null,{
      width:"auto",
      height:"auto"
    })
    this.xAxis?this.options.xAxis.data = this.xAxis:null
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