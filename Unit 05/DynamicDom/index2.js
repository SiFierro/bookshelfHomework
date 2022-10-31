class BookMark{
    constructor(bookMarkName, bookMarkLink){
        this.bookMarkName = bookMarkName;
        this.bookMarkLink = bookMarkLink;
    }

    render(){
        let aTag = document.createElement("a");
        aTag.textContent = this.bookMarkName;
        aTag.href = this.bookMarkLink;
        return aTag;
    }

}

class BookMarkManager{
    constructor(){
        this.arrayOfBookmarks = [];
    }

    addBookMark(bookmark){
        this.arrayOfBookmarks.push(bookmark);
    }

    refresh(){
        this.clearDom();
        this.render();
    }

    render(){
        let listOfBookMarks = document.querySelector("#bookMarkListItems");
        this.arrayOfBookmarks.map(bookmark=>{
            let deleteTag = document.createElement("button");
            deleteTag.textContent = "X"
            deleteTag.addEventListener("click", ()=>{

              this.arrayOfBookmarks=  this.arrayOfBookmarks.filter(aBookmark=>{
                    return aBookmark !== bookmark
                })
                this.refresh()
            })
            
            let renderedBookMark = bookmark.render();
            listOfBookMarks.append(renderedBookMark, deleteTag)
        })
    }
    clearDom(){
        let list = document.querySelector("#bookMarkListItems");

        list.innerHTML = "";
    }
}

let addButton = document.querySelector("#addBookMark");
let bookMarkManager = new BookMarkManager();

addButton.addEventListener("click", ()=>{
    let linkUserInput = document.querySelector("#bookMarkLink").value;
    let nameUserInput = document.querySelector("#bookMarkName").value;
    let bookMark = new BookMark(nameUserInput, linkUserInput);
    bookMarkManager.addBookMark(bookMark);
    bookMarkManager.clearDom()
    bookMarkManager.render()
})