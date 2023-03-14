import React from "react";
import U from './users.module.css'
import axios from 'axios';
 import userPhoto from '../../Images/userPhoto.png';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
             
        }
    }
    return <div >
        <button onClick={getUsers}>Get Users</button>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={U.item}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>отписаться</button>
                        : <button onClick={() => { props.follow(u.id) }}>подписаться</button>}
                </div>
            </span>

            <span>
                <span> <div>{u.name}</div> <div>u.status</div></span>
                <span><div>u.location</div> </span>
            </span>
        </div>)

        }
    </div>
}
export default Users;