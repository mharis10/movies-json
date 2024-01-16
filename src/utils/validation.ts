import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateMovie = [
  body('id').isInt().withMessage('Invalid ID'),
  body('genres').isArray().notEmpty().withMessage('Genres must be a non-empty array'),
  body('title').isString().isLength({ max: 255 }).notEmpty().withMessage('Title is required'),
  body('year').isInt({ min: 1800, max: new Date().getFullYear() }).notEmpty().withMessage('Invalid year'),
  body('runtime').isInt().notEmpty().withMessage('Runtime is required'),
  body('director').isString().isLength({ max: 255 }).notEmpty().withMessage('Director is required'),
  body('actors').optional().isString(),
  body('plot').optional().isString(),
  body('posterUrl').optional().isString(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
