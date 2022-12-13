import React from 'react';
import P from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return <div className={P.profile}>
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
       <Post text='Hello world 1' likesCount='2'/>
       <Post text='Hello world 2' likesCount='4'/>
       <Post text='Hello world 3'/>
      </div>
    </div>
  </div>
}
export default MyPosts;