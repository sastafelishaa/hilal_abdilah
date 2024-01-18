const nama = ["hilal", "asep", "ajid", "agus"];
let len = nama.length;
let text = "<ul>";

for (let i = 0; i < len; i++) {
  text += "<li>" + nama[i] + "</li>";
}

text += "</ul>";
document.getElementById("demo").innerHTML = text;
