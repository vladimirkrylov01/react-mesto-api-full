const bcrypt = require('bcryptjs');
// const validator = require('validator');
const ConflictError = require('../errors/conflict-error');
const NotFoundError = require('../errors/not-found-error');
const ValidationError = require('../errors/validation-error');
const User = require('../models/user');

const HTTP_CODES = require('../utils/response.codes');

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find({});

    return res.status(HTTP_CODES.SUCCESS_CODE).json(users);
  } catch (e) {
    console.error(e.message);

    return next(e);
  }
}

async function getLoggedUser(req, res, next) {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id).orFail();

    return res.status(HTTP_CODES.SUCCESS_CODE).json(user);
  } catch (e) {
    console.error(e.message);
    if (e.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Пользователь не найден'));
    }
    if (e.name === 'CastError') {
      return next(new ValidationError('Переданы некорректные данные'));
    }

    return next(e);
  }
}

async function getUserById(req, res, next) {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).orFail();

    return res.status(HTTP_CODES.SUCCESS_CODE).json(user);
  } catch (e) {
    console.error(e.message);
    if (e.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Пользователь не найден'));
    }
    if (e.name === 'CastError') {
      return next(new ValidationError('Переданы некорректные данные'));
    }

    return next(e);
  }
}

async function createNewUser(req, res, next) {
  const {
    name, email, password, about, avatar,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hashPwd) => User.create({
      name,
      email,
      password: hashPwd,
      about,
      avatar,
    }))
    .then((newUser) => res.send({
      _id: newUser._id,
      name,
      email,
      about,
      avatar,
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('Переданы некорректные данные'));
      }

      if (err.name === 'MongoServerError' && err.code === 11000) {
        next(new ConflictError('Пользователь с таким email уже существует'));
      }
    })
    .catch(next);
}

async function updateProfile(req, res, next) {
  const { _id } = req.user;
  const { name, about } = req.body;

  try {
    const updatedProfile = await User.findByIdAndUpdate(
      _id,
      { name, about },
      {
        runValidators: true,
        new: true,
      },
    ).orFail();

    return res.status(HTTP_CODES.SUCCESS_CODE).json(updatedProfile);
  } catch (e) {
    console.error(e.message);
    if (e.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Пользователь не найден'));
    }

    if (e.name === 'CastError' || e.name === 'ValidationError') {
      return next(new ValidationError('Переданы некорректные данные'));
    }

    return next(e);
  }
}

async function updateAvatar(req, res, next) {
  const { _id } = req.user;
  const { avatar } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { avatar },
      {
        runValidators: true,
        new: true,
      },
    ).orFail();

    return res.status(HTTP_CODES.SUCCESS_CODE).json(updatedUser);
  } catch (e) {
    console.error(e.message);
    if (e.name === 'DocumentNotFoundError') {
      return next(new NotFoundError('Пользователь не найден'));
    }

    if (e.name === 'CastError' || e.name === 'ValidationError') {
      return next(new ValidationError('Переданы некорректные данные'));
    }

    return next(e);
  }
}

module.exports = {
  getAllUsers, getLoggedUser, getUserById, createNewUser, updateProfile, updateAvatar,
};
