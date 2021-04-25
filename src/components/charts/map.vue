<template>
  <div ref="chartMain" class="w-h-100">
    
  </div>
</template>

<script>

import {getCoordData,mapOption} from '@/utils/mapOption';
// require('echarts/extension/bmap/bmap');
// import 'echarts/extension/bmap/bmap'
// import loadBMap from '@/utils/importBmap';
import '@/utils/china';
// import '@/utils/china.json';


export default {
  props:["data","clickScatter"],
  data(){
    return {
      chart:null,
      options:mapOption
    }
  },
  methods: {
    updateData(){
      this.options.series[1].data = getCoordData(this.data)

      this.chart&&this.chart.setOption(this.options)
    }
  },
  created(){
    // let {lineChart:options} = this.$chartsOptions
    // this.options = options
  },
  async mounted(){
    // await loadBMap()
      // optinos.series.data = this.options
    this.chart = this.$echarts.init(this.$refs.chartMain,null,{
      width:"auto",
      height:"auto"
    })
    this.chart.on("click",(params) => {
      console.log(params);
      if(params.componentSubType === "scatter"){
        console.log(params.name);
        this.$emit("clickScatter",params.name)
      }
    })
    // this.xAxis?this.options.xAxis.data = this.xAxis:null
    // this.c_updateData()
    this.$nextTick(()=>{
      this.updateData()
    })
    
  },
  watch:{
    data:{
      handler(n){
        // this.c_updateData()
        this.updateData()
      },
      immediate:true
    }
  }
}
</script>

<style>
.anchorBL{
  display:none;
} 
</style>
