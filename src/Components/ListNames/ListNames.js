import React from "react";
import "./ListNames.css";
import Name from "./Name/Name";
import photo from "../../Assets/profile.jpg";
import photo1 from "../../Assets/profile1.jpg";
import photo2 from "../../Assets/profile2.jpg";
import photo3 from "../../Assets/profile3.jpg";
import photo4 from "../../Assets/profile4.jpg";
import ProfileDesc from "../ProfileDesc/ProfielDesc";
import Community from "../Community/Community";
import NewChat from "../NewChat/NewChat";
import Searchbar from "../Shared/Searchbar/Searchbar";
class ListNames extends React.Component {
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
  };

  search = (e) => {
    console.log(e.target.value);
    let text = e.target.value.toLowerCase();
    let names = this.state.names;
    let displayNames = [];
    displayNames = names.filter((e) => {
      return e.name.toLowerCase().includes(text);
    });
    this.setState((prevState) => ({
      ...prevState,
      displayNames: displayNames,
      text: text,
    }));
  };
  changeSelected = (id, updateDesc) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedId: id,
    }));
    updateDesc(
      this.state.names.filter((e) => {
        return e.id === id;
      })
    );
  };

  closeScreen = (screen) => {
    this.props.closeScreen(screen);
  };

  render() {
    console.log(this.state.isSearching);
    return (
      <div className="whole-container">
        <div
          style={{ display: this.props.shownewchat ? "none" : "flex" }}
          className="ListNames-Container"
        >
          <div className="Searchbar-Container">
            <Searchbar id="bar1" i1="SI1" i2="AI1" search={this.search} />
            <div className="filter icon">
              <i className="fa-solid fa-sort"></i>
            </div>
          </div>
          <div className="Name-Container">
            {this.state.displayNames.map((e) => {
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
          </div>
        </div>
        <ProfileDesc
          closeScreen={() => {
            this.closeScreen("profileDesc");
          }}
          showProfileDesc={this.props.showProfileDesc}
        />
        <Community
          closeScreen={() => {
            this.closeScreen("community");
          }}
          showcommunity={this.props.showcommunity}
        />
        <NewChat
          closeScreen={() => {
            this.closeScreen("newchat");
          }}
          shownewchat={this.props.shownewchat}
        />
      </div>
    );
  }
}

export default ListNames;
