import express from "express";
import PlaceController from "../controllers/PlaceController.js";
import ReviewController from "../controllers/ReviewController.js";

const router = express.Router();

// Places routes
router.get("/places", PlaceController.getAllPlaces);
router.get("/city/:city", PlaceController.getPlacesByCity);
router.get("/category/:category", PlaceController.getPlacesByCategory);
router.get("/search/:keyword", PlaceController.searchPlaces);
// review routes
router.post("/review",ReviewController)
export default router;
