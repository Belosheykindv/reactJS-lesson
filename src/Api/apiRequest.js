import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': 'd79b7d16-0a4f-4534-8f76-b96d60b582a1' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const userAPI = {
    getUsers: async (pageSize, pagesCount) => {
        const response = await instance.get(`users?count=${pageSize}&page=${pagesCount}`);
        return response.data.items;
    },
    getTotalusersCount: async () => {
        const response = await instance.get(`users`)
        return response.data.totalCount
    },
    getPageUsers: async (pageSize, truePage) => {
        const response = await instance.get(`users?count=${pageSize}&page=${truePage}`);
        return response.data;
    }

}
export const followAPI = {
    delete: async (userId) => {
        const response = await instance.delete(`follow/${userId}`)
        return response.data;
    },

    post: async (userId) => {
        const response = await instance.post(`follow/${userId}`)
        return response.data;
    }
}
export const authAPI = {
    auth: async () => {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    login: async (email, password, rememberMe) => {
        const response = await instance.post(`auth/login`, { email, password, rememberMe })
        return response.data
    },
    logout: async () => {
        const response = await instance.delete(`auth/login`)
        return response.data
    }
}
export const profileAPI = {
    getUserProfile: async (userId) => {
        const response = await instance.get(`profile/` + userId)
        return response.data
    },
    getUserProfileStatus: async (userId) => {
        const response = await instance.get(`profile/status/` + userId);
        return response.data;
    },
    updateUserProfileStatus: async (status) => {
        const response = await instance.put(`profile/status`, { status });
        return response.data;
    },
    // updateAboutMe: async (lookingForAJobDescription, fullName, aboutMe) => {
    //     const response = await instance.put(`profile`, { lookingForAJobDescription, fullName, aboutMe });
    //     return response.data;
    // },
    updateAboutMe: async (profile) => {
        const response = await instance.put(`profile`, profile);
        return response.data;
    },
    updateUserPhoto: async (photo) => {
        const formData = new FormData();
        formData.append("image", photo);
        const response = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data

    }
}
