import { TextField } from "@material-ui/core"
import React from "react"

export default function Input(props){

    const {id,name,label,value,onChange,variant,...other} = props
    return(
        <div>
            <TextField 
                id={id}
                variant={variant}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                required
                {...other}
            />

        </div>
    )
}