const { check, validationResult } = require("express-validator");

const validatorCreateItem = [
  check("subcategorieType").exists().notEmpty(),
  check("title").exists().notEmpty(),
  check("brand").exists().notEmpty(),
  check("number").exists().notEmpty(),
  check("price").exists().notEmpty().isNumeric(),
  check("description").exists().notEmpty(),
  check("image").exists().notEmpty(),
  check("vehicleName").exists().notEmpty(),
  check("vehicleModel").exists().notEmpty(),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      res.status(403)
      res.send({ errors: err.array() })
    }
  }
];

module.exports = {validatorCreateItem}