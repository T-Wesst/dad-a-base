const { User } = require('../models');
const { createToken, isValidToken } = require('../utilities/tokenService');
const cookieOptions = {
  httpOnly: true,
  // secure: true, on deployment
  signed: true,
  maxAge: (1000 * 60) ^ 60,
  expiresIn: new Date(Date.now() + 90000)
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    try {
      let isMatch = await user.comparePassword(req.body.password);
      if (isMatch) {
        let token = await createToken(user);
        res
          .cookie('token', token, cookieOptions)
          .redirect('/api/users/authorized');
      } else {
        res.send({
          message: 'Your username or password was incorrect, please try again',
          error: 404
        });
      }
    } catch (err) {
      if (err) throw err;
    }
  } catch (err) {
    if (err) throw err;
  }
};
const logout = async (req, res) => {
  try {
    res.clearCookie('token').redirect('/api/users/visitor');
  } catch (err) {
    if (err) throw err;
  }
};
const signup = async (req, res) => {
  try {
    let user = await User.create(req.body);
    let token = await createToken(user);
    res
      .cookie('token', token, cookieOptions)
      .status(200)
      .redirect('/api/users/authorized');
  } catch (err) {
    if (err) throw err;
  }
};

const visitor = async (req, res) =>
  res.send({ message: 'Welcome to Dad-A-Base' });

const cookieCheck = async (req, res) => {
  const { token } = req.signedCookies;
  if (token) {
    try {
      let {
        user: { _id, username, email, password }
      } = await isValidToken(token);
      try {
        let user = await User.findOne({ username, password, _id, email });
        res.send({ email: user.email, username: user.username });
      } catch (err) {
        if (err) throw err;
      }
    } catch (err) {
      if (err) throw err;
    }
  } else {
    res.send({ message: 'Cookie has expired, please log in.' });
  }
};

module.exports = { login, signup, logout, cookieCheck, visitor };
