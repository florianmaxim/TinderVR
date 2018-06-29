const config = {
    
    simulation: true,

    debug : false,

    API : {
        BASE_URL : "http://192.168.178.126:8888",
        TOKEN : "17af94b6-1544-4a8b-b872-40b53891a650",

        tinder : {
            ACCESS_TOKEN : "17af94b6-1544-4a8b-b872-40b53891a650"
        },

        facebook : {
            USER_ID : 1
        }
    },

    space : {
        grid : true
    },

    fog : {
        far :10
    },

    world : {
        gravity : {
            x : 0,
            y : -2.5,
            z : 0
        }
    },

    ground : {
        body : true,
        opacity : 0
    },

    picture : {
        frame : false,
        rotatinon: false,

        fixedScale : false,

        containerOpacity : 0.25,
        containerWireframe : false,
        containerColor : 0xff0000
    },

    fetch: {
        ItemsPerCall : 10,
        interval : 10000
    },

    bubble: {
        color : 0xff0000
    },

    text: {

        start: "Open your arms.",
        color : 0x333333

    }
}

export {config}