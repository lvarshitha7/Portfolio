'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactFormSubmission(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Invalid form data provided.');
  }

  const { name, email, message } = validatedFields.data;

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'varshithajuturu2006@gmail.com';
  const smtpPass = process.env.SMTP_PASS;
  const contactReceiver = process.env.CONTACT_RECEIVER || 'varshithajuturu2006@gmail.com';

  // Save submission locally for persistence/audit log
  try {
    const logDir = path.join(process.cwd(), 'data');
    await fs.mkdir(logDir, { recursive: true });
    const logFilePath = path.join(logDir, 'submissions.json');
    
    let submissions = [];
    try {
      const data = await fs.readFile(logFilePath, 'utf-8');
      submissions = JSON.parse(data);
    } catch (e) {
      // file might not exist yet
    }

    submissions.push({
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      emailSent: !!smtpPass
    });

    await fs.writeFile(logFilePath, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to log submission locally:', error);
  }

  // If SMTP password is not configured, simulate success and notify user
  if (!smtpPass) {
    return {
      success: true,
      simulated: true,
      response: `Your message was saved locally! However, real email delivery to ${contactReceiver} is currently disabled because SMTP_PASS is not configured in your .env.local file.`
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name} (via Portfolio Contact)" <${smtpUser}>`,
      replyTo: email,
      to: contactReceiver,
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new contact form submission.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #FF7A00; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; margin-top: 15px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">Sent automatically from Laxmi Varshitha Juturu's Portfolio site.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      simulated: false,
      response: 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
    };
  } catch (error) {
    console.error('Nodemailer SMTP Error:', error);
    throw new Error('Failed to dispatch email. Please check your SMTP configuration in .env.local.');
  }
}
