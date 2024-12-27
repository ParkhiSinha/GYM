import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
console.log("Environment Variables:");
console.log(`PORT: ${process.env.PORT}`);
console.log(`FRONTEND_URL: ${process.env.FRONTEND_URL}`);
console.log(`SMTP_HOST: ${process.env.SMTP_HOST}`);

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:300"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: "sinhaparkhi22@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use("/api", router);

 app.listen(process.env.PORT || 19980, () => {
  console.log(`Server listening at port ${process.env.PORT || 19980}`);
 });
