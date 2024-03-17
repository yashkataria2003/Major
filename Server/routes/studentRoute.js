import express from 'express'
import { addStudent, showStudent, removeStudent, updateStudent } from '../controllers/studentController.js'  

const router = express.Router()

// Add Student 
router.route("/").post(addStudent)

// Delete Student 
router.route("/:_id").delete(removeStudent)

// Update Student 
router.route("/:_id").put(updateStudent)

// Show All Student
router.route("/").get(showStudent)

export default router