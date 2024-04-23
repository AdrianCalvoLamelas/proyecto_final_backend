const articles = require("../models/articles");

/**
 * Obtener listado de articulos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  const { subcategorieType } = req.query;
console.log(subcategorieType)
  const data = await articles.find({subcategorieType});
  res.send(data);
};

/**
 * Obtener un articulo
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
  const { id } = req.params;

  const data = await articles.findById(id);
  if (!data) {
    return res.status(404).send({ error: "Artículo no encontrado." });
  }
  res.send(data);

};

/**
 * Crear un articulo
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body } = req;

  const data = await articles.create(body);
  res.send({data});
};

/**
 * Actualizar articulo
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const data = await articles.findByIdAndUpdate(id, body, { new: true });
  if (!data) {
    return res.status(404).send({ error: "Artículo no encontrado." });
  }
  res.send(data);
};

/**
 * Eliminar articulo
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
  const { id } = req.params;

  const data = await articles.findByIdAndDelete(id);
  if (!data) {
    return res.status(404).send({ error: "Artículo no encontrado." });
  }
  res.send(data);
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}