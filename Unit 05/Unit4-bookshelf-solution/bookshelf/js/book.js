function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.favorite = false;

  /* this will display a book*/
  this.render = function () {
    const li = document.createElement("li");
    // li.textContent = this.title;
    li.innerHTML = `
    <p>${this.title} </p>
    
    `
    const button = document.createElement("button");
    button.innerHTML= "Add To Favorite"
    li.appendChild(button);
    button.addEventListener("click", ()=>{
      toggleFavorite(this);
    });
    return li;
  };
}
function toggleFavorite(book) {
  if(book.favorite == true){
    book.favorite = false;
  } else {
    book.favorite = true;
  }
 
console.log(book)

}

