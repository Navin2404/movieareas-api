import express from "express";

const app = express()
const PORT = 8888;

app.get('/', (req, res) => {
    res.json({ msg : "Hello world"})
});

app.listen(PORT, () => {
    console.log(`this server is running at http://localhost:${8888}`);
})
