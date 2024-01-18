(function(window){
  var byeSpeaker={
    speakWord: "Good Bye",
    speak: function (name) {
      console.log(this.speakWord + " " + name);
    }
  };
  
window.byeSpeaker=byeSpeaker;
})(window);


