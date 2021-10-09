import React from "react";
import { Redirect, useParams } from "react-router-dom";
import workData from "../../data/work";
import Header from "../../components/header";
import YouTubePlayer from "../../components/YouTubePlayer";
import { Box } from "@material-ui/core";
import styles from "./style.module.css";
import Social from "../../components/social";

const WorkDetails = ({}) => {
    const { slug } = useParams();

    const workDetails = workData.find((workItem) => workItem.slug === slug);

    if (workDetails) {
        const { title, type, role, details } = workDetails;
        return (
            <>
                <Header />
                <Box pr="5%" pl="5%" pb="30px">
                    <div className={styles.title}>{title}</div>
                    <div className={styles.type}>{type}</div>
                    <div className={styles.role}>{role}</div>
                </Box>
                <Box pr="5%" pl="5%">
                    {details.map((detail) => {
                        const { type, videoId } = detail;
                        switch (type) {
                            case "VIDEO":
                                return <YouTubePlayer videoId={videoId} />;
                            default:
                                return null;
                        }
                    })}
                </Box>
                <Box padding="5%">
                    <Social />
                </Box>
            </>
        );
    }

    return <Redirect to="/" />;
};

export default WorkDetails;
