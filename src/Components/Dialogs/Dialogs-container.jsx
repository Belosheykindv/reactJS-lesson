
import { onDialoMessageChangeActionCreator, addDialogMessageActionCreator } from "../../Redux/dialogPage-reducer";
import { connect} from "react-redux";
import Dialogs from "./DialogsC";

// const DialogsContainer = (props) => {
//     let addMessage = () => {
//         props.dispatch(addDialogMessageActionCreator());
//     }
//     let onDialogMessageChange = (text) => {
//         props.dispatch(onDialoMessageChangeActionCreator(text));
//     }

//     return < Dialogs
//         addDialogMessageActionCreator={addMessage}
//         onDialoMessageChangeActionCreator={onDialogMessageChange}
//         dialogs={props.store.dialogsPage.dialogs}
//         messages={props.store.dialogsPage.messages}
//         value={props.store.newDialogText} />

// }

const mapStateToProps = (state) => {
    return {
        dialogsPage:(state.dialogsPage)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDialogMessage: () => { dispatch(addDialogMessageActionCreator())},
        dialogMessageChange: (text) => { dispatch(onDialoMessageChangeActionCreator(text)) }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;