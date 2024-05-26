  const Vehicles = require("../models/vehicles");

  /**
   * Obtener listado de vehiculos
   * @param {*} req
   * @param {*} res
   */
  const getItems = async (req, res) => {
    const data = await Vehicles.find({});
    res.send(data);
  }

  module.exports = { getItems }