import React from "react";
import YouTube from "react-youtube";
import styles from "./style.module.css";

const YouTubePlayer = ({ className, options, ...props }) => {
    const opts = {
        ...options,
        playerVars: {
            modestbranding: 1,
            rel: 0,
        },
    };

    return (
        <YouTube
            className={className || styles.container}
            opts={opts}
            {...props}
        />
    );
};

export default YouTubePlayer;
