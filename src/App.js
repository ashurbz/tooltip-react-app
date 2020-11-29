
import {useState} from "react";
import './App.css';
import  ToolTip from "./toolTip"
import {BsCloudDownload} from "react-icons/bs" 


function App({position}) {
  const [toolTip,showToolTip]=useState(false);


 
  return (
    <div className="App">

     
      <div className={`buttonContainer ${position}`}>
         <ToolTip  toolTip={toolTip}></ToolTip>
        <button onMouseLeave={()=>showToolTip(false)} onMouseEnter={()=>showToolTip(true)}>
             { !toolTip? "Download": 
             <BsCloudDownload/>}
          </button>
          

        </div>

    </div>
  );
}

export default App;
