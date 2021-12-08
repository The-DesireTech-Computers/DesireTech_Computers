import axios from 'axios';


const insatnce = axios.create({
    baseURL:"http://localhost:4000/api/",
    headers:{
        'Content-Type': 'multipart/form-data',
        'token':localStorage.getItem('tokken'),
    }
});


export default insatnce;