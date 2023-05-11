import express from 'express'
import { verifyAdmin } from '../utils/verifyToken.js'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour, getTourBySearch, getFeaturedTour, getTourCount } from './../controllers/tourController.js'

const router = express.Router()

router.post("/", createTour)
router.put("/:id", verifyAdmin, updateTour)
router.delete("/:id", verifyAdmin, deleteTour)
router.get("/:id", getSingleTour)
router.get("/", getAllTour)
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)

export default router