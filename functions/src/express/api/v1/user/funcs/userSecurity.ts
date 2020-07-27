import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Request, Response } from 'express';
import { debug } from '@utils/essentials.utils';

/**
 * If the user has some form of proper authentication.
 */
export async function isAuthenticated(
  req: Request,
  res: Response,
  next: Function
) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).send({ message: 'Unauthorized' });

  if (!authorization.startsWith('Bearer'))
    return res.status(401).send({ message: 'Unauthorized' });

  const split = authorization.split('Bearer ');
  if (split.length !== 2)
    return res.status(401).send({ message: 'Unauthorized' });

  const token = split[1];

  try {
    const decodedToken: admin.auth.DecodedIdToken = await admin
      .auth()
      .verifyIdToken(token);
    res.locals = {
      ...res.locals,
      uid: decodedToken.uid,
      role: decodedToken.role,
      email: decodedToken.email
    };
    return next();
  } catch (err) {
    debug(err);
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

/**
 * If the user has no form of valid authentication.
 */
export async function isNotAuthenticated(
  req: Request,
  res: Response,
  next: Function
) {
  const { authorization } = req.headers;

  if (!authorization) return next();

  if (!authorization.startsWith('Bearer')) return next();

  const split = authorization.split('Bearer ');
  if (split.length !== 2) return next();

  const token = split[1];

  try {
    const decodedToken: admin.auth.DecodedIdToken = await admin
      .auth()
      .verifyIdToken(token);
    res.locals = {
      ...res.locals,
      uid: decodedToken.uid,
      role: decodedToken.role,
      email: decodedToken.email
    };
    return res.status(401).send({ message: 'Unauthorized' });
  } catch (err) {
    debug(err);
    return res.status(401).send({ message: 'Unauthorized' });
  }
}

/**
 * If the user has the correct roles.
 * @param opts Required authorization requirements.
 */
export function isAuthorized(opts: IAuthOptions) {
  return (req: Request, res: Response, next: Function) => {
    const { role, email, uid } = res.locals;
    const { id } = req.params;

    if (email === functions.config().system.email)
    return next();

    if (opts.allowSameUser && id && uid === id) return next();

    if (!role) return res.status(403).send();

    if (opts.hasRole.includes(role)) return next();

    return res.status(403).send();
  };
}

interface IAuthOptions {
  hasRole: AuthRoles;
  allowSameUser?: boolean;
}

type AuthRoles = Array<'admin' | 'manager' | 'user'>;