import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phoneNumber,
      companyName,
      projectType,
      projectDescription,
    } = body;

    // 1. Basic Validation
    if (!fullName || !email || !phoneNumber || !projectDescription) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // 2. Read SMTP Configuration from Environment
    const emailUser =
      process.env.EMAIL_USER ||
      process.env.SMTP_USER ||
      process.env.GMAIL_USER;
    const emailPass =
      process.env.EMAIL_PASS ||
      process.env.SMTP_PASS ||
      process.env.GMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass) {
      console.error(
        "[Nodemailer Error]: Missing EMAIL_USER or EMAIL_PASS environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please add EMAIL_USER and EMAIL_PASS (Google App Password) to your .env.local file.",
        },
        { status: 500 }
      );
    }

    // 3. Configure Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass, // Google 16-character App Password
      },
    });

    // 4. Sanitize text for display
    const cleanName = String(fullName).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phoneNumber).trim();
    const cleanCompany = companyName ? String(companyName).trim() : "Not provided";
    const cleanType = String(projectType || "General Inquiry").trim();
    const cleanDesc = String(projectDescription).trim().replace(/\n/g, "<br/>");

    // 5. Build Professional HTML Email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAFAF8; margin: 0; padding: 24px; color: #171B24; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #D9DDE5; overflow: hidden; box-shadow: 0 4px 20px rgba(16,26,53,0.05); }
            .header { background: #101A35; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #2448A5; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #D9DDE5; }
            .content { padding: 32px; }
            .badge { display: inline-block; background: #2448A5; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 12px; border-radius: 9999px; margin-bottom: 20px; }
            .field-row { margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #F0F2F6; }
            .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #727989; margin-bottom: 4px; }
            .field-value { font-size: 15px; font-weight: 600; color: #101A35; }
            .message-box { background: #FAFAF8; border: 1px solid #D9DDE5; border-radius: 12px; padding: 18px; margin-top: 20px; }
            .message-box h3 { margin: 0 0 10px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #2448A5; }
            .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #171B24; }
            .footer { padding: 20px 32px; background: #FAFAF8; border-top: 1px solid #D9DDE5; font-size: 12px; color: #727989; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Client Inquiry</h1>
              <p>Submitted via Blue Pearl Nexa Contact Portal</p>
            </div>
            <div class="content">
              <span class="badge">${cleanType}</span>

              <div class="field-row">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${cleanName}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${cleanEmail}" style="color: #2448A5; text-decoration: none;">${cleanEmail}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${cleanPhone}" style="color: #101A35; text-decoration: none;">${cleanPhone}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Company Name</div>
                <div class="field-value">${cleanCompany}</div>
              </div>

              <div class="message-box">
                <h3>Project Requirements & Scope</h3>
                <p>${cleanDesc}</p>
              </div>
            </div>
            <div class="footer">
              <p>You can reply directly to this email to contact <strong>${cleanName}</strong> (${cleanEmail}).</p>
              <p style="margin: 4px 0 0; font-size: 11px;">Blue Pearl Nexa • Enterprise Web & Software Architecture</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 6. Send Email via Transporter
    await transporter.sendMail({
      from: `"Blue Pearl Nexa Portal" <${emailUser}>`,
      to: emailTo,
      replyTo: `${cleanName} <${cleanEmail}>`,
      subject: `New Project Inquiry: ${cleanType} - ${cleanName}`,
      text: `
New Project Inquiry from Blue Pearl Nexa Contact Form:

Full Name: ${cleanName}
Email: ${cleanEmail}
Phone Number: ${cleanPhone}
Company: ${cleanCompany}
Project Type: ${cleanType}

Project Description:
${String(projectDescription).trim()}
      `,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been transmitted successfully.",
    });
  } catch (error: unknown) {
    console.error("[Nodemailer Error]:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to send email. Please check your SMTP configuration.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

