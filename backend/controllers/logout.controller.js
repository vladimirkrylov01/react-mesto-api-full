async function logout(req, res) {
  res
    .clearCookie('jwt', {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    })
    .json({ message: 'Успешный выход' });
}

module.exports = { logout };
