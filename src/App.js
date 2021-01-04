
import {useState} from "react";
import './App.css';
import  ToolTip from "./toolTip"
import {BsCloudDownload} from "react-icons/bs" 

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';




function App() {
  const [toolTip,showToolTip]=useState(false);

  const [position, setPosition] = useState("left");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };


 
  return (
    <div className="App">

     
      <div className={`buttonContainer ${position}`}>
         <ToolTip  toolTip={toolTip}></ToolTip>
        <button onMouseLeave={()=>showToolTip(false)} onMouseEnter={()=>showToolTip(true)}>
             { !toolTip? "Download": 
             <BsCloudDownload/>}
          </button>
 
        
     
          

        </div>

        <Select className="dropDown"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={position}
          onChange={handleChange}
        >
          <MenuItem value={"left"}>left</MenuItem>
          <MenuItem value={"right"}>right</MenuItem>
          <MenuItem value={"top"}>top</MenuItem>
          <MenuItem value={"bottom"}>bottom</MenuItem>

        </Select>

    </div>
  );
}

export default App;
