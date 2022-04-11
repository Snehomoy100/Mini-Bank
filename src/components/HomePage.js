import React from 'react';
import { makeStyles, Grid, Typography,useMediaQuery,useTheme ,Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BankPic from '../assests/bank.jpg'
import {signInWithGoogle} from '../firebase'

const useStyles = makeStyles(theme=>({

    rowContainer:{
        paddingLeft:'5em',
        paddingRight:'5em',
      
        [theme.breakpoints.down('sm')]:{
            paddingLeft:'1.5em',
            paddingRight:'1.5em'
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        backgroundColor:theme.palette.common.orange,
        height:45,
        width:200,
        // marginRight:40,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        }
    },

}))

export default function HomePage(props){
    const classes = useStyles();

    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    // const techOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: technologyAnimation,
    //     rendererSettings: {
    //       preserveAspectRatio: 'xMidYMid slice'
    //     }
    // }


    return(
        <Grid container direction='column'>
            <Grid item className={classes.rowContainer} style={{marginTop:'1em'}}>
                <Typography 
                    variant='h2' 
                    style={{fontFamily:'Raleway' }}
                    align={matchesMD ? 'center' : undefined}
                >
                     Welcome to Bank,
                </Typography>
            </Grid>
            <Grid 
                item 
                container 
                direction={matchesMD ? 'column' : 'row' }
                className={classes.rowContainer}
                alignItems='center'
                style={{marginTop:' 2em',marginBottom:'1.7em'}}
            >
                <Grid item lg>
                    <img 
                        src={BankPic}
                        alt='mountain' 
                        style={{maxWidth:matchesSM ? 300 :'40em',
                                marginRight:matchesMD ? 0 : '5em',
                                marginBottom:matchesMD ? '5em' :0
                            }} 
                    />
                </Grid>

                <Grid item container direction='column' lg style={{maxWidth:'40em'}}>
                    <Grid item>
                        <Typography variant='h2' style={{textAlign:'center'}} gutterBottom align={matchesMD ? 'center' : 'inherit'}>
                            MINI BANK
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Grid item align='center' style={{marginBottom:'3em'}}>
                        <Button variant='contained' className={classes.estimateButton}  
                                onClick = {signInWithGoogle}
                                component={Link}
                                to='/create'
                                style={{color:'white'}}
                        >
                        Sign in with Google
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}