const authRouter = require("./components/auth/router");
const initRouter = require("./components/init/router");
const dashboardRouter = require("./components/dashboard/router");
const fileUpload = require('express-fileupload');

module.exports = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/init", initRouter);
  // app.use("/api/v1/dashboard", dashboardRouter);
  app.use(fileUpload() , dashboardRouter);


};
