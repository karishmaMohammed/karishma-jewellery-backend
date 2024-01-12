const express = require("express");
const contactCtrl = require('./adminAndClientDetails.controller');

const router = express.Router();

router.route('/create-contact-details').post(contactCtrl.jewelleryClientDetails);
router.route('/create-personal-details').post(contactCtrl.createDetails);
router.route('/get-user-details').get(contactCtrl.getDetails);

module.exports = router;