import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";

class Dialogs extends React.Component {
    constructor(props) {
        super(props);
        this.messageArea = React.createRef();
    }
    addMessage = () => {
        this.props.addDialogMessage()
    };
    onDialogMessageChange = () => {

        let text = this.messageArea.current.value;
        this.props.dialogMessageChange(text)
    };

    render() {
        let state = (this.props.dialogsPage);
        let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} key={d.id} />);
        let messageElement = state.messages.map(m => <Message message={m.message} key={m.id} />);
        if (this.props.auth === false) return <Navigate  to={'/login'}/>
        return (
            <nav className={s.dialogs}>
                <div >
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    <div><textarea

                        onChange={this.onDialogMessageChange}
                        ref={this.messageArea}
                        value={state.newDialogText}
                        placeholder='Введите сообщение' /></div>
                    <div>
                        <button className={s.button} onClick={this.addMessage}>Отправить сообщение</button>
                    </div>
                    {messageElement}
                </div>
                <div className={s.messages}>Здесь могла бы быть ваша реклама</div>
            </nav>
        )
    }
}

//     const Dialogs = (props) => {
//         let state = (props.dialogsPage)

//         let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} key={d.id} />);
//         let messageElement = state.messages.map(m => <Message message={m.message} key={m.id} />);
//         let newDialogElement = React.createRef();

//         let addMessage = () => {
//             props.addDialogMessage();
//         }
//         let onDialogMessageChange = () => {
//             let text = newDialogElement.current.value;
//             props.dialogMessageChange(text);
//         }

//     return (<nav className={s.dialogs}>
//         <div >
//             {dialogElements}
//         </div>
//         <div className={s.messages}>
//             <div><textarea onChange={onDialogMessageChange} ref={newDialogElement} value={state.newDialogText} placeholder='Введите сообщение' /></div>
//             <div>
//                 <button className={s.button} onClick={addMessage}>Отправить сообщение</button>
//             </div>
//             {messageElement}
//         </div>
//         <div className={s.messages}>Здесь могла бы быть ваша реклама</div>
//     </nav>
//     )
// }
export default Dialogs;