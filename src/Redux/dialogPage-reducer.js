const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';
const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT';
let initialReducer = {
    dialogs: [
        { id: '1', name: 'Alina', imgSrc: 'https://project-nerd.com/wp-content/uploads/2020/05/ang.jpeg' },
        { id: '2', name: 'Denis', imgSrc: 'https://krot.info/uploads/posts/2022-01/1642691161_2-krot-info-p-dzheison-stetkhem-art-2.jpg' },
        { id: '3', name: 'Egor', imgSrc: 'https://coolsen.ru/wp-content/uploads/2021/06/76-6.jpg' },
        { id: '4', name: 'Oleg', imgSrc: 'https://skitalets.ru/upload/main/b96/b9622a5ce9ca6a011e99ee48a1a2b30b.png' },
        { id: '5', name: 'Kristina', imgSrc: 'https://catherineasquithgallery.com/uploads/posts/2021-03/thumbs/1614604937_99-p-avatarki-na-belom-fone-117.jpg' }],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Hola' },],
    newDialogText: ''
}
const dialogsReducer = (state = initialReducer, action) => {

    switch (action.type) {
        case ADD_DIALOG_TEXT: {
            let newMessage = {
                id: 4,
                message: state.newDialogText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newDialogText: ''
            };
        }

        case UPDATE_DIALOG_TEXT: {
            return {
                ...state,
                newDialogText: action.newText
            };
        }
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
