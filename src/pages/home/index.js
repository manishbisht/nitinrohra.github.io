import React from "react";
import Social from "../../components/social";
import styles from "./style.module.css";
import YouTubePlayer from "../../components/YouTubePlayer";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const Home = () => {
    return (
        <Box
            padding="5vh"
            minHeight="90vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <div>
                <img
                    src={"/images/white-logo.png"}
                    alt="white-logo"
                    width={50}
                    loading="lazy"
                />
            </div>
            <div className={styles.title}>Nitin Rohra</div>
            <div className={styles.description}>Cinematographer</div>
            <div className={styles.buttonContainer}>
                <Link to="/work" className={styles.button}>
                    See My Work
                </Link>
            </div>
            <div className={styles.showreelVideo}>
                <YouTubePlayer videoId="uIBUhQ88AYw" />
            </div>
            <Social />
        </Box>
    );
};

export default Home;
