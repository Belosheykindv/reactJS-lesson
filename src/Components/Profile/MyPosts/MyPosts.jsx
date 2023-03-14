import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import P from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let state = (props.profilePage)
  let postsElements = state.posts.map((p) => <Post postId={p.id} message={p.message} likesCount={p.likesCount} share={p.share} img={p.imgSrc} addLike={props.addLike} key={p.id} />);
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.updateNewPostActionCreator(newText);
  }
  let onAddPost = () => {
    props.addPost();
  }
  return <div className={P.profile}>
    <div className={P.MyPostsClass}>
      <h3>My posts</h3>
      <div>
        <div><textarea onChange={onPostChange} ref={newPostElement} value={state.newPostText} placeholder='Введите сообщение' /></div>
        <div><button onClick={onAddPost}>Add post</button></div>
        {postsElements}
      </div>
    </div>
  </div>
}
export default MyPosts;