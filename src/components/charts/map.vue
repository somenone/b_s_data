<template>
<div class="w-h-100">
  <!-- <div class="absolute top-left">testtstst</div> -->
  <div ref="chartMain" class="w-h-100">
    
  </div>
</div>
</template>

<script>

import {getCoordData,mapOption,centerPoint} from '@/utils/mapOption';
// require('echarts/extension/bmap/bmap');
// import 'echarts/extension/bmap/bmap'
// import loadBMap from '@/utils/importBmap';
import '@/utils/china';
// import '@/utils/province/shanghai.js';
// import '@/utils/province/anhui';
// import '@/utils/province/*';
const importAll=(requireContext)=>
	requireContext.keys().forEach(requireContext)
	
importAll(require.context('@/utils/province/', true, /\.js$/))

// import '@/utils/china.json';


export default {
  props:["data","clickScatter","provinceClick","nowMap"],
  data(){
    return {
      chart:null,
      options:mapOption,
      back:{
        name:"china",
        center:[105, 36]
      }
    }
  },
  methods: {
    updateData(){
      this.options.series[1].data = getCoordData(this.data)
      this.chart&&this.chart.setOption(this.options)
    },
    clickGeo(name){
      this.nowMap.name = name
      this.options.geo.map = name
      this.options.geo.center = centerPoint[name]
      this.updateData()
      this.$emit("provinceClick",name)

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
        this.$emit("clickScatter",params.name)
      }
      if(params.componentType === "geo"){
        this.clickGeo(params.name)
      }
      // switch (params.componentSubType) {
      //   case "scatter":
      //     this.$emit("clickScatter",params.name)
      //     break;
      //   case "geo":
      //     // this.$emit("clickScatter",params.name)
      //     break;
      
      //   default:
      //     break;
      // }
      
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
    },
    nowMap:{
      handler(){
        this.clickGeo(this.nowMap.name)
      },
      deep:true
    }
  }
}
</script>

<style>
.anchorBL{
  display:none;
} 
</style>
