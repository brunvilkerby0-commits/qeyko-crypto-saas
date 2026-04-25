// ===== LOGIN SYSTEM =====

function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Account created!");
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        localStorage.setItem("logged", "true");
        window.location.href = "index.html";
    } else {
        alert("Wrong login");
    }
}

// ===== CHECK LOGIN =====

if(window.location.pathname.includes("index.html") || 
   window.location.pathname === "/"){

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

// ===== AUTO SIGNAL =====

function randomSignal() {
    const signals = ["BUY 📈", "SELL 📉"];
    return signals[Math.floor(Math.random() * signals.length)];
}

function updateSignals() {
    let btc = document.getElementById("btcSignal");
    let eth = document.getElementById("ethSignal");

    if(btc && eth){
        btc.innerText = randomSignal();
        eth.innerText = randomSignal();
    }
}

setInterval(updateSignals, 5000);
updateSignals();
