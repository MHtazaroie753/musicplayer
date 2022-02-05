const authService = require("./authService");
const { randomHash } = require("../../services/hash");
const token = require("../../services/token");
const e = require("express");
exports.register = async (req, res) => {
  const newUserData = req.body;
  newUserData.hash = randomHash();
  newUserData.user_status = 1;
  // if ((await newUserData.full_name) == null) {
  //   console.log('dsfdsf')
  //   // return res.send({
  //   //   success: false,
  //   //   // token: token.sign({
  //   //   //   uid: newUser.id,
  //   //   // }),
  //   //   message: "please change your full name",
  //   // });
  // }
  const newUser = await authService.register(newUserData);
  if (newUser) {
    return res.send({
      success: true,
      // token: token.sign({
      //   uid: newUser.id,
      // }),
      message: "ثبت نام شما با موفقیت انجام شد",
    });
  }
  return res.send({
    success: false,
    message: "خطایی در فرآیند ثبت نام رخ داده است",
  });
};

exports.login = async (req, res) => {
  const userCredentials = req.body;
  const loginResault = await authService.login(
    userCredentials.email,
    userCredentials.password
  );
  if (loginResault == false) {
    return res.status(400).send({
      success: false,
      message: "کاربری با این مشخصات یافت نشد",
    });
  }
  return res.status(200).send({
    user_status:loginResault.user_status,
    full_name:loginResault.full_name,
    success: true,
    token: token.sign({ uid: loginResault }),
  });
  
};
