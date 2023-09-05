import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        margin: "auto",
        boxShadow: "none",
        backgroundColor: "white",
        borderRadius: 30,
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: "initial",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9,
        marginTop: "30",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    chips: {
        width: "fit-content",
        height: "fit-content",
        borderRadius: "10px",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginRight: "5px",
        marginBottom: "5px",
        fontSize: "small",
        color: "#e9e9e9",
    },
}));

const ProjectCard = ({ image, date, body, link, skills }) => {
    const styles = useStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const [isHover, setIsHover] = useState(false);
    const [skillsDiv, setSkillsDiv] = useState([]);

    const darkColorList = [
        "navy",
        "#FF5733", // 진한 주황색
        "#001f3f", // 진한 남색
        "#B03A2E", // 진한 빨간색
        "#006400", // 진한 녹색
        "#002147", // 진한 파랑
        "#333333", // 진한 회색
    ];

    useEffect(() => {
        let chips = [];
        skills.map((value, index) => {
            chips.push(
                <div
                    key={index}
                    className={styles.chips}
                    style={{ backgroundColor: index > 6 ? darkColorList[index % 7] : darkColorList[index] }}
                >
                    {value}
                </div>
            );
        });

        setSkillsDiv(chips);
    }, []);

    function moveLink() {
        const linkTag = document.createElement("a");
        linkTag.href = link;
        linkTag.setAttribute("target", "_blank");
        linkTag.click();
    }

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className={styles.root}
            onHoverStart={() => {
                setIsHover(true);
            }}
            onHoverEnd={() => {
                setIsHover(false);
            }}
        >
            <CardMedia className={styles.media} image={image} />
            <CardContent className={styles.content}>
                <TextInfoContent classes={textCardContentStyles} overline={"Date : " + date} body={body} />
                <Button color={"primary"} fullWidth className={styles.cta} onClick={() => moveLink()}>
                    Go to github
                </Button>
            </CardContent>
            {isHover ? (
                <div className="hover_section">
                    <p>SKILLS</p>
                    <div className="chips_container">{skillsDiv}</div>
                </div>
            ) : (
                <></>
            )}
        </motion.div>
    );
};

export default ProjectCard;
