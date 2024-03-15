import React, { useEffect, useState } from "react";
import { getAllSkillsData } from "../../datas/SkillsData";
import Chip from "../common/Chip";
import SkillBox from "../skill/SkillBox";
import Snow from "../common/Snow";
import "./Slides.css";

const Skills = (props) => {
    const [onSkillBoxTouch, setOnSkillBoxTouch] = useState(false);
    const [chips, setChips] = useState();
    const [reactChips, setReactChips] = useState();
    const [uiChips, setUiChips] = useState();

    useEffect(() => {
        let chipList = [];
        let reactChipList = [];
        let uiChipList = [];
        getAllSkillsData().map((skill) => {
            chipList.push(
                <Chip
                    key={skill.name}
                    color={skill.color}
                    backgroundColor={skill.backgroundColor}
                    icon={skill.icon}
                    name={skill.name}
                    type="Line"
                />
            );
            if (skill.group === "React") {
                reactChipList.push(
                    <Chip
                        key={skill.name}
                        color={skill.color}
                        backgroundColor={skill.backgroundColor}
                        icon={skill.icon}
                        name={skill.name}
                        type="Circle"
                    />
                );
            } else if (skill.group === "UI") {
                uiChipList.push(
                    <Chip
                        key={skill.name}
                        color={skill.color}
                        backgroundColor={skill.backgroundColor}
                        icon={skill.icon}
                        name={skill.name}
                        type="Circle"
                    />
                );
            }
        });
        setChips(chipList);
        setReactChips(reactChipList);
        setUiChips(uiChipList);
    }, []);

    useEffect(() => {
        if (props.swiper) {
            if (onSkillBoxTouch) {
                props.swiper.allowTouchMove = false;
            } else {
                props.swiper.allowTouchMove = true;
            }
        }
    }, [onSkillBoxTouch]);

    return (
        <div className="slide_container">
            <Snow />
            <div className="slide_header">SKILLS</div>
            <div className="slide_body">
                <div
                    className="skills_container"
                    onTouchStart={() => setOnSkillBoxTouch(true)}
                    onTouchEnd={() => setOnSkillBoxTouch(false)}
                >
                    <div className="chips_container">{chips}</div>
                    <div className="skill_info_container">
                        <SkillBox
                            color="#61DAFB"
                            name="React"
                            contents={[
                                "✤ 재사용이 가능한 컴포넌트 단위로 개발을 진행해봤어요.",
                                "✤ TypeScript를 활용하여 코드의 안정성과 가독성을 향상시킬 수 있어요.",
                                "✤ Recoil 상태관리 라이브러리를 사용해 전역으로 상태관리를 해봤어요.",
                                "✤ React.memo를 활용하여 컴포넌트 리렌더링을 최적화하려고 시도해 봤어요.",
                                "✤ 컴포넌트 라이브러리를 사용하여 스타일링을 간편하고 유연하게 할 수 있어요.",
                            ]}
                            chips={reactChips}
                        />
                        <SkillBox
                            color="#DB7093"
                            name="Design Tools"
                            contents={[
                                "✤ Styled-components를 활용하여 컴포넌트 스타일링을 할 수 있어요.",
                                "✤ MUI에서 제공하는 컴포넌트들을 활용하여 화면을 구성해 봤어요.",
                                "✤ Chakra, Tailwind를 활용하여 간편하게 디자인 시스템을 구축해 봤어요.",
                                "✤ CSS3 미디어 쿼리 @media를 사용하여 환경에 맞춘 반응형 웹 디자인을 해봤어요.",
                                "✤ SCSS 문법을 사용해 봤어요.",
                            ]}
                            chips={uiChips}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
