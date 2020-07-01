import "./styles.css";

for (var num = 1; num < 10; num++) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  elm.setAttribute("onclick", "remove()");
  document.getElementById("main").appendChild(elm);

  var left = 10;
  var top = 100;

  left = left + Math.floor(Math.random() * 400);
  top = top + Math.floor(Math.random() * 600);

  document.getElementById(num).style.left = "" + left + "px";
  document.getElementById(num).style.top = "" + top + "px";
}
