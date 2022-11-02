var age = 12;
var persoana = {
  name: "John",
  age: 21,
};
console.log(persoana);
persoana.name = "Marius";
console.log(persoana);

var logoElement = document.querySelector(".logo");
logoElement.style.backgroundColor = "red";

function verifyAge() {
  if (logoElement.style.backgroundColor === "red") {
    logoElement.style.backgroundColor = "blue";
  } else {
    logoElement.style.backgroundColor = "red";
  }
}

logoElement.addEventListener("click", verifyAge);

verifyAge();

console.log(logoElement);
