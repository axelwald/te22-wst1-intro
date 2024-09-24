import express from 'express'
import nj from "nunjucks"
import morgan from 'morgan' 

import indexRouter from "./routes/index.js"
import searchRouter from "./routes/search.js"

const app = express()
nj.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))
app.use(morgan("dev"))


app.use("/search", searchRouter)

app.get("/", (request,response) => {
    const name = request.query.name
    response.render("index.njk",{
        message: `Hello world ${name}`,
        title: "nj hello world",
    })
})

app.get("/om",(request,response) => {
    response.render("om.njk",{
        message: "Ändra mig",
        image: "/images/moln.jpg"
    }
    )
})

const movies = {
    "movie1": {
        title: "movie1",
        year: 2020,
    }
}

app.get("/watch", (req,res) => {
  
    const movies = {
        "movie1": {
            title: "movie1",
            year: 2020,
        }
    }
    const movieId = req.query.v
    const movie = movies[movieId]

    res.render("watch.njk", {
        movie: movie
    })
    // res.json(movie)
})

app.get("/ytub", (req,res) => {
  
    const id = req.query.v

    res.render("ytub.njk", {
        id: id
    })
    // res.json(movie)
})

app.use((req,res)=>{
    res.status(404).render("404.njk", {
        title: "404 - Not found",
    })
})
app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000")
})