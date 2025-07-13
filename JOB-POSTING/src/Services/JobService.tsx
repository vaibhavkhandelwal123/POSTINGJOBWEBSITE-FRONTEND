import axios from "axios";
const base_url = "http://localhost:8080/jobs/";
const getJob=async (id:any)=>{
        return await axios.get(`${base_url}get/${id}`)
        .then(result => result.data)
        .catch(error => {
            throw error;
        });  
}
const getAllJobs=async ()=>{
    return await axios.get(`${base_url}getAll`)
    .then(result => result.data)
    .catch(error => {
        throw error;
    });
}

const postJob =async (job:any)=>{
    return await axios.post(`${base_url}post`,job)
    .then(result => result.data)
    .catch(error => {
        throw error;
    });
}

const applyJob = async (jobId:any, applicant:any) => {
    return await axios.post(`${base_url}apply/${jobId}`, applicant)
    .then(result => result.data)
    .catch(error => {
        throw error;
    });
}

const getJobPostedBy = async (userId: any) => {
    return await axios.get(`${base_url}getJobPostedBy/${userId}`)
    .then(result => result.data)
    .catch(error => {
        throw error;
    });
}

const changeAppStatus = async (applicant:any) => {
    return await axios.post(`${base_url}changeAppStatus`, applicant)
    .then(result => result.data)
    .catch(error => {
        throw error;
    });
}

export {getJob,getAllJobs,postJob,applyJob,getJobPostedBy,changeAppStatus};