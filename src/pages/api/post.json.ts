import { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

export const POST: APIRoute = async ({ request }) => {
  const { name, lastname, subject, email, message } = await request.json();
  const rootPath = process.cwd();
  console.log(rootPath);

  try {
    const auth = {
      user: 'tic270222@gmail.com', // `${process.env.EMAIL_USER}` ||
      pass: 'aqpl uehj pqha glpk', // `${process.env.EMAIL_PASS}` ||
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth,
    });

    const hbsOptions = {
      viewEngine: {
        extname: '.hbs',
        partialsDir: rootPath + '/src/components/template/',
        layoutsDir: rootPath + '/src/components/template/',
        defaultLayout: '',
      },
      viewPath: rootPath + '/src/components/template/',
      extName: '.hbs',
    };

    transporter.use('compile', hbs(hbsOptions));

    // const confirmationEmail = await transporter.sendMail({
    //   to: `${email}`,
    //   subject: 'Confirmation email',
    //   html: `<p>Thank you for your email</p>`,
    // });

    const emailOptions = {
      // from: {
      //   name: `${name} ${lastname}`,
      //   address: `${email}`,
      // },
      to: 'lopez.andresrigoberto@gmail.com', // `${process.env.EMAIL_USER}`,
      subject,
      template: 'email',
      text: message,
      context: { name, lastname, email, message },
    };

    const info = await transporter.sendMail(emailOptions);

    return new Response(JSON.stringify(info), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
