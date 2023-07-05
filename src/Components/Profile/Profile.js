import React from "react";
import photo from "../../Assets/profile.jpg";
import "./Profile.css";

class Profile extends React.Component {
  state = {
    showingOther: false,
  };
  changeScreen = (screen) => {
    this.props.changeScreen(screen);
  };
  render() {
    return (
      <>
        <div className="whole-container">
          <div className="Profile-Container container1">
            <div
              onClick={() => {
                this.changeScreen("profileDesc");
              }}
              className="photo pointer"
            >
              <img src={photo} alt="profile" />
            </div>
            <div className="others">
              <div
                onClick={() => {
                  this.changeScreen("community");
                }}
                className="icon ic-1 pointer"
              >
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="icon ic-2 pointer">
                <i className="fa-regular fa-circle"></i>
              </div>
              <div
                onClick={() => {
                  this.changeScreen("newchat");
                }}
                className="icon ic-3 pointer"
              >
                <i className="fa-solid fa-message"></i>
              </div>
              <div className="icon ic-4 pointer">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
            {/* <div className="vr"></div> */}
          </div>

          <div
            className={`Profile-Container container2 ${
              this.props.showProfileDesc ||
              this.props.showcommunity ||
              this.props.shownewchat
                ? "container2-animate"
                : "container2-deanimate"
            }`}
          >
            <div
              onClick={() => {
                this.showProfileDesc();
              }}
              className="photo pointer"
            >
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
        </div>

        <></>
      </>
    );
  }
}

export default Profile;
