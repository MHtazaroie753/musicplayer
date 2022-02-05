const db = require("../../../../../db/connection/sequelize");

exports.register = async (params) => {
  if (params.full_name && params.email && params.password > 1) {
    params.password = hashPassword(params.password);

    const user = await db.User.create(params);
    return user;
  }
};
exports.login = async (email, password) => {
  const user = await db.User.findOne({ where: { email } });
  if (!user) {
    return false;
  }
  if (comparePassword(password, user.password)) {
    return user;
  }
  return false;
};
