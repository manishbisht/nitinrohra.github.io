import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Social from "../social";

const useStyles = makeStyles({
    header: {
        padding: "40px 5%",
        color: "#eee",
        display: "flex",
    },
    title: { flexGrow: 1, fontSize: 22, fontWeight: 600, lineHeight: "22px" },
    navigation: {
        "& > div:first-child": {
            display: "block",
        },
        "& > div:last-child": {
            display: "none",
        },
        "@media only screen and (min-width: 768px)": {
            "& > div:first-child": {
                display: "none",
            },
            "& > div:last-child": {
                display: "flex",
            },
        },
    },
    fullScreenNavigationContainer: {
        backgroundColor: "#222",
        position: "fixed",
        top: 107,
        height: "calc(100vh - 107px)",
        width: "calc(100% - 10%)",
        display: "block",
        "@media only screen and (min-width: 768px)": {
            display: "none",
        },
    },
    navOptions: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        "@media only screen and (min-width: 768px)": {
            flexDirection: "row",
        },
    },
    navItem: {
        padding: "0 10px 30px",
        fontSize: 22,
        lineHeight: "32px",
        color: "#888",
        fontWeight: 600,
        textTransform: "uppercase",
        textDecoration: "none",
        "@media only screen and (min-width: 768px)": {
            flexDirection: "row",
            fontSize: 14,
            lineHeight: "22px",
            padding: "0 10px",
        },
        "&:hover": {
            color: "#eee",
        },
    },
});

const Header = () => {
    const classes = useStyles();
    const [isNavOptionsVisible, setIsNavOptionsVisible] = useState(false);

    const renderNavOptions = () => (
        <div className={classes.navOptions}>
            <a className={classes.navItem} href={"/#/"}>
                Home
            </a>
            <a className={classes.navItem} href={"/#/work"}>
                Work
            </a>
            <Social />
        </div>
    );

    return (
        <header className={classes.header}>
            <div className={classes.title}>NITIN ROHRA</div>
            <div className={classes.navigation}>
                <div
                    onClick={() => setIsNavOptionsVisible(!isNavOptionsVisible)}
                >
                    {isNavOptionsVisible ? <CloseIcon /> : <MenuIcon />}
                </div>
                {renderNavOptions()}
            </div>
            {isNavOptionsVisible ? (
                <div className={classes.fullScreenNavigationContainer}>
                    {renderNavOptions()}
                </div>
            ) : null}
        </header>
    );
};

export default Header;
