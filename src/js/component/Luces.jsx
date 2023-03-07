
import React, { useState } from 'react';



const Luces = () => {

    const[glowr, setglowr] = useState('0px')
    const[glowy, setglowy] = useState('0px')
    const[glowg, setglowg] = useState('0px')
    function glowsr(){
    
        if(glowr=="40px"){
            setglowr("0px")
        }
        else{
            setglowr("40px")
            setglowy("0px")
            setglowg("0px")
        }
    }

    function glowsy(){
        
        if(glowy=="40px"){
            setglowy("0px")
        }
        else{
            setglowy("40px")
            setglowr("0px")
            setglowg("0px")
        }
    }
    function glowsg(){
    
        if(glowg=="40px"){
            setglowg("0px")
        }
        else{
            setglowg("40px")
            setglowr("0px")
            setglowy("0px")
        }
    }
	return (
        <div>
            <button onClick={()=>glowsr()} style={{
    width: "80px",
	height: "80px",
    backgroundColor:"red",
    borderRadius: "40px",
    position: "absolute",
    top: 10,
    left: 10,
    boxShadow: `0px 0px ${glowr} white`,
    
}} >
        </button>
        <button onClick={()=>glowsy()} style={{
    width: "80px",
	height: "80px",
    backgroundColor:"yellow",
    borderRadius: "40px",
    position: "absolute",
    top: 100,
    left: 10,
    boxShadow:`0px 0px ${glowy} white`,
}}>
        </button>
        <button onClick={()=>glowsg()} style={{
    width: "80px",
	height: "80px",
    backgroundColor:"green",
    borderRadius: "40px",
    position: "absolute",
    top: 190,
    left: 10,
    boxShadow:`0px 0px ${glowg} white`
}}>
        </button>
        </div>
	);
};



export default Luces;