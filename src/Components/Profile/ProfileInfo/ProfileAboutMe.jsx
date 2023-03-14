import React from 'react';
import Preloader from '../../Common/Preloader/preloader';


class ProfileaboutMe extends React.Component {
  state = {
    editMode: false,
    aboutMe: this.props.aboutMe
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
    let AboutMe = this.state.aboutMe
    let LookingForAJobDescription = this.props.profile.lookingForAJobDescription
    let FullName = this.props.profile.fullName
    this.props.updateAboutMe(AboutMe, LookingForAJobDescription, FullName)
  }
  onaboutOwnerChange = (e) => {
    this.setState({
      aboutMe: e.currentTarget.value
    })
    console.log(this.state.aboutMe)
  }
  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevProps.aboutMe !== this.props.aboutMe) {
      this.setState({
        aboutMe: this.props.aboutMe
      })
    }
  }
  render() {
    if (!this.props.profile) {
      return <Preloader />
    }
    return (
      <div>
        <div>
          {!this.state.editMode &&
            <div>
              <span
                onClick={this.activateEditMode}
              >Обо мне - {this.props.aboutMe || 'пусто'}</span>
            </div>}
          {this.state.editMode &&
            <div>
              <input
                onChange={this.onaboutOwnerChange}
                autoFocus={true}
                defaultValue={this.state.aboutMe}></input>
                <button onClick={this.deActivateEditMode}>Сохранить</button>
            </div>}
        </div>
        {/* <div>
          {!this.state.editMode &&
            <div>
              <span
                onClick={this.activateEditMode}
              >Работа - {props.profile.lookingForAJobDescription || 'пусто'}</span>
            </div>}
          {this.state.editMode &&
            <div>
              <input
                onChange={this.onaboutOwnerChange}
                autoFocus={true}
                onBlur={this.deActivateEditMode}
                defaultValue={this.state.aboutMe}></input>
            </div>}
        </div> */}
      </div>
    )
  }
}
export default ProfileaboutMe;