function play(){
  var audio= document.getElementById('miAudio');
  audio.play()
}
function pause(){
  var audio= document.getElementById('miAudio');
  audio.pause()
}
function stop(){
  var audio= document.getElementById('miAudio');
  audio.currentTime = 0;
  audio.pause()
}

function subirVolumen(){
  var audio= document.getElementById('miAudio');
  if(audio.volume < 1){
  audio.volume = audio.volume + 0.1
  }
}

function bajarVolumen(){
  var audio = document.getElementById('miAudio');
  if(audio.volume >= 0.1){
  audio.volume = audio.volume - 0.1
  }
}

function forward(){
  var audio = document.getElementById('miAudio');
  audio.currentTime = audio.currentTime + 10
}

function back(){
  var audio = document.getElementById('miAudio');
  audio.currentTime = audio.currentTime - 10;
}
 function progreso(){
   var audio = document.getElementById('miAudio');
   var progreso = document.getElementById('progreso');
   progreso.value = audio.currentTime;
  
 }
