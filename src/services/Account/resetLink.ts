import User from "../../models/user";
import Token from "../../models/token";
import bcrypt from "bcrypt";


const resetLink = async (req, res) => {
  console.log("first");
  const { userID, token } = req.params;
  console.log(userID, token);
  const user = await User.findOne({ _id: userID });
  if (!user) {
    return res.status(400).send("Cannot find user");
  }
  const tokenFound = await Token.findOne({ userId: userID, token });
  if (!tokenFound) {
    return res.status(400).send("Cannot find token");
  }
  const newPassword = req.body.password;
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  await tokenFound.remove();
  res.send("Password changed");
};

export default resetLink;
