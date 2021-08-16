import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PostContext from "./Context/PostContext";
import ColorContext from "./Context/ColorContext";
import ShowModalContext from "./Context/ShowModalContext";

import Create from './Components/Create';
import ShowAllPosts from './Components/ShowAllPosts';
import Home from './Components/Home';

function App() {
  const [posts, setPosts] =  useState([]);
  const [color, setColor] = useState({"r": 255, "g":255, "b":255});
  const [create, setCreate] = useState(false);
  const [all, setAll] = useState (false);
  const [edit, setEdit] = useState("");
  const [show, setShow] = useState("");

  return (
    <div className="App" style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b}, .8)`, overflowY: `${show != "" || edit != ""? "hidden" : ""}`, paddingRight: `${show != "" || edit != "" ? "55px" : ""}`}}>
      <ShowModalContext.Provider value={{show, setShow, edit, setEdit}}>
        <PostContext.Provider value={{posts, setPosts}}>
          <ColorContext.Provider value={{color, setColor}}>
              <Home/>
              <h2 onClick={()=>setCreate(!create)}>Make an entry {create ? "▴" : "▾"}</h2>
              {create ? <Create setAll={setAll}/> : null}
              <h2 onClick={()=>setAll(!all)}>Show all entries {all ? "▴" : "▾"}</h2>
              {all ? <ShowAllPosts/> : null}
          </ColorContext.Provider>
        </PostContext.Provider>
      </ShowModalContext.Provider>
    </div>
  );
}

export default App;