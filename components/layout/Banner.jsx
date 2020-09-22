import React from "react";

export default function Banner(props){
    const { children, dark, title, subtitle } = props

    return(
        <div className={`banner ${dark ? 'dark' : ''}`}>
            <h1>{title}</h1>
            <div />
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
