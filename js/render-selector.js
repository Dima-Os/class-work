"use strict";

const articles = [
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [{ comment: "coment" }, { comment: "coment" }],
    category: "politics",
  },
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
    category: "politics",
  },
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
    category: "car",
  },
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
    category: "car",
  },
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
    category: "car",
  },
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
    category: "lifestyle",
  },
  {
    title: "123",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
    category: "test",
  },
];
const userData = {};

const refs = {
  inputedName: document.querySelector(".input-name"),
  inputedSurName: document.querySelector(".input-surname"),
  userData: document.querySelector(".inputed-data"),
  submitButton: document.querySelector(".submit-button"),
  form: document.querySelector("form"),
  body: document.querySelector("body"),
  template: document.querySelector("template"),
};

function createUserdata() {
  const userDataMarkup = document.createElement("p");
  userDataMarkup.classList.add("inputed-data");
  userDataMarkup.textContent = `Hello dear ${refs.inputedName.value} ${refs.inputedSurName.value} please chose you favourite catogory:`;
  refs.body.insertAdjacentElement("beforeend", userDataMarkup);
  userData.name = refs.inputedName.value;
  userData.surname = refs.inputedSurName.value;
  refs.form.reset();
}

function createSelector(arr) {
  const selector = document.createElement("select");
  selector.classList.add("selector");
  const firstOption = document.createElement("option");
  firstOption.textContent = "Category:";
  selector.append(firstOption);
  for (let i = 0; i <= arr.length - 1; i += 1) {
    let option = document.createElement("option");
    option.textContent = arr[i];
    selector.append(option);
  }
  return selector;
}

function getCategoriesList(arr) {
  return arr.reduce((acc, currentObj) => {
    if (!acc.includes(currentObj.category)) {
      acc.push(currentObj.category);
    }
    return acc;
  }, []);
}

function onchangeHendler(ev) {
  if (refs.body.lastElementChild.nodeName === "ARTICLE") {
    refs.body.lastElementChild.innerHTML = "";
  }
  const filteredObj = articles.filter(
    (el) => el.category === ev.currentTarget.value
  );
  const showedNews = showedTemplate(filteredObj);
  refs.body.insertAdjacentHTML("beforeend", showedNews);
  userData.chosenCategory = ev.currentTarget.value;
  localStorage.setItem("userData", JSON.stringify(userData));
}

function showUserData(event) {
  event.preventDefault();
  createUserdata();
  refs.body.insertAdjacentElement(
    "beforeend",
    createSelector(getCategoriesList(articles))
  );
  refs.selectRef = document.querySelector(".selector");
  refs.selectRef.addEventListener("change", onchangeHendler);
}

const showedTemplate = Handlebars.compile(refs.template.innerHTML.trim());
refs.form.addEventListener("submit", showUserData);

function getStoregedData() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  refs.inputedName.value = userData.name;
  refs.inputedSurName.value = userData.surname;
}
getStoregedData();
// - При перезагрузке страницы имя пользовател и выбранная категория должна //
//сохранятся
