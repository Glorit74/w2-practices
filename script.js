function onClickToggle() {
    const body = document.getElementById("bodyId");
    body.classList.toggle("clicked");

    if (body.getAttribute("class") == "clicked") {
        document.querySelector("#menu-btn").style.backgroundColor = "red";
        document.querySelector("#nav").style.setProperty("display", "none");
      }
      else {
        document.querySelector("#menu-btn").style.backgroundColor = "black"; 
        document.querySelector("#nav").style.setProperty("display", "inline");
     }
  }
  
  function loadEvent() {
    // console.log('the page has loaded');
    document.getElementById("menu-btn").addEventListener("click", onClickToggle);
  }
  
  window.addEventListener("load", loadEvent);
