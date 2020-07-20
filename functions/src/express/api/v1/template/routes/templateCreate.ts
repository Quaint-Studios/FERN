import { router } from '../template.route';
import { handleApiError } from '../../v1.utils';
import { toBe } from '@utils/essentials.utils';

// Responds with the info sent.
router.post('/', async (req, res) => {
  try {
    const { info } = req.body;

    if (!toBe(info)) {
      return handleApiError(res, new Error('Missing fields'));
    }

    const data = {
      info
    };

    const response: IV1Response = { data };

    return res.status(200).json(response);
  } catch (error) {
    handleApiError(res, error);
  }
});

export default {};
