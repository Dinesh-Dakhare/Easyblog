import express from 'express'

import { createBlog, deleteBlog, getUserBlog, getUserBlogs } from '../controllers/blogController.js'
import {authenticateJWT} from '../middleware/protect.js'
const blog = express.Router()

blog.route('/createblog').post(authenticateJWT,createBlog)

blog.route('/deleteblog/:id').delete(authenticateJWT,deleteBlog)

blog.route('/blogs').post(authenticateJWT,getUserBlogs)

blog.route('/blogs/:id').get(authenticateJWT,getUserBlog)
export default blog