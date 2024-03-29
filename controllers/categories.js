const categories = require("../models/categories");

/**
 * Obtener listado de categorias
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  const data = await categories.find({});
  res.send(data);
};

/**
 * Obtener una categoria
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Crear una categoría
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body } = req;

  const data = await categories.create(body);
  res.send({data});
};

/**
 * Actualizar categoría
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Eliminar categoría
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}