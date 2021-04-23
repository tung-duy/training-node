const Joi = require('joi');
const _ = require('lodash');
module.exports = {
  login: async (req, res, next) => {
    const { email, password } = req.body;

    const schema = Joi.object({
      password: Joi.string()
          .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    });

    // if (!email) {
    //   return res.status(400).json({ message: "Email không được để trống"});
    // }
    // if (!password) {
    //   return res.status(400).json({ message: "Password không được để trống"});
    // }
    try {
      const value = await schema.validateAsync(req.body);
      console.log("🚀 ~ file: auth.controller.js ~ line 22 ~ login: ~ value", value)
    }
    catch (err) { 
      const message = _.get(err, 'details.0.message', null);
    console.log("🚀 ~ file: auth.controller.js ~ line 27 ~ login: ~ err", message)
      return res.json({ message: message})
    }
  

    return res.json({ message: `Hello ${email}`});
  }
}