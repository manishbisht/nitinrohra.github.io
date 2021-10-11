import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    linkContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    linkItem: {
        cursor: "pointer",
        padding: "0px 10px",
        color: "#888",
        "&:hover": {
            color: "#eee",
        },
    },
});

const Social = () => {
    const classes = useStyles();
    return (
        <div className={classes.linkContainer}>
            <a className={classes.linkItem} target="_blank">
                <FacebookIcon />
            </a>
            <a className={classes.linkItem} target="_blank">
                <TwitterIcon />
            </a>
            <a className={classes.linkItem} target="_blank">
                <InstagramIcon />
            </a>
            <a
                className={classes.linkItem}
                target="_blank"
                href="mailto:iamnrohra@gmail.com"
            >
                <EmailIcon />
            </a>
            <a
                className={classes.linkItem}
                target="_blank"
                href="https://api.whatsapp.com/send?phone=918302551835"
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
};

export default Social;
