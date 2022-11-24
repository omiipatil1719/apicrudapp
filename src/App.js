import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
import List from "./List";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
  <>
    <div className="flex">
    <div className="main">
      <h1>React Search filter</h1>
      <div className="search">
        <input 
        className="inputfield"
        placeholder="Search Title"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        <hr className="hrLine"/>
      </div>
      <List input={inputText} />
    </div>
    </div>
  
  </>
  );
}

export default App;