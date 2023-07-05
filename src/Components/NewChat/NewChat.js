import React from "react";
import Searchbar from "../Shared/Searchbar/Searchbar";
import Name from "../ListNames/Name/Name";
import photo from "../../Assets/profile.jpg";
import photo1 from "../../Assets/profile1.jpg";
import photo2 from "../../Assets/profile2.jpg";
import photo3 from "../../Assets/profile3.jpg";
import photo4 from "../../Assets/profile4.jpg";
import "./NewChat.css";

class NewChat extends React.Component {
  state = {
    text: "",
    isSearching: false,
    ex: new Array(50).fill(0),
    selectedId: 1,
    names: [
      { name: "Kristina Hoover", photo: photo, selected: true, id: 1 },
      { name: "John Lambert", photo: photo1, selected: false, id: 2 },
      { name: "Brice Collins", photo: photo2, selected: false, id: 3 },
      { name: "Ahmed Melendez", photo: photo3, selected: false, id: 4 },
      { name: "Allie Mills", photo: photo4, selected: false, id: 5 },
      { name: "Amare Krueger", photo: photo, selected: false, id: 6 },
      { name: "Kali Burton", photo: photo1, selected: false, id: 7 },
      { name: "Vivian Coleman", photo: photo2, selected: false, id: 8 },
      { name: "Ally Choi", photo: photo3, selected: false, id: 9 },
      { name: "Marilyn Fields", photo: photo4, selected: false, id: 10 },

      { name: "Lia Rocha", photo: photo, selected: false, id: 11 },
      { name: "Maeve Kirby", photo: photo1, selected: false, id: 12 },
      { name: "Leonard Rivas", photo: photo2, selected: false, id: 13 },
      { name: "Asa Montes", photo: photo3, selected: false, id: 14 },
      { name: "Devyn Curry", photo: photo4, selected: false, id: 15 },
      { name: "Emanuel Shepherd", photo: photo, selected: false, id: 16 },
      { name: "Giada Hall", photo: photo1, selected: false, id: 17 },
      { name: "Leslie Curry", photo: photo2, selected: false, id: 18 },
      { name: "Allan Mercado", photo: photo3, selected: false, id: 19 },
      { name: "Alia Fernandez", photo: photo4, selected: false, id: 20 },

      { name: "Ellen Oconnell", photo: photo, selected: false, id: 21 },
      { name: "Tanner Mendez", photo: photo1, selected: false, id: 22 },
      { name: "Matias Roach", photo: photo2, selected: false, id: 23 },
      { name: "Gauge Jimenez", photo: photo3, selected: false, id: 24 },
      { name: "Destiny Tanner", photo: photo4, selected: false, id: 25 },
      { name: "Kai George", photo: photo, selected: false, id: 26 },
      { name: "Terrence Mcintosh", photo: photo1, selected: false, id: 27 },
      { name: "Cruz Bartlett", photo: photo2, selected: false, id: 28 },
      { name: "Gregory Stein", photo: photo3, selected: false, id: 29 },
      { name: "Gayathri Prasanna", photo: photo4, selected: false, id: 30 },
    ],
    displayNames: [
      { name: "Kristina Hoover", photo: photo, selected: true, id: 1 },
      { name: "John Lambert", photo: photo1, selected: false, id: 2 },
      { name: "Brice Collins", photo: photo2, selected: false, id: 3 },
      { name: "Ahmed Melendez", photo: photo3, selected: false, id: 4 },
      { name: "Allie Mills", photo: photo4, selected: false, id: 5 },
      { name: "Amare Krueger", photo: photo, selected: false, id: 6 },
      { name: "Kali Burton", photo: photo1, selected: false, id: 7 },
      { name: "Vivian Coleman", photo: photo2, selected: false, id: 8 },
      { name: "Ally Choi", photo: photo3, selected: false, id: 9 },
      { name: "Marilyn Fields", photo: photo4, selected: false, id: 10 },

      { name: "Lia Rocha", photo: photo, selected: false, id: 11 },
      { name: "Maeve Kirby", photo: photo1, selected: false, id: 12 },
      { name: "Leonard Rivas", photo: photo2, selected: false, id: 13 },
      { name: "Asa Montes", photo: photo3, selected: false, id: 14 },
      { name: "Devyn Curry", photo: photo4, selected: false, id: 15 },
      { name: "Emanuel Shepherd", photo: photo, selected: false, id: 16 },
      { name: "Giada Hall", photo: photo1, selected: false, id: 17 },
      { name: "Leslie Curry", photo: photo2, selected: false, id: 18 },
      { name: "Allan Mercado", photo: photo3, selected: false, id: 19 },
      { name: "Alia Fernandez", photo: photo4, selected: false, id: 20 },

      { name: "Ellen Oconnell", photo: photo, selected: false, id: 21 },
      { name: "Tanner Mendez", photo: photo1, selected: false, id: 22 },
      { name: "Matias Roach", photo: photo2, selected: false, id: 23 },
      { name: "Gauge Jimenez", photo: photo3, selected: false, id: 24 },
      { name: "Destiny Tanner", photo: photo4, selected: false, id: 25 },
      { name: "Kai George", photo: photo, selected: false, id: 26 },
      { name: "Terrence Mcintosh", photo: photo1, selected: false, id: 27 },
      { name: "Cruz Bartlett", photo: photo2, selected: false, id: 28 },
      { name: "Gregory Stein", photo: photo3, selected: false, id: 29 },
      { name: "Gayathri Prasanna", photo: photo4, selected: false, id: 30 },
    ],

    nameWithSorted: {},
  };

