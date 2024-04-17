const {createApp} = Vue;


createApp({
    data () {
        return {
            message: "Hello World",
            image: "./assets/img/img.png",
            imageAlt: "logo di vue.js"
        }
    }
}).mount("#app")