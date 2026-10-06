const myLibrary = []

const dialog = document.querySelector("dialog")
const bookContainer = document.querySelector(".grid-container")

// Form Elements

const formBook = document.querySelector("form")

const titleBook = document.querySelector("#title")
const authorBook = document.querySelector("#author")
const pagesBook = document.querySelector("#pages")
const readBook = document.querySelector("#read")

const submitBtn = document.querySelector("#submit-btn")

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.id = crypto.randomUUID()
}



function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead)
    myLibrary.push(book)
    renderLibrary()
}



function renderLibrary() {
    bookContainer.textContent = ""
    myLibrary.forEach(renderBook)
}

function renderBook(book){
    const card = document.createElement("div")

    // Title Element
    const titleCard = document.createElement("h2")
    titleCard.textContent = book.title

    const authorCard = document.createElement("h3")
    authorCard.textContent = book.author

    const pagesCard = document.createElement("p")
    pagesCard.textContent = book.pages

    const statusButtonCard = document.createElement("button")
    statusButtonCard.textContent = "Toggle Read"
    statusButtonCard.addEventListener("click", () => {
        book.isRead = !book.isRead
        renderLibrary()
    })

    const statusCard = document.createElement("span")
    statusCard.textContent = book.isRead ? "Read" : "Not read"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Remove"

    deleteButton.addEventListener("click", (event) => {
        removeBook(book.id)
    })

    card.appendChild(titleCard)
    card.appendChild(authorCard)
    card.appendChild(pagesCard)
    card.appendChild(statusButtonCard)
    card.appendChild(statusCard)
    card.appendChild(deleteButton)

    bookContainer.appendChild(card)
}

function removeBook(id){
    const index = myLibrary.findIndex(book => book.id === id)
    if (index !== -1) {
        myLibrary.splice(index, 1)
    }
    renderLibrary()
}

function openModal(){
    dialog.showModal()
}

function closeModal() {
    dialog.close()
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    
    const title = titleBook.value
    const author = authorBook.value
    const pages = pagesBook.value
    const isRead = readBook.checked
    
    addBookToLibrary(title, author, pages, isRead)
    
    formBook.reset()
    closeModal()
})
