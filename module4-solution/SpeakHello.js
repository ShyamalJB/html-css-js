(function(window){
  var helloSpeaker={
    speakWord : "Hello",
    speak : function (name) {
      console.log(this.speakWord + " " + name)
  }
}
window.helloSpeaker=helloSpeaker;
})(window);


