import { ThemeProvider } from '@material-ui/styles';
import React , {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateUser from './CreateUser';
import History from './History';
import Transfer from './Transfer';
import Footer from './uiLayout/Footer';
import Header from './uiLayout/Header';
import theme from "./uiLayout/Theme";
import Users from './Users';
import HomePage from './HomePage';
// import './ui/App.css'
import './uiLayout/History.css'
import LandingPage from './LandingPage';


function App() {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        
        <Header value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          />
          <Switch>
          <Route exact path='/' 
            render={(props)=>(
              <HomePage
                {...props} 
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          {/* <Route exact path='/landingpage'  
          render={(props)=>(
                <LandingPage
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )} 
            /> */}
          <Route exact path='/users'  
              render={(props)=>(
                <Users
                  {...props} 
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
          />
          <Route exact path='/history' component={History} />
          <Route exact path='/transfer' component={Transfer} />
          <Route exact path='/create' component={CreateUser} />
         
          </Switch>
          {/*
         
         
          
          <Route exact path='/about' component={AboutUs} /> */}
      <Footer value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex} 
      />
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
