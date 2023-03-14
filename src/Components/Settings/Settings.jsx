import React from "react";
import { Navigate } from "react-router-dom";
const Settings = (props) => {
    if (props.auth === false) return <Navigate to={'/login'} />
    return <div>
            <SelectedSetting selectedSection='Account settings' />
            <SelectedSetting selectedSection='Security settings' />
            <SelectedSetting selectedSection='Other settings' />
        </div>
    
}
const SelectedSetting = (props) => {
    return <div>
        <span>{props.selectedSection}</span>
    </div>

}
export default Settings;