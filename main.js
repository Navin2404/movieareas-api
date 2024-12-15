import express from "express";
import movieRoutes from "./routes/movies.routes.js"

const app = express()
const PORT = 8888;

app.get('/', (req, res) => {
    res.json({ msg : "Hello world"})
});

//crud functionality for movies

//creating middleware for routes
app.use('/movies', movieRoutes);



app.listen(PORT, () => {
    console.log(`this server is running at http://localhost:${8888}`);
})
