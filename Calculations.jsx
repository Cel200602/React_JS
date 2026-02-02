import React, { useState } from "react";

function Calculations(){
    const[num1,setNum1]=useState(0)
    const[num2,setNum2]=useState(0)
    const a=Number(num1);
    const b=Number(num2);
    return(
        <>
        <div>
            <h1>Calculator</h1>
            <input type="number" 
            placeholder="Enter the first value"
            onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number"
            placeholder="Enter the second value"
            onChange={(e)=>setNum2(e.target.value)} />

            <div style={{height:"300px",
                width:"400px",
                border:"1px solid",
                marginLeft:"10px",
                marginTop:"20px",
                textAlign:"left"}}> 
                <p><strong>Addition:</strong>{a+b}</p>  
                <p><strong>Subtraction:</strong>{a-b}</p>  
                <p><strong>Multiplicaton:</strong>{a*b}</p>  
                <p><strong>Division:</strong>
                {b==0 ? "can't divide by zero": a/b}</p>  
            </div>
        </div>

        </>
    )
}
export default Calculations;