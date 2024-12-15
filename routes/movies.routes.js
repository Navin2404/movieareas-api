import express  from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from './controllers/movies.controller'

const router = express.Router()


//get results 
router.get('/', MovieIndex);

//create movies
router.post('/', MovieCreate);

//updating movies
router.put('/', MovieUpdate);

//Delete movies
router.delete('/', MovieDelete);

export default router;
