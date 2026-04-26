// ===== LOGIN =====
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

    if(!user || !pass){
        alert("Fill all fields");
        return;
    }

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        localStorage.setItem("logged", "true");
        window.location.href = "index.html";
    } else {
        alert("Wrong login");
    }
}

// ===== CHECK LOGIN (PA BLOKE LOGIN PAGE) =====
if (
    window.location.pathname.includes("dashboard.html") ||
    window.location.pathname.includes("index.html")
){
    let logged = localStorage.getItem("logged");

    if(logged !== "true"){
        window.location.href = "login.html";
    }
}

// ===== LOGOUT =====
function logout(){
    localStorage.removeItem("logged");
    window.location.href = "login.html";
}

// ===== PREMIUM =====
function checkPremium(){
    let isPremium = localStorage.getItem("premium") === "true";

    let btc = document.getElementById("btcSignal");
    let eth = document.getElementById("ethSignal");

    if(!isPremium){
        if(btc) btc.innerText = "🔒 Locked";
        if(eth) eth.innerText = "🔒 Locked";
    }
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
    let isPremium = localStorage.getItem("premium") === "true";

    if(proposedBTC !== "" && isPremium){
        let el = document.getElementById("btcSignal");
        if(el) el.innerText = proposedBTC;
    }
}

// ===== SAFE RUN =====
if(document.getElementById("btcSignal")){
    checkPremium();
}
