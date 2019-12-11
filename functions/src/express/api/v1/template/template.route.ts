import * as express from 'express';

import api from '../../api.main';
import { template } from '../v1.main'; // API endpoint

export const router = express.Router();
api.use(template.endpoint, router);
