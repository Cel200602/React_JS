import React, { useState } from "react";

function Tabs(){
    const[activeTab,setActiveTab]=useState("Home")
    return(
        <div style={Styles.Container}>
            <h2>Tab Component</h2>
            <div style={Styles.tabContainer}>
                <button onClick={()=>setActiveTab("Home")}>Home</button>
                <button onClick={()=>setActiveTab("About")}>About</button>
                <button onClick={()=>setActiveTab("Content")}>Content</button>
            </div>
            <div style={Styles.contentBox}>
                {activeTab==="Home"&&(
                    <p>This is Home page</p>
                )}
                 {activeTab==="About"&&(
                    <p>This is the About page of React JS</p>
                )}
                {activeTab==="Content"&&(
                    <p>This page is about the overall content of React JS</p>
                )}
            </div>

        </div>
    )
}
const Styles={
    Container:{
        minHeight:"100vh",
        background:"lightpink",
        textAlign:"center"
    }, 
    tabContainer:{
        padding:"20px"
    },
    contentBox:{
        height:"100px",
        width:"300px",
        border:"1px solid",
        borderRadius:"10px",
        marginLeft:"48=70px"

    }}
export default Tabs;
