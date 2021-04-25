<template>
<div class="w-h-100">
  <!-- <div class="b-s-title">运维管理系统</div> -->
  <div class="b-s-content flex height-100">
    <div class="b-s-left width-20 flex flex-d-c">
      <self-section title="警报事件" class="flex-b-33">
        <!-- <simple-data :list="statusData"></simple-data> -->
        <funnel-charts class="w-h-100" :data="funnelData"></funnel-charts>
      </self-section>
      <self-section title="工单状态" class="flex-b-25">
        <div class="flex flex-d-c height-100">
          <simple-data :list="statusData"></simple-data>
          <div class="height-100 flex">
            <!-- <pie-charts class="height-100 width-50" :data="fitData"></pie-charts>
            <pie-charts class="height-100 width-50" :data="fitData2"></pie-charts> -->
          </div>
        </div>
      </self-section>
      <!-- <self-section title="工单状态" class="flex-b-25">
        <div class="flex flex-d-c height-100 flex-1">
          <line-charts class="flex flex-1" v-bind="countData"></line-charts>
        </div>
      </self-section> -->
      <self-section title="节点网络" class="flex-b-25">
        <div class="flex height-100">
          <pie-charts class="height-100 width-50" :data="fitData"></pie-charts>
          <pie-charts class="height-100 width-50" :data="fitData2"></pie-charts>
        </div>
      </self-section>
    </div>
    <div class="width-60 flex flex-d-c">
      <self-section title="近12月服务库变化" class="flex-b-75">
        <div class="relative flex flex-d-c height-100 flex-1">
          <div class="absolute top-left options">
            <a href="javascripe:;" class="margin-next-20" v-for="(item,index) in tabArr" :key="index" :class="{'active-tab':activeTabIndex === index}"  @click="tabClick(index)">{{item}}</a>
          </div>
          <map-charts class="flex flex-1" :data="mapData" @clickScatter="clickScatter"></map-charts>
          <!-- <line-charts class="flex flex-1" v-bind="countData"></line-charts> -->
          <el-dialog :visible.sync="dialogVisible" class="self-dialog" append-to-body>
            <self-table class="self-table" :tableHeader="tableHeader" :data="tableData" :max-height="800"></self-table>
          </el-dialog>
        </div>
      </self-section>
      <self-section title="近12月服务库变化" class="flex-b-25">
        <div ref="btmTable" class="flex flex-d-c w-h-100 flex-1">
          <!-- <line-charts class="flex flex-1" v-bind="countData"></line-charts> -->
          <self-table v-if="tableHeight>0" class="self-table" :tableHeader="tableHeader" :data="tableData" :max-height="tableHeight"></self-table>
        </div>
      </self-section>
    </div>
    <div class="flex flex-d-c width-20">
      
      <self-section title="近12月警报数量" class="flex-b-25">
        <div class="flex flex-d-c height-100">
          <bar-charts class="flex-1" v-bind="warningData"></bar-charts>
        </div>
      </self-section>
      <self-section title="节点状态" class="flex-b-50">
        <div class="flex flex-d-c height-100">
          <bar-charts class="flex-1" v-bind="warningData" col></bar-charts>
        </div>
      </self-section>
    </div>
  </div>
</div>
</template>

<script>
import selfSection from '@/components/section';
import simpleData from '@/components/simpleData';//类表格数据
import lineCharts from '@/components/charts/lineCharts';//折线图
import pieCharts from '@/components/charts/pie';//饼图
import barCharts from '@/components/charts/barChart';//柱状图
import funnelCharts from '@/components/charts/funnel';//漏斗图
import mapCharts from '@/components/charts/map';//地图
import selfTable from '@/components/table';//表格

import data from '@/utils/data.json';
import {setArrData} from '@/utils/chartEvent';
import {setTestMapData} from '@/utils/mapOption';

export default {
  name: 'Home',
  components: {
    selfSection,
    simpleData,
    lineCharts,
    pieCharts,
    barCharts,
    mapCharts,
    funnelCharts,
    selfTable
  },
  data(){
    return {
      title:"运维管理平台",
      statusData:data.statusData,
      mapData: data.mapData,
      fitData:data.fitData,
      fitData2:data.fitData2,
      onlineData:data.onlineData,
      warningData:data.warningData,
      funnelData:data.funnelData,
      countData:setArrData(data.countData,"day","value"),
      tabArr:["BGP","CX","DCI"],
      activeTabIndex:0,
      dialogVisible:false,
      tableHeight:0,
      tableHeader:[{//表头每项代表一列 label:描述 prop:对应行数据中的字段
        label:"a字段",
        prop:"a"
      },{
        label:"b字段",
        prop:"b"
      },{
        label:"c字段",
        prop:"c"
      }],
      tableData:[{//表格数据 
        a:"asd",
        b:"asd",
        c:"asd"
      },{
        a:"asd",
        b:"asd",
        c:"asd"
      },{
        a:"asd",
        b:"asd",
        c:"asd"
      },{
        a:"asd",
        b:"asd",
        c:"asd"
      },{
        a:"asd",
        b:"asd",
        c:"asd"
      },{
        a:"asd",
        b:"asd",
        c:"asd"
      },{
        a:"asd",
        b:"asd",
        c:"asd"
      },],
      interVal:null
    }
  },
  methods: {
    tabClick(index){
      this.interVal && window.clearInterval(this.interVal)
      this.activeTabIndex = index
      this.interVal = setInterval(() => {///轮播定时器
        this.activeTabIndex = (this.activeTabIndex+1)%this.tabArr.length
      }, 5000);
    },
    clickScatter(city){
      console.log(city);
      this.dialogVisible = true
      console.log(this.dialogVisible);
    },
    changeMapData(tabName){
      // this.mapData = this.mapData
      console.log(tabName);
      this.mapData = setTestMapData()

    }
  },
  mounted(){
    this.tableHeight = this.$refs.btmTable.clientHeight
    this.interVal = setInterval(() => {///轮播定时器
      this.activeTabIndex = (this.activeTabIndex+1)%this.tabArr.length

    }, 5000);
  },
  watch:{
    activeTabIndex(){
      this.changeMapData(this.tabArr[this.activeTabIndex])
    }
  }
}
</script>

<style>
/* .b-s-title{
  height: 10%;
}
.b-s-content{
  height: 90%;
} */
.self-dialog .el-dialog{
  background-color: #000000ad;
}
.el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar{
  display: none;
}
.el-table__body-wrapper.is-scrolling-none{
  margin-right: -17px;
}
.self-table .el-table th, .self-table .el-table tr{
  background-color: rgba(0, 0, 0, 0)
}
.self-table .el-table, .self-table .el-table__expanded-cell{
  background-color: rgba(0, 0, 0, 0)
}
.self-table .el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: rgba(0, 0, 0, 0)

}
.options{
  z-index: 1;
}
.active-tab{
  color: #19f;
}
.b-s-left{
  /* width: 25%; */
}
</style>
