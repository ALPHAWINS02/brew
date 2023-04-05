import './App.css';
import Home from './pages/homepage';
import Services from './pages/servicespage';
import Pricing from './pages/pricingpage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import About from './pages/aboutpage';
import { Switch,makeStyles } from '@material-ui/core';
import { createContext, useState } from "react";
import Blog from './pages/blogpage';

const useStyles = makeStyles({
  switch: {
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: '#BD8A7D'
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#BD8A7D",
    },
    "& .MuiSwitch-switchBase":{
      color:"#BD8A7D",
    },
  }
});

export const ThemeContext = createContext(null);

function App() {
  const classes=useStyles();
  React.useEffect(()=>{
    document.title='Brewlabs'
  });
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
      <div  className='wrapper'>
        <div className="switch">
        <Switch className={classes.switch} color="secondary" onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        </Routes>
        </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
