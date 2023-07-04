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
  const changeSelectedName = (obj) => {
    console.log(obj);
    setSelectedName(obj);
  };
  console.log(selectedName);
  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <div className="grid">
            <div className="grid-item grid-1">
              {" "}
              <Profile />
            </div>

            <div className="grid-item grid-2">
              <Desc selectedName={selectedName} />
            </div>
            <div className="grid-item grid-3">
              <ListNames
                updateDesc={changeSelectedName}
                selectedName={selectedName}
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
