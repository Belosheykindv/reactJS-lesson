import React, { createRef } from 'react';
import P from './Post.module.css';
import { addPostLikeActionCreator } from '../../../../Redux/profilePage-reducer';
const Post = (props) => {

  let addLike = () => {
    let postId = props.postId
    props.dispatch(addPostLikeActionCreator(postId))
  }
  return <div key={props.postId} className={P.item}>
    <div>
      <img src={props.img}></img>
      {props.message}
    </div>
    <div>
      <button onClick={addLike}><span>like</span></button>
      {props.likesCount}
      <button>Share</button><span>{props.share}</span>
    </div>
  </div>

}
export default Post;