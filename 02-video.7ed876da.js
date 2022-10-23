player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",`${e.seconds}`)}));
//# sourceMappingURL=02-video.7ed876da.js.map
