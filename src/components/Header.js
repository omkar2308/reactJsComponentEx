
import React from "react";

function Header({name , title}){
    return(
        <div style={{background:'yellow',padding:20}}>
            <h1> {title} </h1>
            <h1>{name}</h1>
            <p>intresting learning </p>
        </div>
    )
}

export default Header;