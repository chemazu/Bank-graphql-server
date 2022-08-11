import User from "../../models/user";
// import jwt from "jsonwebtoken";
import { createUser } from "./account/register";
import { login } from "./account/login";
import { createTransaction } from "./transaction/transaction";


const root = {
  createUser,
  login,
  createTransaction,
  getUsers: async () => {
    const result = await User.find();
    return result;
  },
};

export default root;
