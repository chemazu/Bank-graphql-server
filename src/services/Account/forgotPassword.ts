import express from "express";
import User from "../../models/user";

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.find({ email });
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
//   try {
//     // const token = await user[0].generateResetPasswordToken();
//     const resetUrl = `http://localhost:3000/reset-password/${token}`;
//     const mailOptions = {
//       from: "}",
//     };
//   } catch {
//     res.status(500).send();
//   }
};
