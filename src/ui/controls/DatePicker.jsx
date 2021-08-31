import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

export default function DatePicker(props){
    const {name,label,value,onChange}=props

    const converToDefEventPara=(name,value)=>({
        target: {
            name,value
        }
    })


    return(
        <MuiPickersUtilsProvider
            utils={DateFnsUtils}
        >
            <KeyboardDatePicker
                disableToolbar
                
                variant="dialog"
                inputVariant="standard"
                label={label}
                formate="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={date=>onChange(converToDefEventPara(name,date))}
            >

            </KeyboardDatePicker>




        </MuiPickersUtilsProvider>
    )
}