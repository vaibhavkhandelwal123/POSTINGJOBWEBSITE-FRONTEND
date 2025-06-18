import axios from "axios";
const base_url = "http://localhost:8080/users/";
const registerUser=async (user:any)=>{
    try {
        const res = await axios.post(`${base_url}register`, user);
        return res.data;
    } catch (error) {
        throw error;
    }
}
const loginUser=async (user:any)=>{
    try {
        const res = await axios.post(`${base_url}login`, user);
        return res.data;
    } catch (error) {
        throw error;
    }
}
const forgotUser=async (user:any)=>{
    try {
        const res = await axios.post(`${base_url}forgot`, user);
        return res.data;
    } catch (error) {
        throw error;
    }
}
const sendOtp = async (email: any) => {
    try {
        const res = await axios.post(`${base_url}sendOtp/${email}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const verifyOtp = async (email: any, otp: any) => {
    try {
        const res = await axios.get(`${base_url}verifyOtp/${email}/${otp}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export {registerUser, loginUser,forgotUser, sendOtp, verifyOtp};