import React,{useState} from 'react';
import Header from '../components/ui/Header';
import {ThemeProvider} from '@material-ui/styles';
import theme from './ui/Theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from '../components/ui/footer';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
        value={value} 
        setValue={setValue} 
        selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex} 
        />
        <Switch>
          <Route exact path="/" component={() => <div style={{height: "2000px"}}>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/mobileapp" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} 
        setValue={setValue} 
        selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
        
     
    </ThemeProvider>
  );
}

export default App;
