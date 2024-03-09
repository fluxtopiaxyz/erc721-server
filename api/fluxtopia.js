const random_name = require('node-random-name');

export default function handler(req, res) {
  const { nftId } = req.query;
  const str = nftId ? nftId + '' : '0';
  const nftCode = str.padStart(5, "0");
  return res.json({
    name: 'Fluxtopia #' + nftCode,
    image: 'https://res.cloudinary.com/dvcj4ybil/image/upload/f_auto,q_auto/v1/ft_nft/fluxtopia' + nftId + '',
  });
}
