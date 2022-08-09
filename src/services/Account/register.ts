import User from "../../models/user";
import Joi from "joi";
const bcrypt = require("bcrypt");
import handleJwt from "../../utils/handleJwt";

let register = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    let { username, password } = req.body;
    let token = handleJwt(username);
    const hashedPassword = await bcrypt.hash(password, 10);
    const encryptedUser = { ...req.body, password: hashedPassword };
    const newUser = new User(encryptedUser);
    await newUser.save();
    res.status(201).send({ status: "Successs User Created", token: token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default register;
