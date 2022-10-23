!function(){player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time","".concat(e.seconds))}))}();
//# sourceMappingURL=02-video.25bfff20.js.map
