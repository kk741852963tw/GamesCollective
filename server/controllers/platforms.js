const platformModel = require('../../database/Models/platforms');
const get = function (req, res) {
  platformModel.get()
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      res.send(err.message);
    })
}

module.exports = {
  get: get
}