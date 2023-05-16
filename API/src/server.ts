import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import { Model, DataTypes } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 5001;


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
              rejectUnauthorized: false 
            }
          },
        /*
        dialectOptions: { 
            options: {
              encrypt: 'true'
            }
          }
          */
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
        allowNull: false
        },
    });

    (async () => {
        await sequelize.sync({ force: true });
      })();


     const SendEmail = async (req: Request, res: Response) => {
        const email = await Email.create({
            email:req.body.email,
        })
     }



app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.post('/send-email', SendEmail);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
