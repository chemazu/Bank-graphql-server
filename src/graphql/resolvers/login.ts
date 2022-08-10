import User from "../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (args: { phone: string; password: string }) => {
    console.log(args)
    const { password,phone } = args;
  const user = await User.findOne({ phone: phone });
  console.log(user)
  if (!user) {
    throw new Error("Invalid Credentials");
}
  const pass = await bcrypt.compare(password, user.password);
  if (pass && user) {
    const token = jwt.sign(
      { phone: user.phone, password: user.password },
      process.env.REACT_APP_JWT_SECRET
    );
    return token;
  }
};
