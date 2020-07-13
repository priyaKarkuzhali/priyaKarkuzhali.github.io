const timerContent = document.querySelector(".stopwatch");
const resumeButton = document.querySelector(".fas");
console.log(resumeButton);
var milisec =0;
var sec = 0;
var min = 0;
var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hr=0
var hrOut=0
var resumePlay = 0;
const checkTime= (time)=>{
    if(time<10){
        time = "0"+time;
    }
    return time;
};
const resumeplay= ()=>{
  resumePlay = resumePlay+1;
  if(resumePlay===0){
      play();
      resumeButton.classList.remove("fa-play");
      resumeButton.classList.add("fa-pause");
  }
  if( resumePlay ===1)
  {     
    resumeButton.classList.remove("fa-pause");
    resumeButton.classList.add("fa-play");
       
       resumePlay=-1;
       resume();
  }
}
function play() {
    x = setInterval(timer, 10);
  }
  function resume() {
    clearInterval(x);
  } 
 function timer(){ 
  milisecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hrout = checkTime(hr);
  milisec = ++milisec;

    if(milisec===100){
        milisec = 0;
        sec = ++sec; 
    }
    if(sec===60){
        min = ++min;
        sec=0;
    }
    if(min===60){
      hr = ++hr;
    }
    //console.log(milisecOut,secOut,minOut);
    document.querySelector(".millisecs").textContent = milisecOut;
    document.querySelector(".secs").textContent = secOut;
    document.querySelector(".min").textContent= minOut;
    //document.querySelector(".hr").textContent= hrOut;
 }
play();
resumeButton.addEventListener('click',()=>{
    resumeplay();
    console.log(resumeButton);
})