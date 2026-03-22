const greetingElement = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greetingElement.innerText = "Go morning";
  greetingElement.classList.add("morning");
} else if (hour < 18) {
  greetingElement.innerText = "Go aftenoon";
  greetingElement.classList.add("afternoon");
} else {
  greetingElement.innerText = "Go evening";
  greetingElement.classList.add("evening");
}
