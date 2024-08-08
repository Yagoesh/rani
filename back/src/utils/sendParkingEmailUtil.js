import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from "../../env.js";

export const sentParkingEmailUtil = async (email, asunto, texto) => {
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: '"Kruk" <KR@kr.kr>',
      to: email,
      subject: asunto,
      html: texto,
    });
  } catch (error) {
    console.error(error.message);
  }
};
