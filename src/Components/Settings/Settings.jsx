import React from "react";
const Settings = (props) => {
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