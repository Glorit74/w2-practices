function onClickToggle() {
    const body = document.getElementById("bodyId");
    body.classList.toggle("clicked");
  }
  
  function loadEvent() {
    // console.log('the page has loaded');
    document.getElementById("menu-btn").addEventListener("click", onClickToggle);
  }
  
  window.addEventListener("load", loadEvent);
