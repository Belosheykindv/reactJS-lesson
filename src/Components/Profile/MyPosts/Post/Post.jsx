import React from 'react';
import P from './Post.module.css';
const Post = (props) => {
  return <div className={P.item}> <img src='https://project-nerd.com/wp-content/uploads/2020/05/ang.jpeg'></img>
    {props.text}
    <div>
      <span>like</span> {props.likesCount}
      
    </div>


  </div>

}
export default Post;