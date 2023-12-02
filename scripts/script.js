//js relating to radio buttons. Will hide and unhide elements accordingly

var x = document.getElementById("inputNonAward");
x.style.display = "none"; 

var y = document.getElementById("inputDistguished");
y.style.display = "none"; 

var z = document.getElementById("inputSuperior");
z.style.display = "none"; 


function nonawardFunction() { 
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
}

function distiguishedFunction() { 
  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "none";
}

function superiorFunction() { 
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";
}

//js relating to the toggle between old and new

var b = document.getElementById("new");
b.style.display = "none"; 

function toggleFunction() {
  var a = document.getElementById("old");
  var b = document.getElementById("new");
  if (a.style.display === "none") {
    a.style.display = "block"; 
    b.style.display = "none"; 
  } else {
  a.style.display = "none"; 
  b.style.display = "block"; 
  }
}