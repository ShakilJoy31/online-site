import connectMongo from "../../../database/connection";
import { getUser, postUsers, updateUserWithFeedBack, paymentOfUser } from "../../../database/controller";

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: 'Error in the connection' }));
    // Type of request
    const { method } = req;
    switch (method) {
        case 'GET':
            getUser(req, res);
            break;
        case 'POST':
            postUsers(req, res)
            break;
        case 'PUT':
            updateUserWithFeedBack(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`MEthod ${method} is not allowed`)
            break;
    }
}


// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//     const { amountToPay } = req.body;
//     console.log(amountToPay); 
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amountToPay,
//       currency: "usd",
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });
  
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   };