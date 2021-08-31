 import { FormControl, FormLabel, MenuItem, Select as MuiSelect } from "@material-ui/core"
import React from "react"

 export default function Select(props){
     const {name,label,value,onChange,options} = props
   
     return(
         <FormControl>
             <FormLabel>{label}</FormLabel>
             <MuiSelect
                required
                label={label}
                name={name}
                onChange={onChange}
                
             >
                 {
                     options.map(option=>(
                         <MenuItem key={option.id || option.roleID } value={option.id || option.roleID}>{option.title || option.roleName || option.resourceName}</MenuItem>
                         
                     ))
                 }

             </MuiSelect>
             
         </FormControl>
     )
 }