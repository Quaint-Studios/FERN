import { router } from '../template.route';
import { handleApiError } from '../../v1.utils';

import TemplateSchema from '../CIAO/Template.schema';

// Create a new template entry.
router.post('/', async (req, res) => {
  try {
    const { info } = req.body;
    const data = {
      info
    };

    const template = await TemplateSchema.create(data);

    res.json(template);
  } catch (error) {
    handleApiError(res, error);
  }
});

export default {};
