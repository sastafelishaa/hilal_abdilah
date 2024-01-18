document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 
  if (username === "masbro" && password === "hahaha") {
   alert("Selamat.Anda Berhasil 😎🎉👏")
    window.location.href = "index-1.html";
  } else {
    alert("Login gagal. Coba lagi.😭😭😭");
  }
});
