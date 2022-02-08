const GREETING = require('@npm-gcb-gcf/node-sample-dependency');

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || GREETING.GREETING;
  res.status(200).send(message);
};
