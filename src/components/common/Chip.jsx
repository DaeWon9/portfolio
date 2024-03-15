import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
    line_chips: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content",
        borderRadius: "10px",
        paddingTop: "2px",
        paddingBottom: "2px",
        paddingLeft: "8px",
        paddingRight: "8px",
        marginRight: "10px",
        marginBottom: "5px",
        fontSize: "14px",
        color: "#e9e9e9",
        border: "1px solid gainsboro",
        cursor: "pointer",
        zIndex: "999",
    },
    circle_chips: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        borderRadius: "50px",
        fontSize: "40px",
        color: "#e9e9e9",
        border: "2px solid #e9e9e9",
        cursor: "pointer",
        margin: "auto",
        zIndex: "999",
    },
}));

const Chip = (props) => {
    const styles = useStyles();
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            key={props.name}
            className={props.type === "Line" ? styles.line_chips : styles.circle_chips}
            style={{ color: props.color, backgroundColor: props.backgroundColor }}
        >
            {props.icon}
            {props.type === "Line" ? props.name : ""}
        </motion.div>
    );
};

export default Chip;
