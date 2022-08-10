import express from "express";
import User from "../../models/user";
const app = express();
import bcrypt from "bcrypt";

const login = async (req, res) => {
  const user = await User.find({ email: req.body.email });

  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
    try {
      if (await bcrypt.compare(req.body.password, user[0].password)) {
        res.send("Success");
      } else {
        res.send("Not Allowed");
      }
    } catch {
      res.status(500).send();
    }
};

export default login;
