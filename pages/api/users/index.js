import { getUser, postUsers, updateUserWithTrId } from "../../../database/controller";
import connectMongo from './../../../database/connection';

export default function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: 'Error while connecting.' }));
    // Type of request
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { method } = req;
    switch (method) {
        case 'GET':
            getUser(req, res);
            break;
        case 'POST':
            postUsers(req, res)
            break;
        case 'PUT':
            updateUserWithTrId(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`MEthod ${method} is not allowed`)
            break;
    }
}