let addButton = document.querySelector("#addBookMark");


addButton.addEventListener("click", ()=>{
    let linkUserInput = document.querySelector("#bookMarkLink").value;
    let nameUserInput = document.querySelector("#bookMarkName").value;
    let domLinkList = document.querySelector("#bookMarkListItems")
    let domLink = document.createElement("a");
    let domLinkDeletebutton = document.createElement("button");
    domLinkDeletebutton.textContent = "Delete"
    domLinkDeletebutton.addEventListener("click", ()=>{
        domLink.style.display = "none"
        domLinkDeletebutton.style.display = "none"
    })
    domLink.href = linkUserInput;
    domLink.textContent = nameUserInput;

    domLinkList.append(domLink, domLinkDeletebutton)


})