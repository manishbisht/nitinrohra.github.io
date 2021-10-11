import React from "react";
import { Redirect, useParams } from "react-router-dom";
import workData from "../../data/work";
import Header from "../../components/header";
import YouTubePlayer from "../../components/YouTubePlayer";
import { Box, Grid } from "@material-ui/core";
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
                <Box pr="5vw" pl="5vw" pb="30px">
                    <div className={styles.title}>{title}</div>
                    <div className={styles.type}>{type}</div>
                    <div className={styles.role}>{role}</div>
                </Box>
                <Box pr="5vw" pl="5vw">
                    {details.map((detail) => {
                        const { type, videoId, images } = detail;
                        switch (type) {
                            case "IMAGES":
                                return (
                                    <Box mt="30px">
                                        <Grid container spacing={1}>
                                            {images.map((image) => (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    lg={4}
                                                >
                                                    <div
                                                        className={styles.image}
                                                        style={{
                                                            backgroundImage: `url(/images/${slug}/${image}.jpeg)`,
                                                        }}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                );
                            case "VIDEO":
                                return <YouTubePlayer videoId={videoId} />;
                            default:
                                return null;
                        }
                    })}
                </Box>
                <Box padding="5vw">
                    <Social />
                </Box>
            </>
        );
    }

    return <Redirect to="/" />;
};

export default WorkDetails;
