import Token from "../../models/token";
import crypto from "crypto";
import sendEmail from "../../utils/sendEmail";

const resetPassword = async (req, res) => {
  let userID = req.body.userID;
  let email = req.body.email;

  let token = await Token.findOne({ userId: userID });
  if (!token) {
    token = await new Token({
      userId: userID,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
  }
  const link = `${process.env.BASE_URL}/api/account/reset-link/${userID}/${token.token}`;

  console.log(link);

  sendEmail(link);
};

export default resetPassword;
