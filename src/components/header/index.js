import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Social from "../social";
import styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
    header: {
        padding: "40px 5vw",
        color: "#eee",
        display: "flex",
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        fontStyle: "normal",
        color: "#ffffff",
        fontSize: 24,
        margin: "8px 0 2px 0px",
        letterSpacing: "0.3vw",
    },
    navigation: {
        "& > div:first-child": {
            display: "block",
            position: "fixed",
            right: "5vw",
            top: 44,
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
        marginTop: 40,
        height: "calc(100vh - 40px - 70px - 40px)",
        display: "flex",
        flexDirection: "column",
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
    const location = useLocation();

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
            <Link to="/" className={styles.title}>
                <img
                    className={styles.icon}
                    src={"/images/white-logo.png"}
                    alt="white-logo"
                    width={24}
                    loading="lazy"
                />
                nitin rohra
            </Link>
            <div className={classes.navigation}>
                <div onClick={toggleNavbar}>
                    {isNavOptionsVisible ? <CloseIcon /> : <MenuIcon />}
                </div>
                <div className={classes.navOptions}>
                    <Link
                        to="/"
                        className={classes.navItem}
                        style={
                            location.pathname === "/"
                                ? { color: "#FFFFFF" }
                                : {}
                        }
                    >
                        Showreel
                    </Link>
                    <Link
                        to="/work"
                        className={classes.navItem}
                        style={
                            location.pathname === "/work"
                                ? { color: "#FFFFFF" }
                                : {}
                        }
                    >
                        Work
                    </Link>
                    <Social />
                </div>
            </div>
            {isNavOptionsVisible ? (
                <div className={classes.fullScreenNavigationContainer}>
                    <Link
                        to="/"
                        className={classes.navItem}
                        style={
                            location.pathname === "/"
                                ? { color: "#FFFFFF" }
                                : {}
                        }
                    >
                        Showreel
                    </Link>
                    <Link
                        to="/work"
                        className={classes.navItem}
                        style={
                            location.pathname === "/work"
                                ? { color: "#FFFFFF" }
                                : {}
                        }
                    >
                        Work
                    </Link>
                    <Social />
                </div>
            ) : null}
        </header>
    );
};

export default Header;
