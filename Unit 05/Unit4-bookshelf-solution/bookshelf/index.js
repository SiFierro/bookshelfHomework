const app = document.querySelector('#app');
const updateBtn = document.querySelector("#update") //selecting button for updating the # of favorites
const numFavs = document.querySelector("#numFavs"); // selecting <p> for displaying number of favorites. 
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

app.append(bookshelf.render());

updateBtn.addEventListener('click', updateFavs); // adding an event listner to perform operation after clicking on button. 

function updateFavs(){
  // using .filter to get all the books that are favorite.
  const favBooks = bookshelf.books.filter((book)=> {
    if(book.favorite == true){
      return true
    }
  })
  // displaying the # of favorite books & puttin this into <P> tag 
  numFavs.innerHTML = favBooks.length;
} 
  
