const nameListScope = document.querySelector(".name-list");
const nameList = document.querySelectorAll(".name-list__item");
Array.from(nameList).forEach((el, index) => {
  if (index % 2 !== 0) {
    el.insertAdjacentHTML(
      "afterend",
      "<li><span> ----------------- </span></li>"
    );
  }
});
