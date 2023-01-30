export const getProjectData = () =>{
    const projectImage = {
        convenienceStore: require('../assets/ConvenienceStore.png'),
        lobster: require('../assets/Lobster.png'),
        eyetist: require('../assets/Eyetist.png'),
    }
    
    let projectData = [
        {
            image : projectImage.convenienceStore,
            date : "2022/08",
            heading : "나홀로 편의점",
            body : "시각장애인분들의 편의성 증진을 위한 품목 구별 앱서비스입니다.",
            link : "https://github.com/En-soso-com/Android",
        },
        {
            image : projectImage.lobster,
            date : "2022/10",
            heading : "Lobster",
            body : "대학생들의 조별과제 등 팀 단위로 이루어지는 협업을 도와주는 웹 커뮤니티 서비스입니다.",
            link : "https://github.com/2Park1Jo/lobster",
        },
        {
            image : projectImage.eyetist,
            date : "2023/01",
            heading : "EyeTist",
            body : "손을 사용하기 힘드신분들을 위한 웹 드로잉 서비스입니다.",
            link : "https://github.com/Eyetist/Eyetist_Client",
        },
    ]

    return projectData
}