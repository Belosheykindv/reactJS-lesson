import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import P from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostTextActionCreator, updateNewPostActionCreator } from '../../../Redux/profilePage-reducer';

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((p) => <Post postId={p.id} message={p.message} likesCount={p.likesCount} share={p.share} img={p.imgSrc} dispatch={props.dispatch} />);
  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostTextActionCreator())
  }
  const onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(newText))
  }
  return <div className={P.profile}>
    <div className={P.MyPostsClass}>
      <h3>My posts</h3>
      <div>
        <div><textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} placeholder='Введите сообщение' /></div>
        <div><button onClick={addPost}>Add post</button></div>
        {postsElements}
      </div>
    </div>
  </div>
}
export default MyPosts;