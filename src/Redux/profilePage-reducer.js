import { profileAPI } from "../Api/apiRequest";
import { stopSubmit } from "redux-form";
const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const UPDATE_ABOUT_ME = 'UPDATE_ABOUT_ME';
const SET_USER_ABOUT_ME = 'SET_USER_ABOUT_ME'
const UPDATE_PROFILE_PHOTO = 'UPDATE_PROFILE_PHOTO'
let initialState = {
    posts: [
        { id: 1, message: 'Reducers 1', likesCount: 11, share: 777, imgSrc: 'https://project-nerd.com/wp-content/uploads/2020/05/ang.jpeg' },
        { id: '2', message: 'Hello world 2', likesCount: 22, share: 333, imgSrc: 'https://krot.info/uploads/posts/2022-01/1642691161_2-krot-info-p-dzheison-stetkhem-art-2.jpg' },
        { id: '3', message: 'Hello world 3', likesCount: 33, share: 5335, imgSrc: 'https://coolsen.ru/wp-content/uploads/2021/06/76-6.jpg' },
        { id: '4', message: 'Hello world 4', likesCount: 44, share: 33, imgSrc: 'https://skitalets.ru/upload/main/b96/b9622a5ce9ca6a011e99ee48a1a2b30b.png' },
        { id: 5, message: 'Hello world 5', likesCount: 55, share: 33, imgSrc: 'https://catherineasquithgallery.com/uploads/posts/2021-03/thumbs/1614604937_99-p-avatarki-na-belom-fone-117.jpg' }
    ],
    users: [
        { id: 1, name: 'Alina', imgSrc: 'https://project-nerd.com/wp-content/uploads/2020/05/ang.jpeg' },
        { id: 2, name: 'Denis', imgSrc: 'https://krot.info/uploads/posts/2022-01/1642691161_2-krot-info-p-dzheison-stetkhem-art-2.jpg' },
        { id: 3, name: 'Egor', imgSrc: 'https://coolsen.ru/wp-content/uploads/2021/06/76-6.jpg' },
        { id: 4, name: 'Oleg', imgSrc: 'https://skitalets.ru/upload/main/b96/b9622a5ce9ca6a011e99ee48a1a2b30b.png' },
        { id: 5, name: 'Kristina', imgSrc: 'https://catherineasquithgallery.com/uploads/posts/2021-03/thumbs/1614604937_99-p-avatarki-na-belom-fone-117.jpg' }
    ],
    newPostText: '',
    profile: null,
    profileStatus: '',
    aboutMe: '',
    photo: null,
    editModeAboutMe: false

}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0,
                share: 2,
                imgSrc: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d61321a5-9a02-4f46-b718-70e3c4260d66-profile_image-70x70.png'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case ADD_LIKE: {
            console.log(action.postId)
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            };
            stateCopy.post = stateCopy.posts.find(p => p.id === action.postId)
            if (!stateCopy.post) return
            stateCopy.post.likesCount += 1;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_PROFILE_STATUS: {
            return { ...state, profileStatus: action.profileStatus }
        }
        case SET_USER_ABOUT_ME: {
            return { ...state, aboutMe: action.aboutMe }
        }
        // case UPDATE_ABOUT_ME: {
        //     return {
        //         ...state, profile: {
        //             ...state.profile, profile: action.profileAboutMe
        //         }
        //     }
        // }
        case UPDATE_PROFILE_PHOTO: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        default: return state;
    }
}
export const addPostTextActionCreator = (newPostText) => {
    return { type: ADD_POST, newPostText }
}
export const addPostLikeActionCreator = (postId) => {
    return { type: ADD_LIKE, postId: postId }
}
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const setUserProfileStatus = (profileStatus) => {
    return { type: SET_USER_PROFILE_STATUS, profileStatus }
}
export const setUserAboutMe = (aboutMe) => {
    return { type: SET_USER_ABOUT_ME, aboutMe }
}
// export const updateProfileAboutMee = (profileAboutMe) => {
//     return { type: UPDATE_ABOUT_ME, profileAboutMe };
// }
export const updateProfilePhoto = (photos) => {
    return { type: UPDATE_PROFILE_PHOTO, photos };
}

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}
export const getUserProfileStatus = (userId) => (dispatch) => {
    profileAPI.getUserProfileStatus(userId).then(data => {
        dispatch(setUserProfileStatus(data));
    });
}
export const getUserAboutMe = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserAboutMe(data.aboutMe));
    });
}
export const updateUserProfileStatus = (status) => (dispatch) => {
    profileAPI.updateUserProfileStatus(status).then(respone => {
        if (respone.resultCode === 0) {
            dispatch(setUserProfileStatus(status))
        }
    }
    )
}

export const updateAboutMe = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.updateAboutMe(profile)
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        const messages = response.messages;
        if (messages.length === 0) return
        const contactsKeys = Object.keys(profile.contacts);
        const errors = {};
        contactsKeys.forEach((key) => {
            const errorMessage = messages.find((error) => {
                return error.toLowerCase().includes(key)
            })
            if (errorMessage) {
                errors[key] = errorMessage
            }
        })

        dispatch(stopSubmit('aboutMe', { 'contacts': errors }));
        return Promise.reject(errors)
    }

}
export const updateUserPhoto = (photos) => async (dispatch) => {
    const response = await profileAPI.updateUserPhoto(photos)
    if (response.resultCode === 0) { dispatch(updateProfilePhoto(response.data.photos)) }
}

export default profileReducer;

