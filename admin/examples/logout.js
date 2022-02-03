function logout(){
    sessionStorage.setItem("role",null);
    window.location.href = "/teacher/adminlogin.html";
}