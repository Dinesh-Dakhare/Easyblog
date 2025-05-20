import express from 'express'
import { userLogin, userLogout, userRegister } from '../controllers/userController.js'
import {body}from'express-validator'

const user = express.Router()

user.route('/register').post([
    body("username").isLength({min:3}).withMessage("Invalid Usename must be at least 3 letters"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password must be 6 Character")
],userRegister)

user.route('/login').post([
   body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password must be 6 Character")
],userLogin)

user.route('/logout').get(userLogout)

export default user