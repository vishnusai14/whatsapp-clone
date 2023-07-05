import { useState } from "react";
import "./App.css";
import Desc from "./Components/Desc/Desc";
import ListNames from "./Components/ListNames/ListNames";
import Profile from "./Components/Profile/Profile";
import photo from "./Assets/profile.jpg";

function App() {
  const [selectedName, setSelectedName] = useState([
    {
      name: "Kristina Hoover",
      photo: photo,
      selected: true,
      id: 1,
    },
  ]);
  const [showProfileDesc, setShowProfileDesc] = useState(false);
  const [showcommunity, setshowcommunity] = useState(false);
  const [shownewchat, setshownewchat] = useState(false);
  const changeSelectedName = (obj) => {
    console.log(obj);
    setSelectedName(obj);
  };
  const changeScreen = (screen) => {
    console.log("Changing Screen");
    if (screen === "profileDesc") {
      setShowProfileDesc(true);
    } else if (screen === "community") {
      setshowcommunity(true);
    } else if (screen === "newchat") {
      setshownewchat(true);
    }
  };

  const closeScreen = (screen) => {
    if (screen === "profileDesc") {
      setShowProfileDesc(false);
    } else if (screen === "community") {
      setshowcommunity(false);
    } else if (screen === "newchat") {
      setshownewchat(false);
    }
  };
  console.log(selectedName);
  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <div className="grid">
            <div className="grid-item grid-1">
              {" "}
              <Profile
                showProfileDesc={showProfileDesc}
                changeScreen={changeScreen}
                showcommunity={showcommunity}
                shownewchat={shownewchat}
              />
            </div>

            <div className="grid-item grid-2">
              <Desc selectedName={selectedName} />
            </div>
            <div
              className={`grid-item grid-3 ${
                showProfileDesc || showcommunity || shownewchat
                  ? "no-scroll"
                  : ""
              }`}
            >
              <ListNames
                updateDesc={changeSelectedName}
                selectedName={selectedName}
                showProfileDesc={showProfileDesc}
                showcommunity={showcommunity}
                shownewchat={shownewchat}
                closeScreen={closeScreen}
              />
            </div>
            <div className="grid-item grid-4">
              this will be the chat of the name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
