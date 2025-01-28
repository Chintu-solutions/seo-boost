import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'iumairanwarr@gmail.com',
        pass: 'pctx nsge gprs eokj',
      },
    });

    const mailOptions = {
      from: 'iumairanwarr@gmail.com',
      to: 'iumairanwarr@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              /* Base styles */
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
              }
              
              .container {
                max-width: 600px;
                margin: 20px auto;
                background: linear-gradient(to bottom right, #0f172a, #1e3a8a);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }

              .header {
                background: linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
                padding: 32px 24px;
                text-align: center;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              }

              .logo {
                font-size: 24px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 8px;
                background: linear-gradient(to right, #60a5fa, #c084fc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .subtitle {
                color: rgba(255, 255, 255, 0.7);
                font-size: 16px;
                margin: 0;
              }

              .content {
                padding: 32px 24px;
                background-color: rgba(255, 255, 255, 0.02);
              }

              .info-box {
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 20px;
              }

              .info-label {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.6);
                margin-bottom: 4px;
              }

              .info-value {
                color: #ffffff;
                font-size: 16px;
                margin: 0;
              }

              .message-box {
                background-color: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                padding: 20px;
              }

              .message-label {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.6);
                margin-bottom: 8px;
              }

              .message-content {
                color: #ffffff;
                font-size: 16px;
                line-height: 1.6;
                margin: 0;
                white-space: pre-wrap;
              }

              .footer {
                padding: 24px;
                text-align: center;
                background: linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05));
                border-top: 1px solid rgba(255, 255, 255, 0.1);
              }

              .footer-text {
                color: rgba(255, 255, 255, 0.5);
                font-size: 14px;
                margin: 0;
              }

              .timestamp {
                color: rgba(255, 255, 255, 0.4);
                font-size: 12px;
                margin-top: 8px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Umair SEO</div>
                <p class="subtitle">New Contact Form Submission</p>
              </div>
              
              <div class="content">
                <div class="info-box">
                  <div class="info-label">Name</div>
                  <p class="info-value">${name}</p>
                </div>
                
                <div class="info-box">
                  <div class="info-label">Email</div>
                  <p class="info-value">${email}</p>
                </div>
                
                <div class="message-box">
                  <div class="message-label">Message</div>
                  <p class="message-content">${message}</p>
                </div>
              </div>
              
              <div class="footer">
                <p class="footer-text">This message was sent from your website contact form</p>
                <p class="timestamp">${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error : any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}