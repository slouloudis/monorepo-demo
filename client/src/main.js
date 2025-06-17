

// 1 Fetch data from my server

// loop through and display each of the books on my page 

const BASE_URL = `https://monorepo-demo-server.onrender.com`
const app = document.getElementById('app')

async function fetchBooks() {
  const res = await fetch(`${BASE_URL}/books`)
  const books = await res.json()
  console.log(books)

  books.forEach((book) => {
    const pTag = document.createElement('p')
    pTag.innerText = book.name
    app.appendChild(pTag)
  })
}

fetchBooks()