function loadEvent() {
    console.log('the page has loaded');
    function onClick() {
      document.getElementById("menu-btn").classList.toggle("clicked");
    };
    document.getElementById("menu-btn").addEventListener("click", onClick);

// document.getElementById("menu-btn").addEventListener("click", function(){
//   document.getElementById("menu-btn").classList.toggle("onclicked");
// });

}; 
window.addEventListener("load", loadEvent);