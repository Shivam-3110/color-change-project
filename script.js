
 function getRandomHexColor() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}
console.log(getRandomHexColor());
let intervalid ;
  let startchangingcolor = function(){
     intervalid = setInterval(chnagebgcolor,1000)
    function chnagebgcolor(){
    document.body.style.backgroundColor= getRandomHexColor();
  }}
  let stopchangingcolor = function(){
    clearInterval(intervalid);
    
  }
 
 let st = document.querySelector("#start") 
 st.addEventListener('click',startchangingcolor)

 let sp = document.querySelector("#stop");
 sp.addEventListener('click',stopchangingcolor)
