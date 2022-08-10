import User from "../../models/user";
// import jwt from "jsonwebtoken";
import { createUser } from "./register";
import { login } from "./login";

const root = {
  createUser,
  login,
  getUsers: async () => {
    const result = await User.find();
    return result;
  },
  // login: async (_, { username, password }) => {
  //     // let user = User.find((u) => u.username === username && u.password === password
  //   );
  //   if(user){
  //    const token = jwt.sign(
  //     {username: user.username, password: user.password, role:   user.role }, “MY_TOKEN_SECRET”);
  //     return token;    } else return "unknown user"
  // },
  // login: async (_: any, { phone, password }: any) => {
  //   let user = await User.findOne({ phone: phone });
  //   if (user) {
  //       const token = jwt.sign(
  //           { phone: user.phone, password: user.password},
  //         process.env.REACT_APP_JWT_SECRET,
  //       );
  //       return token;
  //   }
  // },
  // authenticateToken: async (_: any, { token }: any) => {},
};

export default root;
