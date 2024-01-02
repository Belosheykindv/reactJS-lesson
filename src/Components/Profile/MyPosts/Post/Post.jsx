import React, { createRef } from 'react';
import P from './Post.module.scss';
import { addPostLikeActionCreator } from '../../../../Redux/profilePage-reducer';
const Post = (props) => {
  let onAddLike = () => {
    let postId = props.postId
    props.addLike(postId)
  }
  return <div key={props.postId} className={P.item}>
    <div className={P.post}>
      <img className={P.img} src={props.img}></img>
      <span className={P.message}>&nbsp; {props.message}</span>
    </div>
    <div>
      <button onClick={onAddLike}><span>Лайк</span></button> {props.likesCount}
      <button>Репост</button><span>{props.share}-клюс - {props.postId}</span> 
    </div>
  </div>


}
export default Post;