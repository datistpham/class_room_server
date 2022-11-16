import express from "express"
import class_user from "../controller/class_user.js"
import create_class from "../controller/create_class.js"
import delete_assignment from "../controller/delete_assignment.js"
import delete_class from "../controller/delete_class.js"
import get_assignment from "../controller/get_assignment.js"
import get_assignment_class from "../controller/get_assignment_class.js"
import get_class from "../controller/get_class.js"
import index from "../controller/index.js"
import join_class from "../controller/join_class.js"
import login from "../controller/login.js"
import member_class from "../controller/member_class.js"
import signup from "../controller/signup.js"
import teacher_post_assignment from "../controller/teacher_post_assignment.js"
import cors from "cors"
import submit_assignment from "../controller/submit_assignment.js"
import score from "../controller/score.js"
import marking_complete from "../controller/marking_complete.js"
const router= express.Router()

router.post("/login", login)
router.post("/create/class", create_class)
router.post("/signup", signup)
router.post("/", index)
router.post("/get/class", get_class)
router.post("/post/assignment", teacher_post_assignment)
router.get("/list/assignment", cors(), get_assignment_class)
router.post("/list/assignment/delete", delete_assignment)
router.get("/class/user", cors(), class_user)
router.post("/edit/class/delete", delete_class)
router.get("/class/member", cors(), member_class)
router.post("/join", join_class)
router.get("/a", cors(), get_assignment)
router.post("/submit/assignment", submit_assignment)
router.post("/stats", score)
router.post("/marking/c/member", marking_complete)

export default router