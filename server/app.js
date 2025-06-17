import express from "express"
import cors from "cors"

// set up my express handler

const app = express()
// allow cross origin requests

// whenever you see app.use -> whatever is inside it is something called middleware - we're setting controlls headers here
app.use(cors())


const books = [
    {name: "Dune", year: 1937 },
    {name: "Butter", year: 2025},
    {name: "Fellowship of the Ring", year: 1954 },
    {name: "Charlie and The Chocolate Factory", year: 1964 },
    {name: "The hobbit", year: 1937 },
    {name: "The Little Prince", year:1943 },
    {name: "1984", year: 1949 },
    {name: "Ready Player Two", year: 2020 },
]



app.get('/', (request, response) => {
    response.json(`You're looking at my root route! How roude! Small chnage`)
})

app.get('/books', (request, response) => {
    response.json(books)
})
// tell our rver to run on port 8080, and when it starts i'll run the callback
app.listen(8060, () => {
    console.log(`Server running on port 8080`)
})


// GET -> client asking for just data from a resert
// POST -> Pushing data to the server (creating new data)
// DELETE -> Delete a resource on the server
// PATCH -> Update a record (partial update)
// PUT -> Update a record (replacing old version of it wholly)