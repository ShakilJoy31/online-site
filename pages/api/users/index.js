import { getUser, postUsers, updateUserWithFeedBack } from "./../../database/controller";
import connectMongo from './../../database/connection';

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: 'Error while connecting.' }));
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