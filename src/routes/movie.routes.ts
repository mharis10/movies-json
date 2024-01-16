import express from 'express';
import { addMovie } from '../controllers/movie.controller';
import { validateMovie } from '../utils/validation';

const router = express.Router();

router.post('/movies', validateMovie, addMovie);

export default router;
