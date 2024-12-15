import express  from 'express'

const router = express.Router()


//get results 
router.get('/movies', (req, res) => {
    res.send("Get all the movies now...")
})

//create movies
router.post('/movies', (req, res) => {
    res.send("movie was posted successfully...")
})

//updating movies
router.put('/movies/:id', (req,  res) => {
    res.send("Movie detail was updated..")
    
})

//Delete movies
router.delete('/movies/:id', (req, res) => {
    res.send("Movie was deleted successfully...")
})

export default router;
