import express from "express";

const app = express()
const PORT = 8888;

app.get('/', (req, res) => {
    res.json({ msg : "Hello world"})
});

//crud functionality for movies
//get results 
app.get('/movies', () => {

})

//create movies
app.post('/movies', () => {
    
})

//updating movies
app.put('/movies/:id', () => {
    
})

//Delete movies
app.delete('/movies/:id', () => {
    
})

app.listen(PORT, () => {
    console.log(`this server is running at http://localhost:${8888}`);
})
