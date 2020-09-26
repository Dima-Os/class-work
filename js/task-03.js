const containerRef = document.querySelector(".container");
function onClick(ev) {
  console.log(ev.target.textContent);
}

containerRef.addEventListener("click", onClick);
