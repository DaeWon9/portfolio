import { FaReact, FaSass } from "react-icons/fa";
import {
    SiJavascript,
    SiStyledcomponents,
    SiTypescript,
    SiRecoil,
    SiMui,
    SiChakraui,
    SiTailwindcss,
    SiCss3,
} from "react-icons/si";

export const getAllSkillsData = () => {
    let skills = [
        {
            name: "React",
            group: "React",
            icon: <FaReact style={{ paddingRight: "2px" }} />,
            backgroundColor: "#61DAFB",
            color: "black",
        },
        {
            name: "TypeScript",
            group: "React",
            icon: <SiTypescript style={{ paddingRight: "2px" }} />,
            backgroundColor: "#3178C6",
            color: "white",
        },
        {
            name: "JavaScript",
            group: "React",
            icon: <SiJavascript style={{ paddingRight: "2px" }} />,
            backgroundColor: "#F7DF1E",
            color: "black",
        },
        {
            name: "Recoil",
            group: "React",
            icon: <SiRecoil style={{ paddingRight: "2px" }} />,
            backgroundColor: "#3578E5",
            color: "white",
        },
        {
            name: "Styled-Components",
            group: "UI",
            icon: <SiStyledcomponents style={{ paddingRight: "2px" }} />,
            backgroundColor: "#DB7093",
            color: "white",
        },
        {
            name: "MUI",
            group: "UI",
            icon: <SiMui style={{ paddingRight: "2px" }} />,
            backgroundColor: "#007FFF",
            color: "white",
        },
        {
            name: "Chakra",
            group: "UI",
            icon: <SiChakraui style={{ paddingRight: "2px" }} />,
            backgroundColor: "#319795",
            color: "white",
        },
        {
            name: "Tailwind",
            group: "UI",
            icon: <SiTailwindcss style={{ paddingRight: "2px" }} />,
            backgroundColor: "#06B6D4",
            color: "white",
        },
        {
            name: "SCSS",
            group: "UI",
            icon: <FaSass style={{ paddingRight: "2px" }} />,
            backgroundColor: "#CC6699",
            color: "white",
        },
        {
            name: "CSS3",
            group: "UI",
            icon: <SiCss3 style={{ paddingRight: "2px" }} />,
            backgroundColor: "#1572B6",
            color: "white",
        },
    ];

    return skills;
};

export const getSkillsData = (key) => {
    let projects = getAllSkillsData();
    projects = projects.filter((project) => project.heading === key);

    return projects;
};
