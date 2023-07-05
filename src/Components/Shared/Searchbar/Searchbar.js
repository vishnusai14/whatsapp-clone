import React from "react";

class Searchbar extends React.Component {
  state = {
    isSearching: false,
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
    console.log(this.props.i1);
    document.getElementById(this.props.i1).classList.add("animate-search");
    document.getElementById(this.props.i2).classList.add("animate-arrow");
    document.getElementById(this.props.i1).classList.remove("deanimate-search");
    document.getElementById(this.props.i2).classList.remove("deanimate-arrow");
    this.setState((prevState) => ({
      ...prevState,
      isSearching: true,
    }));
    document.getElementById(this.props.id).classList.add("no-focus");
    document.getElementById(this.props.id).focus();
  };
  madeBlur = (e) => {
    document.getElementById(this.props.i1).classList.remove("animate-search");
    document.getElementById(this.props.i2).classList.remove("animate-arrow");
    document.getElementById(this.props.i1).classList.add("deanimate-search");
    document.getElementById(this.props.i2).classList.add("deanimate-arrow");
    this.setState((prevState) => ({
      ...prevState,
      isSearching: false,
    }));
    document.getElementById(this.props.id).classList.add("no-blur");
    document.getElementById(this.props.id).blur();
  };
  render() {
    return (
      <div className="SearchBar">
        <div
          onClick={() => {
            this.changeSearch(false);
          }}
          className="icon search-animate pointer"
        >
          <div id={this.props.i1} className="searchIcon">
            <i className="fa-solid fa-magnifying-glass search-animate"></i>{" "}
          </div>
          <div id={this.props.i2} className="arrowIcon">
            <i
              className="fa-solid fa-arrow-left"
              style={{ color: "#23e730" }}
            ></i>
          </div>
        </div>
        <input
          onChange={(e) => {
            this.props.search(e);
          }}
          onFocus={(e) => {
            console.log(e);
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
          id={this.props.id}
          className="searchinput"
          type="text"
          placeholder="Search or start new chat"
        />
      </div>
    );
  }
}

export default Searchbar;
