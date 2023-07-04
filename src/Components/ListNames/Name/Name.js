import React from "react";
import "./Name.css";

class Name extends React.Component {
  state = {
    lastMsg:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  };

  ReturnColoredNames = (props) => {
    if (props.text === "" || props.text === " ") {
      return <span>{props.name}</span>;
    }

    let coloredNameBefore = props.name.slice(
      0,
      props.name.toLowerCase().match(props.text.toLowerCase()).index
    );
    let coloredName = props.name.slice(
      props.name.toLowerCase().match(props.text.toLowerCase()).index,
      props.name.toLowerCase().match(props.text.toLowerCase()).index +
        props.text.toLowerCase().length
    );
    let coloredNameAfter = props.name.slice(
      props.name.toLowerCase().match(props.text.toLowerCase()).index +
        props.text.toLowerCase().length
    );
    console.log(coloredNameBefore, coloredName, coloredNameAfter);
    return (
      <>
        <span>{coloredNameBefore}</span>
        <span style={{ color: "rgb(35, 231, 48)" }}>{coloredName}</span>
        <span>{coloredNameAfter}</span>
      </>
    );
  };

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor:
              this.props.id === this.props.selectedId ? "#202c33" : "",
          }}
          className="name-container pointer"
          onClick={() => {
            this.props.changeSelected(this.props.id);
          }}
        >
          <div className="photo-name-container-name">
            <div className="photo-name pointer">
              <img src={this.props.photo} alt="profile" />
            </div>
            <div className="Desc-Name">
              <div className="com name pointer">
                <this.ReturnColoredNames
                  text={this.props.text}
                  name={this.props.name}
                />
              </div>
              <div className="com last-seen pointer latst-msg">
                {this.state.lastMsg.slice(0, 58) + "..."}
              </div>
            </div>
          </div>
          <div className="time-container">
            <h6 className="latst-msg">1:34 AM</h6>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default Name;

// [...this.props.name].map((e) => {
//     if (this.props.text.includes(e.toLowerCase())) {
//       return (
//         <span
//           key={Math.random()}
//           style={{ color: "rgb(35, 231, 48)" }}
//         >
//           {e}
//         </span>
//       );
//     } else {
//       return <span key={Math.random()}>{e}</span>;
//     }
//   })
