import React, { createRef } from 'react';
import P from './Post.module.css';
import { addPostLikeActionCreator } from '../../../../Redux/profilePage-reducer';
const Post = (props) => {

  let onAddLike = () => {
    let postId = props.postId
    props.addLike(postId)
  }
  return <div key={props.postId} className={P.item}>
    <div>
      <img src={props.img}></img>
      {props.message}
    </div>
    <div>
      <button onClick={onAddLike}><span>Лайк</span></button>
      {props.likesCount}
      <button>Репост</button><span>{props.share}</span>
    </div>
  </div>

}
export default Post;