  search = (e) => {
    console.log(e.target.value);
    let text = e.target.value.toLowerCase();
    let names = this.state.names;
    let displayNames = [];
    displayNames = names.filter((e) => {
      return e.name.toLowerCase().includes(text);
    });

    let sortedName = {};
    displayNames.forEach((name) => {
      console.log(name.name[0]);
      console.log(sortedName.hasOwnProperty(name.name[0].toUpperCase()));
      if (sortedName.hasOwnProperty(name.name[0].toUpperCase())) {
        let existName = sortedName[name.name[0].toUpperCase()];
        let newName = [...existName, name];
        sortedName[name.name[0].toUpperCase()] = newName;
      } else {
        sortedName[name.name[0].toUpperCase()] = [name];
      }
      console.log(sortedName);
    });

    let sortedAlphabets = Object.keys(sortedName)
      .sort()
      .reduce((objEntries, key) => {
        objEntries[key] = sortedName[key];
        return objEntries;
      }, {});
    console.log(sortedAlphabets);

    this.setState((prevState) => ({
      ...prevState,
      displayNames: displayNames,
      nameWithSorted: sortedAlphabets,
      text: text,
    }));
  };
  componentDidMount = () => {
    let sortedName = {};
    this.state.displayNames.forEach((name) => {
      console.log(name.name[0]);
      console.log(sortedName.hasOwnProperty(name.name[0].toUpperCase()));
      if (sortedName.hasOwnProperty(name.name[0].toUpperCase())) {
        let existName = sortedName[name.name[0].toUpperCase()];
        let newName = [...existName, name];
        sortedName[name.name[0].toUpperCase()] = newName;
      } else {
        sortedName[name.name[0].toUpperCase()] = [name];
      }
      console.log(sortedName);
    });

    let sortedAlphabets = Object.keys(sortedName)
      .sort()
      .reduce((objEntries, key) => {
        objEntries[key] = sortedName[key];
        return objEntries;
      }, {});
    console.log(sortedAlphabets);
    this.setState((prevState) => ({
      ...prevState,
      nameWithSorted: sortedAlphabets,
    }));
  };

  render() {
    return (
      <div
        className={`Profile-Desc-Container ${
          this.props.shownewchat ? "container2-animate" : "container2-deanimate"
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
            <span>New Chat</span>
          </div>
        </div>
        <div
          style={{
            alignItems: "flex-start",
            marginTop: "0px",
            width: "100%",
            height: "auto",
          }}
          className="profile-photo"
        >
          <div className="Searchbar-Container" style={{ width: "100%" }}>
            <Searchbar search={this.search} id="bar2" i1="SI2" i2="AI2" />
          </div>
        </div>
        <div
          style={{ marginTop: "0px", overflow: "scroll" }}
          className={`content ${
            this.props.shownewchat ? "content-animation" : "content-deanimation"
          }`}
        >
          <div>
            {Object.keys(this.state.nameWithSorted).map((key) => {
              return (
                //Key should be unique
                <React.Fragment key={key}>
                  <div
                    style={{ display: "flex", margin: "10px", color: "green" }}
                  >
                    {key}
                  </div>
                  {this.state.nameWithSorted[key].map((e) => {
                    return (
                      <Name
                        text={this.state.text}
                        key={e.name}
                        name={e.name}
                        photo={e.photo}
                        selectedId={this.state.selectedId}
                        id={e.id}
                        changeSelected={(id) => {
                          this.changeSelected(id, this.props.updateDesc);
                        }}
                      />
                    );
                  })}
                </React.Fragment>
              );
            })}
            {/* {this.state.displayNames.map((e) => {
              return (
                <>
                  <div>A</div>
                  <Name
                    text={this.state.text}
                    key={e.name}
                    name={e.name}
                    photo={e.photo}
                    selectedId={this.state.selectedId}
                    id={e.id}
                    changeSelected={(id) => {
                      this.changeSelected(id, this.props.updateDesc);
                    }}
                  />
                </>
              );
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewChat;
