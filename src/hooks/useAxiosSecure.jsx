import axios from 'axios';
import React from 'react';

let axiosSecure = axios.create({
    baseURL:`http://localhost:3000`
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;