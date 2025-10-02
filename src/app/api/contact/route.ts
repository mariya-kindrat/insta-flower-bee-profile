import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') 
    .substring(0, 5000); 
};


const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, city, inquiryType, message } = body;

   
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      );
    }

  
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      eventDate: eventDate ? sanitizeInput(eventDate) : '',
      city: city ? sanitizeInput(city) : '',
      inquiryType: sanitizeInput(inquiryType || 'General'),
      message: sanitizeInput(message),
    };

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_TO_EMAIL) {
      console.error('RESEND_TO_EMAIL is not configured');
      return NextResponse.json(
        { error: 'Email recipient is not configured' },
        { status: 500 }
      );
    }
    
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL,
      replyTo: sanitizedData.email,
      subject: `New ${sanitizedData.inquiryType} Inquiry from ${sanitizedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h2 style="color: #2F3B32; border-bottom: 2px solid #C9D2C0; padding-bottom: 10px; margin-bottom: 20px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #FAF7F2; border-radius: 8px;">
            <h3 style="color: #3C3C3C; margin-bottom: 10px; font-size: 16px;">Contact Information</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #2F3B32;">${sanitizedData.email}</a></p>
            ${sanitizedData.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}" style="color: #2F3B32;">${sanitizedData.phone}</a></p>` : ''}
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #FAF7F2; border-radius: 8px;">
            <h3 style="color: #3C3C3C; margin-bottom: 10px; font-size: 16px;">Event Details</h3>
            <p style="margin: 8px 0;"><strong>Inquiry Type:</strong> ${sanitizedData.inquiryType}</p>
            ${sanitizedData.eventDate ? `<p style="margin: 8px 0;"><strong>Event Date:</strong> ${sanitizedData.eventDate}</p>` : ''}
            ${sanitizedData.city ? `<p style="margin: 8px 0;"><strong>City:</strong> ${sanitizedData.city}</p>` : ''}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #3C3C3C; margin-bottom: 10px; font-size: 16px;">Message</h3>
            <p style="background-color: #FAF7F2; padding: 15px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">
              ${sanitizedData.message}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E9E4DF; color: #718096; font-size: 12px;">
            <p>This email was sent from your website's contact form at ${new Date().toLocaleString()}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}