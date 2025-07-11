import axios from "axios";
const base_url = "http://localhost:8080/profiles/";
const getProfile=async (id:number)=>{
        return await axios.get(`${base_url}get/${id}`)
        .then(result => result.data)
        .catch(error => {
            throw error;
        });  
}
const updateProfile=async (profile:any)=>{
        return await axios.put(`${base_url}update`, profile)
        .then(result => result.data)
        .catch(error => {
            throw error;
        });  
}
const getAllProfiles=async ()=>{
    return await axios.get(`${base_url}getAll`)
    .then(result => result.data)
    .catch(error => {
        throw error;
    });
}
export {getProfile,updateProfile,getAllProfiles};