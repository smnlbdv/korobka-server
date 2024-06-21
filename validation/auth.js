import {body} from 'express-validator'

export const registerValidation = [
    body('name').isLength({min: 3}),
    body('surname').isLength({min: 3}),
    body('email').isEmail(),
    body('password').isLength({min: 5}),
]

export const loginValidation = [
    body('email').isEmail(),
    body('password').exists(),
]

