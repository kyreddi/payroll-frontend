import { Button as MuiButton, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1)
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Button(props){
    const classes = useStyles();
    const {text,size,color,variant,onClick,fontSize,...others} = (props)

    return(
        <MuiButton
        
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}
            {...others}
            classes={{ root: classes.root, label: classes.label }}
        >
            {text}
        </MuiButton>
    )

}