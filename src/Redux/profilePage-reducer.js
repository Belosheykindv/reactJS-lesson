const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
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

}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
           
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
                share: 2,
                imgSrc: 'https://sun9-north.userapi.com/sun9-86/s/v1/if1/ToKgJTe2mowC6RA731QdZv8-5CmN7JIgiRV8bg6AiaNy0OOWgb-U-SCAh7YgWTlFf_2QtaXt.jpg?size=791x1080&quality=96&type=album'
            };
            return {
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
        
            return {
                ...state,
                newPostText:action.text
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
        default: return state;
    }
}
export const addPostTextActionCreator = () => {
    return { type: 'ADD-POST' }
}
export const updateNewPostActionCreator = (newText) => {
    return { type: 'UPDATE-NEW-POST-TEXT', text: newText }
}
export const addPostLikeActionCreator = (postId) => {
    return { type: 'ADD-LIKE', postId: postId }
}
export default profileReducer;

