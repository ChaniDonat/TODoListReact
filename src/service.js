import axios from 'axios';
import { Item } from './Item';
import config from './config.default';

const apiUrl = config.apiUrl;
console.log(process.env.API_URL);


let result =[{}]

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
     result = (await axios.get(`${apiUrl}/items`)).data    
    return result;
  },

  addTask: async(name)=>{
     const newItem = new Item();
    await newItem.setName(name);
    return await axios.post(`${apiUrl}/items`, newItem);

    console.log('addTask', name)
  },

  setCompleted: async(id, isComplete)=>{
    const response =  await axios.put(`${apiUrl}/items/${id}?IsComplete=${isComplete}`);
    console.log('setCompleted', {id, isComplete})
    return {};
  },

  deleteTask:async(id)=>{
    console.log(`${apiUrl}/items/${id}`);
    return await axios.delete(`${apiUrl}/items/${id}`)

    console.log('deleteTask')
  }
};
