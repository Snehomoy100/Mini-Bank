import { Divider, Typography  } from '@material-ui/core';
import React ,{useState,useEffect} from 'react';
import { useMediaQuery,useTheme } from '@material-ui/core';
import { db } from '../firebase';


export default function Users() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    
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

  // let accountNumber = Math.floor(Math.random()*1E16);

    return (
        <div style={{marginBottom:'14em',marginTop:'2em'}}>
            <Typography style={{textAlign:'center'}} variant='h3'>
                Users 
            </Typography>
            <Divider/>
            <div>
            <table style={{width:matchesXS ? '25em' : matchesSM ? '35em' : matchesMD ? '55em' : '70em'}}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE NO.</th>
              <th>ACCOUNT NO.</th>
              <th>BALANCE(₹)</th>
            </tr>
          </thead>
          <tbody>
          {posts.map((data) => (
            <tr>
              <td data-column="NAME">{data.name}</td>
              <td data-column="Email">{data.email}</td>
              <td data-column="Phone No">{data.phone}</td>
              <td data-column="ACCOUNT NO.">{data.account}</td>
              <td data-column="BALANCE(₹)">₹{data.amount}</td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    )
}