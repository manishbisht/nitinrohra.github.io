import React from "react";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { ReactComponent as IMDbIcon } from "../../assets/svg/IMDB_Logo_2016.svg"
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
        "& .IMDbIcon": {
            width: "34px",
            height: "auto"
        }
    },
});

const Social = () => {
    const classes = useStyles();
    return (
        <div className={classes.linkContainer}>
            {/* <a
                className={classes.linkItem}
                target="_blank"
                href="https://twitter.com/nitinrohra_"
            >
                <TwitterIcon />
            </a> */}

            {/* either import it from public and use it in img tag */}
            {/* <a
                className={classes.linkItem}
                target="_blank"
                href="https://www.imdb.com/name/nm13562224/"
            >
                <img src="/images/IMDB_Logo_2016.svg" />
            </a> */} 

            {/* calling it as an svg icon by keeping it in src assets folder */}
            <a
                className={classes.linkItem}
                target="_blank"
                href="https://www.imdb.com/name/nm13562224/"
            >
                <IMDbIcon className="IMDbIcon" />
            </a>
            <a
                className={classes.linkItem}
                target="_blank"
                href="https://www.instagram.com/nitinrohra_"
            >
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
                href="https://api.whatsapp.com/send?phone=447587410638"
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
};

export default Social;
