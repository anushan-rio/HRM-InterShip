import { body, validationResult } from 'express-validator';
import { validateResult } from "../Middleware/Validation.middleware.js"

export const RegisterValidator = [
    body('Company_Email')
        .notEmpty().withMessage('Company Email is required')
        .isEmail().withMessage('Please enter a valid Company_Email address'),

    body('Company_Name')
        .notEmpty().withMessage('Company Name is required'),
    
    body('Username')
        .notEmpty().withMessage('Username is required'),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .notEmpty().withMessage('password is required'),

    body('Country')
        .notEmpty().withMessage('Country is required'),
];