import express from "express";
import { User } from "../models/User.js";
import { Admin } from "../models/Admin.js";
import fs from "fs";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
const API_KEY =
  "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";
sgMail.setApiKey(API_KEY);
const router = express.Router();

var jwtSecret = "mysecrettoken";

export const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  let data;

  try {
    // See if user existsyy

    let user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
      name,
      email,
      password,
    });

    //Encrypt Password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt); //convert into hashing algorithm

    await user.save();

    //Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      data = [{ token: token, user: user }];
      res.json(data);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let data;

  try {
    // See if user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(200)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    //Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "5 days" }, (err, token) => {
      if (err) throw err;
      data = { success: true, token: token, user: user };
      res.json(data);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const ForgetPassword = async (req, res) => {
  const { email } = req.body;
  const token = uuidv4();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.forgetPasswordAuthToken = token;
    await user.save();
    const resetLink = `http://localhost:3000/setNewPassword/${token}`;
    const msg = {
      to: email,
      from: "s3649104@gmail.com",
      subject: "Reset Your Password",
      html: `
        <p>Click the following link to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({ message: "Email is sended successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const SendEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const msg = {
      to: "s3649104@gmail.com",
      from: "s3649104@gmail.com",
      subject: "New User Email",
      html: `
        <p>A new user have sent you there email</p>
        <p>Email: ${email}</p>
      `,
    };
    await sgMail.send(msg);
    res.send({ success: true });
  } catch (err) {
    res.send({ success: false, msg: err.message });
    console.log("err");
  }
};

export const SetPassword = async (req, res) => {
  const { token, passwords } = req.body;

  try {
    // See if user exists
    const user = await User.findOne({ forgetPasswordAuthToken: token });

    if (!user) {
      return res.status(404).json({ error: "Invalid or expired token" });
    }

    // Compare the previous password with the new password
    const isPreviousPassword = await bcrypt.compare(passwords, user.password);

    if (isPreviousPassword) {
      return res.status(400).json({
        error: "New password must be different from the previous password",
      });
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(passwords, salt);
    user.forgetPasswordAuthToken = ""; // Optionally invalidate the token
    await user.save();

    return res
      .status(200)
      .json({ message: "Your password has been updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const ApplyJob = async (req, res) => {
  const { userId, fullName, email, jobTitle, phoneNumber, dbFile, Files } =
    req.body;

  try {
    // Find the user by their ID
    const user = await User.findById(userId);

    // Check if the user has already applied for the job
    const hasApplied = user.jobs.some((job) => job.jobTitle === jobTitle);

    if (hasApplied) {
      return res
        .status(200)
        .json({ message: "User already applied for this job." });
    } else {
      // Add the new job application to the user's jobs array

      user.jobs.push({
        fullName,
        email,
        phoneNumber,
        jobTitle,
        Files: dbFile,
      });

      // Save the updated user document
      const userdata = await user.save();

      const message = {
        from: "s3649104@gmail.com",
        to: "info@soltridge.com",
        subject: "Soltridge Jobs",
        html: `<div class="container">
            <h1>Email Template</h1>
            <p>Dear ${fullName},</p>
            <p>Thank you for contacting us. Here are the details you provided:</p>
            <table>
              <tr>
              <th>Field</th>
              <th>Detail</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>${fullName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${email}</td>
              </tr>
              <tr>
              <td>job Title</td>
              <td>${jobTitle}</td>
            </tr>
              <tr>
                <td>Phone Number</td>
                <td>${phoneNumber}</td>
              </tr>
            </table>
            <p>We will get back to you as soon as possible.</p>
            <p>Best regards,<br>Soltridge</p>
          </div>`,
        attachments: [Files],
      };

      const sendEmail = await sgMail.send(message);
      if (userdata && sendEmail) {
        res
          .status(200)
          .json({ message: "file is saved and email is sended successfully" });
      } else {
        res.status(400).json("error occurred somewhere");
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export default router;
