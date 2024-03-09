export default function handler(req, res) {
  const { name } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
