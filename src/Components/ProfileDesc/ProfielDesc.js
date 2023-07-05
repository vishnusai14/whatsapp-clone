import React from "react";
import photo from "../../Assets/profile.jpg";
import "./ProfileDesc.css";

class ProfileDesc extends React.Component {
  render() {
    return (
      <div
        className={`Profile-Desc-Container ${
          this.props.showProfileDesc
            ? "container2-animate"
            : "container2-deanimate"
        }`}
      >
        <div className="heading">
          <div
            onClick={this.props.closeScreen}
            className="heading-icon pointer"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="heading-name">
            <span>Profile</span>
          </div>
        </div>
        <div className="profile-photo">
          <img
            className={`${
              this.props.showProfileDesc ? "photo-animate" : "photo-deanimate"
            }`}
            src={photo}
            alt="profile"
          />
        </div>
        <div
          className={`content ${
            this.props.showProfileDesc
              ? "content-animation"
              : "content-deanimation"
          }`}
        >
          <div
            style={{
              display: "flex",
              margin: "10px",
              color: "rgb(35, 231, 48)",
            }}
          >
            Your Name
          </div>
          <div className="content-1">
            <div>
              <div>Vishnu</div>
            </div>
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left",
                margin: "10px",
                marginBottom: "30px",
                color: "#6896a0",
              }}
            >
              This is not the username or pin. This name will be visible to your
              whatsapp contact.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              margin: "10px",
              color: "rgb(35, 231, 48)",
            }}
          >
            About
          </div>
          <div className="content-1">
            <div>
              <div>Busy With Boredom</div>
            </div>
            <div>
              <i className="fa-solid fa-pen"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDesc;
