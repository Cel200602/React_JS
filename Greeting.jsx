import React, { useEffect, useState } from "react";

function Greeting(){
    const[greeting,setGreeting]=useState("");
    useEffect(()=>{
        let hours= new Date().getHours().toString().padStart(2,"0")
        let minutes= new Date().getMinutes().toString().padStart(2,"0")
        let seconds = new Date().getSeconds().toString().padStart(2,"0")
        if(hours<12){
            setGreeting(`Good Morning ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=12 && hours<=15){
            setGreeting(`Good Afternooon ${hours}:${minutes}:${seconds}`)
        }
        else if(hours>=16 && hours<=19){
            setGreeting(`Good Evening ${hours}:${minutes}:${seconds}`)
        }
        else{
            setGreeting(`Good Night ${hours}:${minutes}:${seconds}`)
        }
        
    })
    return(
        <>
        <div>
            <div style={{
                textAlign:"center",
                height:"200px",
                width:"200px",
                backgroundColor:"plum",
                marginTop:"200px",
                marginLeft:"300px",
                borderTopLeftRadius:"20px",
                borderTopRightRadius:"20px",
                borderBottomLeftRadius:"20px",
                borderBottomRightRadius:"20px"}}>{greeting}</div>
        </div>
        </>
    )
}
export default Greeting;