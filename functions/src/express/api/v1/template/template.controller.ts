import { handleApiError } from '../v1.utils';
/* import * as admin from 'firebase-admin'; */
import { Request, Response } from 'express';

export async function getTemplate(req: Request, res: Response) {
  try {
    const { info } = req.body;

    if (!info) {
      return res.status(400).send({ message: 'Missing fields' });
    }

    const response: IV1Response = { data: "template data" }

    return res.status(200).json(response);
  } catch(err) {
    return handleApiError(res, err);
  }