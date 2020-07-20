import { Response } from 'express';
import { debug } from '@utils/essentials.utils';

export function handleApiError(res: Response, error: Error) {
  debug(error);
  res.status(500).json(error.toString());
}
