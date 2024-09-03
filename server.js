import express from 'express'
import nj from "nunjucks"

const app = express()
nj.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))
app.get("/", (request,response) => {
    response.render("index.njk",{
        message: "Hello world",
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


app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000")
})