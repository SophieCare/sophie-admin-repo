import instance from "./Interceptor"

const LOGIN = "v1/admin/login";
const USER_LISTING ="v1/admin/users"

export const login = (payload) =>{
    return instance.post(`${LOGIN}`,payload)
}

export const userlisting = (page,limit) => {
    return instance.get(`${USER_LISTING}?page=${page}&limit=${limit}`)
}