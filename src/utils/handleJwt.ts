const jwt = require("jsonwebtoken");

function generateAccessToken(username:any) {
  return jwt.sign({username}, process.env.TOKEN_SECRET, { expiresIn: '60d' });
}
export default generateAccessToken;