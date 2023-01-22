import React from 'react';
import P from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
 
  let postsElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} share={p.share}/>);

  return <div className={P.profile}>
    <div className={P.MyPostsClass}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
       { postsElements }
      </div>
    </div>
  </div>
}
export default MyPosts;