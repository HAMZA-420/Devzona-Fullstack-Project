import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import history from '../assets/history.svg';
import Avatar from '@material-ui/core/Avatar';
import mypic from '../assets/mypic.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import Hidden from '@material-ui/core/Hidden';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    avatar: {
        height:"25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 300,
            maxWidth: 300
    }
    }
}))

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD? "1em":"2em"}}>
                <Typography align={matchesMD ? "center": undefined} variant="h2">About us</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer}
            style={{marginTop: "3em"}}
            >
                <Typography 
                variant="h4" 
                align="center" 
                className={classes.missionStatement}>
                Whether it be person to person, business to consumer, or an
                individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. 
                Arc Development will use that principle to provide fast, modern, inexpensive, 
                and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid 
            item 
            container 
            className={classes.rowContainer} 
            style={{marginTop: "10em", marginBottom: "10em"}}
            justify="space-around"
            direction={matchesMD ? "column": "row"}
            alignItems={matchesMD ? "center": undefined}
            >
                <Grid item>
                <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                    <Grid item>
                        <Typography align={matchesMD ? "center": undefined} variant="h4" gutterBottom>
                           History
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography  align={matchesMD ? "center": undefined}  variant="body1" paragraph style={{fontWeight: 700, fontStyle: "italic"}}>
                            We're the new kid on the block
                        </Typography>
                        <Typography  align={matchesMD ? "center": undefined}  variant="body1" paragraph>
                        Founded in 2021, we're ready to get our hands on the world's business problems.
                        </Typography>
                        <Typography  align={matchesMD ? "center": undefined}  variant="body1" paragraph>
                        It all started with one question: Why aren't all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers. 
                        </Typography>
                        <Typography  align={matchesMD ? "center": undefined}  variant="body1" paragraph>
                        We aim to be a powerful force in overcoming these obstacles. 
                        Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                        </Typography>
                        <Typography  align={matchesMD ? "center": undefined}  variant="body1" paragraph>
                        ALL this change can be a lot to keep up with, and that's where we come in.
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item>
                <Grid item container justify="center" lg>
                    <img src={history} alt="quill pen sitting on top of book" 
                     style={{maxHeight: matchesMD ? 200: "22em"}}/>
                </Grid>
                </Grid>
            </Grid>
            <Grid 
            item 
            container 
            direction="column" 
            alignItems="center" 
            className={classes.rowContainer}
            style={{marginBottom: "15em"}}
            >
                <Grid item>
                    <Typography align="center" variant="h4" gutterBottom>Team</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Hamza, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I am a Software Engineer
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={mypic} className={classes.avatar}/>
                </Grid>
                <Hidden lgUp>
                    <Grid item style={{maxWidth: "45em", padding: "1.25em"}} lg>
                        <Typography variant="body1" align="center" paragraph>
                            I have 5 years of experience in developing mobile and web applications.
                            I have developed various web and mobile apps.This website is also developed by me.
                            I am expertise in devops,aws,mobile/web app Development.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>I'm always ready to apply my knowledge to help others with my amazing skills</Typography>
                    </Grid>
                    </Hidden>
                <Grid item container justify={matchesMD ? "center": undefined}>
                    <Grid 
                    item 
                    container 
                    direction="column" 
                    lg 
                    alignItems={matchesMD?"center":undefined}
                    style={{marginBottom: matchesMD ? "2.5em": 0}}
                    >
                        <Grid item>
                            <img src={yearbook} alt="coding friend Pic" 
                            style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">a page from Sophomor yearbook of my friend</Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                    <Grid item style={{maxWidth: "45em", padding: "1.25em"}} lg>
                        <Typography variant="body1" align="center" paragraph>
                            I have 5 years of experience in developing mobile and web applications.
                            I have developed various web and mobile apps.This website is also developed by me.
                            I am expertise in devops,aws,mobile/web app Development.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>I'm always ready to apply my knowledge to help others with my amazing skills</Typography>
                    </Grid>
                    </Hidden>
                    <Grid item container direction="column" alignItems={matchesMD ? "center":"flex-end"} lg>
                        <Grid item>
                            <img src={puppy} alt="grey spotted puppy" 
                            style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                           <Typography variant="caption">my minature dapple dachshund, Sterling</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}