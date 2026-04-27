// ===== PREMIUM SYSTEM (FULL) =====

// CHECK SI USER PREMIUM
function isUserPremium(){
    return localStorage.getItem("premium") === "true";
}

// AKTIVE PREMIUM (ADMIN)
function activatePremium(){
    localStorage.setItem("premium", "true");
    alert("Premium activated ✅");
    location.reload();
}

// RETIRE PREMIUM (ADMIN)
function removePremium(){
    localStorage.setItem("premium", "false");
    alert("Premium removed ❌");
    location.reload();
}

// BLOKE OU OUVRI SIGNAL
function updateSignalsDisplay(){
    let premium = isUserPremium();

    let btc = document.getElementById("btcSignal");
    let eth = document.getElementById("ethSignal");

    let msgBTC = document.getElementById("premiumMsgBTC");
    let msgETH = document.getElementById("premiumMsgETH");

    if(!premium){
        if(btc) btc.innerText = "🔒 Locked";
        if(eth) eth.innerText = "🔒 Locked";

        if(msgBTC) msgBTC.innerText = "Upgrade to Premium";
        if(msgETH) msgETH.innerText = "Upgrade to Premium";
    }
}

// ===== SIGNAL SYSTEM (BTC + ETH) =====
let proposedBTC = "";
let proposedETH = "";

function generateSignal(){
    const signals = ["BUY 📈", "SELL 📉"];

    proposedBTC = signals[Math.floor(Math.random() * signals.length)];
    proposedETH = signals[Math.floor(Math.random() * signals.length)];

    let btcP = document.getElementById("btcProposed");
    let ethP = document.getElementById("ethProposed");

    if(btcP) btcP.innerText = proposedBTC;
    if(ethP) ethP.innerText = proposedETH;

    alert("Signals generated ⚡");
}

function validateSignal(){
    if(proposedBTC === "" || proposedETH === ""){
        alert("Generate first ⚠️");
        return;
    }

    let btc = document.getElementById("btcSignal");
    let eth = document.getElementById("ethSignal");

    if(btc) btc.innerText = proposedBTC;
    if(eth) eth.innerText = proposedETH;

    alert("Signals validated ✅");
}

// RUN AUTO
if(document.getElementById("btcSignal")){
    updateSignalsDisplay();
}
