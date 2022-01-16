async function main() {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    console.log(books)

    books.forEach(displayBook)
}

function displayBook(book) {
    let container = document.querySelector('#root')

    let listContainer = document.createElement('ul')

    let bookContainer = document.createElement('li')

    let bookQuant = document.createElement('input')
    bookQuant.value = book.quantity

    let saveBtn = document.createElement('button')
    saveBtn.innerHTML = 'Save'

    saveBtn.addEventListener('click', function() {
        console.log('Clicked!')
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: bookQuant.value
            })
        })
    })

    bookContainer.append(bookQuant, saveBtn)

    listContainer.append(bookContainer)

    container.append(listContainer)
}


main()
