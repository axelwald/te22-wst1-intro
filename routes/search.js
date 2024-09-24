import express from "express"
const router = express.Router()

router.get("/", (req,res)=> {
    const query = req.query.q || ""
    const names = ["a","b","c","d"]
    const filteredNames = names.filter((name) => name.toLowerCase().includes(query.toLowerCase()))
    res.render("search.njk",{
        title:"Search",
        query,
        names:filteredNames,
    })
})

export default router