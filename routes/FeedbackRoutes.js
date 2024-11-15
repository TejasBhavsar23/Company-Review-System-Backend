import  express  from "express";
import { createAdmin, createAlumni, createStudent , getAllUsers} from "../controllers/userController.js";
import { createCompany , getComapny} from "../controllers/CompanyController.js";
import { createReview , getAllReviews } from "../controllers/ReviewController.js";
import { likeReviews } from "../controllers/likeController.js";
import { isAdmin, isStudent , isAlumni } from "../middleware/Middleware.js";
const router = express.Router();


router.post("/admin/create", createAdmin)
router.post("/alumni/create", createAlumni)
router.post("/student/create", createStudent)
router.get("/getAllUsers/getAll", getAllUsers)
router.post("/company/create", isAdmin,createCompany)
router.get("/getAllComapny/getAllCompany", getComapny)
router.post("/companyReview/create",isAlumni, createReview)
router.get("/Comapny/getAllCompanyReview", getAllReviews)
router.post("/Like/add", isStudent,likeReviews)

export default router;