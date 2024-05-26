const usersModel = require("../models/users");
const jwt = require('jsonwebtoken'); 

const authMiddleware = async (req, res, next) => {
  try {

    if(!req.headers.authorization){
      res.status(401);
      res.send({ error: "NEED_SESSION" });
      return;
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await jwt.verify(token, 'secret_key');

    if(!dataToken){
      res.status(401);
      res.send({ error: "NOT_PAYLOAD_DATA" });
      return;
    }

    const user = await usersModel.findOne({ _id: dataToken._id });
    req.user = user;
    next();

  } catch (e) {
    res.status(401);
    res.send({ error: "NOT_SESSION" });
  }
};

module.exports = { authMiddleware };