import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Social from "../social";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import color from "color";

const useStyles = makeStyles({
    header: {
        padding: "40px 5%",
        color: "#eee",
        display: "flex",
    },
    title: {
        flexGrow: 1,
        fontSize: 22,
        fontWeight: 600,
        lineHeight: "22px",
        textDecoration: "none",
        color: "#FFFFFF",
    },
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
        display: "block",
        textAlign: "center",
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

    useEffect(() => {
        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
        };
    }, []);

    function toggleNavbar() {
        if (isNavOptionsVisible) {
            document.body.style.position = "";
            document.body.style.top = "";
        } else {
            document.body.style.position = "fixed";
            document.body.style.top = `-${window.scrollY}px`;
        }
        setIsNavOptionsVisible(!isNavOptionsVisible);
    }

    return (
        <header className={styles.header}>
            <Link to="/" className={classes.title}>
                nitin rohra
            </Link>
            <div className={classes.navigation}>
                <div onClick={toggleNavbar}>
                    {isNavOptionsVisible ? <CloseIcon /> : <MenuIcon />}
                </div>
                <div className={classes.navOptions}>
                    <Link to="/" className={classes.navItem}>
                        Home
                    </Link>
                    <Link to="/work" className={classes.navItem}>
                        Work
                    </Link>
                    <Social />
                </div>
            </div>
            {isNavOptionsVisible ? (
                <div className={classes.fullScreenNavigationContainer}>
                    <Link to="/" className={classes.navItem}>
                        Home
                    </Link>
                    <Link to="/work" className={classes.navItem}>
                        Work
                    </Link>
                    <Social />
                </div>
            ) : null}
        </header>
    );
};

export default Header;
