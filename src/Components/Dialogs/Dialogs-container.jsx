
import { onDialoMessageChangeActionCreator, addDialogMessageActionCreator } from "../../Redux/dialogPage-reducer";
import { connect } from "react-redux";
import Dialogs from "./DialogsC";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
import { compose } from "redux";

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
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDialogMessage: () => { dispatch(addDialogMessageActionCreator()) },
        dialogMessageChange: (text) => { dispatch(onDialoMessageChangeActionCreator(text)) }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);