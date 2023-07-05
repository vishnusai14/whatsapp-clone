import React from "react";

import "../ProfileDesc/ProfileDesc.css";
import Svg from "./pic";
import "./Community.css";

class Community extends React.Component {
  render() {
    return (
      <div
        className={`Profile-Desc-Container ${
          this.props.showcommunity
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
            <span>Communites</span>
          </div>
        </div>
        <div className="profile-photo">
          <Svg />
        </div>
        <div
          className={`content ${
            this.props.showcommunity
              ? "content-animation"
              : "content-deanimation"
          }`}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              fontSize: "25px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Stay Connected with a Community
          </div>

          <div>
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                margin: "20px",
                marginBottom: "30px",
                color: "#6896a0",
                fontSize: "14px",
              }}
            >
              Communities bring members together in topic-based groups, and make
              it easy to get admin announcements. Any community you're added to
              will appear here.
              <span style={{ marginLeft: "2px" }}>
                <a href="whatsapp.com">Learn More</a>
              </span>
            </div>
            <div className="button">Start a Community</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
