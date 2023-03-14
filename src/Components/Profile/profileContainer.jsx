import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { getUserProfile, getUserProfileStatus, getUserAboutMe, updateUserProfileStatus, updateAboutMe } from '../../Redux/profilePage-reducer';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId || this.props.ownerUserId;
    this.props.getUserProfile(userId)
    this.props.getUserProfileStatus(userId)
    this.props.getUserAboutMe(userId)
  }

  render() {
    // if (this.props.auth === false) return <Navigate to={'/login'} />
    return <div>
      <Profile {...this.props}
        profile={this.props.profile}
        userId={this.props.router.params.userId}
        ownerId={this.props.ownerUserId}
        userStatus={this.props.userStatus}
        updateUserProfileStatus={this.props.updateUserProfileStatus}
        aboutMe={this.props.aboutMe}
        updateAboutMe={this.props.updateAboutMe} />

    </div>
  }
}

let matStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userStatus: state.profilePage.profileStatus,
  ownerUserId: state.auth.id,
  aboutMe: state.profilePage.aboutMe,
})
export default compose(
  connect(matStateToProps, { getUserProfile, getUserProfileStatus, updateUserProfileStatus, updateAboutMe, getUserAboutMe }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
