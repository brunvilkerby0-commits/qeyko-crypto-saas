// REGISTER
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

// LOGIN
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

// CHECK LOGIN
if(window.location.pathname.includes("dashboard.html") ||
   window.location.pathname.includes("index.html")){

    if(localStorage.getItem("logged") !== "true"){
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("logged");
    window.location.href = "login.html";
}
