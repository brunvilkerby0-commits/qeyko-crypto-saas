// ===== REGISTER =====
function register() {
    let user = document.getElementById("username")?.value;
    let pass = document.getElementById("password")?.value;

    if(!user || !pass){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Account created ✅");
}

// ===== LOGIN =====
function login() {
    let user = document.getElementById("username")?.value;
    let pass = document.getElementById("password")?.value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        localStorage.setItem("logged", "true");
        window.location.href = "index.html";
    } else {
        alert("Wrong login ❌");
    }
}

// ===== CHECK LOGIN =====
(function(){
    let page = window.location.pathname;

    if(page.includes("dashboard.html") || page.includes("index.html")){
        let logged = localStorage.getItem("logged");

        if(logged !== "true"){
            window.location.href = "login.html";
        }
    }
})();

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

// GENERATE SIGNAL
function generateSignal(){
    const signals = ["BUY 📈", "SELL 📉"];
    proposedBTC = signals[Math.floor(Math.random() * signals.length)];

    let el = document.getElementById("btcProposed");
    if(el) el.innerText = proposedBTC;

    alert("Signal generated ⚡");
}

// VALIDATE SIGNAL (FIXED)
function validateSignal(){
    if(proposedBTC === ""){
        alert("Generate signal first ⚠️");
        return;
    }

    let el = document.getElementById("btcSignal");

    if(el){
        el.innerText = proposedBTC;
    }

    alert("Signal validated ✅");
}

// ===== SAFE RUN =====
if(document.getElementById("btcSignal")){
    checkPremium();
}
