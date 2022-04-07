import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { makeStyles} from '@material-ui/core/styles';
import { TextField ,Button,Grid,Typography,useMediaQuery,useTheme} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from "moment";
import { CircularProgress,Snackbar } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:45,
        width:245,
        fontSize:'1rem',
        marginBottom:'3em',
        backgroundColor:theme.palette.common.orange,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
          }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function  Transfer(){
  const classes = useStyles();
  
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const [sender, setSender] = useState("");
    const  [reciver, setReciver] = useState("");
    const [amt, setAmt] = useState(0);
    const [status, setStatus] = useState("done");
    const [loading, setLoading] = useState(false);

    const [alert, setAlert] = useState({ open: false, color: "" });
    const [alertMessage, setAlertMesssage] = useState("");
    // const [time,setTime]  = useState("");
   
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getDataFromFirebase = [];
      const subscriber = db.collection('users').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setPosts(getDataFromFirebase);
      });
      return () => subscriber();
    }, [])
  
    const sendToTransfer = async () => {
      db.collection("users").doc("transfer").collection("lists").add({
          from:sender,
          to:reciver,
          amount: amt,
          status: status,
          time:  moment().valueOf().toString()
      })
      // .then(() => { alert("Details have been saved") }).catch((error) => { alert(error.message) });
  }

const transferMoney = async (e)=>{
  e.preventDefault();
  setLoading(true);

  var rusr = posts.filter(p =>{ return p.email === reciver});
  console.log('sender account:',rusr[0].amount);

  var  susr =posts.filter(p =>{ return p.email === sender});
  console.log('recvier accunt:',susr[0].amount);
  
 if(susr[0].email === rusr[0].email){
  setLoading(false);
   setAlert({ open: true, color: "#FF3232" });
    setAlertMesssage("Both Sender and Reciver cant be same.");
 } 
 else if (parseFloat(susr[0].amount) < parseFloat(amt)) {
  setLoading(false);
   setAlert({ open: true, color: "#FF3232" });
    setAlertMesssage("Sender dont have enough funds.");
}
else {
  setStatus('Done')
  var ramt = parseFloat(rusr[0].amount) + parseFloat(amt);
  var sena = parseFloat(susr[0].amount) - parseFloat(amt);
  var sup = await db.collection("users").doc(susr[0].key).update({
      amount: parseFloat(sena)
  })
  var rup = await db.collection("users").doc(rusr[0].key).update({
      amount: parseFloat(ramt)
  }).then(() => { 
    // alert("Details have been saved")
    setLoading(false);
    setAlert({ open: true, color: "#4BB543" });
    setAlertMesssage("Money Transferred Successfully !!!!");
    
    
}).catch((error) => { 
    // alert(error.message) 
    setLoading(false);
    setAlert({ open: true, color: "#FF3232" });
    setAlertMesssage("Something went wrong! Please try again.");
});
  window.location.reload();
    setAmt(0);
    setReciver("");
    setSender("");


  console.log('reupdate:', rup);
  console.log('seupdate:', sup);
  sendToTransfer();
}
}
const onAmountChange = (e) => {
          const amt = e.target.value;
          if (!amt || amt.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmt(amt);
        }
        }

        const buttonContents = (
          <React.Fragment>
            Transfer
          </React.Fragment>
        );
  

    return (
         <Grid 
        container 
        direction='column' 
        justifyContent='center'
        style={{
            marginTop:matchesSM ? '4em'  : matchesMD ? '5em' : undefined,
            marginBottom: matchesMD ? '5em' : '4.5em'
        }}
    >
        <Grid item>
            <Grid item container direction='column' style={{alignItems:'center'}}>
                <Grid item>
                    <Typography 
                        variant='h3'
                        align= 'center'
                        style={{lineHeight:1}}
                    >
                        Transfer Money
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    container
                    direction='column' 
                    style={{maxWidth:matchesXS ? '20em' : matchesSM? '25em' :'40em'}}
                >
                <Grid item style={{marginTop:'2em' ,marginBottom:'0.5em'}}>
                  <Typography style={{color:theme.palette.common.blue}}>From</Typography>
              <FormControl variant="outlined" fullWidth>
                <Select
                    native
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    label="From"
                >
                    <option aria-label="None" value="" />
                    {posts.map((data) => {
                        return (<option key={Math.random().toString(36).substr(2, 9)}>{data.email}</option>)
                    })}
                </Select>
            </FormControl>

     
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                  <Typography style={{color:theme.palette.common.blue}}>To</Typography>
                <FormControl variant="outlined" fullWidth >
                <Select
                    native
                    value={reciver}
                    onChange={(e) => setReciver(e.target.value)}
                    label="From"
                >
                    <option aria-label="None" value="" />
                    {posts.map((data) => {
                        return (<option key={Math.random().toString(36).substr(2, 9)}>{data.email}</option>)
                    })}
                </Select>
            </FormControl>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                  <Typography style={{color:theme.palette.common.blue}}>
                    Amount
                  </Typography>
                    <TextField 
                        id="amount"
                        style={{marginTop:'1'}}
                        variant="outlined"
                        fullWidth
                        value={amt}
                        onChange={onAmountChange}
                    />
                </Grid>
                <Grid item container justifyContent='center' style={{marginTop:'2em'}}>
                    <Button 
                        disabled={
                            reciver.length === 0 ||
                            sender.length === 0 ||
                            amt.length === 0
                            }
                        variant='contained' 
                        className={classes.sendButton}
                        onClick={transferMoney}
                    >
                         {loading ? <CircularProgress size={30} /> : buttonContents}
                    </Button>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color
          }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />

    </Grid>
    )
}





