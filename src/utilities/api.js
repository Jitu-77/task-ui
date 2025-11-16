import api from './apiInstance.js'

export const PostResponse = async(url,payload) =>{
    try {
        const isFormData = payload instanceof FormData;
        const config = isFormData
      ? { headers: { 'Content-Type': 'multipart/form-data' } }
      : {'Content-Type': 'application/json'};
        console.log(isFormData,"IS FORM DATA")
        console.log(url,payload)
        const postResponse = await api.post(url,payload,config)
        return postResponse?.data
    } catch (error) {
         return error.message;
    }
}

export const GetResponse = async(url)=>{
    try {
        const config = {'Content-Type': 'application/json'};
        const getResponse = await api.get(url)
        return getResponse?.data
    } catch (error) {
        return error.message
    }
}

export const GetByIdResponse = async(url)=>{
    try {
        const config = {'Content-Type': 'application/json'};
        const getResponse = await api.get(url)
        return getResponse?.data
    } catch (error) {
        return error.message
    }
}

export const UpdateByIdResponse = async(url,payload) =>{
    try {
        const config = {'Content-Type': 'application/json'}
        const patchResponse = await api.patch(url,payload)
        return patchResponse?.data
    } catch (error) {
        return error.message
    }
}

export const DeleteByIdResponse = async(url) =>{
    try {
        const config = {'Content-Type': 'application/json'}
        const deleteResponse = await api.delete(url)
        return deleteResponse?.data
    } catch (error) {
        return error.message
    }
}

