exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

exports.web = async (req, res, next) => {
  res.status(200).render("services/web-service");
};

exports.mobile = async (req, res, next) => {
  res.status(200).render("services/mobile-service");
};

exports.graphics = async (req, res, next) => {
  res.status(200).render("services/graphics-service");
};

exports.marketing = async (req, res, next) => {
  res.status(200).render("services/marketing-service");
};

exports.dataScience = async (req, res, next) => {
  res.status(200).render("services/dataScience-service");
};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact");
};

exports.about = async (req, res, next) => {
  res.status(200).render('about');
};

exports.terms = async (req, res, next) => {
  res.status(200).render('terms');
};

exports.hireDeveloper = async (req, res, next) => {
  res.status(200).render('hire-developer');
};
