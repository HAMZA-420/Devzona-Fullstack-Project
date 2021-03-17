import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles= makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "8em",
        textTransform: 'none'
        
    },
    logoContainer: {
        padding: 0,
        "&:hover" : {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    }

}))

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value);
    }

    useEffect(() => {
        if(window.location.pathname ==="/" && value !==0) {
            setValue(0)
        }
        else if(window.location.pathname == "/services" && value!==1) {
            setValue(1)
        }
        else if(window.location.pathname == "/revolution" && value!==2) {
            setValue(2)
        }
        else if(window.location.pathname == "/about" && value!==3) {
            setValue(3)
        }
        else if(window.location.pathname == "/contact" && value!==4) {
            setValue(4)
        }
        else if(window.location.pathname == "/estimate" && value!==5) {
            setValue(5)
        }

    }, [value]);

    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={()=> setValue(0) } disableRipple>
            <svg className={classes.logo} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139" > <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight:300}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style> <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" /> <path className="st0" d="M-1 139h479.92v.01H-1z" /> <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57" > Arc </text> <text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54" > Development </text> <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" /> <path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" /> <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" /> <g id="Group_186" transform="translate(30.153 11.413)"> <g id="Group_185"> <g id="Words"> <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" /> </g> </g> </g> <path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" /> </svg>
            </Button>
            <Tabs 
            value={value}  
            className={classes.tabContainer}
            onChange={handleChange}
            indicatorColor="primary"
            >
                <Tab className={classes.tab} label="Home" component={Link} to="/" />
                <Tab className={classes.tab} label="Services" component={Link} to="/services"/>
                <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution"/>
                <Tab className={classes.tab} label="About Us" component={Link} to="/about"/>
                <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact"/>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
                Free Estimate
            </Button>
            </Toolbar>
           
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    );
}