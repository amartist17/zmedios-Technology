exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

exports.services = async (req, res, next) => {
  res.status(200).render("services");
};

exports.contact = async (req, res, next) => {
  res.status(200).render("contact");
};

exports.about = async (req, res, next) => {
  res.status(200).render('about');
};

