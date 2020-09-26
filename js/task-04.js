const articles = [
  {
    title: "Title-01",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [{ comment: "coment" }, { comment: "coment" }],
  },
  {
    title: "Title-02",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
    date: "321",
    comments: [
      { comment: "coment" },
      { comment: "coment" },
      { comment: "coment" },
    ],
  },
];

function createArticle() {
    const article = document.createElement("article");
    article.insertAdjacentHTML()

/**<article>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sequi, asperiores optio obcaecati illum nobis aspernatur, 
          suscipit numquam odio quaerat aperiam magni! Aut laboriosam 
          tempore quis placeat esse non impedit
          aspernatur!
        </p>
        <span>Date</span>
          <ul class="coments">
            <li>coment1</li>
            <li>coment2</li>
            <li>coment3</li>
          </ul>
      </article> */
