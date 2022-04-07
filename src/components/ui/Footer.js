import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
    footer:{
        background:theme.palette.common.blue,
        top:"auto",
        bottom:"0px",
    },
    center:{
        margin:"0 auto"
    },
}))

export default function Footer() {
    const classes = useStyles();

        return (
            <div>
                <AppBar className={classes.footer}>
                    <Toolbar className={classes.center} >
                        <div>
                            <Typography variant="body2" style={{color:'white',textAlign:'center'}}>
                                    Made By Snehomoy
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

