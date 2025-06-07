const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot33d98/",
            name: "springboot33d98",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot33d98/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小演员招募小程序的设计与开发"
        } 
    }
}
export default base
