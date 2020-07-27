import { router } from './template.route';
import { getTemplate } from './template.controller';

// Responds with the info sent.
router.post('/', getTemplate);

export default {};
