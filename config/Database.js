import { Sequelize } from "sequelize";

// const DB = new Sequelize("alkarima", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   timezone: "+07:00",
// });

// const DB = new Sequelize(
//   "radi8267_contoh",
//   "radi8267_contoh",
//   "ARMcortex123#",
//   {
//     host: "194.163.42.214",
//     dialect: "mysql",
//   }
// );

const DB = new Sequelize(
  "radi8267_alkarima",
  "radi8267_alkarima",
  "ARMcortex123#",
  {
    host: "194.163.42.214",
    dialect: "mysql",
  }
);

export default DB;
