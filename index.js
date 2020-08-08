class Main {

    user = "";
    pass = "";

    userInfo = []

    constructor(user,pass) {
        this.user = user;
        this.pass = pass;
    }

    getUserInfo() {
        this.userInfo = [this.user, this.pass];
        return this.userInfo;
    }
}

function start() {
    var main = new Main("hello","world");
    var info = main.getUserInfo();

    for (var i = 0; i < info.length; i++) {
        console.log(info[i]);
    }
}

start();
