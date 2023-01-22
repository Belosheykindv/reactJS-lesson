import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
 
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElement = props.state.messages.map(m => <Message message={m.message} />);

    return (<nav className={s.dialogs}>
        <div >
            {dialogElements}
        </div>
        <div className={s.messages}>
            {messageElement}
        </div>
    </nav>
    )
}
export default Dialogs;