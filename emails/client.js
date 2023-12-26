import nodemailer from 'nodemailer';

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    secure: true,
    auth: {
        user: adminEmail,
        pass,
    }
});

export const mailOptions = {
    from: adminEmailFull,
    to: adminEmailFull,
};