import axios from 'axios';
let base='';
export const getUserList=params=>{axios.get(`${base}/user/list`,{params:params})}
export const getUserListPage=params=>{return axios.get(`${base}/user/listpage`,{params:params})}
export const updateUser=params=>{return axios.get(`${base}/user/update`,{params:params})}
export const deleteUser=params=>{return axios.get(`${base}/user/delete`,{params:params})}
