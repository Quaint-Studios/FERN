import { router } from '../template.route';
import { handleApiError } from '../../v1.utils';

import TemplateSchema from '../CIAO/Template.schema';

// Delete a template.
router.delete('/:id', async (req, res) => {
  try {
    const templateId = req.params.id;

    const success = await TemplateSchema.delete(templateId);

    res.json(success);
  } catch (error) {
    handleApiError(res, error);
  }
});

