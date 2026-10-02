const myLibrary = []

const dialog = document.querySelector("dialog")

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.id = crypto.randomUUID()
}

function openModal(){
    dialog.showModal()
}

function closeModal() {
    dialog.close()
}