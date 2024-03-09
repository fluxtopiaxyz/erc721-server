const random_name = require('node-random-name');

export default function handler(req, res) {
  const query = req.query;
  return res.json({
    message: 'Hello ' + random_name(),
    query
  });
}
