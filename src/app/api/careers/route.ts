import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string | null;
    const email = formData.get("email") as string | null;
    const phoneNumber = formData.get("phoneNumber") as string | null;
    const position = formData.get("position") as string | null;
    const resumeFile = formData.get("resume") as File | null;

    // 1. Basic Field Validation
    if (!fullName || !email || !phoneNumber || !position || position === "Select Role") {
      return NextResponse.json(
        { error: "Please fill in all required fields and select a role." },
        { status: 400 }
      );
    }

    const cleanName = String(fullName).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phoneNumber).trim();
    const cleanPosition = String(position).trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 2. Validate Resume File (if provided)
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType?: string;
    }> = [];

    if (resumeFile && typeof resumeFile === "object" && resumeFile.size > 0) {
      // 10MB limit
      const maxSizeBytes = 10 * 1024 * 1024;
      if (resumeFile.size > maxSizeBytes) {
        return NextResponse.json(
          { error: "The uploaded resume exceeds the 10MB file size limit." },
          { status: 400 }
        );
      }

      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const lowerName = resumeFile.name.toLowerCase();
      const hasValidExt = allowedExtensions.some((ext) => lowerName.endsWith(ext));

      if (!hasValidExt) {
        return NextResponse.json(
          { error: "Only PDF, DOC, and DOCX files are allowed for resume upload." },
          { status: 400 }
        );
      }

      const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: fileBuffer,
        contentType: resumeFile.type || "application/octet-stream",
      });
    }

    // 3. Read SMTP Configuration from Environment
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
        "[Nodemailer Careers Error]: Missing EMAIL_USER or EMAIL_PASS environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please add EMAIL_USER and EMAIL_PASS to your environment configuration.",
        },
        { status: 500 }
      );
    }

    // 4. Configure Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass, // Google App Password
      },
    });

    const hasAttachment = attachments.length > 0;
    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 5. Build HTML Email Body
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAFAF8; margin: 0; padding: 24px; color: #171B24; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #D9DDE5; overflow: hidden; box-shadow: 0 4px 20px rgba(16, 26, 53, 0.05); }
            .header { background: #101A35; padding: 32px 28px; text-align: left; }
            .header h1 { color: #FAFAF8; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { color: #D9DDE5; margin: 6px 0 0 0; font-size: 13px; opacity: 0.85; }
            .content { padding: 28px; }
            .badge { display: inline-block; background-color: #2448A5; color: #ffffff; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 20px; }
            .field-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .field-table td { padding: 12px 14px; border-bottom: 1px solid #ECEFF4; font-size: 14px; }
            .field-label { width: 34%; font-weight: 600; color: #727989; }
            .field-value { font-weight: 600; color: #101A35; }
            .attachment-box { background: #F4F7FC; border: 1px dashed #2448A5; border-radius: 12px; padding: 14px 18px; margin: 20px 0; font-size: 13px; color: #2448A5; display: flex; align-items: center; }
            .footer { background: #FAFAF8; padding: 18px 28px; border-top: 1px solid #D9DDE5; text-align: center; font-size: 12px; color: #727989; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Blue Pearl Nexa — Career Application</h1>
              <p>Submitted via official website recruitment portal</p>
            </div>
            <div class="content">
              <span class="badge">Job Application</span>
              <table class="field-table">
                <tr>
                  <td class="field-label">Candidate Name</td>
                  <td class="field-value">${cleanName}</td>
                </tr>
                <tr>
                  <td class="field-label">Applied Role</td>
                  <td class="field-value" style="color: #2448A5;">${cleanPosition}</td>
                </tr>
                <tr>
                  <td class="field-label">Email Address</td>
                  <td class="field-value"><a href="mailto:${cleanEmail}" style="color: #2448A5; text-decoration: none;">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td class="field-label">Phone Number</td>
                  <td class="field-value"><a href="tel:${cleanPhone}" style="color: #101A35; text-decoration: none;">${cleanPhone}</a></td>
                </tr>
                <tr>
                  <td class="field-label">Submission Date</td>
                  <td class="field-value">${submissionTime}</td>
                </tr>
                <tr>
                  <td class="field-label">Resume Attachment</td>
                  <td class="field-value">${hasAttachment ? `📎 Attached (${attachments[0].filename})` : "No file attached"}</td>
                </tr>
              </table>

              ${
                hasAttachment
                  ? `<div class="attachment-box">
                      📎 <strong>Resume Attached:</strong>&nbsp;${attachments[0].filename} (included as direct email attachment)
                    </div>`
                  : ""
              }
            </div>
            <div class="footer">
              <p>You can reply directly to this email to contact <strong>${cleanName}</strong> (${cleanEmail}).</p>
              <p style="margin: 4px 0 0; font-size: 11px;">Blue Pearl Nexa • Recruitment & Talent Management</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // 6. Send Email via Transporter
    await transporter.sendMail({
      from: `"Blue Pearl Nexa Careers" <${emailUser}>`,
      to: emailTo,
      replyTo: `${cleanName} <${cleanEmail}>`,
      subject: `Career Application: ${cleanPosition} - ${cleanName}`,
      text: `
New Job Application from Blue Pearl Nexa Careers Portal:

Candidate Name: ${cleanName}
Position Applied: ${cleanPosition}
Email: ${cleanEmail}
Phone Number: ${cleanPhone}
Submission Time: ${submissionTime}
Resume File: ${hasAttachment ? attachments[0].filename : "None"}
      `.trim(),
      html: htmlEmail,
      attachments,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your application and resume have been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Nodemailer Careers Route Error]:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Failed to process career application.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

