function speak(message){
  var msg = new SpeechSynthesisUtterance();
  msg.lang = 'fr-FR';
  msg.volume = 1; // 0 to 1
  msg.rate = 0.5; // 0.1 to 10
  msg.pitch = 1; //0 to 2

  msg.text = message;


  msg.onend = function(e) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };

  window.speechSynthesis.speak(msg);
}
