const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG_TEXT:
            let newMessage = {
                id: 5,
                message: state.newDialogText,
            };
            state.messages.push(newMessage);
            state.newDialogText = 'Введите новое сообщение';
            return state;
        case UPDATE_DIALOG_TEXT:
            state.newDialogText = action.newText;
            return state;
        default: return state;
    }
}
export const addDialogMessageActionCreator = () => {
    return { type: 'ADD-DIALOG-TEXT' }
}
export const onDialoMessageChangeActionCreator = (text) => {
    return { type: 'UPDATE-DIALOG-TEXT', newText: text }
}
export default dialogsReducer;
