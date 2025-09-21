import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Brevo API configuration
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      console.error('Missing Brevo configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add contact to Brevo list
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true, // Update if contact already exists
        attributes: {
          FIRSTNAME: email.split('@')[0], // Use email prefix as name
          SIGNUP_DATE: new Date().toISOString(),
          SOURCE: 'EnergyPal Marketing Website'
        }
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API error:', errorData);
      
      // Handle duplicate contact (not an error for us)
      if (errorData.code === 'duplicate_parameter') {
        return NextResponse.json({
          success: true,
          message: 'You\'re already on our waitlist! We\'ll notify you when EnergyPal launches.'
        });
      }
      
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }

    const contactResult = await brevoResponse.json();
    console.log('Contact added to Brevo:', contactResult);

    // Send welcome email with proper sender information
    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'EnergyPal Team',
          email: 'hello@energypal.com' // You can change this to your preferred sender email
        },
        to: [
          {
            email: email,
            name: email.split('@')[0]
          }
        ],
        subject: 'Welcome to EnergyPal Waitlist! ⚡',
        htmlContent: `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to EnergyPal Waitlist</title>
    <style>
        /* Clean, static design for maximum email compatibility */
        .energy-orb {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00d4ff 0%, #0099cc 50%, #0066ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
          margin: 0 auto;
        }

        /* Responsive design */
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; }
          .content { padding: 20px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #1e293b;" class="container">
        <tr>
            <td style="padding: 40px 20px; text-align: center;" class="content">
                
                <!-- Clean EnergyPal Energy Orb Logo -->
                <div style="margin-bottom: 30px;">
                    <div class="energy-orb">
                        <!-- Lightning Bolt Unicode Symbol (email-safe) -->
                        <span style="
                            color: white;
                            font-size: 24px;
                            font-weight: bold;
                            text-shadow: 0 2px 4px rgba(0,0,0,0.4);
                            line-height: 1;
                        ">⚡</span>
                    </div>
                </div>
                
                <!-- EnergyPal Branding -->
                <h1 style="color: white; font-size: 28px; margin: 0 0 5px 0; font-weight: bold; letter-spacing: 1px;">ENERGYPAL</h1>
                <p style="color: rgba(255, 255, 255, 0.6); font-size: 14px; margin: 0 0 30px 0; font-weight: 500;">Energy Marketplace</p>
                
                <!-- Welcome Message -->
                <h2 style="color: white; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Welcome to the Waitlist! ⚡</h2>
                
                <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                    Thank you for joining the EnergyPal waitlist! We'll notify you as soon as the app is ready to launch.
                </p>
                
                <!-- Simple Confirmation Box -->
                <div style="
                    background: rgba(0, 212, 255, 0.1);
                    border: 1px solid rgba(0, 212, 255, 0.2);
                    border-radius: 12px;
                    padding: 20px;
                    margin: 30px 0;
                ">
                    <h3 style="color: #00d4ff; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">You're All Set!</h3>
                    <p style="color: #cbd5e1; margin: 0; font-size: 14px; line-height: 1.6;">
                        We'll send you an email notification when EnergyPal is available for download.
                    </p>
                </div>
                
                <!-- Footer -->
                <p style="color: rgba(255, 255, 255, 0.4); font-size: 12px; margin: 30px 0 0 0; line-height: 1.5;">
                    © 2025 EnergyPal. All rights reserved.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.json();
      console.error('Email sending error:', emailError);
      // Don't fail the whole request if email fails, contact was still added
    } else {
      const emailResult = await emailResponse.json();
      console.log('Welcome email sent:', emailResult);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist!'
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
