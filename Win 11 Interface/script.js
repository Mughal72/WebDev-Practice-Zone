let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () =>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom="-645px"
    } 
    else{
        startmenu.style.bottom="50px";
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const chromeIcon = document.getElementById('chrome-icon');
    const recycleBinIcon = document.getElementById('recycle-bin-icon');
  
    if (chromeIcon) {
      chromeIcon.addEventListener('click', function() {
        // Open Google Chrome
        window.open('https://www.google.com/chrome/');
      });
    }
  
    if (recycleBinIcon) {
      recycleBinIcon.addEventListener('click', function() {
        // Perform actions when the Recycle Bin icon is clicked
        // Add your desired functionality here
        console.log('Recycle Bin icon clicked!');
      });
    }
  });
  
  