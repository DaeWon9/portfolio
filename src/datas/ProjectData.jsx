export const getAllProjectData = () => {
    const projectImage = {
        convenienceStore: require('../assets/ConvenienceStore.png'),
        lobster: require('../assets/Lobster.png'),
        eyetist: require('../assets/Eyetist.png'),
    }
    
    let projectData = [
        {
            thumbnailImage : projectImage.convenienceStore,
            date : "2022/08",
            heading : "나홀로 편의점",
            body : "시각장애인분들의 편의성 증진을 위한 품목 구별 앱서비스입니다.",
            link : "https://github.com/En-soso-com/Android",
            
            image : projectImage.convenienceStore,
            background : "뉴스기사 및 유튜버 ‘원샷한솔’님의 컨텐츠들을 보면서 물건을 구매하는 과정에서 점자 표시 미흡으로 인한 시각장애인분들의 불편함을 알게되었습니다. \
                            따라서 핸드폰 카메라를 활용하여 물건을 구매할 떄 어떤 물건인지 알려주는 서비스가 있으면 좋을 것 같다는 생각에 기획하게 되었습니다.",
            takeAway : "처음진행했던 인공지능 어플리케이션 서비스였다.\
                        'AiHub' 사이트에서 상품데이터셋을 다운받아 직접 ai모델을 만들어보는 과정에서 ~~~",
            service : ["음성을 활용하여 어플 실행 및, 안내",
                        "카메라를 활용하여 실시간으로 화면에 노출되어있는 품목의 정보를 음성으로 출력",
                        "음성으로 입력한 품목이 탐지될경우 알려주는 기능"]

        },
        {
            thumbnailImage : projectImage.lobster,
            date : "2022/10",
            heading : "Lobster",
            body : "대학생들의 조별과제 등 팀 단위로 이루어지는 협업을 도와주는 웹 커뮤니티 서비스입니다.",
            link : "https://github.com/2Park1Jo/lobster",

            image : projectImage.lobster,
        },
        {
            thumbnailImage : projectImage.eyetist,
            date : "2023/01",
            heading : "EyeTist",
            body : "손을 사용하기 힘드신분들을 위한 웹 드로잉 서비스입니다.",
            link : "https://github.com/Eyetist/Eyetist_Client",

            image : projectImage.eyetist,
        },
    ]

    return projectData
}

export const getProjectData = (index) => {
    let projects = getAllProjectData()

    return projects[index];
}