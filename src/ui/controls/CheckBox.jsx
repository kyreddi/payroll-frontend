import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } from "@material-ui/core"
import React from "react"

export default function CheckBox(props){

    const {name, label,checked,onChange,required}= props

    return(
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox 
                            required={required}
                            name={name}
                            color="primary"
                            checked={checked}
                            onChange={onChange} />}
                label= {label}
            >
            </FormControlLabel>
        </FormControl>
    )

}