import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../Utils/Validators/validators";
import { FormCreate, TextArea } from "../Common/FormControls/formControls";

const Dialogs = (props) => {
    // const messageArea = React.createRef();
    const addMessage = (values) => {
        props.addDialogMessage(values.newMessageBody)
    };
    let state = (props.dialogsPage);
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} imgSrc={d.imgSrc} key={d.id} />);
    let messageElement = state.messages.map(m => <Message message={m.message} key={m.id} />);
    if (props.auth === false) return <Navigate to={'/login'} />
    return (
        <nav className={s.dialogs}>
            <div >
                {dialogElements}
            </div>
            <div className={s.messages}>
                <NewMessageFormRedux onSubmit={addMessage} />
                {messageElement}
            </div>
            <div className={s.messages}>Здесь могла бы быть ваша реклама</div>
        </nav>
    )
}
const maxLength100 = maxLengthCreator(100);
const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormCreate} fieldType={'textarea'} placeholder='Введите сообщениеee' name={'newMessageBody'} validate={[required, maxLength100]} />
            </div>
            <div>
                <button className={s.button}>Отправить сообщение</button>
            </div>
        </form>
    )
}
const NewMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(NewMessageForm);

export default Dialogs;