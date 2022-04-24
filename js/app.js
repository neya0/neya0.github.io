const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const removeBtn = document.querySelector("#remove_storage");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

function loginSubmitEvent(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(CLASS_HIDDEN);
    localStorage.setItem(USERNAME_KEY, username);
    setGreeting(username);
}

function setGreeting(username){
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(CLASS_HIDDEN);
    //removeBtn.classList.remove(CLASS_HIDDEN);
}

//function removeStorage(){
//    localStorage.removeItem(USERNAME_KEY);
//    window.location.reload();//window의 현재 url을 다시 로드하는 매소드-like 새로고침
//}

const checkedUsername = localStorage.getItem(USERNAME_KEY);

if(checkedUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit",loginSubmitEvent); 
} else{
    loginForm.classList.add(CLASS_HIDDEN);
    setGreeting(checkedUsername);
}

//removeBtn.addEventListener("click",removeStorage);