import React from "react";

export default function Box(props){
    // const [stateOn, setStateOn] = React.useState(props.on);

    console.log(props.id)
    const styles = {
            backgroundColor: props.on ? "#222222" : "transparent"
    }
    return(
            <div style={styles} onClick={()=>{props.toggle(props.id)}} className="box">
               
            </div>
       
    )
}