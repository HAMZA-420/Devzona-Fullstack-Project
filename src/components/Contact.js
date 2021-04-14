import React,{useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';
import {Link} from 'react-router-dom';
import mobileBackground from '../assets/mobileBackground.jpg'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginButtom: "2em"
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    [theme.breakpoints.down("sm")]: {
        height: 40,
        width: 225
    }
}))

export default function Contact(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");
    const [open, setOpen] = useState(false);

    const onChange= event => {
        let valid;

        switch(event.target.id) {
            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                

                if(!valid) {
                    setEmailHelper("Invalid email")
                } else {
                    setEmailHelper("")
                }
                break;

            case 'phone':
                    setPhone(event.target.value)
                    valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                    

                    if(!valid) {
                        setPhoneHelper("Invalid Helper")
                    } else {
                        setPhoneHelper("")
                    }
                    break;
            default:
                 break;
                    
        }
    }
    return(
        <Grid container direction="row">
            <Grid 
            item 
            container 
            direction="column" 
            alignItems="center" 
            justify="center" 
            style={{marginBottom: matchesMD ? "5em": 0, marginTop: matchesSM? "1em": matchesMD ? "5em": 0}} 
            lg={4} 
            xl={3}
            >
            <Grid item>
                <Grid container direction="column">
                <Grid item>
                    <Typography align={matchesMD ? "center":undefined} variant="h2" style={{lineHeight: 1}}>
                        Contact Us
                    </Typography>
                    <Typography
                      align={matchesMD ? "center":undefined}
                      variant="body1"
                      style={{color: theme.palette.common.blue}}
                      >
                          We're waiting
                      </Typography>
                </Grid>
                <Grid item container style={{marginTop: "2em"}}>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                            <a href="tel:923111417603" style={{textDecoration: "none", color:"inherit"}}>(92)311-1417603</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{marginBottom: "2em"}}>
                    <Grid item>
                        <img src={emailIcon} alt="envelop" style={{marginRight: "0.5em", verticalAlign: "bottom"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
                            <a href="mailto:mhamzakhan.cui@gmail.com" style={{textDecoration: "none", color:"inherit"}}>mhamzakhan.cui@gmail.com</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{maxWidth: "20em"}}>
                    <Grid item style={{marginBottom: "0.5em"}}>
                        <TextField 
                        label="Name" 
                        fullWidth 
                        id="name" 
                        value={name} 
                        onChange={event =>setName(event.target.value)}/>
                    </Grid>
                    <Grid item style={{marginBottom: "0.5em"}}>
                        <TextField 
                        label="Email" 
                        error={emailHelper.length !==0}
                        helperText={emailHelper}
                        fullWidth 
                        id="email" 
                        value={email}
                        onChange={onChange}/>
                    </Grid>
                    <Grid item style={{marginBottom: "0.5em"}}>
                        <TextField 
                        label="Phone" 
                        error={phoneHelper.length!==0}
                        helperText={phoneHelper}
                        fullWidth 
                        id="phone" 
                        value={phone} 
                        onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: "20em"}}>
                    <TextField 
                    fullWidth
                    InputProps={{disableUnderline: true}}
                    multiline 
                    rows={10} 
                    value={message} 
                    className={classes.message} 
                    id="message" 
                    onChange={event => setMessage(event.target.value)} />
                </Grid>
                <Grid item container justify="center" style={{marginTop: "2em"}}>
                    <Button 
                    disabled={name.length === 0 || email.length=== 0|| phone.length===0 ||
                              phoneHelper.length!==0 || emailHelper.length !==0 || message.length===0}
                    variant="contained" 
                    className={classes.sendButton}
                    onClick={() => setOpen(true)}
                    >
                        Send message
                    <img src={airplane} style={{marginLeft: "1em"}} alt="paper airplane" />
                    </Button>
                </Grid>
            </Grid>
            </Grid>
            </Grid>
            <Dialog 
            style={{zIndex: 1302}}
            open={open}
            fullScreen={matchesXS} 
            onClose={() => setOpen(false)} 
             PaperProps={{
                style: {
                    paddingTop: matchesXS ?"1em": "5em",
                    paddingBottom: matchesXS ?"1em":"5em",
                    paddingLeft: matchesXS? 0: matchesSM?"5em": matchesMD ? "10em": "20em",
                    paddingRight: matchesXS? 0: matchesSM?"5em": matchesMD ? "10em": "20em"
                }
            }}
             >
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>
                        
                        <Grid item style={{marginBottom: "0.5em"}}>
                        <TextField 
                        label="Name" 
                        fullWidth 
                        id="name" 
                        value={name} 
                        onChange={event =>setName(event.target.value)}/>
                    </Grid>
                    <Grid item style={{marginBottom: "0.5em"}}>
                        <TextField 
                        label="Email" 
                        error={emailHelper.length !==0}
                        helperText={emailHelper}
                        fullWidth 
                        id="email" 
                        value={email}
                        onChange={onChange}/>
                    </Grid>
                    <Grid item style={{marginBottom: "0.5em"}}>
                        <TextField 
                        label="Phone" 
                        error={phoneHelper.length!==0}
                        helperText={phoneHelper}
                        fullWidth 
                        id="phone" 
                        value={phone} 
                        onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: matchesXS? "100%":"20em"}}>
                    <TextField 
                    fullWidth
                    InputProps={{disableUnderline: true}}
                    multiline 
                    rows={10} 
                    value={message} 
                    className={classes.message} 
                    id="message" 
                    onChange={event => setMessage(event.target.value)} />
                    </Grid>
                    <Grid 
                    item 
                    container 
                    direction={matchesSM ? "column": "row"}
                    style={{marginTop: "2em"}} 
                    alignItems="centers"
                    >
                        <Grid item>
                        <Button style={{fontWeight: 300}} color="primary" onClick={() =>setOpen(false)}>
                            Cancel
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button 
                              disabled={name.length === 0 || email.length=== 0|| phone.length===0 ||
                              phoneHelper.length!==0 || emailHelper.length !==0 || message.length===0}
                              variant="contained" 
                              className={classes.sendButton}
                              onClick={() => setOpen(true)}
                              >
                        Send message
                         <img src={airplane} style={{marginLeft: "1em"}} alt="paper airplane" />
                         </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Grid 
            item 
            container
            direction={matchesMD ? "column": "row"} 
            className={classes.background} 
            alignItems="center"
            justify={matchesMD ? "center": undefined} 
            lg={8}
            xl={9}>
            <Grid item style={{ marginLeft: matchesMD? 0: "3em", textAlign: matchesMD ? "center" : "inherit"}}>
            <Grid container direction="column">
                <Grid item>
                    <Typography align={matchesMD ? "center": undefined} variant="h2">
                        Simple Software.
                        <br />
                        Revolutionary Results.
                    </Typography>
                    <Typography align={matchesMD ? "center": undefined} variant="subtitle2" style={{fontSize: "1.5rem"}}>
                        Take advantage of the 21st Century.
                    </Typography>
                    <Grid container justify={matchesSM ? "center": undefined} item>
                          <Button onClick={() => props.setValue(2) } component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
                                  <span style={{marginRight: 5}}>Learn More</span>
                                  <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                          </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Button 
            component={Link} 
            to="/estimate" 
            variant="contained" 
            className={classes.estimateButton}
            onClick={() => props.setValue(5) }
            >
                Free Estimate
                </Button>
        </Grid>
            </Grid>
        </Grid>
    )
}