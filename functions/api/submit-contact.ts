export const onRequestPost: PagesFunction = async (context) => {
  const formData = await context.request.formData();
  
  // Extract your data
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Use Resend.com (Free & easy) to send the email
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'your-email@berkeley.edu', // YOUR ACTUAL EMAIL
      subject: `New Contact: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    }),
  });

  return new Response(JSON.stringify({ success: response.ok }), {
    status: response.ok ? 200 : 500,
  });
};
