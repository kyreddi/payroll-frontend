import React from "react"

const MessageBox=(props)=>{
    return(
        <div className={`alt alt-${props.varient || "info"}`}>
           {props.children}
        </div>
    )
}
export default MessageBox