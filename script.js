// ===== LOGIN SYSTEM =====

function register() {
    let user = document.getElementById("username")?.value;
    let pass = document.getElementById("password")?.value;

    if(!user || !pass){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Account created!");
}

function login() {
    let user = document.getElementById("username")?.value;
    let pass = document.getElementById("password")?.value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        localStorage.setItem("logged", "true");
        window.location.href = "index.html";
    } else {
        alert("Wrong login");
    }
}

// CHECK LOGIN
if(window.location.pathname.includes("index.html") || 
   window.location.pathname.includes("dashboard.html")){

    let logged = localStorage.getItem("logged");

    if(logged !== "true"){
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("logged");
    window.location.href = "login.html";
}

// ===== SIGNAL SYSTEM =====

let proposedBTC = "";

function generateSignal(){
    const signals = ["BUY 📈", "SELL 📉"];
    proposedBTC = signals[Math.floor(Math.random() * signals.length)];

    let el = document.getElementById("btcProposed");
    if(el) el.innerText = proposedBTC;
}

function validateSignal(){
    if(proposedBTC !== ""){
        let el = document.getElementById("btcSignal");
        if(el) el.innerText = proposedBTC;
    }
}
