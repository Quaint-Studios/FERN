import { router } from '../template.route';
import { handleApiError } from '../../v1.utils';

import TemplateSchema from '../CIAO/Template.schema';

// Get all templates or a specific one.
router.get('/:id?', async (req, res) => {
  try {
    const templateId = req.params.id;

    const template = await TemplateSchema.read(templateId);

    res.json(template);
  } catch (error) {
    handleApiError(res, error);
  }
});
