const Joi = require('joi');
const _ = require('lodash');
const User = require('../models/user.model');

module.exports = {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    const schema = Joi.object({
      password: Joi.string()
          .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    });

    try {
      const value = await schema.validateAsync(req.body);
      const result = await User.findOne({ email });
      if (result) {
        return res.status(409).json({ message: "Email already exists" });
      }
      const userSchema = new User({
        email: req.body.email,
        password: req.body.password
      });
      await userSchema.save();
      return res.json({ message: `Hello ${email}`});

    } catch (err) { 
      const message = _.get(err, 'details.0.message', null);
      console.log("🚀 ~ file: auth.controller.js ~ line 27 ~ login: ~ err", message)
      return res.json({ message: message})
    }
  }
}
