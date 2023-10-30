import { SwiperSlide } from "swiper/react";
import { FaReact, FaAmazon } from "react-icons/fa";
import { SiJavascript, SiMicrosoftazure, SiNginx, SiPython, SiPytorch, SiYolo } from "react-icons/si";
import { BsAndroid } from "react-icons/bs";
import { LiaJava } from "react-icons/lia";
import { GiSnakeTongue } from "react-icons/gi";
import { SiVite, SiOpenai } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

export const getAllProjectData = () => {
    const thumnailImage = {
        convenienceStore: require("../assets/thunmnailImage/ConvenienceStore.png"),
        lobster: require("../assets/thunmnailImage/Lobster.png"),
        eyetist: require("../assets/thunmnailImage/Eyetist.png"),
        sutda: require("../assets/thunmnailImage/Sutda.jpeg"),
        portfolio: require("../assets/thunmnailImage/Portfolio.png"),
        keywordHelper: require("../assets/thunmnailImage/KeywordHelper.png"),
    };

    const convenienceStroeImage = {
        start: require("../assets/Image/convenienceStore/start.png"),
        drink: require("../assets/Image/convenienceStore/drink.jpeg"),
        noodle: require("../assets/Image/convenienceStore/noodle.jpeg"),
        snack: require("../assets/Image/convenienceStore/snack.jpeg"),
    };

    const lobsterImage = {
        workspace: require("../assets/Image/lobster/workspace.png"),
        statistics: require("../assets/Image/lobster/statistics.png"),
    };

    const eyeTistImage = {
        start: require("../assets/Image/eyeTist/start.png"),
        login: require("../assets/Image/eyeTist/login.png"),
        painting: require("../assets/Image/eyeTist/painting.png"),
        gallery: require("../assets/Image/eyeTist/gallery.png"),
    };

    const sutdaImage = {
        page1: require("../assets/Image/sutda/sutda.png"),
        page2: require("../assets/Image/sutda/sutda2.png"),
        page3: require("../assets/Image/sutda/sutda3.png"),
        page4: require("../assets/Image/sutda/sutda4.png"),
        page5: require("../assets/Image/sutda/sutda5.png"),
        page6: require("../assets/Image/sutda/sutda6.png"),
        page7: require("../assets/Image/sutda/sutda7.png"),
        page8: require("../assets/Image/sutda/sutda8.png"),
        page9: require("../assets/Image/sutda/sutda9.png"),
        page10: require("../assets/Image/sutda/sutda10.png"),
    };

    const keywordHelperImage = {
        page1: require("../assets/Image/keywordHelper/keywordHelper1.jpg"),
        page2: require("../assets/Image/keywordHelper/keywordHelper2.jpg"),
    };

    let projectData = [
        {
            // eyetist
            award: "🎖 2023 Microsoft Imagine Cup \n World Finalists [ Asia 대표 ]",
            category: "WEB, FRONT_END",
            thumbnailImage: thumnailImage.eyetist,
            date: "2023/01",
            heading: "EyeTist",
            body: "사용자의 얼굴을 인식하여 얼굴의 움직임을 통해 그림을 그릴 수 있는 웹 드로잉 서비스입니다.",
            link: "https://github.com/Eyetist/Eyetist_Client",
            skills: [
                {
                    name: "React",
                    icon: <FaReact style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#61DAFB",
                    color: "black",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#F7DF1E",
                    color: "black",
                },
                {
                    name: "Microsoft Azure",
                    icon: <SiMicrosoftazure style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#0078D4",
                    color: "white",
                },
            ],

            image: (
                <>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={thumnailImage.eyetist} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={eyeTistImage.start} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={eyeTistImage.login} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={eyeTistImage.painting} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={eyeTistImage.gallery} width="80%"></img>
                    </SwiperSlide>
                </>
            ),
            background: (
                <>
                    <p>
                        <strong>{"[2023 Microsoft Imagine Cup World Finalist]"}</strong>
                    </p>
                    <strong>저희 팀은 장애인분들을 위한 서비스를 개발하고자 했습니다.</strong> 여러 자료를 찾아보니,{" "}
                    <strong>장애인분들의 우울증 수치가 비장애인에 비해 높게</strong> 나타난다는 자료를 보게되었고.
                    <strong>그림그리는 활동이 우울증 감소, 와 같은 정신적으로 긍정적</strong>인 효과가 있다는 사실 또한
                    알게되었습니다. 하지만, <strong>손을 사용하기 힘드신분들은 그림그리기에 제약사항이 많았고,</strong>{" "}
                    이에 <strong>얼굴을 움직여 그림그리는 서비스</strong>를 제공하면 좋을 것 같다는 생각에
                    추진하게되었습니다.
                </>
            ),
            takeAway: (
                <p>
                    손을사용하지 못하는 분들을 위한 서비스이기에, 얼굴의 움직임으로만 모든 기능들을 사용할 수 있도록
                    하는 작업이 필요했습니다. 그 과정에서 <strong>MediaPipe</strong>에서 제공하는{" "}
                    <strong>FaceMesh</strong>라는 라이브러리를 사용하여 사용자의 얼굴데이터를 받아왔는데, 처음에는{" "}
                    <strong>눈의 깜빡임</strong>으로 모든 기능들을 제어했었습니다.
                    <br />
                    실제로 손을사용하기 힘드신분들을 찾아가 저희 서비스에 대한 피드백을 부탁드린결과, 개개인의 눈의
                    특성으로 인해 불편함을 호소하는 사용자가 많았고 이로인해 <strong>입을 활용하는 모드</strong>를
                    추가하게 되었습니다. 이를 통해 다양한 사용자의 특성을 고려해야한다는 점을 몸소 느꼈고 더더욱{" "}
                    <strong>UX & UI</strong>구상에 공을 들인 프로젝트입니다.
                </p>
            ),
            service: (
                <>
                    <p>
                        <strong>
                            ✤ 사용자의 <span style={{ color: "#ed3770" }}>얼굴데이터</span>를 활용한{" "}
                            <span style={{ color: "#ed3770" }}>웹 드로잉</span> 서비스
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>EyeMode & MouthMode</span>를 제공하여 사용자가 편리한
                            방식으로 제어
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>눈과 입의 움직임으로 컨트롤</span> 가능한 마우스 &
                            키보드 & 버튼
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 다양한 <span style={{ color: "#ed3770" }}>그림그리기 도구</span> 제공
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>갤러리</span>를 통한 그림공유
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ Github :{" "}
                            <a target="_blank" href="https://github.com/Eyetist/Eyetist_Client">
                                https://github.com/Eyetist/Eyetist_Client
                            </a>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 개발일지 :{" "}
                            <a
                                target="_blank"
                                href="https://www.notion.so/Microsoft-Imagine-Cup-2023-2a62ec83bd384070ae352435f6f7c8ab"
                            >
                                Link
                            </a>
                        </strong>
                    </p>
                </>
            ),
        },
        {
            // 나홀로 편의점
            award: "🥇 세종대학교 제 4회 소프트웨어학과 \n 학술제 [ 최우수상 ]",
            category: "APP, FRONT_END",
            thumbnailImage: thumnailImage.convenienceStore,
            date: "2022/08",
            heading: "나홀로 편의점",
            body: "시각장애인분들의 편의성 증진을 위한 품목 구별 앱서비스입니다.",
            link: "https://github.com/En-soso-com/Android",
            skills: [
                {
                    name: "Android",
                    icon: <BsAndroid style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#3DDC84",
                    color: "black",
                },
                {
                    name: "Java",
                    icon: <LiaJava style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#FF7800",
                    color: "white",
                },
                {
                    name: "Python",
                    icon: <SiPython style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#3776AB",
                    color: "white",
                },
                {
                    name: "Pytorch",
                    icon: <SiPytorch style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#EE4C2C",
                    color: "white",
                },
                {
                    name: "Yolov5",
                    icon: <SiYolo style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#00FFFF",
                    color: "black",
                },
            ],

            image: (
                <>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={convenienceStroeImage.start} width="60%" height="88%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={convenienceStroeImage.noodle} width="60%" height="88%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={convenienceStroeImage.snack} width="60%" height="88%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={convenienceStroeImage.drink} width="60%" height="88%"></img>
                    </SwiperSlide>
                </>
            ),
            background: (
                <p>
                    뉴스기사 및 유튜버 ‘원샷한솔’님의 컨텐츠들을 보면서{" "}
                    <strong>
                        물건을 구매하는 과정에서 점자 표시 미흡으로 인한 시각장애인분들의 불편함을 알게되었습니다.{" "}
                    </strong>
                    따라서 <strong>핸드폰 카메라를 활용</strong>하여 물건을 구매할 때{" "}
                    <strong>어떤 물건인지 알려주는 서비스</strong>가 있으면 좋을 것 같다는 생각에 기획하게 되었습니다.
                </p>
            ),
            takeAway: (
                <p>
                    처음 진행했던 <strong>인공지능 어플리케이션 서비스</strong>인것 만으로도 의미가 있었지만, <br />그
                    과정에서 <strong>"Aihub"</strong>의 데이터셋과 <strong>"Roboflow"</strong>를 활용하여 인공지능
                    모델을 학습시키기 위한 <strong>데이터셋을 구축</strong>하고,
                    <strong>"Colab"</strong>환경에서 직접 학습시킨 모델을 안드로이드에 탑재하여 사용해보는 값진 경험을
                    하였습니다.
                    <br />
                    또한 <strong>시작장애인분들의 편의성을 위한 UX 구상</strong>에 많은 공을 들인 프로젝트입니다.
                </p>
            ),
            service: (
                <>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>음성</span>을 활용하여{" "}
                            <span style={{ color: "#ed3770" }}>어플 실행 & 안내</span>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>카메라</span>를 활용하여 실시간으로{" "}
                            <span style={{ color: "#ed3770" }}>화면에 노출되어있는 물건</span>의 정보를{" "}
                            <span style={{ color: "#ed3770" }}>음성</span>으로 출력
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>찾고자 하는 물건</span>이 탐지될경우{" "}
                            <span style={{ color: "#ed3770" }}>음성</span>으로 알려주는 기능
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ Github :{" "}
                            <a target="_blank" href="https://github.com/En-soso-com/Android">
                                https://github.com/En-soso-com/Android
                            </a>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 개발일지 :{" "}
                            <a target="_blank" href="https://www.notion.so/SW-2022-8f3c835ea95d472189e1256280b65d9a">
                                Link
                            </a>
                        </strong>
                    </p>
                </>
            ),
        },
        {
            // sutda
            category: "ETC, FRONT_END",
            thumbnailImage: thumnailImage.sutda,
            date: "2022/05",
            heading: "Kakao Friends Sutda",
            body: "카카오프렌즈 컨셉으로 제작한 섯다게임입니다.",
            link: "https://github.com/DaeWon9/OpenSourceProject",
            skills: [
                {
                    name: "Python",
                    icon: <SiPython style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#3776AB",
                },
                {
                    name: "PyGame",
                    icon: <GiSnakeTongue style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#3C2179",
                },
            ],

            image: (
                <>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page1} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page2} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page3} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page4} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page5} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page6} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page7} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page8} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page9} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={sutdaImage.page10} width="80%"></img>
                    </SwiperSlide>
                </>
            ),
            background: (
                <p>
                    버킷리스트중 하나가 <strong>"나만의 게임을 만들어보자"</strong> 였습니다. 학기 중 오픈소스를
                    활용하는 프로젝트를 진행하게 되었고, 이에 <strong>Python기반 오픈소스인 Pygame</strong>을 사용하여{" "}
                    <strong>카카오프렌즈 컨셉</strong>의 <strong>섯다게임</strong>을 만들게 되었습니다.
                </p>
            ),
            takeAway: (
                <p>
                    이 프로젝트는 <strong>오픈소스를</strong> 활용해 보는 프로젝트였습니다. 그 과정에서{" "}
                    <strong>Pygame 라이브러리</strong>를 사용하였고 Pygame에서 제공해 주는 다양한 함수들을 사용하여
                    개발을 해보니,{" "}
                    <strong>해당 정보를 처음 접하는 개발자들에게 오픈소스가 수많은 시행착오를 줄여준다는 것</strong>이
                    실감이 났습니다. 또한 부수적으로 필요한 정보를 얻기 위해 <strong>공식 문서를</strong> 찾아보는 법을
                    익힐 수 있었습니다.
                    <br />
                    <br />{" "}
                    <strong>
                        직접 게임콘텐츠 설계를 해보는 경험, 포토샵 작업을 통해 사용자 친화적인 UX/UI를 만들어보는
                    </strong>{" "}
                    값진 경험을 한 프로젝트입니다. <br /> <br />
                    추가로 <strong>저작권이 있는 이미지를</strong> 사용했기에 <strong>저작권 문제에</strong> 대해 다시
                    한번 생각해 보았고, 규모가 있는 프로젝트에서 <strong>협업의 중요성</strong>과{" "}
                    <strong>코드 분리의 필요성</strong>을 느꼈습니다.
                </p>
            ),
            service: (
                <>
                    <p>
                        <strong>
                            ✤ Github :{" "}
                            <a target="_blank" href="https://github.com/DaeWon9/OpenSourceProject">
                                https://github.com/DaeWon9/OpenSourceProject
                            </a>
                        </strong>
                    </p>
                </>
            ),
        },
        {
            // portfolio
            category: "WEB, FRONT_END",
            thumbnailImage: thumnailImage.portfolio,
            date: "2023/02",
            heading: "Portfolio",
            body: "포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트입니다.",
            link: "https://github.com/DaeWon9/portfolio",
            skills: [
                {
                    name: "React",
                    icon: <FaReact style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#61DAFB",
                    color: "black",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#F7DF1E",
                    color: "black",
                },
            ],

            image: (
                <>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={thumnailImage.portfolio} width="80%"></img>
                    </SwiperSlide>
                </>
            ),
            background: (
                <p>
                    포트폴리오 용도로 개발한 웹사이트입니다. <strong>"React + JavaScript"</strong> 조합으로 개발을
                    진행하였습니다.
                    <br />
                    <br />
                    <strong>자기소개, 인적사항, 수상경력, 기술스택, 프로젝트 경험</strong>을 나타내기 위한 용도입니다.
                    <br />
                    <br />
                    CSS3 미디어 쿼리 <strong>@media</strong>를 사용하여 <strong>Mobile</strong>과 <strong>PC</strong>{" "}
                    환경에 맞춘 <strong>반응형 웹 디자인</strong>을 하였습니다.
                    <br />
                    <br />
                    <strong>GitHub</strong>에서 제공하는 정적 웹페이지 호스팅 서비스인 <strong>GitHub Pages</strong>를
                    이용하여 배포를 진행하였습니다.
                </p>
            ),
            takeAway: <p></p>,
            service: (
                <>
                    <p>
                        <strong>
                            ✤ Github :{" "}
                            <a target="_blank" href="https://github.com/DaeWon9/portfolio">
                                https://github.com/DaeWon9/portfolio
                            </a>
                        </strong>
                    </p>
                </>
            ),
        },
        {
            // keyword Helper
            category: "WEB, FRONT_END",
            thumbnailImage: thumnailImage.keywordHelper,
            date: "2023/02",
            heading: "Keyword Helper",
            body: "OpenAI를 활용한 키워드 추출 및 해당 키워드가 포함된 대화 요약 서비스입니다.",
            link: "https://github.com/DaeWon9/keyword-helper-front",
            skills: [
                {
                    name: "React",
                    icon: <FaReact style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#61DAFB",
                    color: "black",
                },
                {
                    name: "Vite",
                    icon: <SiVite style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#646CFF",
                    color: "white",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#F7DF1E",
                    color: "black",
                },
                {
                    name: "MySql",
                    icon: <TbBrandMysql style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#4479A1",
                    color: "white",
                },
                {
                    name: "OpenAI",
                    icon: <SiOpenai style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#412991",
                    color: "white",
                },
            ],

            image: (
                <>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={keywordHelperImage.page1} width="100%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={keywordHelperImage.page2} width="100%"></img>
                    </SwiperSlide>
                </>
            ),
            background: (
                <>
                    <p>
                        <strong>{"[ 채널톡 HACKY-TALKY 챌린저스 1기 해커톤 ]"}</strong>
                    </p>
                    채널톡에서 진행된 해커톤에서 진행한 프로젝트입니다.
                    <br />
                    <strong>"커뮤니케이션"</strong>
                    이라는 주제를 가지고 진행되었는데, 저희팀은
                    <strong>"소통"</strong>에 중점을 맞추어{" "}
                    <strong>
                        <span style={{ color: "#ed3770" }}>협업과정에서 나타날 수 있는 문제점</span>
                    </strong>
                    을 해결 하고자 하였습니다.
                    <br />
                    <br />
                    <strong>{"[문제점]"}</strong>
                    <br />
                    <strong>✤ 대화도중 나타나는 어려운 전문용어.</strong>
                    <br />
                    <strong>✤ 채팅내역이 수백개씩 밀리는 경우 대화의 요점 파악이 어려움.</strong>
                    <br />
                    <br />
                    위와 같은 문제점들을 해결하기위해, <strong>OpenAI</strong>를 사용하여 협업공간 내의 원하는 시간대의
                    <strong> 채팅내역을 분석</strong>
                    하여{" "}
                    <strong>
                        <span style={{ color: "#ed3770" }}>"Keyword balloon"</span>
                    </strong>
                    으로 시각화하고 그 중 하나를 클릭하면 해당 <strong>키워드의 의미</strong>뿐만 아니라 해당 키워드와
                    <strong> 연관되어있는 채팅내역</strong>을 <strong>요약</strong>해서 보여줍니다.
                </>
            ),
            takeAway: <p></p>,
            service: (
                <>
                    <p>
                        <strong>
                            ✤ Github :{" "}
                            <a target="_blank" href="https://github.com/DaeWon9/keyword-helper-front">
                                https://github.com/DaeWon9/keyword-helper-front
                            </a>
                        </strong>
                    </p>
                </>
            ),
        },

        {
            // lobster
            award: "🏆 2022 개방형 클라우드 플랫폼 기반 \n 서비스 개발 공모전 [ 특별상 ]",
            category: "WEB, FRONT_END",
            thumbnailImage: thumnailImage.lobster,
            date: "2022/10",
            heading: "Lobster",
            body: "대학생들의 조별과제 등 팀 단위로 이루어지는 협업을 도와주는 웹 커뮤니티 서비스입니다.",
            link: "https://github.com/2Park1Jo/lobster",
            skills: [
                {
                    name: "React",
                    icon: <FaReact style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#61DAFB",
                    color: "black",
                },
                {
                    name: "JavaScript",
                    icon: <SiJavascript style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#F7DF1E",
                    color: "black",
                },
                {
                    name: "Amazon S3",
                    icon: <FaAmazon style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#569A31",
                    color: "white",
                },
                {
                    name: "NGINX",
                    icon: <SiNginx style={{ paddingRight: "2px" }} />,
                    backgroundColor: "#009639",
                    color: "white",
                },
            ],

            image: (
                <>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={thumnailImage.lobster} width="100%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={lobsterImage.workspace} width="80%"></img>
                    </SwiperSlide>
                    <SwiperSlide
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={lobsterImage.statistics} width="80%"></img>
                    </SwiperSlide>
                </>
            ),
            background: (
                <>
                    <p>
                        <strong>{"[2022 개방형 클라우드 플랫폼 기반 서비스 개발 공모전 특별상 수상작]"}</strong>
                    </p>
                    실제로 팀프로젝트를 진행하면서{" "}
                    <strong>
                        기존의 협업 툴을 이용시에 채팅 창에만 자료를 업로드할 수 있거나, 진행사항이 정리된 공간이 따로
                        없어 진행사항을 파악하기에 어려움을 느꼈습니다.
                    </strong>
                    <br />
                    이에 <strong>프로젝트의 진행현황 및 파일을 효과적으로 관리</strong>할 수 있는 기능을 탑재한다면, 팀
                    단위로 협업을 진행하는 분들에게 도움이 될 것이라고 판단하여 개발을 추진하게 되었습니다.
                </>
            ),
            takeAway: (
                <p>
                    이번 프로젝트는 모든것이 처음이였던 프로젝트였습니다.
                    <strong>React, MVVM 패턴, 웹소켓</strong> 등 처음부터 공부하면서 진행했던 프로젝트라 더욱 의미가
                    있었습니다.
                    <strong>React</strong>를 처음으로 사용해보면서 React가 가진 차별성을 느낄 수 있었습니다. 특히{" "}
                    <strong>웹소켓</strong>을 통한 서버와 클라이언트의 <strong>양방향 통신</strong>을 구현하면서,
                    실시간으로 사용자들에게 보여주는 작업이 필요했습니다. 이때 <strong>React 상태관리</strong>의 이점을
                    많이 느꼈습니다.
                </p>
            ),
            service: (
                <>
                    <p>
                        <strong>
                            ✤ <span style={{ color: "#ed3770" }}>팀단위의 협업</span>을 도와주는 웹 커뮤니티 서비스
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 간단한 조작으로 <span style={{ color: "#ed3770" }}>협업공간</span>을{" "}
                            <span style={{ color: "#ed3770" }}>생성</span>하고 팀원들과{" "}
                            <span style={{ color: "#ed3770" }}>공유</span>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 중요한 자료를 따로 관리하는 <span style={{ color: "#ed3770" }}>'버킷'</span>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 한눈에 보는 <span style={{ color: "#ed3770" }}>프로젝트 진행도</span>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 몇 번의 클릭으로 <span style={{ color: "#ed3770" }}>최종 결과물 취합</span>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ Github :{" "}
                            <a target="_blank" href="https://github.com/2Park1Jo/lobster">
                                https://github.com/2Park1Jo/lobster
                            </a>
                        </strong>
                    </p>
                    <p>
                        <strong>
                            ✤ 개발일지 :{" "}
                            <a target="_blank" href="https://www.notion.so/2022-823f93007aca4149aabd6a1ddd77a86d">
                                Link
                            </a>
                        </strong>
                    </p>
                </>
            ),
        },
    ];

    return projectData;
};

export const getProjectData = (key) => {
    let projects = getAllProjectData();
    projects = projects.filter((project) => project.heading === key);

    return projects;
};

export const getCategoryProjectData = (category) => {
    let projects = getAllProjectData();
    projects = projects.filter((project) => project.category.includes(category));

    return projects;
};
