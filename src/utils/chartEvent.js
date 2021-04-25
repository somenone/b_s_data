export function updateData(){

  if(this.data&&this.data[0] instanceof Array){
    this.options.series.forEach((item,index) => {
      item.data = this.data[index]
    });
  }else{
    this.options.series[0].data = this.data
  }
  this.chart&&this.chart.setOption(this.options)
}


export function setArrData(data,xk,valuek){
  let x = []
  let values = []
  for (const item of data) {
    x.push(item[xk||"label"])
    values.push(item[valuek||"value"])
  }
  return {
    xAxis:x,
    data:values
  }
}