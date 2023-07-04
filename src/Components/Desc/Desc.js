import React from "react";
import photo from "../../Assets/profile.jpg";
import "./Desc.css";

class Desc extends React.Component {
  render() {
    return (
      <div className="Desc-Container">
        <div className="photo-name-container">
          <div className="photo pointer">
            <img src={photo} alt="profile" />
          </div>
          <div className="Desc-Name">
            <div className="com name pointer">
              {this.props.selectedName[0].name}
            </div>
            <div className="com last-seen pointer">Online</div>
          </div>
        </div>

        <div className="desc-others">
          <div className="icon ic-1 pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="icon ic-2 pointer">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Desc;
