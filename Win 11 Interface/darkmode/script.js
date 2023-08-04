let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let windows = document.getElementsByClassName("windows")[0];

taskbar.addEventListener("click", () =>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom="-645px"
    } 
    else{
        startmenu.style.bottom="50px";
    }
})

windows.addEventListener("click", () => {
    if (windows.style.bottom == "50px") {
      windows.style.bottom = "-645px";
    } else {
      windows.style.bottom = "50px";
    }
  });