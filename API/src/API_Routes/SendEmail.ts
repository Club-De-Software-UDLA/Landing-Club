
import { Request, Response } from 'express';
import Email from '../Models/Email';

export const SendEmail = async (req: Request, res: Response) => {
const email = await Email.create({
    email:req.body.email,

})
}