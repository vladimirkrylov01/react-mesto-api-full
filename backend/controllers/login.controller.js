const jwt = require('jsonwebtoken');
const User = require('../models/user');

const TOKEN_SECRET = require('../utils/secret');

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      //   const token = jwt.sign(
      //     { _id: matchingUser._id },
      //     TOKEN_SECRET,
      //     { expiresIn: '7d' },
      //   );
      // создадим токен
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          name: user.name,
          about: user.about,
          avatar: user.avatar,
        },
        TOKEN_SECRET,
        { expiresIn: '7d' },
      );
      // вернём токен
      res.send({ token });
    })
    .catch(next);
};
  //
  // try {
  //   const matchingUser = await User.findOne({ email }).select('+password');
  //   if (!matchingUser) {
  //     return next(new UnauthorizedError('Неправильные почта или пароль'));
  //   }
  //
  //   const isSame = await bcrypt.compare(password, matchingUser.password);
  //
  //   if (!isSame) {
  //     return next(new UnauthorizedError('Неправильные почта или пароль'));
  //   }
  //
  //   const token = jwt.sign(
  //     { _id: matchingUser._id },
  //     TOKEN_SECRET,
  //     { expiresIn: '7d' },
  //   );
  //
  //   return res
  //     .cookie('jwt', token, {
  //       maxAge: 3600000 * 24 * 7,
  //       httpOnly: true,
  //       secure: true,
  //       sameSite: 'None',
  //     })
  //     .json({
  //       _id: matchingUser._id,
  //       name: matchingUser.name,
  //       about: matchingUser.about,
  //       avatar: matchingUser.avatar,
  //       email: matchingUser.email,
  //     });
  // } catch (e) {
  //   console.error(e.message);
  //   if (e.name === 'ValidationError') {
  //     return next(new ValidationError('Переданы некорректные данные'));
  //   }
  //
  //   return next(e);
  // }

module.exports = { login };
