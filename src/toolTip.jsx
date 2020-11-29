
import './App.css';





function ToolTip({toolTip,position}){

    function toolTipPosition(){
       
        return position;

    }

 return(
 
       <div className={toolTip?`showtoolTip`:"hidetoolTip" }>
            ToolTip    
             
        </div>
 


 )




 


}

export default ToolTip;