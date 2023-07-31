import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        if (!this.props.userId) {
            this.setState({
                editMode: true
            })
        }
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
        console.log(this.state.status)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}><b>Статус -</b> {this.props.status || 'пусто'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            defaultValue={this.state.status}></input>
                        <button onClick={this.deActivateEditMode}>Сохранить</button>
                    </div>}
            </div>

        )
    }
}
export default ProfileStatus;