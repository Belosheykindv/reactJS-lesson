import React from 'react';
import { connect } from 'react-redux';
import { addPostTextActionCreator, updateNewPostActionCreator, addPostLikeActionCreator } from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//   const addLike = (postID) => {
//     props.dispatch(addPostLikeActionCreator(postID))
//   }
//   const addPost = () => {
//     props.dispatch(addPostTextActionCreator())
//   }
//   const onPostChange = (newText) => {
//     // let newText = newPostElement.current.value;
//     props.dispatch(updateNewPostActionCreator(newText))
//   }
//   return <MyPosts
//     updateNewPostActionCreator={onPostChange}
//     newPostElement={props.store.newPostElement}
//     posts={props.store.profilePage.posts}
//     addPost={addPost}
//     addLike={addLike} />
// }

const mapStateToProps = (state) => {
  return {
    profilePage:(state.profilePage)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postID) => { dispatch(addPostTextActionCreator(postID)) },
    addLike: (postID) => { dispatch(addPostLikeActionCreator(postID)) },
    updateNewPostActionCreator: (newText) => { dispatch(updateNewPostActionCreator(newText)) }

  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;