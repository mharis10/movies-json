import { Request, Response } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const moviesFilePath = resolve(__dirname, '../data/db.json')

export const addMovie = (req: Request, res: Response) => {
  try {
    const jsonContent = JSON.parse(readFileSync(moviesFilePath, 'utf-8'));
    const movies = jsonContent.movies || [];
    const newMovie = {
      id: req.body.id,  
      genres: req.body.genres,
      title: req.body.title,
      year: req.body.year,
      runtime: req.body.runtime,
      director: req.body.director,
      actors: req.body.actors || '',
      plot: req.body.plot || '',
      posterUrl: req.body.posterUrl || ''
    };

    movies.push(newMovie);

    writeFileSync(moviesFilePath, JSON.stringify(movies, null, 2), 'utf-8');

    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
