import fetch from 'isomorphic-fetch';
import qs from 'qs';

let baseURI = 'http://localhost:3000'
export const fetchGet = (url,params)=>{
  return fetch(`${baseURI+url}?${qs.stringify(params)}`)
     .then(response=> response.json())
     .then(json=>{
        return checkStatus(json)
     })
     .catch(catchError);
}

export const fetchPost = (url,data)=>{
  return fetch(baseURI+url,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
     .then(response=> response.json())
     .then(json=>{
        return checkStatus(json)
     })
     .catch(catchError);
}

function catchError(error) {
  const { response } = error
  if (!response) {
    console.log(error)
    return
  }
  if (response.status === 401) {
    //message.error('请重新登录！')
    // 线上环境，刷新页面以重定向到登录页面
    process.env.NODE_ENV === 'production' && location.reload()
  } else if (response.status === 403) {
    //message.error('你缺少相关权限，部分功能无法使用')
  }
}

function checkStatus(response) {
  if (response.code >= 200 && response.code < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}