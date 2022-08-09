const express = require("express");
import User from "../../models/user";
const app = express();

let getUser = async (req, res) => {
  try {
    let id = req.body.id;
    let result = await User.findById(id).populate("routines");
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(400).json({ status: "error", error: `${error.message} ` });
  }
};
export default getUser;
