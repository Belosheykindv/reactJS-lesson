const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
                share: 2,
                imgSrc: 'https://sun9-north.userapi.com/sun9-86/s/v1/if1/ToKgJTe2mowC6RA731QdZv8-5CmN7JIgiRV8bg6AiaNy0OOWgb-U-SCAh7YgWTlFf_2QtaXt.jpg?size=791x1080&quality=96&type=album'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_LIKE:
            console.log(action.postId)
            state.post = state.posts.find(p => p.id === action.postId)
            if (!state.post) return
            state.post.likesCount += 1;
            return state;
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

