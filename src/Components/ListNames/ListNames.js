import React from "react";
import "./ListNames.css";
import Name from "./Name/Name";
import photo from "../../Assets/profile.jpg";
import photo1 from "../../Assets/profile1.jpg";
import photo2 from "../../Assets/profile2.jpg";
import photo3 from "../../Assets/profile3.jpg";
import photo4 from "../../Assets/profile4.jpg";
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
  changeSearch = () => {
    if (this.state.isSearching) {
      this.madeBlur();
    } else {
      this.madeFocus();
    }
  };

  madeFocus = (e) => {
    console.log(e);
    document.getElementById("searchIcon").classList.add("animate-search");
    document.getElementById("arrowIcon").classList.add("animate-arrow");
    document.getElementById("searchIcon").classList.remove("deanimate-search");
    document.getElementById("arrowIcon").classList.remove("deanimate-arrow");
    this.setState((prevState) => ({
      ...prevState,
      isSearching: true,
    }));
    document.getElementById("search").classList.add("no-focus");
    document.getElementById("search").focus();
  };
  madeBlur = (e) => {
    document.getElementById("searchIcon").classList.remove("animate-search");
    document.getElementById("arrowIcon").classList.remove("animate-arrow");
    document.getElementById("searchIcon").classList.add("deanimate-search");
    document.getElementById("arrowIcon").classList.add("deanimate-arrow");
    this.setState((prevState) => ({
      ...prevState,
      isSearching: false,
    }));
    document.getElementById("search").classList.add("no-blur");
    document.getElementById("search").blur();
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

  render() {
    console.log(this.state.isSearching);
    return (
      <div className="ListNames-Container">
        <div className="Searchbar-Container">
          <div className="SearchBar">
            <div
              onClick={() => {
                this.changeSearch(false);
              }}
              className="icon search-animate pointer"
            >
              <div id="searchIcon" className="">
                <i className="fa-solid fa-magnifying-glass search-animate"></i>{" "}
              </div>
              <div id="arrowIcon" className="">
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ color: "#23e730" }}
                ></i>
              </div>
            </div>
            <input
              onChange={(e) => {
                this.search(e);
              }}
              onFocus={(e) => {
                if (e.target.classList.contains("no-focus")) {
                  e.target.classList.remove("no-focus");
                } else {
                  this.madeFocus(e);
                  e.target.classList.remove("no-focus");
                }
              }}
              onBlur={(e) => {
                if (e.target.classList.contains("no-blur")) {
                  e.target.classList.remove("no-blur");
                } else {
                  this.madeBlur(e);
                  e.target.classList.remove("no-blur");
                }
              }}
              // onClick={this.changeSearch}
              id="search"
              type="text"
              placeholder="Search or start new chat"
            />
          </div>
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
    );
  }
}

export default ListNames;
