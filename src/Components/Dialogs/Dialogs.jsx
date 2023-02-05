import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { addDialogMessageActionCreator, onDialoMessageChangeActionCreator } from "../../Redux/dialogPage-reducer";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} />);
    let messageElement = props.state.messages.map(m => <Message message={m.message} />);
    let newDialogElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addDialogMessageActionCreator());
    }
    let onDialogMessageChange = () => {
        let text = newDialogElement.current.value;
        props.dispatch(onDialoMessageChangeActionCreator(text));
    }

    return (<nav className={s.dialogs}>
        <div >
            {dialogElements}
        </div>
        <div className={s.messages}>
            <div><textarea onChange={onDialogMessageChange} ref={newDialogElement} value={props.state.newDialogText} placeholder='Введите сообщение' /></div>
            <div>
                <button className={s.button} onClick={addMessage}>Отправить сообщение</button>
            </div>
            {messageElement}
        </div>
        <div className={s.messages}>Здесь могла бы быть ваша реклама</div>
    </nav>
    )
}
export default Dialogs;