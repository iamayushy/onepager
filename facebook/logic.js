let url = "http://localhost:3000/posts";
let body = document.querySelector("body");
let container = document.querySelector("#container");
let card = document.querySelector(".card");

fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    show(data);
  })
  .catch((erroe) => console.log(erroe));

let data;
let names = document.querySelector("#data");
names.addEventListener("submit", (event) => {
  event.preventDefault();
  data = {
    Book: names.bookname.value,
    author: names.author.value,
    comments: [names.comments.value],
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
});

const show = (data) => {
  data.forEach((element) => {
    let bookname = document.createElement("h3");
    bookname.innerHTML = element.Book;
    let authors = document.createElement("h3");
    authors.innerHTML = element.author;
    let comments = document.createElement("p");
    comments.innerHTML = `${element.comments}`;
    card.append(bookname, authors, comments);
    // container.append(card);
    // body.append(container);
  });
};
