import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { motion } from "framer-motion";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useRecoilValue } from "recoil";
import { CENTER_PROJECT, WINDOW_SIZE } from "../../recoil/Atoms";
import { BiLogoGithub, BiSolidCommentDetail } from "react-icons/bi";

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
        paddingTop: "2px",
        paddingBottom: "2px",
        paddingLeft: "8px",
        paddingRight: "8px",
        marginRight: "5px",
        marginBottom: "5px",
        fontSize: "11px",
        color: "#e9e9e9",
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        margin: "auto",
        padding: "3%",
        backgroundColor: "inherit",
        color: "white",
        cursor: "pointer",
        border: "1px solid white",
        borderRadius: "5px",
        fontSize: "14px",
        "&:hover": {
            opacity: 0.8,
        },
    },
    buttonFilled: {
        width: "40%",
        margin: "auto",
        padding: "3%",
        backgroundColor: "#758BFF",
        color: "white",
        cursor: "pointer",
        border: "1px solid #758BFF",
        borderRadius: "5px",
        fontSize: "14px",
        "&:hover": {
            opacity: 0.8,
        },
    },
    icon: {
        float: "left",
        marginTop: "1px",
        fontSize: "17px",
    },
}));

const ProjectCard = ({ index, image, date, body, link, skills, setIsDetailCardOpen }) => {
    const styles = useStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const [isHover, setIsHover] = useState(false);
    const [isShowExtra, setIsShowExtra] = useState(false);
    const [skillsDiv, setSkillsDiv] = useState([]);
    const centerProject = useRecoilValue(CENTER_PROJECT);
    const windowSize = useRecoilValue(WINDOW_SIZE);

    useEffect(() => {
        if (windowSize.width > 480 && isHover && centerProject == index) {
            setIsShowExtra(true);
        } else {
            setIsShowExtra(false);
        }
    }, [isHover, centerProject]);

    useEffect(() => {
        let chips = [];
        skills.map((skill, index) => {
            chips.push(
                <div
                    key={index}
                    className={styles.chips}
                    style={{ color: skill.color, backgroundColor: skill.backgroundColor }}
                >
                    {skill.name}
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
            </CardContent>
            {isShowExtra ? (
                <div className="hover_section">
                    <p>SKILLS</p>
                    <div className="chips_container">{skillsDiv}</div>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "20%",
                            alignItems: "center",
                            justifyContent: "end",
                        }}
                    >
                        <div className={styles.buttonFilled} onClick={() => setIsDetailCardOpen(true)}>
                            <BiSolidCommentDetail className={styles.icon} />
                            DETAIL
                        </div>
                        <div className={styles.button} onClick={() => moveLink()}>
                            <BiLogoGithub className={styles.icon} />
                            &nbsp;GITHUB
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </motion.div>
    );
};

export default ProjectCard;
