export async function onRequestPost(context) {

  try {

    const formData = await context.request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const organization = formData.get("organization");
    const region = formData.get("region");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return new Response("Missing required fields.", {
        status: 400
      });
    }

    const body = `
New Pacific Coral inquiry

Name: ${name}
Email: ${email}
Organization: ${organization || "Not provided"}
Region: ${region || "Not provided"}

Message:
${message}
`;

    await context.env.CONTACT.send({
      to: "your-real-email@gmail.com",
      subject: `Pacific Coral inquiry from ${name}`,
      text: body,
      replyTo: email
    });

    return new Response(
      JSON.stringify({
        success: true
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (err) {

    return new Response(
      JSON.stringify({
        error: err.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  }

}