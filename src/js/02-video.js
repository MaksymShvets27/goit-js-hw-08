
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
const onPlay = function (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", `${data.seconds}`);
    // localStorage.setItem("videoplayer-current-time","") 
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onPlay);