import { Response } from 'express';
import { debug } from '@utils/essentials.utils';

export function handleApiError(res: Response, error: Error) {
  debug(error);
  return res.status(500).json({ message: error.toString() });
}
