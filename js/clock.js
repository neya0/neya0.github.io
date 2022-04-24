const clock = document.querySelector("#clock");

function clockInnerText(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}

clockInnerText();
setInterval(clockInnerText, 60000);