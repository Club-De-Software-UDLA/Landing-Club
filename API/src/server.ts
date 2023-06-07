import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import sgMail from '@sendgrid/mail';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;
const EmailKey : string = process.env.SENDGRID_API_KEY ?? ''
app.use(cors());

export const sequelize = new Sequelize({
  database: 'defaultdb',
  username: 'avnadmin',
  password: 'AVNS_LNgImquHJXNIMn4aMTt',
  host: 'actixwebpostgres-udla-54df.aivencloud.com',
  port: 18022,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
    
      
      try{
          sequelize.authenticate();
          console.log('Connection has been established successfully.');
      }catch(err){
     console.error(err)
      }




export const Email = sequelize.define('Email', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error(err);
  }
})();


/*const SendEmailSendGrid = async () => {
  sgMail.setApiKey(EmailKey);
  const msg: sgMail.MailDataRequired = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}*/

//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const SendEmail = async (req: Request, res: Response) => {

  try {
    const email = await Email.create({
      email: req.body.email,
    });
    res.status(200).json({ message: 'Email stored successfully' });
   // SendEmailSendGrid();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error storing email' });
  }
};


const getAllEmails = async (req: Request, res: Response) => {
  try {
    const emails = await Email.findAll();
    res.status(200).json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving emails' });
  }
};

app.get('/emails', getAllEmails);



app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.post('/send-email', SendEmail);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
