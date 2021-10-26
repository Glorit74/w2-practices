function fastLoad(text) {
  console.log(text);
  return "Text logged";
}
function loadEvent() {
    console.log('the page has loaded');
   
    function onClick() {
      document.getElementById("menu-btn").classList.toggle("clicked");
    const fastLogResult = "Ezt akarjuk kiírni";
    console.log(fastLogResult);
    };
    // function onClickToggle(event) {
      //   event.getElementById("menu-btn").classList.toggle("clicked");
      // };
      document.getElementById("menu-btn").addEventListener("click", onClick);
      
      // document.getElementById("menu-btn").addEventListener("click", function(){
        //   document.getElementById("menu-btn").classList.toggle("onclicked");
        // });
        
      }; 
fastLoad("Na ez minden függvényen kívül van");      
window.addEventListener("load", loadEvent);