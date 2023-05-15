import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 5001;

const ConnectToDB = async () => {
    const sequelize = new Sequelize({
        database: 'defaultdb',
        username: 'avnadmin',
        password: 'AVNS_LNgImquHJXNIMn4aMTt',
        host: 'actixwebpostgres-udla-54df.aivencloud.com',
     
        port: 18022,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
              require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false // This line will fix new error
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
      }}






ConnectToDB();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
