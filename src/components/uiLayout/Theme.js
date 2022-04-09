import { createTheme } from '@material-ui/core/styles';
 
const arcPurple = '#5A20CB';
const arcOrange ='#E07C24';
const arcGrey = '#758283'
 
export default createTheme({
  palette: {
    common: {
      blue: arcPurple,
      orange: arcOrange
    },
    primary: {
      main: arcPurple
    },
    secondary: {
      main: arcOrange
    }
  },
  typography:{
      tab:{
        fontFamily:'Roboto',
        textTransform:'none',
        fontWeight:700,
        fontSize:'1rem',
        color:'white'
      },
      estimate:{
        fontFamily:'Raleway',
        fontSize:'1rem',
        textTransform:'none',
        color:'white'
      },
      h2:{
        fontFamily:'Raleway',
        fontWeight:700,
        fontSize:'2.5rem',
        color:arcPurple,
        lineHeight:1.5
      },
      h3: {
        fontFamily: "Roboto",
        fontSize: "2.5rem",
        color: arcPurple
      },
      h4:{
        fontFamily:'Raleway',
        fontSize:'1.75rem',
        color:arcPurple,
        fontWeight:700
      },
      subtitle1:{
        fontSize:'1.25rem',
        fontWeight:300,
        color:arcGrey
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1.25rem",
        color: arcGrey,
        fontWeight: 300
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: arcGrey
      },
      learnButton: {
        borderColor: arcPurple,
        borderWidth: 2,
        textTransform: "none",
        color: arcPurple,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold"
      }
  },
  overrides :{
    MuiInputLabel:{
      root:{
        color:arcPurple,
        fontSize:'1rem'
      }
    },
    MuiInput:{
      root: {
        color: arcPurple,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcPurple}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcPurple}`
        }
      }
    }
  }
});
