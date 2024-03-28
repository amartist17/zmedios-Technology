const express = require("express");
const viewController = require('../controllers/viewController')
const router = express.Router({ mergeParams: true });


router.get("/", viewController.home);
router.get("/about", viewController.about);
router.get("/services", viewController.services);
router.get("/contact", viewController.contact);


module.exports = router;
