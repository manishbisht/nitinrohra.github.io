import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    links: {
        
        verticalalign: "middle",
        fill: "#888",
        height: "30px",
        opacity: 1,
        // width: "30px",
        transition: "fill 0.2s ease"


    }
})
const Social = () => {
    const classes = useStyles();
    return (
        <div className={classes.links}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <EmailIcon />
            <WhatsAppIcon />
        </div>
    )
};

export default Social;
