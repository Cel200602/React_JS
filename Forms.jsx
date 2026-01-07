import React, { useState } from "react";


function Forms(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[submittedData, setSubmittedData]=useState(null)
    const handleSubmit=(e)=>{e.preventDefault();
        const data={name,email,password};
        setSubmittedData(data);
        setName(" ");
        setEmail(" ");
        setPassword(" ");
        };

    return(
        <>
        <div>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" placeholder="Enter Your Name"  value={name}
                onChange={(e)=>setName(e.target.value)} 
                required /><br />

                <label>Email</label><br />
                <input type="email" placeholder="Enter Your mail ID"  value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                required /><br />

                <label>Password</label><br />
                <input type="password" placeholder="Enter Your password"  value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                required /><br />

            <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div className="output-card">
                    <h2>SubmittedData</h2>
                    <p><strong> Name:</strong>
                    {submittedData.name}</p>
                    <p><strong> Email:</strong>
                    {submittedData.email}</p>
                    <p><strong> Password:</strong>
                    {submittedData.password}</p>
                </div>
            ) }
        </div>
        </>
    )
}

export default Forms;