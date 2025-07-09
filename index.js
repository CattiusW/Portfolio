function updatePageTitle() {
  const currentDateTime = new Date();
  const formattedHours = String(currentDateTime.getHours()).padStart(2, '0');
  const formattedMinutes = String(currentDateTime.getMinutes()).padStart(2, '0');
  
  const timeString = `${formattedHours}:${formattedMinutes}`;
  document.title = "Cassius' Site | "+timeString;
}

setInterval(updatePageTitle, 60000);
updatePageTitle();

if(location.hash == "#mail"){
    window.location.replace("https://mailhide.io/e/PYSevtvr")
}