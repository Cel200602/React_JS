import React, { useState } from "react";

function ColorPicker(){
    const[color,setColor]=useState("White")
    return(
        <>
            <div>
                <h1>Color Picker</h1>
                <button onClick={()=>setColor("red")}>Red</button>
                <button onClick={()=>setColor("green")}>Green</button>
                <button onClick={()=>setColor("blue")}>Blue</button>
                <div className="bgchange"
                style={{background:color}}
                ></div>
            </div>
        </>
    )
}

export default ColorPicker;