const express = require("express");
const viewController = require('../controllers/viewController')
const apiController = require('../controllers/apiController')
const router = express.Router({ mergeParams: true });


router.get("/", viewController.home);
router.get("/about", viewController.about);
router.get("/services/web", viewController.web);
router.get("/services/mobile", viewController.mobile);
router.get("/services/graphics", viewController.graphics);
router.get("/services/marketing", viewController.marketing);
router.get("/services/datascience", viewController.dataScience);
router.get("/contact", viewController.contact);
router.get("/terms", viewController.terms);
router.post("/subscribe", apiController.addToNewsletter);
router.post("/needhelp", apiController.needhelp);
router.post("/contact", apiController.contactform);


module.exports = router;
