import React from "react";
import workData from "../../data/work";
import "../work/styles.css";
import Header from "../../components/header";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
   
}));
const Work = () => {
    const classes = useStyles();
    const renderWorkSection = () =>
        workData.map((workItem) => (

            <div className="maindiv">
                <React.Fragment>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <img src={workItem.image} className="resimg" />
                            <div>{workItem.title}</div>
                            <div>{workItem.description}</div>
                        </Paper>
                    </Grid>

                </React.Fragment>
            </div>
        ));


    return (
        <>

            <Header />
            {renderWorkSection()}
        </>

    );
};

export default Work;
