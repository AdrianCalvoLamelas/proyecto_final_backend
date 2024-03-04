const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = "mongodb+srv://proyectoFinal:h4IDMpgHIb2LUjbG@cluster0.p9cia1l.mongodb.net/dbapi?retryWrites=true&w=majority&appName=Cluster0";

  mongoose.connect(DB_URI)
  .then(success => console.log('**** CONEXION CORRECTA ****'))
  .catch(error => console.log('**** ERROR DE CONEXION ****'));
}

module.exports = dbConnect;