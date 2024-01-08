import React, { useEffect, useRef, memo } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Button, Input } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { sendMessage, startMessagesListening, stopMessagesListening, unmountChat } from "../../Redux/chatReducer"
import { reduxForm, Field } from 'redux-form'
import { SelectField, TextField, } from 'redux-form-antd'

const ChatPage = () => {
    return <div>
        <Chat />
    </div>
}

const Chat = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
            dispatch(unmountChat())
        }
    }, [])
    return <div>
        <Messages />
        <AddMessageForm />
    </div>
}
const Messages = () => {
    const messages = useSelector((state => state.chat.messages))
    return <div style={{ height: '800px', overflowY: 'auto' }}>
        {messages.map((m, index) => <Message key={m.id} message={m} id={m} />)}
    </div>
}
const Message = React.memo(({ message }) => {
    console.log('Отрисовка Сообщений')
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [message]);

    return <div ref={messagesEndRef}>
        <NavLink to={'/profile/' + message.userId}><img style={{ height: 50, width: 40 }} src={message.photo} /></NavLink> <b>{message.userName}</b>
        <br />
        {message.message}
        <hr />
    </div>
})
const AddMessageForm = () => {
    const [message, setMessage] = useState()
    const dispatch = useDispatch()
    const status = useSelector((state) => state.chat.status)
    const inputRef = useRef(null)
    const sendMessageHandler = () => {
        if (!message) {
            return alert('Ведите сообщение')
        }
        dispatch(sendMessage(message))
        setMessage('')
    }
    return <div>
        <div><Input ref={inputRef} name={'chatInput'} onChange={(e) => setMessage(e.currentTarget.value)} value={message} placeholder="Введите сообщение" ></Input></div>
        <form><Field name="chatMessage" component={TextField} placeholder="Введите сообщение" /></form>
        <br></br>
        <div><Button
            disabled={status !== 'ready'}
            type={"primary"} onClick={sendMessageHandler}>Send</Button></div>
    </div>
}
export default ChatPage;