import React from "react";
import workData from "../../data/work";
import Header from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    workItem: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        cursor: "pointer",
        "& > div:first-child": {
            background: "rgba(0, 0, 0, 0.25)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#FFFFFF",
            opacity: 0,
            transition: "opacity ease 0.7",
            "& > div:first-child": {
                fontSize: "16px",
                fontWeight: 700,
            },
            "& > div:last-child": {
                fontSize: "13px",
                fontWeight: 400,
            },
        },
        "&:hover": {
            "& > div:first-child": {
                opacity: 1,
            },
        },
    },
}));
const Work = () => {
    const classes = useStyles();

    const renderWorkSection = () => {
        return (
            <Box pr="5%" pl="5%">
                <Grid container spacing={1}>
                    {workData.map((workItem) => (
                        <Grid item xs={12} sm={6} lg={4}>
                            <div
                                className={classes.workItem}
                                style={{
                                    backgroundImage: `url(${workItem.image})`,
                                }}
                            >
                                <div>
                                    <div>{workItem.title}</div>
                                    <div>{workItem.description}</div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    };

    return (
        <>
            <Header />
            {renderWorkSection()}
        </>
    );
};

export default Work;
