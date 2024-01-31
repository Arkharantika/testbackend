// --- IMPORTING EXTERNAL MODUlES
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import fileUpload from "express-fileupload";
dotenv.config();

// --- IMPORTING INTERNAL MODULES
import DB from "./config/Database.js";
import Siswa from "./models/SiswaModel.js";
import Users from "./models/UserModel.js";
import Kelas from "./models/KelasModel.js";
import MuridKelas from "./models/MuridKelasModel.js";
import Presensi from "./models/PresensiModel.js";
import router from "./routes/Routes.js";
import { Sequelize } from "sequelize";

// --- DEFINE APP FROM EXPRESS
const app = express();

// --- APP INTEGRATION
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
// app.use(cors());
app.use(express.static("public"));
app.use(router);

// --- DATABASE CONNECTION

try {
  await DB.authenticate();
  console.log("Database Connected !");
  // await Presensi.sync({force:true});
} catch (error) {
  console.log(error);
}

// --- START THE SERVER
app.listen(5000, () => {
  console.log("Server Start on port 5000");
});
