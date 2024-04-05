const Newsletter = require("../models/newsletterModel");

exports.addToNewsletter = async (req, res, next) => {
    let newEmail = await Newsletter.create(req.body);

    //send email to zmedios as well
    res.status(200).redirect("/");
  };

  exports.forwardContactForm = async (req, res, next) => {
    // let newEmail = await Newsletter.create(req.body);

    //send email to zmedios as well
    res.status(200).json({
        status: "success",

    })
  };