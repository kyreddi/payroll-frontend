import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core"
import React from "react"



export default function RadioGroup(props) {
    const { name, label, value, onChange, items } = props


    return (
        < FormControl >
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row={true}
             required
             name={name}
             value={value}
             onChange={onChange}>

                {
                    items.map(item=>(
                        <FormControlLabel value={item.title} key={item.id} name={item.title} label={item.title} control={<Radio/>}/>
                    ))
                }

               
            </MuiRadioGroup>
        </FormControl >




    )
}

