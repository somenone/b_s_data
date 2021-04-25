import request from '@/utils/request';

export function submitFlow(data){
  return request({
    url:"/itsmApp/api/flow/submitFlow",
    method:"post",
    data:data
  })
}
