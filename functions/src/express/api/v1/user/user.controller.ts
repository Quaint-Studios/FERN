import { handleApiError } from '../v1.utils';
import * as admin from 'firebase-admin';
import { Request, Response } from 'express';

export async function createUser(req: Request, res: Response) {
  try {
    const { displayName, password, email } = req.body;
    const role = 'user';

    if (!displayName || !password || !email) {
      return res.status(400).send({ message: 'Missing fields' });
    }

    const { uid } = await admin.auth().createUser({
      displayName,
      password,
      email
    });
    await admin.auth().setCustomUserClaims(uid, { role });

    return res.status(201).send({ uid });
  } catch (error) {
    return handleApiError(res, error);
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const listUsers = await admin.auth().listUsers();
    const users = listUsers.users.map(mapUser);
    return res.status(200).send({ users });
  } catch (err) {
    return handleApiError(res, err);
  }
}

function mapUser(user: admin.auth.UserRecord) {
  const customClaims = (user.customClaims || { role: '' }) as { role?: string };
  const role = customClaims.role ? customClaims.role : '';
  return {
    uid: user.uid,
    email: user.email || '',
    displayName: user.displayName || '',
    role,
    lastSignInTime: user.metadata.lastSignInTime,
    creationTime: user.metadata.creationTime
  };
}

export async function getUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await admin.auth().getUser(id);
    return res.status(200).send({ user: mapUser(user) });
  } catch (err) {
    return handleApiError(res, err);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { displayName, password, email, role } = req.body;

    if (!id || !displayName || !password || !email || !role) {
      return res.status(400).send({ message: 'Missing fields' });
    }

    await admin.auth().updateUser(id, { displayName, password, email });
    await admin.auth().setCustomUserClaims(id, { role });
    const user = await admin.auth().getUser(id);

    return res.status(204).send({ user: mapUser(user) });
  } catch (err) {
    return handleApiError(res, err);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await admin.auth().deleteUser(id);
    return res.status(204).send({});
  } catch (err) {
    return handleApiError(res, err);
  }
}
