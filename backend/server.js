const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const Item = require("./models/Item");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.post('/api/contact', async (req, res) => {
  try {
    const {itemName,ownerEmail,senderName,senderEmail,senderPhone,message} = req.body;

    if (!ownerEmail || !senderEmail || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    console.log(req.body);
    
    const mailOptions = {
      from: `"LostFinder" <${process.env.EMAIL_USER}>`,
      to: ownerEmail,
      replyTo: senderEmail,     
      subject: `Someone contacted you about: ${itemName}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">

  <!-- Header -->
  <div style="background: #2563eb; color: white; padding: 18px; text-align: center;">
    <h2 style="margin:0;">📦 LostFinder</h2>
    <p style="margin:5px 0 0 0;">New Contact Request</p>
  </div>

  <!-- Body -->
  <div style="padding: 25px;">

    <p>Hello,</p>

    <p>
      Someone has contacted you regarding your posted item.
    </p>

    <div style="background:#f8fafc; border:1px solid #dbeafe; border-radius:8px; padding:15px; margin:20px 0;">
      <h3 style="margin:0; color:#2563eb;">
        📍 ${itemName}
      </h3>
    </div>

    <h3 style="color:#111827;">Finder Details</h3>

    <table style="width:100%; border-collapse:collapse;">

      <tr>
        <td style="padding:8px 0;"><strong>👤 Name</strong></td>
        <td>${senderName}</td>
      </tr>

      <tr>
        <td style="padding:8px 0;"><strong>📧 Email</strong></td>
        <td>${senderEmail}</td>
      </tr>

      <tr>
        <td style="padding:8px 0;"><strong>📱 Phone</strong></td>
        <td>${senderPhone}</td>
      </tr>

    </table>

    <h3 style="margin-top:25px; color:#111827;">Message</h3>

    <div style="background:#f9fafb; border-left:4px solid #2563eb; padding:15px; border-radius:6px;">
      ${message}
    </div>

    <div style="margin-top:30px; padding:15px; background:#ecfdf5; border:1px solid #bbf7d0; border-radius:8px;">
      <strong style="color:#15803d;">
        💬 To reply, simply click the <b>Reply</b> button in Gmail.
      </strong>
      <br><br>
      Your reply will automatically be sent to:
      <br>
      <strong>${senderEmail}</strong>
    </div>

  </div>

  <!-- Footer -->
  <div style="background:#f3f4f6; text-align:center; padding:15px; font-size:13px; color:#6b7280;">
    This email was generated automatically by the <strong>LostFinder</strong> application.
  </div>

</div>
`};

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});
//api creation to store item in react app
app.post("/api/items", async (req, res) => {
  try {
    const item = new Item(req.body);

    await item.save();

    res.status(201).json({
      success: true,
      message: "Item saved successfully",
      item,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save item",
    });
  }
});
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });

    res.json(items);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch items"
    });
  }
});
// delete button api to delete item from react app
app.delete("/api/items/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Item.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Item deleted successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete item"
    });

  }
});
app.patch("/api/items/:id/returned", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { returned: true },
      { new: true }
    );

    res.json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to mark item as returned",
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

const connectDB = require("./db");

connectDB();