import React from "react";
import photo from "../../Assets/profile.jpg";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="Profile-Container">
          <div className="photo pointer">
            <img src={photo} alt="profile" />
          </div>
          <div className="others">
            <div className="icon ic-1 pointer">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="icon ic-2 pointer">
              <i className="fa-regular fa-circle"></i>
            </div>
            <div className="icon ic-3 pointer">
              <i className="fa-solid fa-message"></i>
            </div>
            <div className="icon ic-4 pointer">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          {/* <div className="vr"></div> */}
        </div>
      </>
    );
  }
}

export default Profile;
