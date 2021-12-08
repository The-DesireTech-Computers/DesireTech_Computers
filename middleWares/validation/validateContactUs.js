let { validationContactUs } = require("../../model/contactUsModel");

let validateContactUs = (req, res, next) => {


	let { error } = validationContactUs(req.body);

	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	next();
};

module.exports.validation = validateContactUs;
